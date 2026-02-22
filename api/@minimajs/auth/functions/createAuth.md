---
url: /api/@minimajs/auth/functions/createAuth.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/auth](../README.md) / createAuth

# Function: createAuth()

## Call Signature

```ts
function createAuth<T, S>(callback, option): [PluginSync<S>, AuthResourceWithRequired<T>];
```

Defined in: [packages/auth/src/auth.ts:108](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/auth/src/auth.ts#L108)

Creates an authentication middleware plugin and resource accessor for Minima.js applications.

This function sets up authentication by creating a middleware plugin that executes your
authentication logic and a resource accessor function to retrieve the authenticated data
throughout your application.

### Type Parameters

#### T

`T`

The type of the authentication data (e.g., User object)

#### S

`S`

### Parameters

#### callback

[`AuthCallback`](../type-aliases/AuthCallback.md)<`T`>

An async or sync function that performs authentication logic.
Should return the authenticated data (e.g., user object) or throw
a BaseHttpError (like UnauthorizedError) if authentication fails.

#### option

Configuration options for authentication behavior:
\- `required: true` - Makes authentication mandatory. The resource accessor
will always return T (non-nullable). If authentication fails, all routes
protected by this plugin will automatically throw the authentication error.
\- If omitted, authentication is optional. The resource accessor returns
T | undefined, allowing routes to handle missing authentication gracefully.

##### required

`true`

### Returns

\[[`PluginSync`](../../server/@minimajs/server/interfaces/PluginSync.md)<`S`>, [`AuthResourceWithRequired`](../interfaces/AuthResourceWithRequired.md)<`T`>]

A tuple containing:

1. `plugin` - A middleware plugin to register with your app using `app.register(plugin)`
2. `resource` - A function to access the authenticated data:
   * When `required: true`: Returns T (non-nullable)
   * When optional: Returns T | undefined
   * Has a `.required()` method that always returns T or throws if auth failed

### Examples

```typescript
// Optional authentication
import { headers } from "@minimajs/server";
import { createAuth, UnauthorizedError } from "@minimajs/auth";

export const [plugin, getUser] = createAuth(async () => {
  const token = headers.get("x-user-token");
  const user = await User.findByToken(token);
  if (!user) {
    throw new UnauthorizedError("Invalid credentials");
  }
  return user;
});

// In your app
app.register(plugin);
app.get("/", () => {
  const user = getUser(); // User | undefined
  if (user) console.log(`Logged in as ${user.name}`);
});

// Create a guard for protected routes
function guard() {
  getUser.required(); // Throws if auth failed
}
app.register(interceptor([guard], protectedRoutes));
```

```typescript
// Required authentication (all routes protected by default)
export const [plugin, getUser] = createAuth(
  async () => {
    const token = headers.get("x-user-token");
    const user = await User.findByToken(token);
    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }
    return user;
  },
  { required: true }
);

// In your app
app.register(plugin); // All routes now require authentication
app.get("/profile", () => {
  const user = getUser(); // User (non-nullable)
  return { name: user.name }; // TypeScript knows user exists
});
```

## Call Signature

```ts
function createAuth<T, S>(callback): [PluginSync<S>, AuthResourceOptional<T>];
```

Defined in: [packages/auth/src/auth.ts:113](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/auth/src/auth.ts#L113)

Creates an authentication middleware plugin and resource accessor for Minima.js applications.

This function sets up authentication by creating a middleware plugin that executes your
authentication logic and a resource accessor function to retrieve the authenticated data
throughout your application.

### Type Parameters

#### T

`T`

The type of the authentication data (e.g., User object)

#### S

`S`

### Parameters

#### callback

[`AuthCallback`](../type-aliases/AuthCallback.md)<`T`>

An async or sync function that performs authentication logic.
Should return the authenticated data (e.g., user object) or throw
a BaseHttpError (like UnauthorizedError) if authentication fails.

### Returns

\[[`PluginSync`](../../server/@minimajs/server/interfaces/PluginSync.md)<`S`>, [`AuthResourceOptional`](../interfaces/AuthResourceOptional.md)<`T`>]

A tuple containing:

1. `plugin` - A middleware plugin to register with your app using `app.register(plugin)`
2. `resource` - A function to access the authenticated data:
   * When `required: true`: Returns T (non-nullable)
   * When optional: Returns T | undefined
   * Has a `.required()` method that always returns T or throws if auth failed

### Examples

```typescript
// Optional authentication
import { headers } from "@minimajs/server";
import { createAuth, UnauthorizedError } from "@minimajs/auth";

export const [plugin, getUser] = createAuth(async () => {
  const token = headers.get("x-user-token");
  const user = await User.findByToken(token);
  if (!user) {
    throw new UnauthorizedError("Invalid credentials");
  }
  return user;
});

// In your app
app.register(plugin);
app.get("/", () => {
  const user = getUser(); // User | undefined
  if (user) console.log(`Logged in as ${user.name}`);
});

// Create a guard for protected routes
function guard() {
  getUser.required(); // Throws if auth failed
}
app.register(interceptor([guard], protectedRoutes));
```

```typescript
// Required authentication (all routes protected by default)
export const [plugin, getUser] = createAuth(
  async () => {
    const token = headers.get("x-user-token");
    const user = await User.findByToken(token);
    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }
    return user;
  },
  { required: true }
);

// In your app
app.register(plugin); // All routes now require authentication
app.get("/profile", () => {
  const user = getUser(); // User (non-nullable)
  return { name: user.name }; // TypeScript knows user exists
});
```
