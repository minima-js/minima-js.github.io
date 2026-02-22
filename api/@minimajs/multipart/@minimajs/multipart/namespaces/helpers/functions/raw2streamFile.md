---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/raw2streamFile.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / raw2streamFile

# Function: raw2streamFile()

```ts
function raw2streamFile(raw): StreamFile;
```

Defined in: [packages/multipart/src/helpers.ts:98](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L98)

Wraps a raw multipart file stream into a StreamFile without buffering.

## Parameters

### raw

[`MultipartRawFile`](../../../interfaces/MultipartRawFile.md)

## Returns

[`StreamFile`](../../streaming/classes/StreamFile.md)
