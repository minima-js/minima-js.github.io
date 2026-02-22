---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/express.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / express

# Function: express()

```ts
function express(callback): PluginSync<
  | Server<typeof IncomingMessage, typeof ServerResponse>
| Server<typeof IncomingMessage, typeof ServerResponse>>;
```

Defined in: [packages/server/src/plugins/express/index.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/express/index.ts#L34)

Integrates an Express-style middleware into the request lifecycle.

This function creates a plugin that registers a middleware compatible with
Express.js. The middleware function receives the incoming request and response
objects, along with a `next` callback to signal completion or pass errors.

## Parameters

### callback

[`ExpressCallback`](../type-aliases/ExpressCallback.md)

The Express-style middleware function

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<
| `Server`<*typeof* `IncomingMessage`, *typeof* `ServerResponse`>
| `Server`<*typeof* `IncomingMessage`, *typeof* `ServerResponse`>>

A plugin that adds the middleware to the request hook

## Example

```typescript
import { express } from '@minimajs/server/plugins/express';

const app = createApp();

// Use Express middleware (Only works with Node.js server)
app.register(
  express((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
  })
);
```
