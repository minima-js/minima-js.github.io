---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/streaming/functions/body.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [streaming](../README.md) / body

# Function: body()

```ts
function body(options): AsyncGenerator<[string, string | StreamFile]>;
```

Defined in: [packages/multipart/src/streaming/index.ts:22](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/index.ts#L22)

Iterates over all multipart fields, yielding files as StreamFiles and text fields as strings.

## Parameters

### options

[`MultipartOptions`](../../../type-aliases/MultipartOptions.md) = `{}`

## Returns

`AsyncGenerator`<\[`string`, `string` | [`StreamFile`](../classes/StreamFile.md)]>
