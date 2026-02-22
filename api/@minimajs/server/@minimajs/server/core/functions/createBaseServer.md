---
url: /api/@minimajs/server/@minimajs/server/core/functions/createBaseServer.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/core](../README.md) / createBaseServer

# Function: createBaseServer()

```ts
function createBaseServer<T>(server, options): Server<T>;
```

Defined in: [packages/server/src/core/index.ts:74](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L74)

Creates a Minima.js application instance using a custom runtime adapter.

This is the low-level factory used internally by `createApp` from both the
Bun and Node.js runtime packages. Use it directly when targeting a custom
runtime (e.g. Deno, uWebSockets.js) by providing your own `ServerAdapter`.

Registers the following built-in plugins automatically:

* `contextProvider` — sets up per-request `AsyncLocalStorage` context
* `deferrer` — enables post-response `defer()` callbacks
* `bodyParser` — parses `application/json` request bodies by default
* `routeLogger` — logs registered routes during startup
* `moduleDiscovery` — auto-discovers `module.ts` files (unless disabled)

## Type Parameters

### T

`T`

## Parameters

### server

[`ServerAdapter`](../../interfaces/ServerAdapter.md)<`T`>

### options

[`CreateBaseSeverOptions`](../interfaces/CreateBaseSeverOptions.md)

## Returns

[`Server`](../../classes/Server.md)<`T`>

## Example

```typescript
import { createBaseServer } from "@minimajs/server/core";
import { MyCustomAdapter } from "./my-adapter.js";

const app = createBaseServer(new MyCustomAdapter(), {
  prefix: "/api",
  logger: false,
});

app.get("/health", () => ({ status: "ok" }));
await app.listen({ port: 3000 });
```
