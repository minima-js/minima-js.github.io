---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/randomName.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / randomName

# Function: randomName()

```ts
function randomName(filename): string;
```

Defined in: [packages/multipart/src/helpers.ts:110](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L110)

Generates a random UUID-based filename while preserving the original extension.
Useful for storing files with unique names to prevent collisions.

## Parameters

### filename

`string`

## Returns

`string`

A UUID filename with the original file extension
