---
url: /api/@minimajs/server/@minimajs/server/namespaces/abort/functions/notFound.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [abort](../README.md) / notFound

# Function: notFound()

```ts
function notFound(message?, options?): never;
```

Defined in: [packages/server/src/http.ts:142](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L142)

Aborts the request with a 404 Not Found error.

## Parameters

### message?

`string`

Optional error message

### options?

[`HttpErrorOptions`](../../../error/interfaces/HttpErrorOptions.md)

Optional error options including custom headers

## Returns

`never`

## Throws

## Example

```ts
abort.notFound();
abort.notFound('User not found');
abort.notFound('Resource not found', { headers: { 'X-Resource-Type': 'product' } });
```
