---
url: /api/@minimajs/server/@minimajs/server/namespaces/abort/functions/assert.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [abort](../README.md) / assert

# Function: assert()

```ts
function assert(error): asserts error is Error;
```

Defined in: [packages/server/src/http.ts:196](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L196)

Ensures an error is an aborted error.
If not, re-throws it.

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
  abort.assert(err);
  // handle abort errors only
}
```
