---
url: /api/@minimajs/server/@minimajs/server/namespaces/compose/functions/create.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [compose](../README.md) / create

# Function: create()

```ts
function create<S>(...plugins): (mod) => Registerable<S>;
```

Defined in: [packages/server/src/compose.ts:72](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/compose.ts#L72)

Creates a higher-order function that applies multiple plugins to a module.
This allows you to pre-configure a set of plugins and apply them to different modules.

## Type Parameters

### S

`S`

## Parameters

### plugins

...[`Registerable`](../../../type-aliases/Registerable.md)<`S`>\[]

Array of plugins to be applied

## Returns

A function that takes a module and returns a new module with all plugins applied

```ts
(mod): Registerable<S>;
```

### Parameters

#### mod

[`Registerable`](../../../type-aliases/Registerable.md)<`S`>

### Returns

[`Registerable`](../../../type-aliases/Registerable.md)<`S`>

## Example

```typescript
// Create a composer with common plugins
const withAuth = compose.create(
  authPlugin,
  loggingPlugin
);

// Apply to different modules
const usersModule = (app: App) => {
  app.get("/users", () => ({ users: [] }));
});

app.register(withAuth(usersModule));
```
