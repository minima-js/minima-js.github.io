---
url: /api/@minimajs/schema/functions/createResponseHeaders.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / createResponseHeaders

# Function: createResponseHeaders()

## Call Signature

```ts
function createResponseHeaders<T>(obj, options?): SchemaType;
```

Defined in: [packages/schema/src/response.ts:87](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/response.ts#L87)

Creates a response headers schema descriptor for OpenAPI documentation.

Unlike request validators, this doesn't perform runtime validation -
it only attaches the schema to route metadata for documentation generation.

This allows you to document response headers independently from the response body,
enabling different status codes for headers and body schemas.

### Type Parameters

#### T

`T` *extends* `Readonly`<{
\[`k`: `string`]: `$ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>;
}>

### Parameters

#### obj

`T`

#### options?

##### name?

`string`

### Returns

[`SchemaType`](../type-aliases/SchemaType.md)

### Example

```typescript
import { schema, createBody, createResponse, createResponseHeaders } from "@minimajs/schema";
import { z } from "zod";

const bodySchema = createBody(z.object({ name: z.string() }));
const responseBodySchema = createResponse(z.object({ id: z.string(), name: z.string() }));
const responseHeadersSchema = createResponseHeaders({ 'x-custom': z.string() });

// Different status codes for body and headers
const createdBodySchema = createResponse(201, z.object({ id: z.string() }));
const unauthorizedHeadersSchema = createResponseHeaders(401, { 'www-authenticate': z.string() });

app.post('/users',
  schema(bodySchema, createdBodySchema, responseHeadersSchema, unauthorizedHeadersSchema),
  () => {
    const { name } = bodySchema();
    return { id: crypto.randomUUID(), name };
  }
);
```

## Call Signature

```ts
function createResponseHeaders<T>(
   statusCode, 
   obj, 
   options?): SchemaType;
```

Defined in: [packages/schema/src/response.ts:88](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/response.ts#L88)

Creates a response headers schema descriptor for OpenAPI documentation.

Unlike request validators, this doesn't perform runtime validation -
it only attaches the schema to route metadata for documentation generation.

This allows you to document response headers independently from the response body,
enabling different status codes for headers and body schemas.

### Type Parameters

#### T

`T` *extends* `Readonly`<{
\[`k`: `string`]: `$ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>;
}>

### Parameters

#### statusCode

`number`

#### obj

`T`

#### options?

##### name?

`string`

### Returns

[`SchemaType`](../type-aliases/SchemaType.md)

### Example

```typescript
import { schema, createBody, createResponse, createResponseHeaders } from "@minimajs/schema";
import { z } from "zod";

const bodySchema = createBody(z.object({ name: z.string() }));
const responseBodySchema = createResponse(z.object({ id: z.string(), name: z.string() }));
const responseHeadersSchema = createResponseHeaders({ 'x-custom': z.string() });

// Different status codes for body and headers
const createdBodySchema = createResponse(201, z.object({ id: z.string() }));
const unauthorizedHeadersSchema = createResponseHeaders(401, { 'www-authenticate': z.string() });

app.post('/users',
  schema(bodySchema, createdBodySchema, responseHeadersSchema, unauthorizedHeadersSchema),
  () => {
    const { name } = bodySchema();
    return { id: crypto.randomUUID(), name };
  }
);
```
