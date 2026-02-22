---
url: /api/@minimajs/server/@minimajs/server/type-aliases/RequestHandler.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / RequestHandler

# Type Alias: RequestHandler()\<S>

```ts
type RequestHandler<S> = (server, request, partial) => Promise<Response>;
```

Defined in: [packages/server/src/interfaces/server.ts:42](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L42)

Handler function that processes HTTP requests.
Takes a Web standard Request and returns a Web standard Response.

## Type Parameters

### S

`S`

## Parameters

### server

[`Server`](../classes/Server.md)<`S`>

### request

`Request`

### partial

[`RequestHandlerContext`](RequestHandlerContext.md)<`S`>

## Returns

`Promise`<`Response`>
