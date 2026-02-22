---
url: /api/@minimajs/server/@minimajs/server/functions/middleware.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / middleware

# Function: middleware()

```ts
function middleware<S>(...middlewares): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:96](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L96)

## Type Parameters

### S

`S` = `any`

## Parameters

### middlewares

...[`Middleware`](../type-aliases/Middleware.md)<`S`>\[]

## Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>
