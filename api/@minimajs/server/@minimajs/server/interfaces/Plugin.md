---
url: /api/@minimajs/server/@minimajs/server/interfaces/Plugin.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Plugin

# Interface: Plugin()\<S, T>

Defined in: [packages/server/src/plugin.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L19)

## Type Parameters

### S

`S` = `unknown`

### T

`T` *extends* [`PluginOptions`](../type-aliases/PluginOptions.md) = [`PluginOptions`](../type-aliases/PluginOptions.md)

```ts
Plugin(app, opts): void | Promise<void>;
```

Defined in: [packages/server/src/plugin.ts:20](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L20)

## Parameters

### app

[`App`](App.md)<`S`>

### opts

`T`

## Returns

`void` | `Promise`<`void`>

## Properties

### \[kModuleName]?

```ts
optional [kModuleName]: string;
```

Defined in: [packages/server/src/plugin.ts:21](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L21)

***

### \[kPlugin]

```ts
[kPlugin]: true;
```

Defined in: [packages/server/src/plugin.ts:22](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L22)
