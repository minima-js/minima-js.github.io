---
url: /api/@minimajs/server/@minimajs/server/type-aliases/OnSendHook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / OnSendHook

# Type Alias: OnSendHook()\<S>

```ts
type OnSendHook<S> = (response, ctx) => void | Promise<void>;
```

Defined in: [packages/server/src/hooks/types.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L11)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### response

`Response`

### ctx

[`Context`](../interfaces/Context.md)<`S`>

## Returns

`void` | `Promise`<`void`>
