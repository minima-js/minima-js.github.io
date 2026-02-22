---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/streaming/functions/firstFile.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [streaming](../README.md) / firstFile

# Function: firstFile()

```ts
function firstFile(options): Promise<[string, StreamFile] | null>;
```

Defined in: [packages/multipart/src/streaming/index.ts:15](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/index.ts#L15)

Retrieves the first file field as a StreamFile with its field name.

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`Promise`<\[`string`, [`StreamFile`](../classes/StreamFile.md)] | `null`>
