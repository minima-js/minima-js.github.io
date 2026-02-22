---
url: /api/@minimajs/server/@minimajs/server/functions/headers.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / headers

# Function: headers()

```ts
function headers(): {
[k: string]: string;
};
```

Defined in: [packages/server/src/http.ts:446](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L446)

Retrieves the request headers.

## Returns

```ts
{
[k: string]: string;
}
```

## Example

```ts
const h = headers();
console.log(h['content-type']);

// Or use headers.get
const auth = headers.get('authorization');

// Or use headers.getAll for all values
const cookies = headers.getAll('cookie');

// Set a header
headers.set('x-custom', 'value');
```

## Since

v0.2.0
