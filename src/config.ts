import _ from 'lodash';
import { RecursivePartial } from './utils/types';
import globalAxios, { AxiosInstance } from 'axios';

export interface ICronuseoConfig {
    /**
     * The token (API key) use for permission check and cronuseo REST APIs.
     */
    apiKey: string;

    /**
     * URL of the permission check endpoint.
     */
    checkUrl: string;

    /**
     * URL of the management REST APIs endpoint.
     */
    apiUrl: string;

    axiosInstance: AxiosInstance;
}

export class ConfigFactory {

    static defaults(): ICronuseoConfig {
        return {
            apiKey: _.get(process.env, 'CRONUSEO_API_KEY', ''),
            checkUrl: _.get(process.env, 'CRONUSEO_CHECK_URL', 'http://localhost:8081'),
            apiUrl: _.get(process.env, 'CRONUSEO_API_URL', 'http://localhost:8080'),
            axiosInstance: globalAxios.create(),
        }
    }

    static build(options: RecursivePartial<ICronuseoConfig>): ICronuseoConfig {
        const config = _.merge(_.assign({}, ConfigFactory.defaults()), options);
        return config;
      }
    
}
