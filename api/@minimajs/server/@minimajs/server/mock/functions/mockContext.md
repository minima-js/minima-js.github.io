---
url: /api/@minimajs/server/@minimajs/server/mock/functions/mockContext.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/mock](../README.md) / mockContext

# Function: mockContext()

```ts
function mockContext<S, T>(callback, options): T;
```

Defined in: [packages/server/src/mock/context.ts:36](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/context.ts#L36)

Creates a mock context for testing context-based functions.
This allows you to test route handlers and context functions in isolation.

## Type Parameters

### S

`S`

### T

`T` = `void`

## Parameters

### callback

[`MockContextCallback`](../type-aliases/MockContextCallback.md)<`T`, `S`>

### options

[`MockContextOptions`](../interfaces/MockContextOptions.md)<`S`> = `{}`

## Returns

`T`

## Example

```ts
import { mockContext } from '@minimajs/server/mock';
import { body, params } from '@minimajs/server';

mockContext(() => {
  const user = body();
  expect(user.name).toBe("John");
}, { body: { name: "John" } });

mockContext(() => {
  const id = params().id;
  expect(id).toBe("123");
}, { url: '/users/123', params: { id: '123' } });
```

## Since

v0.2.0
