---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/shutdown.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / shutdown

# Function: shutdown()

```ts
function shutdown(options): PluginSync<unknown>;
```

Defined in: [packages/server/src/plugins/shutdown/index.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/shutdown/index.ts#L32)

Creates a plugin for graceful server shutdown.

Handles specified process signals by gracefully shutting down the server.
Calls app.close() which stops the server and runs close hooks.
Includes timeout protection to prevent hung shutdowns.

## Parameters

### options

[`ShutdownOptions`](../interfaces/ShutdownOptions.md) = `{}`

Configuration options for graceful shutdown

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<`unknown`>

A plugin that sets up graceful shutdown handlers

## Example

```typescript
import { gracefulShutdown } from '@minimajs/server/plugins';

app.register(gracefulShutdown());
```
