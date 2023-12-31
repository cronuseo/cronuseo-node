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


// May contain unused imports in some cases
// @ts-ignore
import { GroupCreationRequestBodyGroupProperties } from './group-creation-request-body-group-properties';

/**
 * 
 * @export
 * @interface GroupCreationRequestBody
 */
export interface GroupCreationRequestBody {
    /**
     * 
     * @type {string}
     * @memberof GroupCreationRequestBody
     */
    'display_name': string;
    /**
     * 
     * @type {string}
     * @memberof GroupCreationRequestBody
     */
    'identifier': string;
    /**
     * 
     * @type {GroupCreationRequestBodyGroupProperties}
     * @memberof GroupCreationRequestBody
     */
    'group_properties'?: GroupCreationRequestBodyGroupProperties;
    /**
     * 
     * @type {Array<string>}
     * @memberof GroupCreationRequestBody
     */
    'groups'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GroupCreationRequestBody
     */
    'users'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GroupCreationRequestBody
     */
    'policies'?: Array<string>;
}

