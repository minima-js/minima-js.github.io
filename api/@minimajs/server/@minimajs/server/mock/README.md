---
url: /api/@minimajs/server/@minimajs/server/mock/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/mock

# @minimajs/server/mock

@minimajs/server/mock - Testing utilities

Provides lightweight utilities for creating mock requests in tests.
For full integration tests, use `app.handle()` directly.

## Example

```typescript
import { createRequest } from '@minimajs/server/mock';

// Create a mock request
const request = createRequest('/users', { method: 'POST', body: { name: 'John' } });

// Use with app.handle
const response = await app.handle(request);
expect(response.status).toBe(200);
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [MockContextOptions](interfaces/MockContextOptions.md) | Creates a mock Request object for testing. |
| [MockRequestOptions](interfaces/MockRequestOptions.md) | Creates a mock Request object for testing. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [MockContextCallback](type-aliases/MockContextCallback.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createRequest](functions/createRequest.md) | - |
| [mockContext](functions/mockContext.md) | Creates a mock context for testing context-based functions. This allows you to test route handlers and context functions in isolation. |
