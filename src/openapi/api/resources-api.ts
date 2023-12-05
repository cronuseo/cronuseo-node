/* tslint:disable */
/* eslint-disable */
/**
 * Cronuseo
 * This is the cronuseo backend APIs. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Resource } from '../types';
// @ts-ignore
import { ResourceCreationRequestBody } from '../types';
// @ts-ignore
import { ResourceEntity } from '../types';
// @ts-ignore
import { ResourcePatchRequestBody } from '../types';
/**
 * ResourcesApi - axios parameter creator
 * @export
 */
export const ResourcesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API create new resource. <br>   <b>Permission required:</b> <br>       * resources:create <br> 
         * @summary Add a new resource
         * @param {string} orgId ID of organization
         * @param {ResourceCreationRequestBody} resourceCreationRequestBody Resource creation request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addResource: async (orgId: string, resourceCreationRequestBody: ResourceCreationRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('addResource', 'orgId', orgId)
            // verify required parameter 'resourceCreationRequestBody' is not null or undefined
            assertParamExists('addResource', 'resourceCreationRequestBody', resourceCreationRequestBody)
            const localVarPath = `/o/{org_id}/resources:`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resourceCreationRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API delete resource by id. <br>   <b>Permission required:</b> <br>       * resources:delete <br> 
         * @summary Deletes a resource
         * @param {string} orgId ID of organization
         * @param {string} id Group id to resources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteResource: async (orgId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('deleteResource', 'orgId', orgId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteResource', 'id', id)
            const localVarPath = `/o/{org_id}/resources/{id}:`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API fetch resource by id. <br>   <b>Permission required:</b> <br>       * resources:read <br> 
         * @summary Find resource by ID
         * @param {string} orgId ID of organization
         * @param {string} id ID of resource to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResourceById: async (orgId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('getResourceById', 'orgId', orgId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getResourceById', 'id', id)
            const localVarPath = `/o/{org_id}/resources/{id}:`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API fetch all resources. <br>   <b>Permission required:</b> <br>       * resources:read_all <br> 
         * @summary Get all resources.
         * @param {string} orgId ID of organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResources: async (orgId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('getResources', 'orgId', orgId)
            const localVarPath = `/o/{org_id}/resources:`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API patch existing resource actions. <br>   <b>Permission required:</b> <br>       * resources:update <br> 
         * @summary Patch a existing resource
         * @param {string} orgId ID of organization
         * @param {string} id ID of resource
         * @param {ResourcePatchRequestBody} resourcePatchRequestBody Resource patch request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchResource: async (orgId: string, id: string, resourcePatchRequestBody: ResourcePatchRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('patchResource', 'orgId', orgId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchResource', 'id', id)
            // verify required parameter 'resourcePatchRequestBody' is not null or undefined
            assertParamExists('patchResource', 'resourcePatchRequestBody', resourcePatchRequestBody)
            const localVarPath = `/o/{org_id}/resources/{id}:`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resourcePatchRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ResourcesApi - functional programming interface
 * @export
 */
export const ResourcesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ResourcesApiAxiosParamCreator(configuration)
    return {
        /**
         * This API create new resource. <br>   <b>Permission required:</b> <br>       * resources:create <br> 
         * @summary Add a new resource
         * @param {string} orgId ID of organization
         * @param {ResourceCreationRequestBody} resourceCreationRequestBody Resource creation request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addResource(orgId: string, resourceCreationRequestBody: ResourceCreationRequestBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addResource(orgId, resourceCreationRequestBody, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ResourcesApi.addResource']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API delete resource by id. <br>   <b>Permission required:</b> <br>       * resources:delete <br> 
         * @summary Deletes a resource
         * @param {string} orgId ID of organization
         * @param {string} id Group id to resources
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteResource(orgId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteResource(orgId, id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ResourcesApi.deleteResource']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API fetch resource by id. <br>   <b>Permission required:</b> <br>       * resources:read <br> 
         * @summary Find resource by ID
         * @param {string} orgId ID of organization
         * @param {string} id ID of resource to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResourceById(orgId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResourceEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResourceById(orgId, id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ResourcesApi.getResourceById']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API fetch all resources. <br>   <b>Permission required:</b> <br>       * resources:read_all <br> 
         * @summary Get all resources.
         * @param {string} orgId ID of organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResources(orgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Resource>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResources(orgId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ResourcesApi.getResources']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API patch existing resource actions. <br>   <b>Permission required:</b> <br>       * resources:update <br> 
         * @summary Patch a existing resource
         * @param {string} orgId ID of organization
         * @param {string} id ID of resource
         * @param {ResourcePatchRequestBody} resourcePatchRequestBody Resource patch request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchResource(orgId: string, id: string, resourcePatchRequestBody: ResourcePatchRequestBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchResource(orgId, id, resourcePatchRequestBody, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ResourcesApi.patchResource']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ResourcesApi - factory interface
 * @export
 */
export const ResourcesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ResourcesApiFp(configuration)
    return {
        /**
         * This API create new resource. <br>   <b>Permission required:</b> <br>       * resources:create <br> 
         * @summary Add a new resource
         * @param {ResourcesApiAddResourceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addResource(requestParameters: ResourcesApiAddResourceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addResource(requestParameters.orgId, requestParameters.resourceCreationRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * This API delete resource by id. <br>   <b>Permission required:</b> <br>       * resources:delete <br> 
         * @summary Deletes a resource
         * @param {ResourcesApiDeleteResourceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteResource(requestParameters: ResourcesApiDeleteResourceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteResource(requestParameters.orgId, requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * This API fetch resource by id. <br>   <b>Permission required:</b> <br>       * resources:read <br> 
         * @summary Find resource by ID
         * @param {ResourcesApiGetResourceByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResourceById(requestParameters: ResourcesApiGetResourceByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ResourceEntity> {
            return localVarFp.getResourceById(requestParameters.orgId, requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * This API fetch all resources. <br>   <b>Permission required:</b> <br>       * resources:read_all <br> 
         * @summary Get all resources.
         * @param {ResourcesApiGetResourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResources(requestParameters: ResourcesApiGetResourcesRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Resource>> {
            return localVarFp.getResources(requestParameters.orgId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API patch existing resource actions. <br>   <b>Permission required:</b> <br>       * resources:update <br> 
         * @summary Patch a existing resource
         * @param {ResourcesApiPatchResourceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchResource(requestParameters: ResourcesApiPatchResourceRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.patchResource(requestParameters.orgId, requestParameters.id, requestParameters.resourcePatchRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addResource operation in ResourcesApi.
 * @export
 * @interface ResourcesApiAddResourceRequest
 */
export interface ResourcesApiAddResourceRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof ResourcesApiAddResource
     */
    readonly orgId: string

    /**
     * Resource creation request body
     * @type {ResourceCreationRequestBody}
     * @memberof ResourcesApiAddResource
     */
    readonly resourceCreationRequestBody: ResourceCreationRequestBody
}

/**
 * Request parameters for deleteResource operation in ResourcesApi.
 * @export
 * @interface ResourcesApiDeleteResourceRequest
 */
export interface ResourcesApiDeleteResourceRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof ResourcesApiDeleteResource
     */
    readonly orgId: string

    /**
     * Group id to resources
     * @type {string}
     * @memberof ResourcesApiDeleteResource
     */
    readonly id: string
}

/**
 * Request parameters for getResourceById operation in ResourcesApi.
 * @export
 * @interface ResourcesApiGetResourceByIdRequest
 */
export interface ResourcesApiGetResourceByIdRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof ResourcesApiGetResourceById
     */
    readonly orgId: string

    /**
     * ID of resource to return
     * @type {string}
     * @memberof ResourcesApiGetResourceById
     */
    readonly id: string
}

/**
 * Request parameters for getResources operation in ResourcesApi.
 * @export
 * @interface ResourcesApiGetResourcesRequest
 */
export interface ResourcesApiGetResourcesRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof ResourcesApiGetResources
     */
    readonly orgId: string
}

/**
 * Request parameters for patchResource operation in ResourcesApi.
 * @export
 * @interface ResourcesApiPatchResourceRequest
 */
export interface ResourcesApiPatchResourceRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof ResourcesApiPatchResource
     */
    readonly orgId: string

    /**
     * ID of resource
     * @type {string}
     * @memberof ResourcesApiPatchResource
     */
    readonly id: string

    /**
     * Resource patch request body
     * @type {ResourcePatchRequestBody}
     * @memberof ResourcesApiPatchResource
     */
    readonly resourcePatchRequestBody: ResourcePatchRequestBody
}

/**
 * ResourcesApi - object-oriented interface
 * @export
 * @class ResourcesApi
 * @extends {BaseAPI}
 */
export class ResourcesApi extends BaseAPI {
    /**
     * This API create new resource. <br>   <b>Permission required:</b> <br>       * resources:create <br> 
     * @summary Add a new resource
     * @param {ResourcesApiAddResourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResourcesApi
     */
    public addResource(requestParameters: ResourcesApiAddResourceRequest, options?: AxiosRequestConfig) {
        return ResourcesApiFp(this.configuration).addResource(requestParameters.orgId, requestParameters.resourceCreationRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API delete resource by id. <br>   <b>Permission required:</b> <br>       * resources:delete <br> 
     * @summary Deletes a resource
     * @param {ResourcesApiDeleteResourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResourcesApi
     */
    public deleteResource(requestParameters: ResourcesApiDeleteResourceRequest, options?: AxiosRequestConfig) {
        return ResourcesApiFp(this.configuration).deleteResource(requestParameters.orgId, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API fetch resource by id. <br>   <b>Permission required:</b> <br>       * resources:read <br> 
     * @summary Find resource by ID
     * @param {ResourcesApiGetResourceByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResourcesApi
     */
    public getResourceById(requestParameters: ResourcesApiGetResourceByIdRequest, options?: AxiosRequestConfig) {
        return ResourcesApiFp(this.configuration).getResourceById(requestParameters.orgId, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API fetch all resources. <br>   <b>Permission required:</b> <br>       * resources:read_all <br> 
     * @summary Get all resources.
     * @param {ResourcesApiGetResourcesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResourcesApi
     */
    public getResources(requestParameters: ResourcesApiGetResourcesRequest, options?: AxiosRequestConfig) {
        return ResourcesApiFp(this.configuration).getResources(requestParameters.orgId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API patch existing resource actions. <br>   <b>Permission required:</b> <br>       * resources:update <br> 
     * @summary Patch a existing resource
     * @param {ResourcesApiPatchResourceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ResourcesApi
     */
    public patchResource(requestParameters: ResourcesApiPatchResourceRequest, options?: AxiosRequestConfig) {
        return ResourcesApiFp(this.configuration).patchResource(requestParameters.orgId, requestParameters.id, requestParameters.resourcePatchRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}
