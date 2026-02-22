---
url: /api/@minimajs/server/@minimajs/server/namespaces/response/functions/status.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [response](../README.md) / status

# Function: status()

```ts
function status(statusCode): void;
```

Defined in: [packages/server/src/http.ts:59](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L59)

Creates an empty response with the specified status code.

## Parameters

### statusCode

[`StatusCode`](../../../type-aliases/StatusCode.md)

The HTTP status code (number or StatusCodes key)

## Returns

`void`

## Example

```ts
return response.status(204); // No Content
return response.status('NO_CONTENT');
```

## Since

v0.2.0
