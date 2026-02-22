---
url: /api/@minimajs/server/@minimajs/server/interfaces/ListenResult.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / ListenResult

# Interface: ListenResult\<T>

Defined in: [packages/server/src/interfaces/server.ts:52](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L52)

Result returned when a server starts listening.
Contains the native server instance and address information.

## Type Parameters

### T

`T`

## Properties

### address

```ts
address: AddressInfo;
```

Defined in: [packages/server/src/interfaces/server.ts:56](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L56)

Network address and binding information

***

### server

```ts
server: T;
```

Defined in: [packages/server/src/interfaces/server.ts:54](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L54)

The native server instance (e.g., Bun server, Node server)
