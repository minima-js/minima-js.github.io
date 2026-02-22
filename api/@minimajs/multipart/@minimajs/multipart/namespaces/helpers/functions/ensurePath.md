---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/ensurePath.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / ensurePath

# Function: ensurePath()

```ts
function ensurePath(...paths): Promise<string>;
```

Defined in: [packages/multipart/src/helpers.ts:68](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L68)

Ensures a directory path exists, creating it recursively if needed.

## Parameters

### paths

...`string`\[]

## Returns

`Promise`<`string`>

## Example

```ts
const dir = await ensurePath('/uploads', 'images');
// Creates /uploads/images if it doesn't exist
```
