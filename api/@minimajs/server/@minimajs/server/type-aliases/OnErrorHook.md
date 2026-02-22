---
url: /api/@minimajs/server/@minimajs/server/type-aliases/OnErrorHook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / OnErrorHook

# Type Alias: OnErrorHook()\<S>

```ts
type OnErrorHook<S> = (err, ctx) => unknown | Promise<unknown>;
```

Defined in: [packages/server/src/hooks/types.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L12)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### err

`unknown`

### ctx

[`Context`](../interfaces/Context.md)<`S`>

## Returns

`unknown` | `Promise`<`unknown`>
