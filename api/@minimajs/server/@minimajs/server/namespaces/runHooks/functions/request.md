---
url: >-
  /api/@minimajs/server/@minimajs/server/namespaces/runHooks/functions/request.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [runHooks](../README.md) / request

# Function: request()

```ts
function request<S>(app, ctx): Promise<void | Response>;
```

Defined in: [packages/server/src/hooks/store.ts:111](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/store.ts#L111)

## Type Parameters

### S

`S`

## Parameters

### app

[`App`](../../../interfaces/App.md)<`S`>

### ctx

[`Context`](../../../interfaces/Context.md)<`S`>

## Returns

`Promise`<`void` | `Response`>
