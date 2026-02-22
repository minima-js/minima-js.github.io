---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/onError.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / onError

# Function: onError()

```ts
function onError(cb): void;
```

Defined in: [packages/server/src/plugins/deferrer/index.ts:58](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/deferrer/index.ts#L58)

Registers an error handling callback for the current request context.
Called when an error occurs during request processing.

## Parameters

### cb

[`ErrorCallback`](../type-aliases/ErrorCallback.md)

The callback function to execute when an error occurs

## Returns

`void`

## Example

```typescript
import { onError } from '@minimajs/server';

app.get('/data', async (req) => {
  onError((err) => {
    console.error('Request failed:', err);
    // Cleanup resources, log to monitoring, etc.
  });

  const data = await fetchData();
  return data;
});
```
