---
url: /api/@minimajs/multipart/@minimajs/multipart/namespaces/raw/functions/body.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [raw](../README.md) / body

# Function: body()

```ts
function body<T>(options): AsyncGenerator<T>;
```

Defined in: [packages/multipart/src/raw/index.ts:125](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/raw/index.ts#L125)

Retrieves both text fields and files from a multipart form request as an async iterable.
Each iteration yields a MultipartRawResult (either MultipartRawFile or MultipartRawField).

## Type Parameters

### T

`T` = [`MultipartRawResult`](../../../type-aliases/MultipartRawResult.md)

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`AsyncGenerator`<`T`>

An async iterable that yields raw multipart results

## Example

```ts
for await (const body of multipart.raw()) {
  if (isRawFile(body)) {
    console.log(`File: ${body.fieldname} = ${body.filename}`);
    await helpers.save(body, './dest');
  } else {
    console.log(`Field: ${body.fieldname} = ${body.value}`);
  }
}
```
