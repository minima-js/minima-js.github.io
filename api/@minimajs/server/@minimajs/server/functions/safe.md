---
url: /api/@minimajs/server/@minimajs/server/functions/safe.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / safe

# Function: safe()

```ts
function safe<T, U>(cb): (...args) => T;
```

Defined in: [packages/server/src/context.ts:50](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/context.ts#L50)

## Type Parameters

### T

`T`

### U

`U` *extends* `unknown`\[]

## Parameters

### cb

(...`args`) => `T`

## Returns

```ts
(...args): T;
```

### Parameters

#### args

...`U`

### Returns

`T`
