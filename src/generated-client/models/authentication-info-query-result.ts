/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AuthenticationInfo } from './authentication-info';

/**
 * 
 * @export
 * @interface AuthenticationInfoQueryResult
 */
export interface AuthenticationInfoQueryResult {
    /**
     * Gets or sets the items.
     * @type {Array<AuthenticationInfo>}
     * @memberof AuthenticationInfoQueryResult
     */
    Items?: Array<AuthenticationInfo> | null;
    /**
     * Gets or sets the total number of records available.
     * @type {number}
     * @memberof AuthenticationInfoQueryResult
     */
    TotalRecordCount?: number;
    /**
     * Gets or sets the index of the first record in Items.
     * @type {number}
     * @memberof AuthenticationInfoQueryResult
     */
    StartIndex?: number;
}


