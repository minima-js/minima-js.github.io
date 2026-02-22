---
url: /api/@minimajs/server/@minimajs/server/functions/controller.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / controller

# Function: controller()

```ts
function controller<T>(methods, controllers): Plugin<unknown, {
  name?: string;
}>;
```

Defined in: [packages/server/src/plugins/controller/index.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/controller/index.ts#L7)

## Type Parameters

### T

`T` *extends* `Record`<`string`, [`GenericCallback`](../type-aliases/GenericCallback.md)>

## Parameters

### methods

`T` | `Promise`<`T`>

### controllers

(
| `` `ACL ${string} ${Extract<keyof T, string>}` ``
| `` `BIND ${string} ${Extract<keyof T, string>}` ``
| `` `CHECKOUT ${string} ${Extract<keyof T, string>}` ``
| `` `CONNECT ${string} ${Extract<keyof T, string>}` ``
| `` `COPY ${string} ${Extract<keyof T, string>}` ``
| `` `DELETE ${string} ${Extract<keyof T, string>}` ``
| `` `GET ${string} ${Extract<keyof T, string>}` ``
| `` `HEAD ${string} ${Extract<keyof T, string>}` ``
| `` `LINK ${string} ${Extract<keyof T, string>}` ``
| `` `LOCK ${string} ${Extract<keyof T, string>}` ``
| `` `M-SEARCH ${string} ${Extract<keyof T, string>}` ``
| `` `MERGE ${string} ${Extract<keyof T, string>}` ``
| `` `MKACTIVITY ${string} ${Extract<keyof T, string>}` ``
| `` `MKCALENDAR ${string} ${Extract<keyof T, string>}` ``
| `` `MKCOL ${string} ${Extract<keyof T, string>}` ``
| `` `MOVE ${string} ${Extract<keyof T, string>}` ``
| `` `NOTIFY ${string} ${Extract<keyof T, string>}` ``
| `` `OPTIONS ${string} ${Extract<keyof T, string>}` ``
| `` `PATCH ${string} ${Extract<keyof T, string>}` ``
| `` `POST ${string} ${Extract<keyof T, string>}` ``
| `` `PROPFIND ${string} ${Extract<keyof T, string>}` ``
| `` `PROPPATCH ${string} ${Extract<keyof T, string>}` ``
| `` `PURGE ${string} ${Extract<keyof T, string>}` ``
| `` `PUT ${string} ${Extract<keyof T, string>}` ``
| `` `REBIND ${string} ${Extract<keyof T, string>}` ``
| `` `REPORT ${string} ${Extract<keyof T, string>}` ``
| `` `SEARCH ${string} ${Extract<keyof T, string>}` ``
| `` `SOURCE ${string} ${Extract<keyof T, string>}` ``
| `` `SUBSCRIBE ${string} ${Extract<keyof T, string>}` ``
| `` `TRACE ${string} ${Extract<keyof T, string>}` ``
| `` `UNBIND ${string} ${Extract<keyof T, string>}` ``
| `` `UNLINK ${string} ${Extract<keyof T, string>}` ``
| `` `UNLOCK ${string} ${Extract<keyof T, string>}` ``
| `` `UNSUBSCRIBE ${string} ${Extract<keyof T, string>}` ``)\[]

## Returns

[`Plugin`](../interfaces/Plugin.md)<`unknown`, {
`name?`: `string`;
}>
