---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/streaming/functions/file.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [streaming](../README.md) / file

# Function: file()

```ts
function file(name, options): Promise<StreamFile | null>;
```

Defined in: [packages/multipart/src/streaming/index.ts:8](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/index.ts#L8)

Retrieves a specific file field by name as a StreamFile (lazy streaming, not buffered).

## Parameters

### name

`string`

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`Promise`<[`StreamFile`](../classes/StreamFile.md) | `null`>
