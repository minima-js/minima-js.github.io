---
url: /api/@minimajs/multipart/@minimajs/multipart/namespaces/streaming/README.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart](../../README.md) / streaming

# streaming

## Classes

| Class | Description |
| ------ | ------ |
| [StreamFile](classes/StreamFile.md) | A File subclass that lazily buffers from a stream on first read. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [StreamFileInit](interfaces/StreamFileInit.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [body](functions/body.md) | Iterates over all multipart fields, yielding files as StreamFiles and text fields as strings. |
| [file](functions/file.md) | Retrieves a specific file field by name as a StreamFile (lazy streaming, not buffered). |
| [firstFile](functions/firstFile.md) | Retrieves the first file field as a StreamFile with its field name. |
