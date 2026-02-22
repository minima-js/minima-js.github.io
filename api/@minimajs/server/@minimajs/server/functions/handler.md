---
url: /api/@minimajs/server/@minimajs/server/functions/handler.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / handler

# Function: handler()

## Call Signature

```ts
function handler<S>(callback): Handler<S>;
```

Defined in: [packages/server/src/internal/route.ts:46](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/internal/route.ts#L46)

### Type Parameters

#### S

`S` = `any`

### Parameters

#### callback

[`Handler`](../type-aliases/Handler.md)<`S`>

### Returns

[`Handler`](../type-aliases/Handler.md)<`S`>

## Call Signature

```ts
function handler<S>(...args): Handler<S>;
```

Defined in: [packages/server/src/internal/route.ts:47](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/internal/route.ts#L47)

### Type Parameters

#### S

`S` = `any`

### Parameters

#### args

...\[`...descriptors: RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

### Returns

[`Handler`](../type-aliases/Handler.md)<`S`>
