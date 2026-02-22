---
url: /api/@minimajs/schema/functions/createParams.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / createParams

# Function: createParams()

```ts
function createParams<T>(obj, option): SchemaValidator<$InferObjectOutput<{ -readonly [P in string | number | symbol]: T[P] }, {
}>>;
```

Defined in: [packages/schema/src/request.ts:30](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/request.ts#L30)

## Type Parameters

### T

`T` *extends* `Readonly`<{
\[`k`: `string`]: `$ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>;
}>

## Parameters

### obj

`T`

### option

[`ValidationOptions`](../validation/interfaces/ValidationOptions.md) = `{}`

## Returns

[`SchemaValidator`](../type-aliases/SchemaValidator.md)<`$InferObjectOutput`<{ -readonly \[P in string | number | symbol]: T\[P] }, {
}>>
