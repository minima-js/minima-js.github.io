---
url: /api/@minimajs/cookie/namespaces/cookies/functions/set.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/cookie](../../../README.md) / [cookies](../README.md) / set

# Function: set()

```ts
function set(
   name, 
   value, 
   options?): void;
```

Defined in: [index.ts:149](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/cookie/src/index.ts#L149)

Sets a cookie to be sent in the response.
The cookie value is immediately available for reading within the same request.

## Parameters

### name

`string`

The cookie name

### value

`string`

The cookie value

### options?

`SerializeOptions`

Cookie serialization options (path, domain, maxAge, etc.)

## Returns

`void`

## Example

```typescript
// Simple cookie
cookies.set("theme", "dark");

// Secure session cookie
cookies.set("sessionId", "abc123", {
  httpOnly: true,
  secure: true,
  maxAge: 3600, // 1 hour in seconds
  sameSite: "strict",
});

// Cookie with custom path
cookies.set("adminToken", "xyz789", {
  path: "/admin",
  httpOnly: true,
});
```

## See

[serialize options](https://github.com/jshttp/cookie#options-1|Cookie)

## Since

1.0.0
