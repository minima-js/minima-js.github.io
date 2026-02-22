---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/helpers/functions/stream2bytes.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [helpers](../README.md) / stream2bytes

# Function: stream2bytes()

```ts
function stream2bytes(stream, __namedParameters): Promise<Uint8Array<ArrayBuffer>>;
```

Defined in: [packages/multipart/src/helpers.ts:139](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/helpers.ts#L139)

Reads a stream into a Uint8Array with optional size limit.

## Parameters

### stream

`Readable`

### \_\_namedParameters

[`Stream2BytesOptions`](../interfaces/Stream2BytesOptions.md) = `{}`

## Returns

`Promise`<`Uint8Array`<`ArrayBuffer`>>
