---
url: /api/@minimajs/openapi/functions/internal.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/openapi](../README.md) / internal

# Function: internal()

```ts
function internal(isInternal): RouteMetaDescriptor;
```

Defined in: [packages/openapi/src/internal.ts:18](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/openapi/src/internal.ts#L18)

Marks a route as internal, excluding it from the OpenAPI spec.

## Parameters

### isInternal

`boolean` = `true`

## Returns

[`RouteMetaDescriptor`](../../server/@minimajs/server/type-aliases/RouteMetaDescriptor.md)

## Example

```typescript
import { internal } from "@minimajs/openapi";

// Health check - not part of public API
app.get("/health", internal(), () => "ok");

// Internal admin endpoint
app.get("/admin/metrics", internal(), () => getMetrics());
```
