---
url: /api/@minimajs/server/@minimajs/server/interfaces/ServerAdapter.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / ServerAdapter

# Interface: ServerAdapter\<T>

Defined in: [packages/server/src/interfaces/server.ts:83](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L83)

Adapter interface for different server implementations.
Abstracts the underlying server runtime (Bun, Node, Deno, etc).

## Example

```typescript
// Bun server adapter
const bunAdapter: ServerAdapter<BunServer> = {
  async listen(opts, handler) {
    const server = Bun.serve({
      port: opts.port,
      hostname: opts.host,
      fetch: handler
    });
    return { server, address: {...} };
  },
  async close(server) {
    server.stop();
  }
};
```

## Type Parameters

### T

`T`

The native server type (e.g., BunServer, http.Server)

## Methods

### close()

```ts
close(server): Promise<void>;
```

Defined in: [packages/server/src/interfaces/server.ts:101](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L101)

Stops the server and closes all connections.

#### Parameters

##### server

`T`

The native server instance to close

#### Returns

`Promise`<`void`>

Promise that resolves when server is closed

***

### listen()

```ts
listen(
   server, 
   opts, 
requestHandler): Promise<ListenResult<T>>;
```

Defined in: [packages/server/src/interfaces/server.ts:91](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L91)

Starts the server and begins listening for requests.

#### Parameters

##### server

[`Server`](../classes/Server.md)<`T`>

##### opts

[`ListenOptions`](ListenOptions.md)

Listening options (port, host)

##### requestHandler

[`RequestHandler`](../type-aliases/RequestHandler.md)<`T`>

Function to handle incoming requests

#### Returns

`Promise`<[`ListenResult`](ListenResult.md)<`T`>>

Promise resolving to server instance and address info

***

### remoteAddr()

```ts
remoteAddr(ctx): RemoteAddr | null;
```

Defined in: [packages/server/src/interfaces/server.ts:93](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L93)

#### Parameters

##### ctx

[`Context`](Context.md)<`T`>

#### Returns

[`RemoteAddr`](RemoteAddr.md) | `null`
