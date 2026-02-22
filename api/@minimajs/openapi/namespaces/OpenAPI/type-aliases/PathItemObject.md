---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/PathItemObject.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / PathItemObject

# Type Alias: PathItemObject\<T>

```ts
type PathItemObject<T> = Modify<OpenAPIV3.PathItemObject<T>, {
  parameters?: (
     | ReferenceObject
    | ParameterObject)[];
  servers?: ServerObject[];
}> & { [method in HttpMethods]?: OperationObject<T> };
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:43

## Type Parameters

### T

`T` *extends* {
} = {
}
