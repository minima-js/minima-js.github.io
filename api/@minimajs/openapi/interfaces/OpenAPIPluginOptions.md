---
url: /api/@minimajs/openapi/interfaces/OpenAPIPluginOptions.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/openapi](../README.md) / OpenAPIPluginOptions

# Interface: OpenAPIPluginOptions

Defined in: [packages/openapi/src/index.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/openapi/src/index.ts#L12)

## Extends

* `Omit`<[`Document`](../namespaces/OpenAPI/type-aliases/Document.md), `"info"` | `"openapi"`>

## Properties

### components?

```ts
optional components: ComponentsObject;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:18

#### Inherited from

```ts
Omit.components
```

***

### externalDocs?

```ts
optional externalDocs: ExternalDocumentationObject;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:161

#### Inherited from

```ts
Omit.externalDocs
```

***

### info?

```ts
optional info: InfoObject;
```

Defined in: [packages/openapi/src/index.ts:14](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/openapi/src/index.ts#L14)

***

### jsonSchemaDialect?

```ts
optional jsonSchemaDialect: string;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:22

#### Inherited from

```ts
Omit.jsonSchemaDialect
```

***

### path?

```ts
optional path: string;
```

Defined in: [packages/openapi/src/index.ts:13](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/openapi/src/index.ts#L13)

***

### paths?

```ts
optional paths: PathsObject<{
}, {
}>;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:16

#### Inherited from

```ts
Omit.paths
```

***

### security?

```ts
optional security: SecurityRequirementObject[];
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:159

#### Inherited from

```ts
Omit.security
```

***

### servers?

```ts
optional servers: ServerObject[];
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:23

#### Inherited from

```ts
Omit.servers
```

***

### tags?

```ts
optional tags: TagObject[];
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:160

#### Inherited from

```ts
Omit.tags
```

***

### webhooks?

```ts
optional webhooks: Record<string, 
  | ReferenceObject
  | PathItemObject<{
}>>;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:17

#### Inherited from

```ts
Omit.webhooks
```

***

### x-express-openapi-additional-middleware?

```ts
optional x-express-openapi-additional-middleware: (
  | (request, response, next) => Promise<void>
  | (request, response, next) => void)[];
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:162

#### Inherited from

```ts
Omit.x-express-openapi-additional-middleware
```

***

### x-express-openapi-validation-strict?

```ts
optional x-express-openapi-validation-strict: boolean;
```

Defined in: node\_modules/.bun/openapi-types@12.1.3/node\_modules/openapi-types/dist/index.d.ts:163

#### Inherited from

```ts
Omit.x-express-openapi-validation-strict
```
