---
url: /api/@minimajs/server/@minimajs/server/type-aliases/OnRequestHook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / OnRequestHook

# Type Alias: OnRequestHook()\<S>

```ts
type OnRequestHook<S> = (ctx) => void | Response | Promise<void | Response>;
```

Defined in: [packages/server/src/hooks/types.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L9)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### ctx

[`Context`](../interfaces/Context.md)<`S`>

## Returns

`void` | `Response` | `Promise`<`void` | `Response`>
