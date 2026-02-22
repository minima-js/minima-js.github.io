---
url: /api/@minimajs/server/@minimajs/server/mock/interfaces/MockContextOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/mock](../README.md) / MockContextOptions

# Interface: MockContextOptions\<S>

Defined in: [packages/server/src/mock/context.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/context.ts#L9)

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

## Extends

* [`MockRequestOptions`](MockRequestOptions.md)

## Type Parameters

### S

`S`

## Properties

### body?

```ts
optional body: unknown;
```

Defined in: [packages/server/src/mock/request.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L34)

#### Inherited from

[`MockRequestOptions`](MockRequestOptions.md).[`body`](MockRequestOptions.md#body)

***

### context?

```ts
optional context: Partial<Omit<Context<S>, "$metadata">> & {
  $metadata?: Partial<ContextMetadata>;
};
```

Defined in: [packages/server/src/mock/context.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/context.ts#L12)

#### Type Declaration

##### $metadata?

```ts
optional $metadata: Partial<ContextMetadata>;
```

***

### headers?

```ts
optional headers: Record<string, string>;
```

Defined in: [packages/server/src/mock/request.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L33)

#### Inherited from

[`MockRequestOptions`](MockRequestOptions.md).[`headers`](MockRequestOptions.md#headers)

***

### method?

```ts
optional method: string;
```

Defined in: [packages/server/src/mock/request.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L32)

#### Inherited from

[`MockRequestOptions`](MockRequestOptions.md).[`method`](MockRequestOptions.md#method)

***

### params?

```ts
optional params: Record<string, string>;
```

Defined in: [packages/server/src/mock/context.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/context.ts#L11)

***

### query?

```ts
optional query: Record<string, string>;
```

Defined in: [packages/server/src/mock/request.ts:35](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/request.ts#L35)

#### Inherited from

[`MockRequestOptions`](MockRequestOptions.md).[`query`](MockRequestOptions.md#query)

***

### url?

```ts
optional url: string;
```

Defined in: [packages/server/src/mock/context.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/mock/context.ts#L10)
