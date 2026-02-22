---
url: /api/@minimajs/server/@minimajs/server/logger/functions/createLogger.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/logger](../README.md) / createLogger

# Function: createLogger()

```ts
function createLogger(option): Logger<never, boolean>;
```

Defined in: [packages/server/src/logger.ts:77](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/logger.ts#L77)

Creates a Pino logger instance with merged default options and mixin support.
Combines default logger options with user-provided options and adds module name context.

## Parameters

### option

`LoggerOptions` = `{}`

## Returns

`Logger`<`never`, `boolean`>
