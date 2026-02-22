---
url: /api/@minimajs/server/@minimajs/server/functions/body.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / body

# Function: body()

```ts
function body<T>(): T;
```

Defined in: [packages/server/src/http.ts:321](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L321)

Retrieves the request body.
Requires bodyParser plugin to be registered.

## Type Parameters

### T

`T` = `unknown`

## Returns

`T`

## Example

```ts
import { bodyParser } from '@minimajs/server/plugins/body-parser';
app.register(bodyParser());

app.post('/users', () => {
  const data = body<{ name: string }>();
  console.log(data.name);
  return { received: data };
});
```

## Since

v0.2.0
