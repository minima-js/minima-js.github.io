---
url: /api/@minimajs/server/@minimajs/server/interfaces/Module.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Module

# Interface: Module()\<S, T>

Defined in: [packages/server/src/plugin.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L32)

## Type Parameters

### S

`S` = `unknown`

### T

`T` *extends* [`RegisterOptions`](../type-aliases/RegisterOptions.md) = [`RegisterOptions`](../type-aliases/RegisterOptions.md)

```ts
Module(app, opts): void | Promise<void>;
```

Defined in: [packages/server/src/plugin.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L33)

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

Defined in: [packages/server/src/plugin.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugin.ts#L34)
