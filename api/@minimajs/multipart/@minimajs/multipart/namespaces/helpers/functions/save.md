---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/save.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / save

# Function: save()

```ts
function save(
   file, 
   dest, 
filename?): Promise<string>;
```

Defined in: [packages/multipart/src/helpers.ts:115](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L115)

Saves a file or raw multipart stream to disk.

## Parameters

### file

[`MultipartRawFile`](../../../interfaces/MultipartRawFile.md) | `File`

### dest

`string` = `...`

### filename?

`string`

## Returns

`Promise`<`string`>
