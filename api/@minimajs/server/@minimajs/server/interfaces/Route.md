---
url: /api/@minimajs/server/@minimajs/server/interfaces/Route.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Route

# Interface: Route\<S>

Defined in: [packages/server/src/interfaces/route.ts:8](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L8)

## Type Parameters

### S

`S`

## Properties

### handler

```ts
handler: Handler<S>;
```

Defined in: [packages/server/src/interfaces/route.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L11)

***

### metadata

```ts
metadata: RouteMetadata;
```

Defined in: [packages/server/src/interfaces/route.ts:13](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L13)

***

### methods

```ts
methods: HTTPMethod[];
```

Defined in: [packages/server/src/interfaces/route.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L9)

***

### params

```ts
params: 
  | {
[key: string]: string | undefined;
}
  | undefined;
```

Defined in: [packages/server/src/interfaces/route.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L10)

***

### path

```ts
path: string;
```

Defined in: [packages/server/src/interfaces/route.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L12)
