---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/raw2file.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / raw2file

# Function: raw2file()

```ts
function raw2file(raw, options): Promise<File>;
```

Defined in: [packages/multipart/src/helpers.ts:90](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L90)

Converts a raw multipart file stream into a Web API File by buffering the entire stream.

## Parameters

### raw

[`MultipartRawFile`](../../../interfaces/MultipartRawFile.md)

### options

[`Stream2BytesOptions`](../interfaces/Stream2BytesOptions.md)

## Returns

`Promise`<`File`>
