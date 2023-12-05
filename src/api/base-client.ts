import axios, { AxiosError, AxiosResponse } from "axios";
import { ICronuseoConfig } from "../config";
import { Configuration } from "../openapi";

export class CronuseoApiError<T> extends Error {
    constructor(message: string, public originalError: AxiosError<T>) {
      super(message);
    }
  
    public get request(): any {
      return this.originalError.request;
    }
  
    public get response(): AxiosResponse<T> | undefined {
      return this.originalError.response;
    }
  }

export abstract class BaseCronuseoApi {

    protected openApiClientConfig: Configuration

    constructor(protected config: ICronuseoConfig) {
        this.openApiClientConfig = new Configuration({
            basePath: this.config.apiUrl,
        })
    }

    setToken(idToken: string) {
        this.openApiClientConfig.accessToken = idToken
    }

    protected handleApiError(err: unknown): never {
        if (axios.isAxiosError(err)) {
          const message = `Got error status code: ${err.response?.status}`;
          throw new CronuseoApiError(message, err);
        } else {
          throw err;
        }
      }
}