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



/**
 * 
 * @export
 * @interface TunerHostInfo
 */
export interface TunerHostInfo {
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    Id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    Url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    Type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    DeviceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    FriendlyName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TunerHostInfo
     */
    ImportFavoritesOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TunerHostInfo
     */
    AllowHWTranscoding?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TunerHostInfo
     */
    EnableStreamLooping?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    Source?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TunerHostInfo
     */
    TunerCount?: number;
    /**
     * 
     * @type {string}
     * @memberof TunerHostInfo
     */
    UserAgent?: string | null;
}


