---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/defer.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / defer

# Function: defer()

```ts
function defer(cb): void;
```

Defined in: [packages/server/src/plugins/deferrer/index.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/deferrer/index.ts#L33)

Registers a callback to execute after the response.
Useful for cleanup tasks, logging, or post-response processing.

## Parameters

### cb

[`DeferCallback`](../type-aliases/DeferCallback.md)

The callback function to execute after response

## Returns

`void`

## Example

```typescript
import { defer } from '@minimajs/server';

app.get('/user/:id', async (req) => {
  const user = await getUser(params.get('id'));

  defer(() => {
    console.log('Response send, logging metrics...');
    logMetrics('user-fetched', { userId: user.id });
  });

  return user;
});
```
