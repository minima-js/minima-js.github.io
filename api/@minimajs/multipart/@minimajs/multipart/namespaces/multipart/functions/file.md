---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/multipart/functions/file.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [multipart](../README.md) / file

# Function: file()

```ts
function file(name, options): Promise<File | null>;
```

Defined in: [packages/multipart/src/multipart/index.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/multipart/index.ts#L19)

Retrieves a single file from a multipart form request.

## Parameters

### name

`string`

field name to match. Only files from this field are returned.

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`Promise`<`File` | `null`>

A promise that resolves to the uploaded File

## Example

```ts
// Get file from specific field
const avatar = await multipart.file('avatar');
if (avatar) {
 await helpers.save(avatar, './uploads');
}
```
