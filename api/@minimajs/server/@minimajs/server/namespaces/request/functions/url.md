---
url: /api/@minimajs/server/@minimajs/server/namespaces/request/functions/url.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [request](../README.md) / url

# Function: url()

```ts
function url(): URL;
```

Defined in: [packages/server/src/http.ts:253](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L253)

Retrieves the full request URL.

## Returns

`URL`

## Example

```ts
const url = request.url();
console.log(url.pathname);
```

## Since

v0.2.0
