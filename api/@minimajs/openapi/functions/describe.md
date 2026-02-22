---
url: /api/@minimajs/openapi/functions/describe.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/openapi](../README.md) / describe

# Function: describe()

```ts
function describe<S>(options): RouteMetaDescriptor<S>;
```

Defined in: [packages/openapi/src/describe.ts:30](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/openapi/src/describe.ts#L30)

Adds OpenAPI operation metadata to a route.

## Type Parameters

### S

`S` = `any`

## Parameters

### options

[`OperationObject`](../namespaces/OpenAPI/type-aliases/OperationObject.md)

## Returns

[`RouteMetaDescriptor`](../../server/@minimajs/server/type-aliases/RouteMetaDescriptor.md)<`S`>

## Example

```typescript
import { describe } from "@minimajs/openapi";

app.get("/users", describe({ summary: "List all users", tags: ["Users"] }), () => {
  return getUsers();
});

app.post("/users", describe({
  summary: "Create a user",
  description: "Creates a new user account with the provided details.",
  tags: ["Users"],
  operationId: "createUser"
}), () => {
  return createUser();
});

app.get("/legacy", describe({ deprecated: true }), () => {
  return legacyEndpoint();
});
```
