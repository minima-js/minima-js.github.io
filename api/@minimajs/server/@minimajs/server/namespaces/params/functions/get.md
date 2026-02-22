---
url: /api/@minimajs/server/@minimajs/server/namespaces/params/functions/get.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [params](../README.md) / get

# Function: get()

## Call Signature

```ts
function get(name): string;
```

Defined in: [packages/server/src/http.ts:388](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L388)

Retrieves a single param by name with optional transformation.
Throws NotFoundError if the param is not found.

### Parameters

#### name

`string`

### Returns

`string`

### Example

```ts
const id = params.get('id');                              // string
const page = params.get('page', (val) => parseInt(val));  // number
const age = params.get('age', (val) => {
  const num = parseInt(val);
  if (num < 0) throw new Error('must be positive');
  return num;
});                                                        // number
```

## Call Signature

```ts
function get<R>(name, transform): R;
```

Defined in: [packages/server/src/http.ts:389](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L389)

Retrieves a single param by name with optional transformation.
Throws NotFoundError if the param is not found.

### Type Parameters

#### R

`R`

### Parameters

#### name

`string`

#### transform

(`value`) => `R`

### Returns

`R`

### Example

```ts
const id = params.get('id');                              // string
const page = params.get('page', (val) => parseInt(val));  // number
const age = params.get('age', (val) => {
  const num = parseInt(val);
  if (num < 0) throw new Error('must be positive');
  return num;
});                                                        // number
```
