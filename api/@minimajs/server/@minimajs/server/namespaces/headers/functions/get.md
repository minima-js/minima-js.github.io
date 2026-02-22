---
url: /api/@minimajs/server/@minimajs/server/namespaces/headers/functions/get.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [headers](../README.md) / get

# Function: get()

## Call Signature

```ts
function get(name): string | undefined;
```

Defined in: [packages/server/src/http.ts:466](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L466)

Retrieves a single header value by name with optional transformation.
Throws ValidationError if the header is not found.

### Parameters

#### name

[`HttpHeaderIncoming`](../../../type-aliases/HttpHeaderIncoming.md)

The header name to retrieve

### Returns

`string` | `undefined`

### Example

```ts
const auth = headers.get('authorization');                              // string
const token = headers.get('authorization', (val) => val.split(' ')[1]); // string
```

## Call Signature

```ts
function get<R>(name, transform): R | undefined;
```

Defined in: [packages/server/src/http.ts:467](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L467)

Retrieves a single header value by name with optional transformation.
Throws ValidationError if the header is not found.

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

`R` | `undefined`

### Example

```ts
const auth = headers.get('authorization');                              // string
const token = headers.get('authorization', (val) => val.split(' ')[1]); // string
```
