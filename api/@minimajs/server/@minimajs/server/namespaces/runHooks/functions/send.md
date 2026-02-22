---
url: /api/@minimajs/server/@minimajs/server/namespaces/runHooks/functions/send.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [runHooks](../README.md) / send

# Function: send()

```ts
function send<S>(
   app, 
   response, 
ctx): Promise<void | Response>;
```

Defined in: [packages/server/src/hooks/store.ts:121](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/store.ts#L121)

## Type Parameters

### S

`S`

## Parameters

### app

[`App`](../../../interfaces/App.md)<`S`>

### response

`Response`

### ctx

[`Context`](../../../interfaces/Context.md)<`S`>

## Returns

`Promise`<`void` | `Response`>
