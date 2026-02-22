---
url: /api/@minimajs/server/@minimajs/server/namespaces/headers/functions/set.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [headers](../README.md) / set

# Function: set()

## Call Signature

```ts
function set(name, value): void;
```

Defined in: [packages/server/src/http.ts:519](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L519)

Sets a single response header.

### Parameters

#### name

`string`

The header name to set

#### value

`string`

The header value

### Returns

`void`

### Example

```ts
headers.set('x-custom-header', 'value');
```

## Call Signature

```ts
function set(headers): void;
```

Defined in: [packages/server/src/http.ts:536](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L536)

Sets multiple response headers from a HeadersInit object.

### Parameters

#### headers

[`HeadersInit`](../../../type-aliases/HeadersInit.md)

Headers to set (object, array of tuples, or Headers instance)

### Returns

`void`

### Example

```ts
// Object
headers.set({ 'x-custom': 'value', 'x-another': 'value2' });

// Array of tuples
headers.set([['x-custom', 'value'], ['x-another', 'value2']]);

// Headers instance
headers.set(new Headers({ 'x-custom': 'value' }));
```

## Call Signature

```ts
function set(headers, value): void;
```

Defined in: [packages/server/src/http.ts:537](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L537)

Sets a single response header.

### Parameters

#### headers

`string`

#### value

`string`

The header value

### Returns

`void`

### Example

```ts
headers.set('x-custom-header', 'value');
```
