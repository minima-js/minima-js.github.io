---
url: /api/@minimajs/server/@minimajs/server/type-aliases/OnTransformHook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / OnTransformHook

# Type Alias: OnTransformHook()\<S>

```ts
type OnTransformHook<S> = (data, ctx) => unknown | Promise<unknown>;
```

Defined in: [packages/server/src/hooks/types.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L10)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### data

`unknown`

### ctx

[`Context`](../interfaces/Context.md)<`S`>

## Returns

`unknown` | `Promise`<`unknown`>
