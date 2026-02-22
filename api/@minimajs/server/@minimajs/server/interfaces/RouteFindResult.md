---
url: /api/@minimajs/server/@minimajs/server/interfaces/RouteFindResult.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / RouteFindResult

# Interface: RouteFindResult\<T>

Defined in: [packages/server/src/interfaces/route.ts:27](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L27)

## Extends

* `FindResult`<`any`>

## Type Parameters

### T

`T`

## Properties

### handler

```ts
handler: Handler<any>;
```

Defined in: node\_modules/.bun/find-my-way@9.4.0/node\_modules/find-my-way/index.d.ts:119

#### Inherited from

```ts
FindResult.handler
```

***

### params

```ts
params: {
[k: string]: string | undefined;
};
```

Defined in: node\_modules/.bun/find-my-way@9.4.0/node\_modules/find-my-way/index.d.ts:120

#### Index Signature

```ts
[k: string]: string | undefined
```

#### Inherited from

```ts
FindResult.params
```

***

### searchParams

```ts
searchParams: {
[k: string]: string;
};
```

Defined in: node\_modules/.bun/find-my-way@9.4.0/node\_modules/find-my-way/index.d.ts:122

#### Index Signature

```ts
[k: string]: string
```

#### Inherited from

```ts
FindResult.searchParams
```

***

### store

```ts
store: RouteConfig<T>;
```

Defined in: [packages/server/src/interfaces/route.ts:28](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/route.ts#L28)

#### Overrides

```ts
FindResult.store
```
