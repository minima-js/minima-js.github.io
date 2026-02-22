---
url: /api/@minimajs/schema/type-aliases/SchemaType.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / SchemaType

# Type Alias: SchemaType

```ts
type SchemaType = {
  [kDataType]: SchemaDataTypes;
  [kSchema]: z.ZodType;
  [kSchemaName]?: string;
  [kStatusCode]?: number;
};
```

Defined in: [packages/schema/src/types.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/types.ts#L6)

## Properties

### \[kDataType]

```ts
[kDataType]: SchemaDataTypes;
```

Defined in: [packages/schema/src/types.ts:8](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/types.ts#L8)

***

### \[kSchema]

```ts
[kSchema]: z.ZodType;
```

Defined in: [packages/schema/src/types.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/types.ts#L7)

***

### \[kSchemaName]?

```ts
optional [kSchemaName]: string;
```

Defined in: [packages/schema/src/types.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/types.ts#L9)

***

### \[kStatusCode]?

```ts
optional [kStatusCode]: number;
```

Defined in: [packages/schema/src/types.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/types.ts#L10)
