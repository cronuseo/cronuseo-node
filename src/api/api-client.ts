import { ICronuseoConfig } from "../config";
import { IOrganizationAPI, OrganizationAPI } from "./organizations";

export interface ICronuseoAPI {

    organizations :  IOrganizationAPI
}

export class APIClient implements ICronuseoAPI {

    public readonly organizations: IOrganizationAPI;
    
    constructor(config: ICronuseoConfig) {
        this.organizations = new OrganizationAPI(config)
    }
}