---
url: /api/@minimajs/server/@minimajs/server/interfaces/App.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / App

# Interface: App\<S>

Defined in: [packages/server/src/interfaces/app.ts:13](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L13)

## Type Parameters

### S

`S` = `any`

## Properties

### $parent

```ts
readonly $parent: App<S> | null;
```

Defined in: [packages/server/src/interfaces/app.ts:20](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L20)

***

### $root

```ts
readonly $root: App<S>;
```

Defined in: [packages/server/src/interfaces/app.ts:18](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L18)

***

### container

```ts
readonly container: Container<S>;
```

Defined in: [packages/server/src/interfaces/app.ts:15](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L15)

***

### log

```ts
log: Logger;
```

Defined in: [packages/server/src/interfaces/app.ts:24](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L24)

***

### prefix

```ts
readonly prefix: string;
```

Defined in: [packages/server/src/interfaces/app.ts:22](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L22)

***

### router

```ts
readonly router: Instance<V1>;
```

Defined in: [packages/server/src/interfaces/app.ts:16](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L16)

***

### serialize

```ts
serialize: Serializer<S>;
```

Defined in: [packages/server/src/interfaces/app.ts:26](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L26)

***

### server?

```ts
optional server: S;
```

Defined in: [packages/server/src/interfaces/app.ts:14](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L14)

## Methods

### all()

#### Call Signature

```ts
all(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:49](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L49)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
all(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:50](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L50)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### close()

```ts
close(): Promise<void>;
```

Defined in: [packages/server/src/interfaces/app.ts:66](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L66)

#### Returns

`Promise`<`void`>

***

### delete()

#### Call Signature

```ts
delete(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:37](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L37)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
delete(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:38](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L38)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### get()

#### Call Signature

```ts
get(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:28](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L28)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
get(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:29](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L29)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### handle()

```ts
handle(request): Promise<Response>;
```

Defined in: [packages/server/src/interfaces/app.ts:62](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L62)

#### Parameters

##### request

`Request`

#### Returns

`Promise`<`Response`>

***

### head()

#### Call Signature

```ts
head(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:43](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L43)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
head(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:44](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L44)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### options()

#### Call Signature

```ts
options(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:46](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L46)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
options(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:47](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L47)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### patch()

#### Call Signature

```ts
patch(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:40](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L40)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
patch(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:41](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L41)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### post()

#### Call Signature

```ts
post(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L31)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
post(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L32)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### put()

#### Call Signature

```ts
put(path, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L34)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
put(path, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:35](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L35)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

***

### ready()

```ts
ready(): Promise<void>;
```

Defined in: [packages/server/src/interfaces/app.ts:64](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L64)

#### Returns

`Promise`<`void`>

***

### register()

#### Call Signature

```ts
register<T>(plugin, opts?): this;
```

Defined in: [packages/server/src/interfaces/app.ts:56](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L56)

##### Type Parameters

###### T

`T` *extends* {
`name?`: `string`;
}

##### Parameters

###### plugin

[`Plugin`](Plugin.md)<`S`, `T`>

###### opts?

`T`

##### Returns

`this`

#### Call Signature

```ts
register(sync): this;
```

Defined in: [packages/server/src/interfaces/app.ts:57](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L57)

##### Parameters

###### sync

[`PluginSync`](PluginSync.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
register<T>(module, opts?): this;
```

Defined in: [packages/server/src/interfaces/app.ts:58](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L58)

##### Type Parameters

###### T

`T` *extends* {
`name?`: `string`;
`prefix?`: `string`;
}

##### Parameters

###### module

[`Module`](Module.md)<`S`, `T`>

###### opts?

`T`

##### Returns

`this`

#### Call Signature

```ts
register(plugin, opts?): this;
```

Defined in: [packages/server/src/interfaces/app.ts:60](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L60)

##### Parameters

###### plugin

[`Registerable`](../type-aliases/Registerable.md)<`any`>

###### opts?

`any`

##### Returns

`this`

***

### route()

#### Call Signature

```ts
route(options, handler): this;
```

Defined in: [packages/server/src/interfaces/app.ts:52](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L52)

##### Parameters

###### options

[`RouteOptions`](RouteOptions.md)

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

#### Call Signature

```ts
route(options, ...args): this;
```

Defined in: [packages/server/src/interfaces/app.ts:53](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/app.ts#L53)

##### Parameters

###### options

[`RouteOptions`](RouteOptions.md)

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`
