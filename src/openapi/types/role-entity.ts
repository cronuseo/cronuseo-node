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
import { AssignedGroup } from './assigned-group';
// May contain unused imports in some cases
// @ts-ignore
import { ResourceEntity } from './resource-entity';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface RoleEntity
 */
export interface RoleEntity {
    /**
     * 
     * @type {string}
     * @memberof RoleEntity
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleEntity
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleEntity
     */
    'identifier'?: string;
    /**
     * 
     * @type {Array<AssignedGroup>}
     * @memberof RoleEntity
     */
    'groups'?: Array<AssignedGroup>;
    /**
     * 
     * @type {Array<User>}
     * @memberof RoleEntity
     */
    'users'?: Array<User>;
    /**
     * 
     * @type {Array<ResourceEntity>}
     * @memberof RoleEntity
     */
    'permissions'?: Array<ResourceEntity>;
}
