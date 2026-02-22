---
url: /api/@minimajs/server/@minimajs/server/type-aliases/Middleware.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Middleware

# Type Alias: Middleware()\<S>

```ts
type Middleware<S> = (ctx, next) => Promise<Response>;
```

Defined in: [packages/server/src/interfaces/app.ts:93](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L93)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### ctx

[`Context`](../interfaces/Context.md)<`S`>

### next

[`MiddlewareNext`](MiddlewareNext.md)

## Returns

`Promise`<`Response`>
