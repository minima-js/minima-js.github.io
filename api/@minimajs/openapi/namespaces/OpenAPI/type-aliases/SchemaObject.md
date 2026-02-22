---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/SchemaObject.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / SchemaObject

# Type Alias: SchemaObject

```ts
type SchemaObject = 
  | ArraySchemaObject
  | NonArraySchemaObject
  | MixedSchemaObject;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:67

There is no way to tell typescript to require items when type is either 'array' or array containing 'array' type
'items' will be always visible as optional
Casting schema object to ArraySchemaObject or NonArraySchemaObject will work fine
