---
url: /api/@minimajs/server/@minimajs/server/namespaces/hook/functions/define.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [hook](../README.md) / define

# Function: define()

```ts
function define<S>(hooks): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:69](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L69)

Creates a plugin that registers multiple hooks at once

## Type Parameters

### S

`S`

## Parameters

### hooks

`Partial`<{
`close`: [`OnCloseHook`](../../../type-aliases/OnCloseHook.md);
`error`: [`OnErrorHook`](../../../type-aliases/OnErrorHook.md);
`listen`: [`OnListenHook`](../../../type-aliases/OnListenHook.md);
`ready`: [`OnReadyHook`](../../../type-aliases/OnReadyHook.md);
`register`: [`OnRegisterHook`](../../../type-aliases/OnRegisterHook.md);
`request`: [`OnRequestHook`](../../../type-aliases/OnRequestHook.md);
`send`: [`OnSendHook`](../../../type-aliases/OnSendHook.md);
`timeout`: [`OnTimeoutHook`](../../../type-aliases/OnTimeoutHook.md);
`transform`: [`OnTransformHook`](../../../type-aliases/OnTransformHook.md);
}>

## Returns

[`PluginSync`](../../../interfaces/PluginSync.md)<`S`>
