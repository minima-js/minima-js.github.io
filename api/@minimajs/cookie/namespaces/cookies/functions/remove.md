---
url: /api/@minimajs/cookie/namespaces/cookies/functions/remove.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/cookie](../../../README.md) / [cookies](../README.md) / remove

# Function: remove()

```ts
function remove(name, options?): void;
```

Defined in: [index.ts:184](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/cookie/src/index.ts#L184)

Removes a cookie by setting its expiration to the past.
The cookie is immediately removed from the incoming cookies for the current request.

## Parameters

### name

`string`

The cookie name to remove

### options?

`SerializeOptions`

Cookie options (must match the path/domain of the original cookie)

## Returns

`void`

## Example

```typescript
// Remove a cookie
cookies.remove("sessionId");

// Remove a cookie with specific path/domain
cookies.remove("adminToken", {
  path: "/admin",
  domain: "example.com",
});
```

## Remarks

To successfully remove a cookie, the `path` and `domain` options must match
those used when the cookie was originally set. Browsers will only delete
cookies that match all attributes.

## Since

1.0.0
