---
url: /api/@minimajs/server/@minimajs/server/type-aliases/ErrorHandler.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / ErrorHandler

# Type Alias: ErrorHandler()\<S>

```ts
type ErrorHandler<S> = (error, ctx) => Response | Promise<Response>;
```

Defined in: [packages/server/src/interfaces/response.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L7)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### error

`unknown`

### ctx

[`Context`](../interfaces/Context.md)<`S`>

## Returns

`Response` | `Promise`<`Response`>
