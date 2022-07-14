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


import { CodecType } from './codec-type';
import { ProfileCondition } from './profile-condition';

/**
 * 
 * @export
 * @interface CodecProfile
 */
export interface CodecProfile {
    /**
     * 
     * @type {CodecType}
     * @memberof CodecProfile
     */
    Type?: CodecType;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof CodecProfile
     */
    Conditions?: Array<ProfileCondition> | null;
    /**
     * 
     * @type {Array<ProfileCondition>}
     * @memberof CodecProfile
     */
    ApplyConditions?: Array<ProfileCondition> | null;
    /**
     * 
     * @type {string}
     * @memberof CodecProfile
     */
    Codec?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CodecProfile
     */
    Container?: string | null;
}


