---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/multipart/functions/fields.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [multipart](../README.md) / fields

# Function: fields()

```ts
function fields<T>(): Promise<T>;
```

Defined in: [packages/multipart/src/multipart/index.ts:76](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/multipart/index.ts#L76)

Retrieves all text fields from a multipart form request.
Files are ignored - only text field data is processed.

## Type Parameters

### T

`T` *extends* `Record`<`string`, `string` | `string`\[]>

The expected shape of the fields object

## Returns

`Promise`<`T`>

A promise that resolves to an object containing field names and their values

## Example

```ts
const fields = await multipart.fields<{ name: string; email: string }>();
console.log(fields.name, fields.email);
```
