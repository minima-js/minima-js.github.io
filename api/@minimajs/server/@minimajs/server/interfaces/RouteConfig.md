---
url: /api/@minimajs/server/@minimajs/server/interfaces/RouteConfig.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / RouteConfig

# Interface: RouteConfig\<S>

Defined in: [packages/server/src/interfaces/route.ts:16](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L16)

## Extends

* `Omit`<[`Route`](Route.md)<`S`>, `"params"`>

## Type Parameters

### S

`S`

## Properties

### app

```ts
app: App<S>;
```

Defined in: [packages/server/src/interfaces/route.ts:17](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L17)

***

### handler

```ts
handler: Handler<S>;
```

Defined in: [packages/server/src/interfaces/route.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L11)

#### Inherited from

```ts
Omit.handler
```

***

### metadata

```ts
metadata: RouteMetadata;
```

Defined in: [packages/server/src/interfaces/route.ts:13](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L13)

#### Inherited from

```ts
Omit.metadata
```

***

### methods

```ts
methods: HTTPMethod[];
```

Defined in: [packages/server/src/interfaces/route.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L9)

#### Inherited from

```ts
Omit.methods
```

***

### path

```ts
path: string;
```

Defined in: [packages/server/src/interfaces/route.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L12)

#### Inherited from

```ts
Omit.path
```
