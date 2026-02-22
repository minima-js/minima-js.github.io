---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/ComponentsObject.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / ComponentsObject

# Type Alias: ComponentsObject

```ts
type ComponentsObject = Modify<OpenAPIV3.ComponentsObject, {
  callbacks?: Record<string, 
     | ReferenceObject
    | CallbackObject>;
  examples?: Record<string, 
     | ReferenceObject
    | ExampleObject>;
  headers?: Record<string, 
     | ReferenceObject
    | HeaderObject>;
  links?: Record<string, ReferenceObject | LinkObject>;
  parameters?: Record<string, 
     | ReferenceObject
    | ParameterObject>;
  pathItems?: Record<string, 
     | ReferenceObject
    | PathItemObject>;
  requestBodies?: Record<string, 
     | ReferenceObject
    | RequestBodyObject>;
  responses?: Record<string, 
     | ReferenceObject
    | ResponseObject>;
  schemas?: Record<string, SchemaObject>;
  securitySchemes?: Record<string, 
     | ReferenceObject
    | SecuritySchemeObject>;
}>;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:132
