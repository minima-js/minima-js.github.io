---
url: /api/@minimajs/server/@minimajs/server/core/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/core

# @minimajs/server/core

Core server implementation internals.

This module exposes the internal Server class and related utilities.
Most users should use the App interface through createApp() instead.

## Example

```typescript
import { Server } from '@minimajs/server/core';

// Advanced usage - most users don't need this
const server = new Server(adapter, options);
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [CreateBaseSeverOptions](interfaces/CreateBaseSeverOptions.md) | Configuration options for creating a base server instance. |

## Functions

| Function | Description |
| ------ | ------ |
| [createBaseServer](functions/createBaseServer.md) | Creates a Minima.js application instance using a custom runtime adapter. |

## References

### Server

Re-exports [Server](../classes/Server.md)

***

### ServerOptions

Re-exports [ServerOptions](../interfaces/ServerOptions.md)
