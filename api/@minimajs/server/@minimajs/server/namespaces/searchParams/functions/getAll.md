---
url: >-
  /api/@minimajs/server/@minimajs/server/namespaces/searchParams/functions/getAll.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [searchParams](../README.md) / getAll

# Function: getAll()

## Call Signature

```ts
function getAll(name): string[];
```

Defined in: [packages/server/src/http.ts:638](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L638)

Retrieves all values for a search param by name with optional transformation.
Returns an empty array if the param is not found.

### Parameters

#### name

`string`

The query parameter name to retrieve

### Returns

`string`\[]

### Example

```ts
const tags = searchParams.getAll('tag');                           // string[]
const tagIds = searchParams.getAll('tag', (val) => parseInt(val)); // number[]
```

## Call Signature

```ts
function getAll<R>(name, transform): R[];
```

Defined in: [packages/server/src/http.ts:639](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L639)

Retrieves all values for a search param by name with optional transformation.
Returns an empty array if the param is not found.

### Type Parameters

#### R

`R`

### Parameters

#### name

`string`

The query parameter name to retrieve

#### transform

(`value`) => `R`

### Returns

`R`\[]

### Example

```ts
const tags = searchParams.getAll('tag');                           // string[]
const tagIds = searchParams.getAll('tag', (val) => parseInt(val)); // number[]
```
