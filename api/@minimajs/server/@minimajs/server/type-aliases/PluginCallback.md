---
url: /api/@minimajs/server/@minimajs/server/type-aliases/PluginCallback.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / PluginCallback

# Type Alias: PluginCallback()\<S, T>

```ts
type PluginCallback<S, T> = (app, opts) => void | Promise<void>;
```

Defined in: [packages/server/src/plugin.ts:5](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L5)

## Type Parameters

### S

`S`

### T

`T` *extends* [`PluginOptions`](PluginOptions.md)

## Parameters

### app

[`App`](../interfaces/App.md)<`S`>

### opts

`T`

## Returns

`void` | `Promise`<`void`>
