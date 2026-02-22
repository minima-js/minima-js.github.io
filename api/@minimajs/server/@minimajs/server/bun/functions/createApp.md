---
url: /api/@minimajs/server/@minimajs/server/bun/functions/createApp.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/bun](../README.md) / createApp

# Function: createApp()

```ts
function createApp<T>(options): Server<Server<T>>;
```

Defined in: [packages/server/src/bun/index.ts:62](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/bun/index.ts#L62)

Creates a new Minima.js application using the Bun runtime adapter.

This is the primary factory function for initializing Minima.js applications
on Bun. It sets up the server with Bun-specific optimizations and returns
a configured application instance.

## Type Parameters

### T

`T` = `unknown`

Type for additional server context data

## Parameters

### options

[`BunAppOptions`](../interfaces/BunAppOptions.md)<`T`> = `{}`

Configuration options for the application

## Returns

[`Server`](../../classes/Server.md)<`Server`<`T`>>

A configured Minima.js server instance

## Example

```typescript
const app = createApp({
  server: {
    development: process.env.NODE_ENV !== 'production'
  }
});
```
