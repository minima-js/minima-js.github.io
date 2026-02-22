---
url: /api/@minimajs/cookie/namespaces/cookies/functions/get.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/cookie](../../../README.md) / [cookies](../README.md) / get

# Function: get()

```ts
function get(name): string | undefined;
```

Defined in: [index.ts:114](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/cookie/src/index.ts#L114)

Retrieves a single cookie value by name.

## Parameters

### name

`string`

The cookie name

## Returns

`string` | `undefined`

The cookie value, or `undefined` if not found

## Example

```typescript
const theme = cookies.get("theme");
// theme is string | undefined

const userId = cookies.get("user-id");
if (!userId) {
  throw new Error("Not authenticated");
}
```

## Since

1.0.0
