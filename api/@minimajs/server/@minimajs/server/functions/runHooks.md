---
url: /api/@minimajs/server/@minimajs/server/functions/runHooks.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / runHooks

# Function: runHooks()

```ts
function runHooks<S>(
   app, 
   name, ...
args): Promise<void>;
```

Defined in: [packages/server/src/hooks/store.ts:92](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/store.ts#L92)

Runs all hooks for a given lifecycle event with automatic order detection

* Parent → Child hooks run in FIFO order (normal)
* Child → Parent hooks run in LIFO order (reversed)

## Type Parameters

### S

`S`

## Parameters

### app

[`App`](../interfaces/App.md)<`S`>

### name

[`LifecycleHook`](../type-aliases/LifecycleHook.md)

### args

...`any`\[]

## Returns

`Promise`<`void`>
