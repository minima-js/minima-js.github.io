---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/multipart/functions/firstFile.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [multipart](../README.md) / firstFile

# Function: firstFile()

```ts
function firstFile(options): Promise<[string, File] | null>;
```

Defined in: [packages/multipart/src/multipart/index.ts:38](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/multipart/index.ts#L38)

Retrieves the first file from a multipart form request.

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`Promise`<\[`string`, `File`] | `null`>

A promise that resolves to a tuple of \[fieldName, File] or null if no file is found

## Example

```ts
const result = await multipart.firstFile();
if (result) {
  const [fieldName, file] = result;
  console.log(`Received ${file.name} from field ${fieldName}`);
}
```
