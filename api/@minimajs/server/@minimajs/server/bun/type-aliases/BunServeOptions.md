---
url: /api/@minimajs/server/@minimajs/server/bun/type-aliases/BunServeOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/bun](../README.md) / BunServeOptions

# Type Alias: BunServeOptions\<T>

```ts
type BunServeOptions<T> = Omit<Serve.Options<T>, "fetch" | "port" | "hostname">;
```

Defined in: [packages/server/src/bun/server.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/bun/server.ts#L12)

## Type Parameters

### T

`T` = `unknown`
