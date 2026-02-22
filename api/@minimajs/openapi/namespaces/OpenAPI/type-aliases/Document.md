---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/Document.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / Document

# Type Alias: Document\<T>

```ts
type Document<T> = Modify<Omit<OpenAPIV3.Document<T>, "paths" | "components">, {
  info: InfoObject;
  jsonSchemaDialect?: string;
  servers?: ServerObject[];
} & 
  | Pick<PathsWebhooksComponents<T>, "paths"> & Omit<Partial<PathsWebhooksComponents<T>>, "paths">
  | Pick<PathsWebhooksComponents<T>, "webhooks"> & Omit<Partial<PathsWebhooksComponents<T>>, "webhooks">
| Pick<PathsWebhooksComponents<T>, "components"> & Omit<Partial<PathsWebhooksComponents<T>>, "components">>;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:20

## Type Parameters

### T

`T` *extends* {
} = {
}
