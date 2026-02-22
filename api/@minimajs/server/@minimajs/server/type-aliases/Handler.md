---
url: /api/@minimajs/server/@minimajs/server/type-aliases/Handler.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Handler

# Type Alias: Handler\<S>

```ts
type Handler<S> = (ctx) => unknown & {
  [kHandlerDescriptor]?: RouteMetaDescriptor<S>[];
};
```

Defined in: [packages/server/src/interfaces/app.ts:84](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L84)

## Type Declaration

### \[kHandlerDescriptor]?

```ts
optional [kHandlerDescriptor]: RouteMetaDescriptor<S>[];
```

## Type Parameters

### S

`S` = `unknown`
