---
url: /api/@minimajs/server/@minimajs/server/logger/functions/mixin.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/logger](../README.md) / mixin

# Function: mixin()

```ts
function mixin(data): Dict<unknown>;
```

Defined in: [packages/server/src/logger.ts:64](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/logger.ts#L64)

Mixin function for Pino logger that enriches log data with module name context.
Automatically adds the current module name to log entries if not already present.

## Parameters

### data

`Dict`<`unknown`>

## Returns

`Dict`<`unknown`>
