---
url: /api/@minimajs/schema/functions/schema.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / schema

# Function: schema()

```ts
function schema(...schemas): RouteMetaDescriptor;
```

Defined in: [packages/schema/src/schema.ts:69](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/schema.ts#L69)

Creates a route metadata descriptor that attaches JSON schemas to routes.

Converts Zod schemas to JSON Schema format and separates them into request
(body, headers, searchParams, params) and response schemas for OpenAPI documentation.

## Parameters

### schemas

...[`SchemaType`](../type-aliases/SchemaType.md)\[]

## Returns

[`RouteMetaDescriptor`](../../server/@minimajs/server/type-aliases/RouteMetaDescriptor.md)

## Example

```typescript
import { schema, createBody, createResponse } from "@minimajs/schema";
import { z } from "zod";

const bodySchema = createBody(z.object({ name: z.string() }));
const responseSchema = createResponse(z.object({ id: z.string(), name: z.string() }));
const errorSchema = createResponse(400, z.object({ error: z.string() }));

app.post('/users',
  schema(bodySchema, responseSchema, errorSchema),
  () => {
    const { name } = bodySchema();
    return { id: crypto.randomUUID(), name };
  }
);
```
