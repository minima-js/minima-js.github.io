---
url: /api/@minimajs/server/@minimajs/server/type-aliases/OnRegisterHook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / OnRegisterHook

# Type Alias: OnRegisterHook()\<S>

```ts
type OnRegisterHook<S> = (plugin, opts) => void | Promise<void>;
```

Defined in: [packages/server/src/hooks/types.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L19)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### plugin

[`Plugin`](../interfaces/Plugin.md)<`S`>

### opts

[`RegisterOptions`](RegisterOptions.md)

## Returns

`void` | `Promise`<`void`>
