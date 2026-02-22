---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/cors.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / cors

# Function: cors()

```ts
function cors(options): PluginSync<unknown>;
```

Defined in: [packages/server/src/plugins/cors/index.ts:138](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L138)

Creates a CORS plugin that handles Cross-Origin Resource Sharing.
Uses the send hook to set CORS headers on responses.

## Parameters

### options

[`CorsOptions`](../interfaces/CorsOptions.md) = `{}`

Configuration options for CORS

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<`unknown`>

A plugin that adds CORS support to the app

## Example

```typescript
import { cors } from '@minimajs/server/plugins';

// Allow all origins
app.register(cors());

// Custom configuration
app.register(cors({
  origin: 'https://example.com',
  credentials: true,
  methods: ['GET', 'POST'],
}));

// Dynamic origin validation
app.register(cors({
  origin: (origin) => {
    return origin.endsWith('.example.com');
  }
}));
```
