---
url: /api/@minimajs/server/@minimajs/server/plugins/functions/descriptor.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / descriptor

# Function: descriptor()

```ts
function descriptor<T>(...meta): PluginSync<T>;
```

Defined in: [packages/server/src/plugins/descriptor/index.ts:40](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/descriptor/index.ts#L40)

Creates a plugin that adds metadata to all routes registered within its scope.

Route descriptors can be either:

* A tuple `[key, value]` to set a specific metadata entry
* A function that receives the route config and can modify metadata dynamically

## Type Parameters

### T

`T`

## Parameters

### meta

...[`RouteMetaDescriptor`](../../type-aliases/RouteMetaDescriptor.md)<`T`>\[]

One or more route metadata descriptors to apply to all routes in the module

## Returns

[`PluginSync`](../../interfaces/PluginSync.md)<`T`>

A plugin that registers the descriptors for route metadata

## Example

```typescript
// Single descriptor
app.register(descriptor([authTag, "required"]));

// Multiple descriptors
app.register(descriptor(
  [authTag, "required"],
  [rateLimitTag, { max: 100 }],
  describe({ tags: ["Users"] })
));

// Function descriptor for dynamic metadata
app.register(descriptor((route) => {
  route.metadata[kPath] = route.path;
}));

// In module meta.plugins
export const meta = {
  plugins: [
    descriptor([adminTag, true], describe({ tags: ["Admin"] })),
  ],
};
```
