---
url: >-
  /api/@minimajs/server/@minimajs/server/namespaces/runHooks/functions/transform.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [runHooks](../README.md) / transform

# Function: transform()

```ts
function transform<S>(
   app, 
   data, 
ctx): Promise<unknown>;
```

Defined in: [packages/server/src/hooks/store.ts:128](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/store.ts#L128)

## Type Parameters

### S

`S`

## Parameters

### app

[`App`](../../../interfaces/App.md)<`S`>

### data

`unknown`

### ctx

[`Context`](../../../interfaces/Context.md)<`S`>

## Returns

`Promise`<`unknown`>
