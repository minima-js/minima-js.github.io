---
url: /api/@minimajs/server/@minimajs/server/plugins/interfaces/TrustProxyConfig.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / TrustProxyConfig

# Interface: TrustProxyConfig\<S>

Defined in: [packages/server/src/plugins/proxy/types.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L19)

## Type Parameters

### S

`S`

## Properties

### proxies?

```ts
optional proxies: string[];
```

Defined in: [packages/server/src/plugins/proxy/types.ts:20](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L20)

***

### validator()?

```ts
optional validator: (ctx, ip) => boolean;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:21](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L21)

#### Parameters

##### ctx

[`Context`](../../interfaces/Context.md)<`S`>

##### ip

`string` | `null`

#### Returns

`boolean`
