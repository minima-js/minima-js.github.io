---
url: /api/@minimajs/cookie/README.md
---
[**Minima.js API**](../../README.md)

***

[Minima.js API](../../README.md) / @minimajs/cookie

# @minimajs/cookie

@minimajs/cookie - Type-safe cookie management

## Example

```typescript
import { cookies } from "@minimajs/cookie";

// Get all cookies
const allCookies = cookies();

// Get a specific cookie
const theme = cookies.get("theme");

// Set a cookie
cookies.set("theme", "dark", { httpOnly: true });

// Remove a cookie
cookies.remove("theme");
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [cookies](namespaces/cookies/README.md) | Cookie management utilities |

## Functions

| Function | Description |
| ------ | ------ |
| [cookies](functions/cookies.md) | Retrieves all cookies from the current request as a typed record. |
