---
url: /api/@minimajs/schema/functions/createBody.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / createBody

# Function: createBody()

```ts
function createBody<T>(schema, option): SchemaValidator<output<T>>;
```

Defined in: [packages/schema/src/request.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/request.ts#L6)

## Type Parameters

### T

`T` *extends* `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>

## Parameters

### schema

`T`

### option

[`ValidationOptions`](../validation/interfaces/ValidationOptions.md) = `{}`

## Returns

[`SchemaValidator`](../type-aliases/SchemaValidator.md)<`output`<`T`>>
