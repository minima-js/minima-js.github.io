---
url: /api/@minimajs/server/@minimajs/server/namespaces/headers/functions/getAll.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [headers](../README.md) / getAll

# Function: getAll()

## Call Signature

```ts
function getAll(name): string[];
```

Defined in: [packages/server/src/http.ts:488](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L488)

Retrieves all values for a header name with optional transformation.
Returns an empty array if the header is not found.

### Parameters

#### name

[`HttpHeaderIncoming`](../../../type-aliases/HttpHeaderIncoming.md)

The header name to retrieve

### Returns

`string`\[]

### Example

```ts
const cookies = headers.getAll('cookie');                        // string[]
const parsed = headers.getAll('cookie', (val) => val.split('=')); // string[][]
```

## Call Signature

```ts
function getAll<R>(name, transform): R[];
```

Defined in: [packages/server/src/http.ts:489](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L489)

Retrieves all values for a header name with optional transformation.
Returns an empty array if the header is not found.

### Type Parameters

#### R

`R`

### Parameters

#### name

[`HttpHeaderIncoming`](../../../type-aliases/HttpHeaderIncoming.md)

The header name to retrieve

#### transform

(`value`) => `R`

### Returns

`R`\[]

### Example

```ts
const cookies = headers.getAll('cookie');                        // string[]
const parsed = headers.getAll('cookie', (val) => val.split('=')); // string[][]
```
