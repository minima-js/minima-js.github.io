---
url: /api/@minimajs/server/@minimajs/server/namespaces/runHooks/functions/safe.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [runHooks](../README.md) / safe

# Function: safe()

```ts
function safe<S>(
   app, 
   name, ...
args): Promise<void>;
```

Defined in: [packages/server/src/hooks/store.ts:100](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/store.ts#L100)

## Type Parameters

### S

`S`

## Parameters

### app

[`App`](../../../interfaces/App.md)<`S`>

### name

[`LifecycleHook`](../../../type-aliases/LifecycleHook.md)

### args

...`any`\[]

## Returns

`Promise`<`void`>
