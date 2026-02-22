---
url: /api/@minimajs/server/@minimajs/server/classes/Server.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Server

# Class: Server\<S>

Defined in: [packages/server/src/core/server.ts:24](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L24)

## Type Parameters

### S

`S`

## Implements

* [`App`](../interfaces/App.md)<`S`>

## Constructors

### Constructor

```ts
new Server<S>(adapter, opts): Server<S>;
```

Defined in: [packages/server/src/core/server.ts:41](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L41)

#### Parameters

##### adapter

[`ServerAdapter`](../interfaces/ServerAdapter.md)<`S`>

##### opts

[`ServerOptions`](../interfaces/ServerOptions.md)

#### Returns

`Server`<`S`>

## Properties

### $parent

```ts
$parent: App<S> | null = null;
```

Defined in: [packages/server/src/core/server.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L31)

#### Implementation of

[`App`](../interfaces/App.md).[`$parent`](../interfaces/App.md#parent)

***

### $root

```ts
$root: App<S>;
```

Defined in: [packages/server/src/core/server.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L33)

#### Implementation of

[`App`](../interfaces/App.md).[`$root`](../interfaces/App.md#root)

***

### adapter

```ts
readonly adapter: ServerAdapter<S>;
```

Defined in: [packages/server/src/core/server.ts:42](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L42)

***

### container

```ts
readonly container: Container<S>;
```

Defined in: [packages/server/src/core/server.ts:27](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L27)

#### Implementation of

[`App`](../interfaces/App.md).[`container`](../interfaces/App.md#container)

***

### log

```ts
log: Logger;
```

Defined in: [packages/server/src/core/server.ts:37](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L37)

#### Implementation of

[`App`](../interfaces/App.md).[`log`](../interfaces/App.md#log)

***

### prefix

```ts
prefix: string;
```

Defined in: [packages/server/src/core/server.ts:29](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L29)

#### Implementation of

[`App`](../interfaces/App.md).[`prefix`](../interfaces/App.md#prefix)

***

### router

```ts
readonly router: Instance<V1>;
```

Defined in: [packages/server/src/core/server.ts:26](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L26)

#### Implementation of

[`App`](../interfaces/App.md).[`router`](../interfaces/App.md#router)

***

### serialize

```ts
serialize: Serializer<S>;
```

Defined in: [packages/server/src/core/server.ts:39](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L39)

#### Implementation of

[`App`](../interfaces/App.md).[`serialize`](../interfaces/App.md#serialize)

***

### server?

```ts
optional server: S;
```

Defined in: [packages/server/src/core/server.ts:25](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L25)

#### Implementation of

[`App`](../interfaces/App.md).[`server`](../interfaces/App.md#server)

## Methods

### all()

#### Call Signature

```ts
all(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:95](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L95)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`all`](../interfaces/App.md#all)

#### Call Signature

```ts
all(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:96](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L96)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`all`](../interfaces/App.md#all)

***

### close()

```ts
close(): Promise<void>;
```

Defined in: [packages/server/src/core/server.ts:169](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L169)

#### Returns

`Promise`<`void`>

#### Implementation of

[`App`](../interfaces/App.md).[`close`](../interfaces/App.md#close)

***

### delete()

#### Call Signature

```ts
delete(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:71](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L71)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`delete`](../interfaces/App.md#delete)

#### Call Signature

```ts
delete(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:72](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L72)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`delete`](../interfaces/App.md#delete)

***

### get()

#### Call Signature

```ts
get(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:53](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L53)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`get`](../interfaces/App.md#get)

#### Call Signature

```ts
get(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:54](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L54)

##### Parameters

###### path

`string`

###### args

...\[`...descriptors: RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`get`](../interfaces/App.md#get)

***

### handle()

```ts
handle(request, ctx): Promise<Response>;
```

Defined in: [packages/server/src/core/server.ts:144](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L144)

#### Parameters

##### request

`Request`

##### ctx

[`RequestHandlerContext`](../type-aliases/RequestHandlerContext.md)<`S`> = `{}`

#### Returns

`Promise`<`Response`>

#### Implementation of

[`App`](../interfaces/App.md).[`handle`](../interfaces/App.md#handle)

***

### head()

#### Call Signature

```ts
head(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:83](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L83)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`head`](../interfaces/App.md#head)

#### Call Signature

```ts
head(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:84](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L84)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`head`](../interfaces/App.md#head)

***

### listen()

```ts
listen(opts): Promise<AddressInfo>;
```

Defined in: [packages/server/src/core/server.ts:156](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L156)

#### Parameters

##### opts

[`ListenOptions`](../interfaces/ListenOptions.md)

#### Returns

`Promise`<[`AddressInfo`](../interfaces/AddressInfo.md)>

***

### options()

#### Call Signature

```ts
options(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:89](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L89)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`options`](../interfaces/App.md#options)

#### Call Signature

```ts
options(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:90](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L90)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`options`](../interfaces/App.md#options)

***

### patch()

#### Call Signature

```ts
patch(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:77](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L77)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`patch`](../interfaces/App.md#patch)

#### Call Signature

```ts
patch(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:78](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L78)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`patch`](../interfaces/App.md#patch)

***

### post()

#### Call Signature

```ts
post(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:59](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L59)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`post`](../interfaces/App.md#post)

#### Call Signature

```ts
post(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:60](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L60)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`post`](../interfaces/App.md#post)

***

### put()

#### Call Signature

```ts
put(path, handler): this;
```

Defined in: [packages/server/src/core/server.ts:65](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L65)

##### Parameters

###### path

`string`

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`put`](../interfaces/App.md#put)

#### Call Signature

```ts
put(path, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:66](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L66)

##### Parameters

###### path

`string`

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`put`](../interfaces/App.md#put)

***

### ready()

```ts
ready(): Promise<void>;
```

Defined in: [packages/server/src/core/server.ts:150](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L150)

#### Returns

`Promise`<`void`>

#### Implementation of

[`App`](../interfaces/App.md).[`ready`](../interfaces/App.md#ready)

***

### register()

#### Call Signature

```ts
register<T>(plugin, opts?): this;
```

Defined in: [packages/server/src/core/server.ts:129](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L129)

##### Type Parameters

###### T

`T` *extends* {
`name?`: `string`;
}

##### Parameters

###### plugin

[`Plugin`](../interfaces/Plugin.md)<`S`, `T`>

###### opts?

`T`

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`register`](../interfaces/App.md#register)

#### Call Signature

```ts
register(plugin): this;
```

Defined in: [packages/server/src/core/server.ts:130](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L130)

##### Parameters

###### plugin

[`PluginSync`](../interfaces/PluginSync.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`register`](../interfaces/App.md#register)

#### Call Signature

```ts
register<T>(module, opts?): this;
```

Defined in: [packages/server/src/core/server.ts:131](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L131)

##### Type Parameters

###### T

`T` *extends* {
`name?`: `string`;
`prefix?`: `string`;
}

##### Parameters

###### module

[`Module`](../interfaces/Module.md)<`S`, `T`>

###### opts?

`T`

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`register`](../interfaces/App.md#register)

#### Call Signature

```ts
register(plugin, opts?): this;
```

Defined in: [packages/server/src/core/server.ts:133](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L133)

##### Parameters

###### plugin

[`Registerable`](../type-aliases/Registerable.md)<`any`>

###### opts?

`any`

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`register`](../interfaces/App.md#register)

***

### route()

#### Call Signature

```ts
route(options, handler): this;
```

Defined in: [packages/server/src/core/server.ts:103](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L103)

##### Parameters

###### options

[`RouteOptions`](../interfaces/RouteOptions.md)

###### handler

[`Handler`](../type-aliases/Handler.md)<`S`>

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`route`](../interfaces/App.md#route)

#### Call Signature

```ts
route(options, ...args): this;
```

Defined in: [packages/server/src/core/server.ts:104](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/core/server.ts#L104)

##### Parameters

###### options

[`RouteOptions`](../interfaces/RouteOptions.md)

###### args

...\[`...RouteMetaDescriptor<S>[]`, [`Handler`](../type-aliases/Handler.md)<`S`>]

##### Returns

`this`

##### Implementation of

[`App`](../interfaces/App.md).[`route`](../interfaces/App.md#route)
