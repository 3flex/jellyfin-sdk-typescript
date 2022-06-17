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


import { BookInfo } from './book-info';

/**
 * 
 * @export
 * @interface BookInfoRemoteSearchQuery
 */
export interface BookInfoRemoteSearchQuery {
    /**
     * 
     * @type {BookInfo}
     * @memberof BookInfoRemoteSearchQuery
     */
    SearchInfo?: BookInfo;
    /**
     * 
     * @type {string}
     * @memberof BookInfoRemoteSearchQuery
     */
    ItemId?: string;
    /**
     * Gets or sets the provider name to search within if set.
     * @type {string}
     * @memberof BookInfoRemoteSearchQuery
     */
    SearchProviderName?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     * @type {boolean}
     * @memberof BookInfoRemoteSearchQuery
     */
    IncludeDisabledProviders?: boolean;
}


