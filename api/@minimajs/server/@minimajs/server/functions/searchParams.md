---
url: /api/@minimajs/server/@minimajs/server/functions/searchParams.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / searchParams

# Function: searchParams()

```ts
function searchParams<T>(): T;
```

Defined in: [packages/server/src/http.ts:589](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L589)

Retrieves the search params (query string).

## Type Parameters

### T

`T` *extends* `Record`<`string`, `string`>

## Returns

`T`

## Example

```ts
const query = searchParams<{ page: string }>();
console.log(query.page);

// Or use searchParams.get
const page = searchParams.get('page');
```

## Since

v0.2.0
