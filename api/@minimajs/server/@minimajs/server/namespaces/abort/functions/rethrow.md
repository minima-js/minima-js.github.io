---
url: /api/@minimajs/server/@minimajs/server/namespaces/abort/functions/rethrow.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [abort](../README.md) / rethrow

# Function: rethrow()

```ts
function rethrow(error): asserts error is Error;
```

Defined in: [packages/server/src/http.ts:161](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L161)

Ensures an error is not an aborted error.
If it is an aborted error, re-throws it.

## Parameters

### error

`unknown`

The error to check

## Returns

`asserts error is Error`

## Example

```ts
try {
  // some code
} catch (err) {
  abort.rethrow(err);
  // handle non-abort errors
}
```
