---
url: /api/@minimajs/server/@minimajs/server/type-aliases/HookStore.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / HookStore

# Type Alias: HookStore

```ts
type HookStore = { [K in LifecycleHook]: Set<GenericHookCallback> } & {
  clone: HookStore;
};
```

Defined in: [packages/server/src/hooks/types.ts:27](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L27)

## Type Declaration

### clone()

```ts
clone(): HookStore;
```

#### Returns

`HookStore`
