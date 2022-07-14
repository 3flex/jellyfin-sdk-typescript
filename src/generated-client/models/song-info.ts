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



/**
 * 
 * @export
 * @interface SongInfo
 */
export interface SongInfo {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof SongInfo
     */
    Name?: string | null;
    /**
     * Gets or sets the original title.
     * @type {string}
     * @memberof SongInfo
     */
    OriginalTitle?: string | null;
    /**
     * Gets or sets the path.
     * @type {string}
     * @memberof SongInfo
     */
    Path?: string | null;
    /**
     * Gets or sets the metadata language.
     * @type {string}
     * @memberof SongInfo
     */
    MetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof SongInfo
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the provider ids.
     * @type {{ [key: string]: string; }}
     * @memberof SongInfo
     */
    ProviderIds?: { [key: string]: string; } | null;
    /**
     * Gets or sets the year.
     * @type {number}
     * @memberof SongInfo
     */
    Year?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SongInfo
     */
    IndexNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SongInfo
     */
    ParentIndexNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SongInfo
     */
    PremiereDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SongInfo
     */
    IsAutomated?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SongInfo
     */
    AlbumArtists?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SongInfo
     */
    Album?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SongInfo
     */
    Artists?: Array<string> | null;
}


