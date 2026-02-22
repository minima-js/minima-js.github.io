---
url: /api/@minimajs/server/@minimajs/server/node/interfaces/NodeAppOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/node](../README.md) / NodeAppOptions

# Interface: NodeAppOptions

Defined in: [packages/server/src/node/index.ts:36](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/node/index.ts#L36)

Configuration options for creating a Node.js-based Minima.js application.

Extends the base server options with Node.js-specific server configuration.

## Extends

* [`CreateBaseSeverOptions`](../../core/interfaces/CreateBaseSeverOptions.md)

## Properties

### logger?

```ts
optional logger: false | Logger;
```

Defined in: [packages/server/src/core/index.ts:42](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L42)

Pino logger instance, or false to disable logging

#### Inherited from

[`CreateBaseSeverOptions`](../../core/interfaces/CreateBaseSeverOptions.md).[`logger`](../../core/interfaces/CreateBaseSeverOptions.md#logger)

***

### moduleDiscovery?

```ts
optional moduleDiscovery: 
  | false
  | ModuleDiscoveryOptions;
```

Defined in: [packages/server/src/core/index.ts:43](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L43)

#### Inherited from

[`CreateBaseSeverOptions`](../../core/interfaces/CreateBaseSeverOptions.md).[`moduleDiscovery`](../../core/interfaces/CreateBaseSeverOptions.md#modulediscovery)

***

### prefix?

```ts
optional prefix: string;
```

Defined in: [packages/server/src/core/index.ts:40](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L40)

URL prefix for all routes

#### Inherited from

[`CreateBaseSeverOptions`](../../core/interfaces/CreateBaseSeverOptions.md).[`prefix`](../../core/interfaces/CreateBaseSeverOptions.md#prefix)

***

### router?

```ts
optional router: Config<HTTPVersion>;
```

Defined in: [packages/server/src/core/index.ts:38](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/index.ts#L38)

Router configuration from find-my-way

#### Inherited from

[`CreateBaseSeverOptions`](../../core/interfaces/CreateBaseSeverOptions.md).[`router`](../../core/interfaces/CreateBaseSeverOptions.md#router)

***

### server?

```ts
optional server: NodeServerOptions;
```

Defined in: [packages/server/src/node/index.ts:40](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/node/index.ts#L40)

Node.js-specific server options including HTTP/HTTPS configuration
