import axios, { AxiosInstance } from "axios";
import { ICronuseoConfig } from "../config";

export interface ICheckRequest {
  user: string;
  resource: string;
  action: string;
}

export interface ICheckResponse {

    allowed: boolean;
  }
export interface ICheck {
  check(checkRequest: ICheckRequest): Promise<boolean>;
}

export class Check implements ICheck {
  private client: AxiosInstance;

  constructor(private config: ICronuseoConfig) {
    if (config.axiosInstance) {
      this.client = config.axiosInstance;
      this.client.defaults.baseURL = `${this.config.checkUrl}/`;
    } else {
        this.client = axios.create({
            baseURL: `${this.config.checkUrl}/`
          });
    }
  }

  check(checkRequest: ICheckRequest): Promise<boolean> {
    
    return this.client.post<ICheckResponse>('api/v1/o/super/check', checkRequest, {
        headers: {
          "API_KEY": `${this.config.apiKey}`,
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          return false
        }
        const decision = 'allowed' in response.data ? response.data.allowed : false
        return decision;
      })
      .catch((error) => {
        return error
      });
  }
}
