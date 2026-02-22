---
url: /api/@minimajs/server/@minimajs/server/namespaces/runHooks/functions/error.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [runHooks](../README.md) / error

# Function: error()

```ts
function error<S>(
   app, 
   error, 
ctx): Promise<unknown>;
```

Defined in: [packages/server/src/hooks/store.ts:137](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/store.ts#L137)

## Type Parameters

### S

`S`

## Parameters

### app

[`App`](../../../interfaces/App.md)<`S`>

### error

`unknown`

### ctx

[`Context`](../../../interfaces/Context.md)<`S`>

## Returns

`Promise`<`unknown`>
