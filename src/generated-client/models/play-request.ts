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


import { PlayCommand } from './play-command';

/**
 * Class PlayRequest.
 * @export
 * @interface PlayRequest
 */
export interface PlayRequest {
    /**
     * Gets or sets the item ids.
     * @type {Array<string>}
     * @memberof PlayRequest
     */
    ItemIds?: Array<string> | null;
    /**
     * Gets or sets the start position ticks that the first item should be played at.
     * @type {number}
     * @memberof PlayRequest
     */
    StartPositionTicks?: number | null;
    /**
     * 
     * @type {PlayCommand}
     * @memberof PlayRequest
     */
    PlayCommand?: PlayCommand;
    /**
     * Gets or sets the controlling user identifier.
     * @type {string}
     * @memberof PlayRequest
     */
    ControllingUserId?: string;
    /**
     * 
     * @type {number}
     * @memberof PlayRequest
     */
    SubtitleStreamIndex?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PlayRequest
     */
    AudioStreamIndex?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PlayRequest
     */
    MediaSourceId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PlayRequest
     */
    StartIndex?: number | null;
}


