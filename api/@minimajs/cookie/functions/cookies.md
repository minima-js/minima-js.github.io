---
url: /api/@minimajs/cookie/functions/cookies.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/cookie](../README.md) / cookies

# Function: cookies()

```ts
function cookies<T>(): T;
```

Defined in: [index.ts:86](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/cookie/src/index.ts#L86)

Retrieves all cookies from the current request as a typed record.

## Type Parameters

### T

`T` = `Record`<`string`, `string`>

Type definition for the cookie object (defaults to `Record<string, string>`)

## Returns

`T`

All cookies as a typed record

## Example

```typescript
// Get all cookies (untyped)
const allCookies = cookies();
// Type: Record<string, string>

// Get all cookies with type safety
interface UserCookies {
  sessionId?: string;
  theme?: "light" | "dark";
}
const userCookies = cookies<UserCookies>();
// Type: UserCookies
```

## Since

1.0.0
