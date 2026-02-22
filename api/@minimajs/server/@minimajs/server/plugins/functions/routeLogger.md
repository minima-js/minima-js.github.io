---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/routeLogger.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / routeLogger

# Function: routeLogger()

```ts
function routeLogger(options): PluginSync<unknown>;
```

Defined in: [packages/server/src/plugins/router/index.ts:44](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/router/index.ts#L44)

Displays a formatted tree of all routes with their HTTP methods and paths.
Useful for debugging and understanding the application's route structure during development.

## Parameters

### options

[`RouteLoggerOptions`](../interfaces/RouteLoggerOptions.md) = `{}`

Configuration options for route logging

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<`unknown`>

## Example

```typescript
import { createApp } from "@minimajs/server";
import { routeLogger } from "@minimajs/server/plugins";

const app = createApp();

// With default settings
app.register(routeLogger());

// With custom logger
app.register(routeLogger({
  logger: (routes) => console.log("Routes:\n", routes)
}));

// With common prefix removed
app.register(routeLogger({ commonPrefix: false  }));
```
