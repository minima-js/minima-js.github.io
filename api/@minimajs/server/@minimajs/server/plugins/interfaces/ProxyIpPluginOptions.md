---
url: >-
  /api/@minimajs/server/@minimajs/server/plugins/interfaces/ProxyIpPluginOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / ProxyIpPluginOptions

# Interface: ProxyIpPluginOptions\<S>

Defined in: [packages/server/src/plugins/proxy/types.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L31)

## Type Parameters

### S

`S`

## Properties

### ip?

```ts
optional ip: 
  | false
  | IpSettings
| IpExtractor<S>;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L33)

***

### trustProxies?

```ts
optional trustProxies: 
  | string[]
  | TrustProxyConfig<S>
  | (ctx) => boolean;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L32)
