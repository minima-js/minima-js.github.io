---
url: >-
  /api/@minimajs/server/@minimajs/server/namespaces/searchParams/functions/get.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [searchParams](../README.md) / get

# Function: get()

## Call Signature

```ts
function get(name): string | undefined;
```

Defined in: [packages/server/src/http.ts:615](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L615)

Retrieves a single search param by name with optional transformation.
Throws ValidationError if the param is not found.

### Parameters

#### name

`string`

The query parameter name to retrieve

### Returns

`string` | `undefined`

### Example

```ts
const page = searchParams.get('page');                              // string
const pageNum = searchParams.get('page', (val) => parseInt(val));   // number
```

## Call Signature

```ts
function get<R>(name, transform): R;
```

Defined in: [packages/server/src/http.ts:616](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L616)

Retrieves a single search param by name with optional transformation.
Throws ValidationError if the param is not found.

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

`R`

### Example

```ts
const page = searchParams.get('page');                              // string
const pageNum = searchParams.get('page', (val) => parseInt(val));   // number
```
