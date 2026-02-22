---
url: /api/@minimajs/schema/functions/createBodyAsync.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / createBodyAsync

# Function: createBodyAsync()

```ts
function createBodyAsync<T>(schema, option): SchemaValidator<Promise<output<T>>>;
```

Defined in: [packages/schema/src/request.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/request.ts#L10)

## Type Parameters

### T

`T` *extends* `ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>

## Parameters

### schema

`T`

### option

[`ValidationOptions`](../validation/interfaces/ValidationOptions.md) = `{}`

## Returns

[`SchemaValidator`](../type-aliases/SchemaValidator.md)<`Promise`<`output`<`T`>>>
