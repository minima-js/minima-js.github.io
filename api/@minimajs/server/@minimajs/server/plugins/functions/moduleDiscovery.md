---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/moduleDiscovery.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / moduleDiscovery

# Function: moduleDiscovery()

```ts
function moduleDiscovery(options): Plugin<unknown, {
  name?: string;
}>;
```

Defined in: [packages/server/src/plugins/module-discovery/index.ts:23](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/module-discovery/index.ts#L23)

Module discovery plugin
Uses Node.js's built-in import caching for performance

## Parameters

### options

[`ModuleDiscoveryOptions`](../../interfaces/ModuleDiscoveryOptions.md)

## Returns

[`Plugin`](../../interfaces/Plugin.md)<`unknown`, {
`name?`: `string`;
}>
