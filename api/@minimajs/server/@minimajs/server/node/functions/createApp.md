---
url: /api/@minimajs/server/@minimajs/server/node/functions/createApp.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/node](../README.md) / createApp

# Function: createApp()

```ts
function createApp(options): Server<Server<typeof IncomingMessage, typeof ServerResponse>>;
```

Defined in: [packages/server/src/node/index.ts:58](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/node/index.ts#L58)

Creates a new Minima.js application for Node.js runtime.

## Parameters

### options

[`NodeAppOptions`](../interfaces/NodeAppOptions.md) = `{}`

Configuration options for the application

## Returns

[`Server`](../../classes/Server.md)<`Server`<*typeof* `IncomingMessage`, *typeof* `ServerResponse`>>

A configured Minima.js application instance

## Example

```typescript
import { createApp } from '@minimajs/server/node';

const app = createApp();
app.get('/api/users', () => [{ id: 1, name: 'John' }]);
app.listen({ port: 3000 });
```
