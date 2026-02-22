---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/ResponseObject.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / ResponseObject

# Type Alias: ResponseObject

```ts
type ResponseObject = Modify<OpenAPIV3.ResponseObject, {
  content?: {
   [media: string]: MediaTypeObject;
  };
  headers?: {
   [header: string]: ReferenceObject | HeaderObject;
  };
  links?: {
   [link: string]: ReferenceObject | LinkObject;
  };
}>;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:116
