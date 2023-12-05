import { APIClient, ICronuseoAPI } from "./api/api-client";
import { Check, ICheck, ICheckRequest } from "./check/check";
import { ConfigFactory, ICronuseoConfig } from "./config";
import { RecursivePartial } from "./utils/types";

export interface ICronuseoClient extends ICheck {

    config: ICronuseoConfig
    api: ICronuseoAPI
}

export class Cronuseo implements ICronuseoClient {
    private permissionCheck: ICheck
    config: ICronuseoConfig;
    api: ICronuseoAPI;

    constructor(config: RecursivePartial<ICronuseoConfig>) {
        this.config = ConfigFactory.build(config)
        this.api =  new APIClient(this.config)
        this.permissionCheck = new Check(this.config)

    }

    public async check(checkRequest: ICheckRequest): Promise<boolean> {
        return await this.permissionCheck.check(checkRequest)
    }
    
}