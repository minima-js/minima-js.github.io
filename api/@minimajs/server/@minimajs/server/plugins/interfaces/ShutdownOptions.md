---
url: /api/@minimajs/server/@minimajs/server/plugins/interfaces/ShutdownOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / ShutdownOptions

# Interface: ShutdownOptions

Defined in: [packages/server/src/plugins/shutdown/index.ts:5](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/shutdown/index.ts#L5)

## Properties

### signals?

```ts
optional signals: Signals[];
```

Defined in: [packages/server/src/plugins/shutdown/index.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/shutdown/index.ts#L7)

Array of signals to listen for (e.g., \['SIGINT', 'SIGTERM'])

***

### timeout?

```ts
optional timeout: number;
```

Defined in: [packages/server/src/plugins/shutdown/index.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/shutdown/index.ts#L9)

Timeout in milliseconds before forcing process exit. Defaults to 30000ms (30 seconds)
