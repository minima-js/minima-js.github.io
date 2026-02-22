---
url: >-
  /api/@minimajs/server/@minimajs/server/core/interfaces/CreateBaseSeverOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/core](../README.md) / CreateBaseSeverOptions

# Interface: CreateBaseSeverOptions

Defined in: [packages/server/src/core/index.ts:36](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L36)

Configuration options for creating a base server instance.

## Extended by

* [`BunAppOptions`](../../bun/interfaces/BunAppOptions.md)
* [`NodeAppOptions`](../../node/interfaces/NodeAppOptions.md)

## Properties

### logger?

```ts
optional logger: false | Logger;
```

Defined in: [packages/server/src/core/index.ts:42](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L42)

Pino logger instance, or false to disable logging

***

### moduleDiscovery?

```ts
optional moduleDiscovery: 
  | false
  | ModuleDiscoveryOptions;
```

Defined in: [packages/server/src/core/index.ts:43](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L43)

***

### prefix?

```ts
optional prefix: string;
```

Defined in: [packages/server/src/core/index.ts:40](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L40)

URL prefix for all routes

***

### router?

```ts
optional router: Config<HTTPVersion>;
```

Defined in: [packages/server/src/core/index.ts:38](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L38)

Router configuration from find-my-way
