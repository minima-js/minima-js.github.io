---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/deferrer.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / deferrer

# Function: deferrer()

```ts
function deferrer(): PluginSync<unknown>;
```

Defined in: [packages/server/src/plugins/deferrer/index.ts:77](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/deferrer/index.ts#L77)

Creates a plugin that enables defer and onError functionality.
This plugin registers hooks to run deferred callbacks after response is sent
and error callbacks when an error occurs.

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<`unknown`>

A plugin that adds defer and onError functionality to the app

## Example

```typescript
import { minimaPlugin } from '@minimajs/server/plugins';

const app = createApp();
app.register(minimaPlugin());
```
