---
url: >-
  /api/@minimajs/server/@minimajs/server/plugins/interfaces/RouteLoggerOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / RouteLoggerOptions

# Interface: RouteLoggerOptions

Defined in: [packages/server/src/plugins/router/index.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/router/index.ts#L6)

## Properties

### commonPrefix?

```ts
optional commonPrefix: boolean;
```

Defined in: [packages/server/src/plugins/router/index.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/router/index.ts#L11)

Whether to print routes with common prefix removed for cleaner output. Defaults to false

***

### delay?

```ts
optional delay: number;
```

Defined in: [packages/server/src/plugins/router/index.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/router/index.ts#L12)

***

### enabled?

```ts
optional enabled: boolean;
```

Defined in: [packages/server/src/plugins/router/index.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/router/index.ts#L7)

***

### logger()?

```ts
optional logger: (message) => void;
```

Defined in: [packages/server/src/plugins/router/index.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/router/index.ts#L9)

Custom logger function to output routes. Defaults to console.log with magenta color

#### Parameters

##### message

`string`

#### Returns

`void`
