---
url: /api/@minimajs/schema/validation/functions/validatorAsync.md
---
[**Minima.js API**](../../../../README.md)

***

[Minima.js API](../../../../README.md) / [@minimajs/schema](../../README.md) / [validation](../README.md) / validatorAsync

# Function: validatorAsync()

```ts
function validatorAsync<T>(
   schema, 
   data, 
   type, 
option): SchemaValidator<Promise<output<T>>>;
```

Defined in: [packages/schema/src/validation.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/validation.ts#L31)

## Type Parameters

### T

`T` *extends* `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>

## Parameters

### schema

`T`

### data

`DataCallback`

### type

[`SchemaDataTypes`](../../type-aliases/SchemaDataTypes.md)

### option

[`ValidationOptions`](../interfaces/ValidationOptions.md)

## Returns

[`SchemaValidator`](../../type-aliases/SchemaValidator.md)<`Promise`<`output`<`T`>>>
