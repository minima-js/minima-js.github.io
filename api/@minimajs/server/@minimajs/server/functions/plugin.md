---
url: /api/@minimajs/server/@minimajs/server/functions/plugin.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / plugin

# Function: plugin()

```ts
function plugin<S, T>(fn, name?): Plugin<S, T>;
```

Defined in: [packages/server/src/plugin.ts:60](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L60)

Wraps a plain function into a Plugin with automatic kPluginSkipOverride
This prevents the plugin from being encapsulated and allows direct registration

## Type Parameters

### S

`S`

### T

`T` *extends* {
`name?`: `string`;
} = {
`name?`: `string`;
}

## Parameters

### fn

[`PluginCallback`](../type-aliases/PluginCallback.md)<`S`, `T`>

### name?

`string`

## Returns

[`Plugin`](../interfaces/Plugin.md)<`S`, `T`>
