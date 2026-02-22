---
url: /api/@minimajs/server/@minimajs/server/functions/params.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / params

# Function: params()

```ts
function params<T>(): T;
```

Defined in: [packages/server/src/http.ts:360](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L360)

Retrieves the request params.

## Type Parameters

### T

`T` = [`Dict`](../type-aliases/Dict.md)<`string`>

## Returns

`T`

## Example

```ts
const p = params<{ id: string }>();
console.log(p.id);

// Or use params.get
const id = params.get('id');
```

## Since

v0.2.0
