---
url: /api/@minimajs/server/@minimajs/server/symbols/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/symbols

# @minimajs/server/symbols

Symbols used throughout Minima.js framework.

Provides well-known symbols for internal framework operations and plugin metadata.
Using Symbol() allows cross-realm access and debugging.

## Example

```typescript
import { kPluginName, kPluginSync } from '@minimajs/server/symbols';

function myPlugin() {
  return {
    [kPluginName]: 'my-plugin',
    [kPluginSync]: true,
    // plugin implementation
  };
}
```

## Variables

| Variable | Description |
| ------ | ------ |
| [kBody](variables/kBody.md) | Symbol for request body storage in context. Used by body parser plugin to store parsed body. |
| [kBodySkip](variables/kBodySkip.md) | Symbol to mark requests that should skip body parsing. Used to opt-out of automatic body parsing for specific routes. |
| [kHandlerDescriptor](variables/kHandlerDescriptor.md) | - |
| [kHooks](variables/kHooks.md) | Symbol for accessing registered hooks. |
| [kIpAddr](variables/kIpAddr.md) | - |
| [kMiddlewares](variables/kMiddlewares.md) | - |
| [kModuleName](variables/kModuleName.md) | Symbol for plugin name metadata. Used to identify plugins for debugging and error messages. |
| [kModulesChain](variables/kModulesChain.md) | Symbol for maintaining module chain (root -> ... -> child) in container. |
| [kPlugin](variables/kPlugin.md) | Symbol to mark plugins that should skip context override. Used for plugins that need to maintain parent context. |
| [kPluginSync](variables/kPluginSync.md) | Symbol to mark synchronous plugins. Used for plugins that don't require async initialization. |
| [kRequestSchema](variables/kRequestSchema.md) | - |
| [kResponseSchema](variables/kResponseSchema.md) | - |
