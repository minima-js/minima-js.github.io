---
url: /api/@minimajs/server/@minimajs/server/plugins/interfaces/ProxyOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / ProxyOptions

# Interface: ProxyOptions\<S>

Defined in: [packages/server/src/plugins/proxy/types.ts:24](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L24)

## Type Parameters

### S

`S`

## Properties

### host?

```ts
optional host: 
  | false
  | HostSettings
| HostExtractor<S>;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:28](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L28)

***

### ip?

```ts
optional ip: 
  | false
  | IpSettings
| IpExtractor<S>;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:26](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L26)

***

### proto?

```ts
optional proto: 
  | false
  | ProtoSettings
| ProtoExtractor<S>;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:27](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L27)

***

### trustProxies?

```ts
optional trustProxies: 
  | string[]
  | TrustProxyConfig<S>
  | (ctx) => boolean;
```

Defined in: [packages/server/src/plugins/proxy/types.ts:25](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/types.ts#L25)
