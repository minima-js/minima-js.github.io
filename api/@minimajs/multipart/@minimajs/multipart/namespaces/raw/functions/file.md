---
url: /api/@minimajs/multipart/@minimajs/multipart/namespaces/raw/functions/file.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [raw](../README.md) / file

# Function: file()

```ts
function file(name, options): Promise<MultipartRawFile | null>;
```

Defined in: [packages/multipart/src/raw/index.ts:25](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/raw/index.ts#L25)

Retrieves a raw file stream from a multipart form request without buffering into memory.
Useful for streaming large files directly to disk or other destinations.

## Parameters

### name

`string`

field name to match

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`Promise`<[`MultipartRawFile`](../../../interfaces/MultipartRawFile.md) | `null`>

A promise that resolves to the raw file with stream, or null if not found

## Example

```ts
const raw = await multipart.rawFile('video');
if (raw) {
  await pipeline(raw.stream, createWriteStream(`/uploads/${raw.filename}`));
}
```
