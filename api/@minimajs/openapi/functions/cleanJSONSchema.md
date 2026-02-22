---
url: /api/@minimajs/openapi/functions/cleanJSONSchema.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/openapi](../README.md) / cleanJSONSchema

# Function: cleanJSONSchema()

```ts
function cleanJSONSchema(schema): SchemaObject;
```

Defined in: [packages/openapi/src/schema-converter.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/openapi/src/schema-converter.ts#L7)

Cleans JSON Schema for OpenAPI compatibility.
Removes properties that are valid in JSON Schema but not in OpenAPI.

## Parameters

### schema

`unknown`

## Returns

[`SchemaObject`](../namespaces/OpenAPI/type-aliases/SchemaObject.md)
