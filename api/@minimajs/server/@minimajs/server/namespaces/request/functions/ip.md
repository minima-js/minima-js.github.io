---
url: /api/@minimajs/server/@minimajs/server/namespaces/request/functions/ip.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [request](../README.md) / ip

# Function: ip()

```ts
function ip(): string | null;
```

Defined in: [packages/server/src/http.ts:283](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L283)

Retrieves the client IP address from the request.
Requires IP address configuration via request.ip.configure().

## Returns

`string` | `null`

The client IP address as a string

## Throws

Error if IP address plugin is not configured

## Example

```ts
import { request } from '@minimajs/server';

// Then use it in handlers
app.get('/api/info', () => {
  const clientIp = request.ip();
  return { ip: clientIp };
});
```
