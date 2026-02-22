---
url: /api/@minimajs/server/@minimajs/server/functions/request.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / request

# Function: request()

```ts
function request(): Request;
```

Defined in: [packages/server/src/http.ts:232](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L232)

Retrieves the HTTP request object.

## Returns

`Request`

## Example

```ts
const req = request();
console.log(req.url);
```

## Since

v0.2.0
