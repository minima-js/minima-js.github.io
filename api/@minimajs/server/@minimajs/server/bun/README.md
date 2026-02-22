---
url: /api/@minimajs/server/@minimajs/server/bun/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/bun

# @minimajs/server/bun

Bun runtime server adapter for Minima.js.

This module provides the main entry point for creating Minima.js applications
that run on the Bun runtime. It wraps the base server functionality with
Bun-specific server adapter.

## Example

```typescript
import { createApp } from '@minimajs/server/bun';

const app = createApp();

app.get('/hello', () => {
  return { message: 'Hello from Bun!' };
});
app.listen({ port: 1234 })
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BunAppOptions](interfaces/BunAppOptions.md) | Configuration options for creating a Bun-based Minima.js application. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BunServeOptions](type-aliases/BunServeOptions.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createApp](functions/createApp.md) | Creates a new Minima.js application using the Bun runtime adapter. |
