---
url: /api/@minimajs/server/@minimajs/server/type-aliases/Container.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Container

# Type Alias: Container\<S>

```ts
type Container<S> = {
[key: symbol]: unknown;
  [kAppDescriptor]: RouteMetaDescriptor<S>[];
  [kHooks]: HookStore;
  [kMiddlewares]: Set<Middleware<S>>;
  [kModulesChain]: App<S>[];
  $rootMiddleware: Middleware;
};
```

Defined in: [packages/server/src/interfaces/app.ts:72](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L72)

## Type Parameters

### S

`S` = `unknown`

## Indexable

```ts
[key: symbol]: unknown
```

## Properties

### \[kAppDescriptor]

```ts
[kAppDescriptor]: RouteMetaDescriptor<S>[];
```

Defined in: [packages/server/src/interfaces/app.ts:76](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L76)

***

### \[kHooks]

```ts
[kHooks]: HookStore;
```

Defined in: [packages/server/src/interfaces/app.ts:75](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L75)

***

### \[kMiddlewares]

```ts
[kMiddlewares]: Set<Middleware<S>>;
```

Defined in: [packages/server/src/interfaces/app.ts:74](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L74)

***

### \[kModulesChain]

```ts
[kModulesChain]: App<S>[];
```

Defined in: [packages/server/src/interfaces/app.ts:77](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L77)

***

### $rootMiddleware

```ts
$rootMiddleware: Middleware;
```

Defined in: [packages/server/src/interfaces/app.ts:73](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L73)
