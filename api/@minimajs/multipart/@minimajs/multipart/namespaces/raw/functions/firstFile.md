---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/raw/functions/firstFile.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [raw](../README.md) / firstFile

# Function: firstFile()

```ts
function firstFile(options): Promise<MultipartRawFile | null>;
```

Defined in: [packages/multipart/src/raw/index.ts:67](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/raw/index.ts#L67)

Retrieves the first raw file stream from a multipart form request without buffering.

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`Promise`<[`MultipartRawFile`](../../../interfaces/MultipartRawFile.md) | `null`>

A promise that resolves to the first raw file with stream, or null if no file is found

## Example

```ts
const raw = await multipart.firstRawFile();
if (raw) {
  return response(Readable.toWeb(raw.stream), {
    headers: { 'Content-Type': raw.mimeType }
  });
}
```
