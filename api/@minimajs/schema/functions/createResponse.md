---
url: /api/@minimajs/schema/functions/createResponse.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / createResponse

# Function: createResponse()

## Call Signature

```ts
function createResponse<T>(schema, options?): SchemaType;
```

Defined in: [packages/schema/src/response.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/response.ts#L33)

Creates a response body schema descriptor for OpenAPI documentation.

Unlike request validators, this doesn't perform runtime validation -
it only attaches the schema to route metadata for documentation generation.

### Type Parameters

#### T

`T` *extends* `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>

### Parameters

#### schema

`T`

#### options?

##### name?

`string`

### Returns

[`SchemaType`](../type-aliases/SchemaType.md)

### Example

```typescript
import { schema, createBody, createResponse } from "@minimajs/schema";
import { z } from "zod";

const bodySchema = createBody(z.object({ name: z.string() }));

// Default status code (200)
const responseSchema = createResponse(z.object({ id: z.string(), name: z.string() }));

// Explicit status code
const createdSchema = createResponse(201, z.object({ id: z.string() }));
const errorSchema = createResponse(400, z.object({ error: z.string() }));

app.post('/users',
  schema(bodySchema, responseSchema, errorSchema),
  () => {
    const { name } = bodySchema();
    return { id: crypto.randomUUID(), name };
  }
);
```

## Call Signature

```ts
function createResponse<T>(
   statusCode, 
   schema, 
   options?): SchemaType;
```

Defined in: [packages/schema/src/response.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/response.ts#L34)

Creates a response body schema descriptor for OpenAPI documentation.

Unlike request validators, this doesn't perform runtime validation -
it only attaches the schema to route metadata for documentation generation.

### Type Parameters

#### T

`T` *extends* `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>

### Parameters

#### statusCode

`number`

#### schema

`T`

#### options?

##### name?

`string`

### Returns

[`SchemaType`](../type-aliases/SchemaType.md)

### Example

```typescript
import { schema, createBody, createResponse } from "@minimajs/schema";
import { z } from "zod";

const bodySchema = createBody(z.object({ name: z.string() }));

// Default status code (200)
const responseSchema = createResponse(z.object({ id: z.string(), name: z.string() }));

// Explicit status code
const createdSchema = createResponse(201, z.object({ id: z.string() }));
const errorSchema = createResponse(400, z.object({ error: z.string() }));

app.post('/users',
  schema(bodySchema, responseSchema, errorSchema),
  () => {
    const { name } = bodySchema();
    return { id: crypto.randomUUID(), name };
  }
);
```
