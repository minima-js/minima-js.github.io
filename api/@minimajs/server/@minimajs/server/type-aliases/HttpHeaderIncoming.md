---
url: /api/@minimajs/server/@minimajs/server/type-aliases/HttpHeaderIncoming.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / HttpHeaderIncoming

# Type Alias: HttpHeaderIncoming

```ts
type HttpHeaderIncoming = 
  | keyof OmitIndexSignature<IncomingHttpHeaders>
| string & Record<never, never>;
```

Defined in: [packages/server/src/interfaces/response.ts:37](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L37)
