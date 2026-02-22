---
url: /api/@minimajs/server/@minimajs/server/functions/hook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / hook

# Function: hook()

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:26](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L26)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"request"`

#### callback

[`OnRequestHook`](../type-aliases/OnRequestHook.md)<`S`>

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:27](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L27)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"transform"`

#### callback

[`OnTransformHook`](../type-aliases/OnTransformHook.md)<`S`>

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:28](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L28)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"send"`

#### callback

[`OnSendHook`](../type-aliases/OnSendHook.md)<`S`>

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:29](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L29)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"error"`

#### callback

[`OnErrorHook`](../type-aliases/OnErrorHook.md)<`S`>

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:30](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L30)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"timeout"`

#### callback

[`OnTimeoutHook`](../type-aliases/OnTimeoutHook.md)<`S`>

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L31)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"close"`

#### callback

[`OnCloseHook`](../type-aliases/OnCloseHook.md)

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L32)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"listen"`

#### callback

[`OnListenHook`](../type-aliases/OnListenHook.md)

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L33)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"ready"`

#### callback

[`OnReadyHook`](../type-aliases/OnReadyHook.md)<`S`>

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

## Call Signature

```ts
function hook<S>(name, callback): PluginSync<S>;
```

Defined in: [packages/server/src/hooks/index.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/index.ts#L34)

Creates a plugin that registers a lifecycle hook

### Type Parameters

#### S

`S`

### Parameters

#### name

`"register"`

#### callback

[`OnRegisterHook`](../type-aliases/OnRegisterHook.md)

### Returns

[`PluginSync`](../interfaces/PluginSync.md)<`S`>
