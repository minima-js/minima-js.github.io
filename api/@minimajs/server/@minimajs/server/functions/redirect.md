---
url: /api/@minimajs/server/@minimajs/server/functions/redirect.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / redirect

# Function: redirect()

```ts
function redirect(
   path, 
   isPermanent?, 
   options?): never;
```

Defined in: [packages/server/src/http.ts:98](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/http.ts#L98)

Redirects to the specified path.

## Parameters

### path

`string`

The URL path to redirect to

### isPermanent?

`boolean`

Whether the redirect is permanent (301) or temporary (302)

### options?

[`HttpErrorOptions`](../error/interfaces/HttpErrorOptions.md)

Optional error options including custom headers

## Returns

`never`

## Throws

## Example

```ts
redirect('/login');
redirect('/new-url', true); // permanent redirect
redirect('/login', false, { headers: { 'X-Reason': 'session-expired' } });
```

## Since

v0.2.0
