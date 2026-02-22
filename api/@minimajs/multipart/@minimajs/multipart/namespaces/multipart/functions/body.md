---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/multipart/functions/body.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [multipart](../README.md) / body

# Function: body()

```ts
function body(options): AsyncGenerator<[string, string | File]>;
```

Defined in: [packages/multipart/src/multipart/index.ts:111](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/multipart/index.ts#L111)

Retrieves both text fields and files from a multipart form request as an async iterable.
Each iteration yields a tuple of \[fieldName, value] where value can be a string or File.

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`AsyncGenerator`<\[`string`, `string` | `File`]>

An async iterable that yields tuples of field name and value (string or File)

## Example

```ts
for await (const [name, value] of multipart.body()) {
  if (isFile(value)) {
    console.log(`File: ${name} = ${value.name}`);
    helpers.save(value, './dest')
  } else {
    console.log(`Field: ${name} = ${value}`);
  }
}
```
