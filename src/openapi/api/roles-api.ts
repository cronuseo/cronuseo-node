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
import { Role } from '../types';
// @ts-ignore
import { RoleCreationRequestBody } from '../types';
// @ts-ignore
import { RoleEntity } from '../types';
// @ts-ignore
import { RolePatchRequestBody } from '../types';
/**
 * RolesApi - axios parameter creator
 * @export
 */
export const RolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API create new role. <br>   <b>Permission required:</b> <br>       * roles:create <br> 
         * @summary Add a new role
         * @param {string} orgId ID of organization
         * @param {RoleCreationRequestBody} roleCreationRequestBody Role createion request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addRole: async (orgId: string, roleCreationRequestBody: RoleCreationRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('addRole', 'orgId', orgId)
            // verify required parameter 'roleCreationRequestBody' is not null or undefined
            assertParamExists('addRole', 'roleCreationRequestBody', roleCreationRequestBody)
            const localVarPath = `/o/{org_id}/roles:`
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
            localVarRequestOptions.data = serializeDataIfNeeded(roleCreationRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API delete role by id. <br>   <b>Permission required:</b> <br>       * roles:delete <br> 
         * @summary Deletes a role
         * @param {string} orgId ID of organization
         * @param {string} id Role id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRole: async (orgId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('deleteRole', 'orgId', orgId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteRole', 'id', id)
            const localVarPath = `/o/{org_id}/roles/{id}:`
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
         * This API fetch role by id. <br>   <b>Permission required:</b> <br>       * roles:read <br> 
         * @summary Find role by ID
         * @param {string} orgId ID of organization
         * @param {string} id ID of role to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoleById: async (orgId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('getRoleById', 'orgId', orgId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRoleById', 'id', id)
            const localVarPath = `/o/{org_id}/roles/{id}:`
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
         * This API fetch all roles. <br>   <b>Permission required:</b> <br>       * roles:read_all <br> 
         * @summary Get all roles.
         * @param {string} orgId ID of organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoles: async (orgId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('getRoles', 'orgId', orgId)
            const localVarPath = `/o/{org_id}/roles:`
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
         * This API patch existing role groups and users. <br>   <b>Permission required:</b> <br>       * roles:update <br> 
         * @summary Patch a existing role
         * @param {string} orgId ID of organization
         * @param {string} id ID of role
         * @param {RolePatchRequestBody} rolePatchRequestBody Role patch request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRole: async (orgId: string, id: string, rolePatchRequestBody: RolePatchRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('patchRole', 'orgId', orgId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchRole', 'id', id)
            // verify required parameter 'rolePatchRequestBody' is not null or undefined
            assertParamExists('patchRole', 'rolePatchRequestBody', rolePatchRequestBody)
            const localVarPath = `/o/{org_id}/roles/{id}:`
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
            localVarRequestOptions.data = serializeDataIfNeeded(rolePatchRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RolesApi - functional programming interface
 * @export
 */
export const RolesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RolesApiAxiosParamCreator(configuration)
    return {
        /**
         * This API create new role. <br>   <b>Permission required:</b> <br>       * roles:create <br> 
         * @summary Add a new role
         * @param {string} orgId ID of organization
         * @param {RoleCreationRequestBody} roleCreationRequestBody Role createion request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addRole(orgId: string, roleCreationRequestBody: RoleCreationRequestBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRole(orgId, roleCreationRequestBody, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['RolesApi.addRole']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API delete role by id. <br>   <b>Permission required:</b> <br>       * roles:delete <br> 
         * @summary Deletes a role
         * @param {string} orgId ID of organization
         * @param {string} id Role id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRole(orgId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRole(orgId, id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['RolesApi.deleteRole']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API fetch role by id. <br>   <b>Permission required:</b> <br>       * roles:read <br> 
         * @summary Find role by ID
         * @param {string} orgId ID of organization
         * @param {string} id ID of role to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoleById(orgId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoleEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoleById(orgId, id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['RolesApi.getRoleById']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API fetch all roles. <br>   <b>Permission required:</b> <br>       * roles:read_all <br> 
         * @summary Get all roles.
         * @param {string} orgId ID of organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoles(orgId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Role>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoles(orgId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['RolesApi.getRoles']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This API patch existing role groups and users. <br>   <b>Permission required:</b> <br>       * roles:update <br> 
         * @summary Patch a existing role
         * @param {string} orgId ID of organization
         * @param {string} id ID of role
         * @param {RolePatchRequestBody} rolePatchRequestBody Role patch request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchRole(orgId: string, id: string, rolePatchRequestBody: RolePatchRequestBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchRole(orgId, id, rolePatchRequestBody, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['RolesApi.patchRole']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * RolesApi - factory interface
 * @export
 */
export const RolesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RolesApiFp(configuration)
    return {
        /**
         * This API create new role. <br>   <b>Permission required:</b> <br>       * roles:create <br> 
         * @summary Add a new role
         * @param {RolesApiAddRoleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addRole(requestParameters: RolesApiAddRoleRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addRole(requestParameters.orgId, requestParameters.roleCreationRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * This API delete role by id. <br>   <b>Permission required:</b> <br>       * roles:delete <br> 
         * @summary Deletes a role
         * @param {RolesApiDeleteRoleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRole(requestParameters: RolesApiDeleteRoleRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRole(requestParameters.orgId, requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * This API fetch role by id. <br>   <b>Permission required:</b> <br>       * roles:read <br> 
         * @summary Find role by ID
         * @param {RolesApiGetRoleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoleById(requestParameters: RolesApiGetRoleByIdRequest, options?: AxiosRequestConfig): AxiosPromise<RoleEntity> {
            return localVarFp.getRoleById(requestParameters.orgId, requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * This API fetch all roles. <br>   <b>Permission required:</b> <br>       * roles:read_all <br> 
         * @summary Get all roles.
         * @param {RolesApiGetRolesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoles(requestParameters: RolesApiGetRolesRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Role>> {
            return localVarFp.getRoles(requestParameters.orgId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API patch existing role groups and users. <br>   <b>Permission required:</b> <br>       * roles:update <br> 
         * @summary Patch a existing role
         * @param {RolesApiPatchRoleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRole(requestParameters: RolesApiPatchRoleRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.patchRole(requestParameters.orgId, requestParameters.id, requestParameters.rolePatchRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addRole operation in RolesApi.
 * @export
 * @interface RolesApiAddRoleRequest
 */
export interface RolesApiAddRoleRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof RolesApiAddRole
     */
    readonly orgId: string

    /**
     * Role createion request body
     * @type {RoleCreationRequestBody}
     * @memberof RolesApiAddRole
     */
    readonly roleCreationRequestBody: RoleCreationRequestBody
}

/**
 * Request parameters for deleteRole operation in RolesApi.
 * @export
 * @interface RolesApiDeleteRoleRequest
 */
export interface RolesApiDeleteRoleRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof RolesApiDeleteRole
     */
    readonly orgId: string

    /**
     * Role id to delete
     * @type {string}
     * @memberof RolesApiDeleteRole
     */
    readonly id: string
}

/**
 * Request parameters for getRoleById operation in RolesApi.
 * @export
 * @interface RolesApiGetRoleByIdRequest
 */
export interface RolesApiGetRoleByIdRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof RolesApiGetRoleById
     */
    readonly orgId: string

    /**
     * ID of role to return
     * @type {string}
     * @memberof RolesApiGetRoleById
     */
    readonly id: string
}

/**
 * Request parameters for getRoles operation in RolesApi.
 * @export
 * @interface RolesApiGetRolesRequest
 */
export interface RolesApiGetRolesRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof RolesApiGetRoles
     */
    readonly orgId: string
}

/**
 * Request parameters for patchRole operation in RolesApi.
 * @export
 * @interface RolesApiPatchRoleRequest
 */
export interface RolesApiPatchRoleRequest {
    /**
     * ID of organization
     * @type {string}
     * @memberof RolesApiPatchRole
     */
    readonly orgId: string

    /**
     * ID of role
     * @type {string}
     * @memberof RolesApiPatchRole
     */
    readonly id: string

    /**
     * Role patch request body
     * @type {RolePatchRequestBody}
     * @memberof RolesApiPatchRole
     */
    readonly rolePatchRequestBody: RolePatchRequestBody
}

/**
 * RolesApi - object-oriented interface
 * @export
 * @class RolesApi
 * @extends {BaseAPI}
 */
export class RolesApi extends BaseAPI {
    /**
     * This API create new role. <br>   <b>Permission required:</b> <br>       * roles:create <br> 
     * @summary Add a new role
     * @param {RolesApiAddRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public addRole(requestParameters: RolesApiAddRoleRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).addRole(requestParameters.orgId, requestParameters.roleCreationRequestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API delete role by id. <br>   <b>Permission required:</b> <br>       * roles:delete <br> 
     * @summary Deletes a role
     * @param {RolesApiDeleteRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public deleteRole(requestParameters: RolesApiDeleteRoleRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).deleteRole(requestParameters.orgId, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API fetch role by id. <br>   <b>Permission required:</b> <br>       * roles:read <br> 
     * @summary Find role by ID
     * @param {RolesApiGetRoleByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public getRoleById(requestParameters: RolesApiGetRoleByIdRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).getRoleById(requestParameters.orgId, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API fetch all roles. <br>   <b>Permission required:</b> <br>       * roles:read_all <br> 
     * @summary Get all roles.
     * @param {RolesApiGetRolesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public getRoles(requestParameters: RolesApiGetRolesRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).getRoles(requestParameters.orgId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API patch existing role groups and users. <br>   <b>Permission required:</b> <br>       * roles:update <br> 
     * @summary Patch a existing role
     * @param {RolesApiPatchRoleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public patchRole(requestParameters: RolesApiPatchRoleRequest, options?: AxiosRequestConfig) {
        return RolesApiFp(this.configuration).patchRole(requestParameters.orgId, requestParameters.id, requestParameters.rolePatchRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}
