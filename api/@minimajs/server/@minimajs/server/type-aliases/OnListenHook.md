---
url: /api/@minimajs/server/@minimajs/server/type-aliases/OnListenHook.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / OnListenHook

# Type Alias: OnListenHook()\<S>

```ts
type OnListenHook<S> = (address, app) => void | Promise<void>;
```

Defined in: [packages/server/src/hooks/types.ts:17](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/hooks/types.ts#L17)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### address

[`AddressInfo`](../interfaces/AddressInfo.md)

### app

[`App`](../interfaces/App.md)<`S`>

## Returns

`void` | `Promise`<`void`>
