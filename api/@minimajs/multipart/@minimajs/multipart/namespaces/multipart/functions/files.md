---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/multipart/functions/files.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [multipart](../README.md) / files

# Function: files()

```ts
function files(options): AsyncGenerator<readonly [string, File], void, unknown>;
```

Defined in: [packages/multipart/src/multipart/index.ts:57](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/multipart/index.ts#L57)

Retrieves all files from a multipart form request as an async iterable.
Field data is ignored - only files are processed.

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`AsyncGenerator`\<readonly \[`string`, `File`], `void`, `unknown`>

An async iterable that yields File instances

## Example

```ts
for await (const file of multipart.files()) {
  console.log(file.name);
  await helpers.save(file, '/uploads');
}
```
