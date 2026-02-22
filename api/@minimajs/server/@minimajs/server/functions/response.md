---
url: /api/@minimajs/server/@minimajs/server/functions/response.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / response

# Function: response()

```ts
function response(body, options): Response;
```

Defined in: [packages/server/src/http.ts:29](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L29)

Creates an HTTP response with serialized body, optional status code, and headers.

## Parameters

### body

[`ResponseBody`](../type-aliases/ResponseBody.md)

### options

[`ResponseOptions`](../interfaces/ResponseOptions.md) = `{}`

## Returns

`Response`

## Example

```ts
return response('Hello World');
return response(new Blob(['data']));
return response(stream, {
  status: 'CREATED',
  headers: { 'X-Custom': 'value' }
});
```

## Since

v0.2.0
