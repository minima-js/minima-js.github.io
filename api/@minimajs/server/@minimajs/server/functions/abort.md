---
url: /api/@minimajs/server/@minimajs/server/functions/abort.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / abort

# Function: abort()

```ts
function abort<R>(
   response, 
   statusCode, 
   options?): never;
```

Defined in: [packages/server/src/http.ts:120](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L120)

Aborts the request with the given response and status code.

## Type Parameters

### R

`R`

## Parameters

### response

`R` = `...`

The error response message

### statusCode

[`StatusCode`](../type-aliases/StatusCode.md) = `400`

The HTTP status code (default: 400)

### options?

[`HttpErrorOptions`](../error/interfaces/HttpErrorOptions.md)

Optional error options including custom headers

## Returns

`never`

## Throws

## Example

```ts
abort('Unauthorized', 401);
abort('Bad Request');
abort('Rate limit exceeded', 429, { headers: { 'Retry-After': '60' } });

// Or use abort.notFound()
abort.notFound();
```

## Since

v0.2.0
