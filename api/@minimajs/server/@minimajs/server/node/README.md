---
url: /api/@minimajs/server/@minimajs/server/node/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/node

# @minimajs/server/node

Node.js runtime server adapter for Minima.js.

This module provides the main entry point for creating Minima.js applications
that run on Node.js runtime. It wraps the base server functionality with
Node.js-specific HTTP/HTTPS server adapter.

## Example

```typescript
import { createApp } from '@minimajs/server/node';

const app = createApp();

app.get('/hello', () => {
  return { message: 'Hello from Node.js!' };
});

app.listen({ port: 3000 });
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [NodeAppOptions](interfaces/NodeAppOptions.md) | Configuration options for creating a Node.js-based Minima.js application. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [NodeServerOptions](type-aliases/NodeServerOptions.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createApp](functions/createApp.md) | Creates a new Minima.js application for Node.js runtime. |
