---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/humanFileSize.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / humanFileSize

# Function: humanFileSize()

```ts
function humanFileSize(bytes, dp): string;
```

Defined in: [packages/multipart/src/helpers.ts:41](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L41)

Converts a byte count into a human-readable file size string with binary units.

## Parameters

### bytes

`number`

### dp

`number` = `1`

## Returns

`string`

## Example

```ts
humanFileSize(1024); // "1.0 KiB"
humanFileSize(1536, 2); // "1.50 KiB"
humanFileSize(5242880); // "5.0 MiB"
```
