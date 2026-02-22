---
url: /api/@minimajs/server/@minimajs/server/functions/createContext.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / createContext

# Function: createContext()

```ts
function createContext<T>(value?): readonly [() => T, (val) => void];
```

Defined in: [packages/server/src/context.ts:30](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/context.ts#L30)

Creates a context for sharing data within a request's scope.

It enables sharing data within the request scope without the need to explicitly pass it around.

## Type Parameters

### T

`T`

## Parameters

### value?

The default value for the context.

`T` | () => `T`

## Returns

readonly \[() => `T`, (`val`) => `void`]

A tuple containing a getter and a setter for the context value.

## Example

```ts
import { createContext } from "@minimajs/server";

export interface User {
  name: string;
}

// default name is empty string
export const [getUser, setUser] = createContext<User>({ name: "" });
```

## Since

v0.1.0
