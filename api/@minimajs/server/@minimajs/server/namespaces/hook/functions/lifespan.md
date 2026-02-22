---
url: /api/@minimajs/server/@minimajs/server/namespaces/hook/functions/lifespan.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [hook](../README.md) / lifespan

# Function: lifespan()

```ts
function lifespan<S>(setup): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:51](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L51)

Creates a plugin that sets up resources on ready and tears them down on close

## Type Parameters

### S

`S`

## Parameters

### setup

(`app`) =>
| `void`
| [`LifeSpanCleanupCallback`](../../../type-aliases/LifeSpanCleanupCallback.md)<`S`>
| `Promise`<
| `void`
| [`LifeSpanCleanupCallback`](../../../type-aliases/LifeSpanCleanupCallback.md)<`S`>>

## Returns

[`PluginSync`](../../../interfaces/PluginSync.md)<`S`>
