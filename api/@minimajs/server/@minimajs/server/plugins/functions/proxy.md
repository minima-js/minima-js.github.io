---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/proxy.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / proxy

# Function: proxy()

```ts
function proxy<S>(options): PluginSync<S>;
```

Defined in: [packages/server/src/plugins/proxy/index.ts:69](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/proxy/index.ts#L69)

Proxy plugin that extracts client information from proxy headers.
Useful when your application is behind a reverse proxy or load balancer.

By default, the plugin collects IP, host, and proto metadata even when not behind
a trusted proxy. Disable individual features by setting them to false.

## Type Parameters

### S

`S`

## Parameters

### options

[`ProxyOptions`](../interfaces/ProxyOptions.md)<`S`> = `{}`

Configuration for extracting IP, protocol, and hostname

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<`S`>

A request hook that processes proxy headers

## Example

```ts
// Basic usage - auto-enables IP, host, and proto extraction
app.register(proxy({
  trustProxies: true
}));

// Disable specific features
app.register(proxy({
  trustProxies: true,
  ip: {},  // Custom settings
  host: false,  // Disable host extraction
  proto: false  // Disable proto extraction
}));

// Trust specific proxy IPs
app.register(proxy({
  trustProxies: ['127.0.0.1', '10.0.0.1'],
  ip: { proxyDepth: 2 },
  host: { stripPort: true }
}));

// Multiple header fallback for different cloud providers
app.register(proxy({
  trustProxies: true,
  proto: {
    header: ['x-forwarded-proto', 'cloudfront-forwarded-proto', 'x-arr-ssl']
  },
  host: {
    header: ['x-forwarded-host', 'x-original-host'],
    stripPort: true
  }
}));

// Custom trust validator
app.register(proxy({
  trustProxies: (ctx) => {
    const ip = ctx.incomingMessage?.socket?.remoteAddress;
    return ip?.startsWith('10.') || ip === '127.0.0.1';
  },
  ip: { proxyDepth: 2 }
}));

// Custom callbacks for complex scenarios
app.register(proxy({
  trustProxies: true,
  ip: (ctx) => ctx.request.headers.get('x-real-ip') || null,
  proto: (ctx) => ctx.request.headers.get('x-forwarded-proto') || 'https',
  host: (ctx) => ctx.request.headers.get('host') || 'example.com'
}));
```
