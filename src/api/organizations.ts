import { AxiosResponse } from "axios";
import { Organization } from "../openapi/types/organization";
import { OrganizationsApi } from "../openapi";
import { ICronuseoConfig } from "../config";
import { BaseCronuseoApi } from "./base-client";

export interface IOrganizationAPI {
    
  getOrgs(): Promise<Organization[]>;
}

export class OrganizationAPI
  extends BaseCronuseoApi
  implements IOrganizationAPI
{
  private organizations: OrganizationsApi;

  constructor(config: ICronuseoConfig) {
    super(config);
    this.organizations = new OrganizationsApi(this.openApiClientConfig);
  }

  public async getOrgs(): Promise<Organization[]> {
    try {
      return (await this.organizations.getOrgs()).data;
    } catch (err) {
      this.handleApiError(err);
    }
  }
}
