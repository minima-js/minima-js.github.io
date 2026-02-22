---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/OperationObject.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / OperationObject

# Type Alias: OperationObject\<T>

```ts
type OperationObject<T> = Modify<OpenAPIV3.OperationObject<T>, {
  callbacks?: Record<string, 
     | ReferenceObject
    | CallbackObject>;
  parameters?: (
     | ReferenceObject
    | ParameterObject)[];
  requestBody?:   | ReferenceObject
     | RequestBodyObject;
  responses?: ResponsesObject;
  servers?: ServerObject[];
}> & T;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:49

## Type Parameters

### T

`T` *extends* {
} = {
}
