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


import { EmbeddedSubtitleOptions } from './embedded-subtitle-options';
import { MediaPathInfo } from './media-path-info';
import { TypeOptions } from './type-options';

/**
 * 
 * @export
 * @interface LibraryOptions
 */
export interface LibraryOptions {
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    EnablePhotos?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    EnableRealtimeMonitor?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    EnableChapterImageExtraction?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    ExtractChapterImagesDuringLibraryScan?: boolean;
    /**
     * 
     * @type {Array<MediaPathInfo>}
     * @memberof LibraryOptions
     */
    PathInfos?: Array<MediaPathInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    SaveLocalMetadata?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     * @deprecated
     */
    EnableInternetProviders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    EnableAutomaticSeriesGrouping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    EnableEmbeddedTitles?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    EnableEmbeddedEpisodeInfos?: boolean;
    /**
     * 
     * @type {number}
     * @memberof LibraryOptions
     */
    AutomaticRefreshIntervalDays?: number;
    /**
     * Gets or sets the preferred metadata language.
     * @type {string}
     * @memberof LibraryOptions
     */
    PreferredMetadataLanguage?: string | null;
    /**
     * Gets or sets the metadata country code.
     * @type {string}
     * @memberof LibraryOptions
     */
    MetadataCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LibraryOptions
     */
    SeasonZeroDisplayName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    MetadataSavers?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    DisabledLocalMetadataReaders?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    LocalMetadataReaderOrder?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    DisabledSubtitleFetchers?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    SubtitleFetcherOrder?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    SkipSubtitlesIfEmbeddedSubtitlesPresent?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    SkipSubtitlesIfAudioTrackMatches?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LibraryOptions
     */
    SubtitleDownloadLanguages?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    RequirePerfectSubtitleMatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    SaveSubtitlesWithMedia?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LibraryOptions
     */
    AutomaticallyAddToCollection?: boolean;
    /**
     * 
     * @type {EmbeddedSubtitleOptions}
     * @memberof LibraryOptions
     */
    AllowEmbeddedSubtitles?: EmbeddedSubtitleOptions;
    /**
     * 
     * @type {Array<TypeOptions>}
     * @memberof LibraryOptions
     */
    TypeOptions?: Array<TypeOptions>;
}


