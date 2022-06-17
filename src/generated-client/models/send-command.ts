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


import { SendCommandType } from './send-command-type';

/**
 * Class SendCommand.
 * @export
 * @interface SendCommand
 */
export interface SendCommand {
    /**
     * Gets the group identifier.
     * @type {string}
     * @memberof SendCommand
     */
    GroupId?: string;
    /**
     * Gets the playlist identifier of the playing item.
     * @type {string}
     * @memberof SendCommand
     */
    PlaylistItemId?: string;
    /**
     * Gets or sets the UTC time when to execute the command.
     * @type {string}
     * @memberof SendCommand
     */
    When?: string;
    /**
     * Gets the position ticks.
     * @type {number}
     * @memberof SendCommand
     */
    PositionTicks?: number | null;
    /**
     * 
     * @type {SendCommandType}
     * @memberof SendCommand
     */
    Command?: SendCommandType;
    /**
     * Gets the UTC time when this command has been emitted.
     * @type {string}
     * @memberof SendCommand
     */
    EmittedAt?: string;
}


