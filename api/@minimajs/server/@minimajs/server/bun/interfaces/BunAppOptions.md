---
url: /api/@minimajs/server/@minimajs/server/bun/interfaces/BunAppOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/bun](../README.md) / BunAppOptions

# Interface: BunAppOptions\<T>

Defined in: [packages/server/src/bun/index.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/bun/index.ts#L34)

Configuration options for creating a Bun-based Minima.js application.

## Extends

* [`CreateBaseSeverOptions`](../../core/interfaces/CreateBaseSeverOptions.md)

## Type Parameters

### T

`T`

Type for additional server context data

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
optional server: BunServeOptions<T>;
```

Defined in: [packages/server/src/bun/index.ts:39](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/bun/index.ts#L39)

Bun-specific server configuration options.
These options are passed directly to Bun.serve().
