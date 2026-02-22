---
url: /api/@minimajs/server/@minimajs/server/functions/compose.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / compose

# Function: compose()

```ts
function compose<S, T>(...plugins): Plugin<S, T>;
```

Defined in: [packages/server/src/compose.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/compose.ts#L34)

Composes multiple plugins/modules into a single plugin that registers all of them sequentially.

## Type Parameters

### S

`S`

### T

`T` *extends* {
`name?`: `string`;
} = {
`name?`: `string`;
}

## Parameters

### plugins

...[`Registerable`](../type-aliases/Registerable.md)<`S`>\[]

Array of plugins or modules to compose

## Returns

[`Plugin`](../interfaces/Plugin.md)<`S`, `T`>

A single plugin that registers all provided plugins in order

## Examples

```typescript
const dbPlugin = compose(
  hook("ready", async () => await db.connect()),
  hook("close", async () => await db.close())
);

app.register(dbPlugin);
```

```typescript
// Compose multiple feature modules
const apiModule = compose(
  authModule,
  usersModule,
  postsModule
);

app.register(apiModule);
```
