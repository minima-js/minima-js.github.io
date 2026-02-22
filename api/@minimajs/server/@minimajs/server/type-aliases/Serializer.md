---
url: /api/@minimajs/server/@minimajs/server/type-aliases/Serializer.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Serializer

# Type Alias: Serializer()\<S>

```ts
type Serializer<S> = (body, ctx) => 
  | ResponseBody
| Promise<ResponseBody>;
```

Defined in: [packages/server/src/interfaces/response.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L6)

## Type Parameters

### S

`S` = `unknown`

## Parameters

### body

`unknown`

### ctx

[`Context`](../interfaces/Context.md)<`S`>

## Returns

| [`ResponseBody`](ResponseBody.md)
| `Promise`<[`ResponseBody`](ResponseBody.md)>
