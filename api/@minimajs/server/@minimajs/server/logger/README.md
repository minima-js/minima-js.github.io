---
url: /api/@minimajs/server/@minimajs/server/logger/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/logger

# @minimajs/server/logger

Logging utilities

Provides logging utilities built on Pino with pretty printing support.
Includes context-aware logging with automatic module name enrichment.

## Example

```typescript
import { logger } from '@minimajs/server/logger';

const log = logger();
log.info('Request received');
log.error({ err }, 'Error occurred');
```

## Variables

| Variable | Description |
| ------ | ------ |
| [logger](variables/logger.md) | - |
| [loggerOptions](variables/loggerOptions.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createLogger](functions/createLogger.md) | Creates a Pino logger instance with merged default options and mixin support. Combines default logger options with user-provided options and adds module name context. |
| [mixin](functions/mixin.md) | Mixin function for Pino logger that enriches log data with module name context. Automatically adds the current module name to log entries if not already present. |
