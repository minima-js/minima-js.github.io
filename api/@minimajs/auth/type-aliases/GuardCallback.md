---
url: /api/@minimajs/auth/type-aliases/GuardCallback.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/auth](../README.md) / GuardCallback

# Type Alias: GuardCallback()\<T>

```ts
type GuardCallback<T> = (data?, error?) => Promise<boolean> | boolean;
```

Defined in: [packages/auth/src/auth.ts:15](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/auth/src/auth.ts#L15)

## Type Parameters

### T

`T`

## Parameters

### data?

`T`

### error?

[`BaseHttpError`](../../server/@minimajs/server/error/classes/BaseHttpError.md)

## Returns

`Promise`<`boolean`> | `boolean`
