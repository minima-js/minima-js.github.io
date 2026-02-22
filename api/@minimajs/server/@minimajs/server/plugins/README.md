---
url: /api/@minimajs/server/@minimajs/server/plugins/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/plugins

# @minimajs/server/plugins

Built-in plugins for Minima.js framework.

Provides essential plugins for common web server functionality including
body parsing, CORS, routing, and graceful shutdown.

## Example

```typescript
import { bodyParser, cors, shutdown } from '@minimajs/server/plugins';

const app = createApp();

// Register plugins
app.register(bodyParser());
app.register(cors({ origin: 'https://example.com' }));
app.register(shutdown());
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [bodyParser](namespaces/bodyParser/README.md) | - |
| [proxy](namespaces/proxy/README.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BodyParserOptions](interfaces/BodyParserOptions.md) | Options for body parser plugin |
| [CorsOptions](interfaces/CorsOptions.md) | - |
| [HostSettings](interfaces/HostSettings.md) | - |
| [IpSettings](interfaces/IpSettings.md) | - |
| [ProtoSettings](interfaces/ProtoSettings.md) | - |
| [ProxyIpPluginOptions](interfaces/ProxyIpPluginOptions.md) | - |
| [ProxyOptions](interfaces/ProxyOptions.md) | - |
| [RouteLoggerOptions](interfaces/RouteLoggerOptions.md) | - |
| [ShutdownOptions](interfaces/ShutdownOptions.md) | - |
| [TrustProxyConfig](interfaces/TrustProxyConfig.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BodyParserType](type-aliases/BodyParserType.md) | - |
| [DeferCallback](type-aliases/DeferCallback.md) | - |
| [ErrorCallback](type-aliases/ErrorCallback.md) | - |
| [ExpressCallback](type-aliases/ExpressCallback.md) | - |
| [HostExtractor](type-aliases/HostExtractor.md) | - |
| [IpExtractor](type-aliases/IpExtractor.md) | - |
| [IpStrategy](type-aliases/IpStrategy.md) | - |
| [ProtoExtractor](type-aliases/ProtoExtractor.md) | - |
| [QuitHandler](type-aliases/QuitHandler.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [bodyParser](functions/bodyParser.md) | - |
| [contextProvider](functions/contextProvider.md) | - |
| [cors](functions/cors.md) | Creates a CORS plugin that handles Cross-Origin Resource Sharing. Uses the send hook to set CORS headers on responses. |
| [defer](functions/defer.md) | Registers a callback to execute after the response. Useful for cleanup tasks, logging, or post-response processing. |
| [deferrer](functions/deferrer.md) | Creates a plugin that enables defer and onError functionality. This plugin registers hooks to run deferred callbacks after response is sent and error callbacks when an error occurs. |
| [descriptor](functions/descriptor.md) | Creates a plugin that adds metadata to all routes registered within its scope. |
| [express](functions/express.md) | Integrates an Express-style middleware into the request lifecycle. |
| [moduleDiscovery](functions/moduleDiscovery.md) | Module discovery plugin Uses Node.js's built-in import caching for performance |
| [onError](functions/onError.md) | Registers an error handling callback for the current request context. Called when an error occurs during request processing. |
| [proxy](functions/proxy.md) | Proxy plugin that extracts client information from proxy headers. Useful when your application is behind a reverse proxy or load balancer. |
| [routeLogger](functions/routeLogger.md) | Displays a formatted tree of all routes with their HTTP methods and paths. Useful for debugging and understanding the application's route structure during development. |
| [shutdown](functions/shutdown.md) | Creates a plugin for graceful server shutdown. |
