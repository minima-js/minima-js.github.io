---
url: /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/README.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart](../../README.md) / helpers

# helpers

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Stream2BytesOptions](interfaces/Stream2BytesOptions.md) | Options for stream to Uint8Array conversion. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Dict](type-aliases/Dict.md) | Generic dictionary type alias for objects with optional properties. |
| [Unit](type-aliases/Unit.md) | File size unit type representing binary prefixes (base 1024). Available units: KiB, MiB, GiB, TiB, PiB, EiB, ZiB, YiB |

## Functions

| Function | Description |
| ------ | ------ |
| [drain](functions/drain.md) | Consumes and discards a raw multipart file stream. |
| [ensurePath](functions/ensurePath.md) | Ensures a directory path exists, creating it recursively if needed. |
| [humanFileSize](functions/humanFileSize.md) | Converts a byte count into a human-readable file size string with binary units. |
| [isFile](functions/isFile.md) | Checks if a value is a Web API File instance. |
| [isRawField](functions/isRawField.md) | Checks if a value is a raw multipart file from the parser. |
| [isRawFile](functions/isRawFile.md) | Checks if a value is a raw multipart file from the parser. |
| [randomName](functions/randomName.md) | Generates a random UUID-based filename while preserving the original extension. Useful for storing files with unique names to prevent collisions. |
| [raw2file](functions/raw2file.md) | Converts a raw multipart file stream into a Web API File by buffering the entire stream. |
| [raw2streamFile](functions/raw2streamFile.md) | Wraps a raw multipart file stream into a StreamFile without buffering. |
| [save](functions/save.md) | Saves a file or raw multipart stream to disk. |
| [stream2buffer](functions/stream2buffer.md) | Reads a stream into a Buffer. |
| [stream2bytes](functions/stream2bytes.md) | Reads a stream into a Uint8Array with optional size limit. |
| [stream2void](functions/stream2void.md) | Creates a writable stream that discards all data. |
