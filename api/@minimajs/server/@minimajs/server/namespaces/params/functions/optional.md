---
url: /api/@minimajs/server/@minimajs/server/namespaces/params/functions/optional.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [params](../README.md) / optional

# Function: optional()

## Call Signature

```ts
function optional(name): string | undefined;
```

Defined in: [packages/server/src/http.ts:411](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L411)

Retrieves a single param by name with optional transformation.
Returns undefined if the param is not found.

### Parameters

#### name

`string`

### Returns

`string` | `undefined`

### Example

```ts
const id = params.option('id');                              // string | undefined
const page = params.option('page', (val) => parseInt(val));  // number | undefined
```

## Call Signature

```ts
function optional<R>(name, transform): R | undefined;
```

Defined in: [packages/server/src/http.ts:412](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L412)

Retrieves a single param by name with optional transformation.
Returns undefined if the param is not found.

### Type Parameters

#### R

`R`

### Parameters

#### name

`string`

#### transform

(`value`) => `R`

### Returns

`R` | `undefined`

### Example

```ts
const id = params.option('id');                              // string | undefined
const page = params.option('page', (val) => parseInt(val));  // number | undefined
```
