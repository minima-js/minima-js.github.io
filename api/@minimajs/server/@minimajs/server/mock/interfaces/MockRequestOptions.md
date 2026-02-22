---
url: /api/@minimajs/server/@minimajs/server/mock/interfaces/MockRequestOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/mock](../README.md) / MockRequestOptions

# Interface: MockRequestOptions

Defined in: [packages/server/src/mock/request.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L31)

Creates a mock Request object for testing.

## Example

```ts
// Simple GET request
const req = createRequest('/users');

// POST request with JSON body
const req = createRequest('/users', {
  method: 'POST',
  body: { name: 'John' }
});

// With query parameters
const req = createRequest('/users', {
  query: { page: '1', limit: '10' }
});

// With custom headers
const req = createRequest('/users', {
  headers: { 'authorization': 'Bearer token' }
});
```

## Since

v0.2.0

## Extended by

* [`MockContextOptions`](MockContextOptions.md)

## Properties

### body?

```ts
optional body: unknown;
```

Defined in: [packages/server/src/mock/request.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L34)

***

### headers?

```ts
optional headers: Record<string, string>;
```

Defined in: [packages/server/src/mock/request.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L33)

***

### method?

```ts
optional method: string;
```

Defined in: [packages/server/src/mock/request.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L32)

***

### query?

```ts
optional query: Record<string, string>;
```

Defined in: [packages/server/src/mock/request.ts:35](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L35)
