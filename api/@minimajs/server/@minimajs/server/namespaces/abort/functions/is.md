---
url: /api/@minimajs/server/@minimajs/server/namespaces/abort/functions/is.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [abort](../README.md) / is

# Function: is()

```ts
function is(error): error is BaseHttpError;
```

Defined in: [packages/server/src/http.ts:214](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L214)

Checks if a given error is an aborted error.

## Parameters

### error

`unknown`

The error to check

## Returns

`error is BaseHttpError`

True if the error is a BaseHttpError

## Example

```ts
if (abort.is(error)) {
  console.log('Request was aborted');
}
```
