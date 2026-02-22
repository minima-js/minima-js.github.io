---
url: /api/@minimajs/server/@minimajs/server/namespaces/headers/functions/append.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/server](../../../../../README.md) / [@minimajs/server](../../../README.md) / [headers](../README.md) / append

# Function: append()

```ts
function append(name, value): void;
```

Defined in: [packages/server/src/http.ts:565](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L565)

Appends a response header (useful for headers that can have multiple values like Set-Cookie).

## Parameters

### name

`string`

The header name to append

### value

`string`

The header value

## Returns

`void`

## Example

```ts
headers.append('Set-Cookie', 'sessionId=abc123');
headers.append('Set-Cookie', 'theme=dark');
```
