---
url: /api/@minimajs/openapi/namespaces/OpenAPI/type-aliases/BaseSchemaObject.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/openapi](../../../README.md) / [OpenAPI](../README.md) / BaseSchemaObject

# Type Alias: BaseSchemaObject

```ts
type BaseSchemaObject = Modify<Omit<OpenAPIV3.BaseSchemaObject, "nullable">, {
  $schema?: string;
  additionalProperties?:   | boolean
     | ReferenceObject
     | SchemaObject;
  allOf?: (
     | ReferenceObject
    | SchemaObject)[];
  anyOf?: (
     | ReferenceObject
    | SchemaObject)[];
  const?: any;
  contentMediaType?: string;
  discriminator?: DiscriminatorObject;
  examples?: OpenAPIV3.BaseSchemaObject["example"][];
  exclusiveMaximum?: boolean | number;
  exclusiveMinimum?: boolean | number;
  externalDocs?: ExternalDocumentationObject;
  not?:   | ReferenceObject
     | SchemaObject;
  oneOf?: (
     | ReferenceObject
    | SchemaObject)[];
  properties?: {
   [name: string]: 
     | ReferenceObject
     | SchemaObject;
  };
  xml?: XMLObject;
}>;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:79
