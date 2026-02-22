---
url: /api/@minimajs/server/@minimajs/server/interfaces/Meta.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Meta

# Interface: Meta\<S>

Defined in: [packages/server/src/plugins/module-discovery/types.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/module-discovery/types.ts#L6)

## Type Parameters

### S

`S` = `any`

## Properties

### name?

```ts
optional name: string;
```

Defined in: [packages/server/src/plugins/module-discovery/types.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/module-discovery/types.ts#L7)

***

### plugins?

```ts
optional plugins: (
  | Plugin<S, {
  name?: string;
}>
  | PluginSync<S>)[];
```

Defined in: [packages/server/src/plugins/module-discovery/types.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/module-discovery/types.ts#L9)

***

### prefix?

```ts
optional prefix: string;
```

Defined in: [packages/server/src/plugins/module-discovery/types.ts:8](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/module-discovery/types.ts#L8)
