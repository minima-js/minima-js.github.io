---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/streaming/interfaces/StreamFileInit.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [streaming](../README.md) / StreamFileInit

# Interface: StreamFileInit

Defined in: [packages/multipart/src/streaming/file.ts:4](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L4)

## Extends

* `FilePropertyBag`

## Properties

### endings?

```ts
optional endings: "native" | "transparent";
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/buffer.d.ts:1776

#### Inherited from

```ts
FilePropertyBag.endings
```

***

### lastModified?

```ts
optional lastModified: number;
```

Defined in: [packages/multipart/src/streaming/file.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L7)

#### Overrides

```ts
FilePropertyBag.lastModified
```

***

### stream

```ts
stream: Readable;
```

Defined in: [packages/multipart/src/streaming/file.ts:5](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L5)

***

### type

```ts
type: string;
```

Defined in: [packages/multipart/src/streaming/file.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L6)

#### Overrides

```ts
FilePropertyBag.type
```
