/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BoxSetInfo } from './box-set-info';

/**
 * 
 * @export
 * @interface BoxSetInfoRemoteSearchQuery
 */
export interface BoxSetInfoRemoteSearchQuery {
    /**
     * 
     * @type {BoxSetInfo}
     * @memberof BoxSetInfoRemoteSearchQuery
     */
    SearchInfo?: BoxSetInfo;
    /**
     * 
     * @type {string}
     * @memberof BoxSetInfoRemoteSearchQuery
     */
    ItemId?: string;
    /**
     * Gets or sets the provider name to search within if set.
     * @type {string}
     * @memberof BoxSetInfoRemoteSearchQuery
     */
    SearchProviderName?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     * @type {boolean}
     * @memberof BoxSetInfoRemoteSearchQuery
     */
    IncludeDisabledProviders?: boolean;
}


