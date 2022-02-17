[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [api](../modules/index.api.md) / MediaSourceInfo

# Interface: MediaSourceInfo

[index](../modules/index.md).[api](../modules/index.api.md).MediaSourceInfo

**`export`**

**`interface`** MediaSourceInfo

## Table of contents

### Properties

- [AnalyzeDurationMs](index.api.MediaSourceInfo.md#analyzedurationms)
- [Bitrate](index.api.MediaSourceInfo.md#bitrate)
- [BufferMs](index.api.MediaSourceInfo.md#bufferms)
- [Container](index.api.MediaSourceInfo.md#container)
- [DefaultAudioStreamIndex](index.api.MediaSourceInfo.md#defaultaudiostreamindex)
- [DefaultSubtitleStreamIndex](index.api.MediaSourceInfo.md#defaultsubtitlestreamindex)
- [ETag](index.api.MediaSourceInfo.md#etag)
- [EncoderPath](index.api.MediaSourceInfo.md#encoderpath)
- [EncoderProtocol](index.api.MediaSourceInfo.md#encoderprotocol)
- [Formats](index.api.MediaSourceInfo.md#formats)
- [GenPtsInput](index.api.MediaSourceInfo.md#genptsinput)
- [Id](index.api.MediaSourceInfo.md#id)
- [IgnoreDts](index.api.MediaSourceInfo.md#ignoredts)
- [IgnoreIndex](index.api.MediaSourceInfo.md#ignoreindex)
- [IsInfiniteStream](index.api.MediaSourceInfo.md#isinfinitestream)
- [IsRemote](index.api.MediaSourceInfo.md#isremote)
- [IsoType](index.api.MediaSourceInfo.md#isotype)
- [LiveStreamId](index.api.MediaSourceInfo.md#livestreamid)
- [MediaAttachments](index.api.MediaSourceInfo.md#mediaattachments)
- [MediaStreams](index.api.MediaSourceInfo.md#mediastreams)
- [Name](index.api.MediaSourceInfo.md#name)
- [OpenToken](index.api.MediaSourceInfo.md#opentoken)
- [Path](index.api.MediaSourceInfo.md#path)
- [Protocol](index.api.MediaSourceInfo.md#protocol)
- [ReadAtNativeFramerate](index.api.MediaSourceInfo.md#readatnativeframerate)
- [RequiredHttpHeaders](index.api.MediaSourceInfo.md#requiredhttpheaders)
- [RequiresClosing](index.api.MediaSourceInfo.md#requiresclosing)
- [RequiresLooping](index.api.MediaSourceInfo.md#requireslooping)
- [RequiresOpening](index.api.MediaSourceInfo.md#requiresopening)
- [RunTimeTicks](index.api.MediaSourceInfo.md#runtimeticks)
- [Size](index.api.MediaSourceInfo.md#size)
- [SupportsDirectPlay](index.api.MediaSourceInfo.md#supportsdirectplay)
- [SupportsDirectStream](index.api.MediaSourceInfo.md#supportsdirectstream)
- [SupportsProbing](index.api.MediaSourceInfo.md#supportsprobing)
- [SupportsTranscoding](index.api.MediaSourceInfo.md#supportstranscoding)
- [Timestamp](index.api.MediaSourceInfo.md#timestamp)
- [TranscodingContainer](index.api.MediaSourceInfo.md#transcodingcontainer)
- [TranscodingSubProtocol](index.api.MediaSourceInfo.md#transcodingsubprotocol)
- [TranscodingUrl](index.api.MediaSourceInfo.md#transcodingurl)
- [Type](index.api.MediaSourceInfo.md#type)
- [Video3DFormat](index.api.MediaSourceInfo.md#video3dformat)
- [VideoType](index.api.MediaSourceInfo.md#videotype)

## Properties

### AnalyzeDurationMs

• `Optional` **AnalyzeDurationMs**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:270](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L270)

___

### Bitrate

• `Optional` **Bitrate**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:234](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L234)

___

### BufferMs

• `Optional` **BufferMs**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:180](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L180)

___

### Container

• `Optional` **Container**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:72](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L72)

___

### DefaultAudioStreamIndex

• `Optional` **DefaultAudioStreamIndex**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:276](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L276)

___

### DefaultSubtitleStreamIndex

• `Optional` **DefaultSubtitleStreamIndex**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:282](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L282)

___

### ETag

• `Optional` **ETag**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:96](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L96)

___

### EncoderPath

• `Optional` **EncoderPath**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:54](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L54)

___

### EncoderProtocol

• `Optional` **EncoderProtocol**: [`MediaProtocol`](../enums/index.api.MediaProtocol.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:60](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L60)

___

### Formats

• `Optional` **Formats**: ``null`` \| `string`[]

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:228](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L228)

___

### GenPtsInput

• `Optional` **GenPtsInput**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:126](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L126)

___

### Id

• `Optional` **Id**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:42](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L42)

___

### IgnoreDts

• `Optional` **IgnoreDts**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:114](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L114)

___

### IgnoreIndex

• `Optional` **IgnoreIndex**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:120](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L120)

___

### IsInfiniteStream

• `Optional` **IsInfiniteStream**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:150](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L150)

___

### IsRemote

• `Optional` **IsRemote**: `boolean`

Differentiate internet url vs local network.

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:90](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L90)

___

### IsoType

• `Optional` **IsoType**: [`IsoType`](../enums/index.api.IsoType.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:204](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L204)

___

### LiveStreamId

• `Optional` **LiveStreamId**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:174](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L174)

___

### MediaAttachments

• `Optional` **MediaAttachments**: ``null`` \| [`MediaAttachment`](index.api.MediaAttachment.md)[]

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:222](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L222)

___

### MediaStreams

• `Optional` **MediaStreams**: ``null`` \| [`MediaStream`](index.api.MediaStream.md)[]

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:216](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L216)

___

### Name

• `Optional` **Name**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:84](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L84)

___

### OpenToken

• `Optional` **OpenToken**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:162](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L162)

___

### Path

• `Optional` **Path**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:48](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L48)

___

### Protocol

• `Optional` **Protocol**: [`MediaProtocol`](../enums/index.api.MediaProtocol.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:36](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L36)

___

### ReadAtNativeFramerate

• `Optional` **ReadAtNativeFramerate**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:108](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L108)

___

### RequiredHttpHeaders

• `Optional` **RequiredHttpHeaders**: ``null`` \| { [key: string]: `string`;  }

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:246](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L246)

___

### RequiresClosing

• `Optional` **RequiresClosing**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L168)

___

### RequiresLooping

• `Optional` **RequiresLooping**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:186](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L186)

___

### RequiresOpening

• `Optional` **RequiresOpening**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:156](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L156)

___

### RunTimeTicks

• `Optional` **RunTimeTicks**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:102](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L102)

___

### Size

• `Optional` **Size**: ``null`` \| `number`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:78](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L78)

___

### SupportsDirectPlay

• `Optional` **SupportsDirectPlay**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:144](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L144)

___

### SupportsDirectStream

• `Optional` **SupportsDirectStream**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:138](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L138)

___

### SupportsProbing

• `Optional` **SupportsProbing**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:192](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L192)

___

### SupportsTranscoding

• `Optional` **SupportsTranscoding**: `boolean`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:132](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L132)

___

### Timestamp

• `Optional` **Timestamp**: [`TransportStreamTimestamp`](../enums/index.api.TransportStreamTimestamp.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:240](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L240)

___

### TranscodingContainer

• `Optional` **TranscodingContainer**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:264](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L264)

___

### TranscodingSubProtocol

• `Optional` **TranscodingSubProtocol**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:258](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L258)

___

### TranscodingUrl

• `Optional` **TranscodingUrl**: ``null`` \| `string`

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L252)

___

### Type

• `Optional` **Type**: [`MediaSourceType`](../enums/index.api.MediaSourceType.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:66](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L66)

___

### Video3DFormat

• `Optional` **Video3DFormat**: [`Video3DFormat`](../enums/index.api.Video3DFormat.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L210)

___

### VideoType

• `Optional` **VideoType**: [`VideoType`](../enums/index.api.VideoType.md)

**`memberof`** MediaSourceInfo

#### Defined in

[generated-client/models/media-source-info.ts:198](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/models/media-source-info.ts#L198)