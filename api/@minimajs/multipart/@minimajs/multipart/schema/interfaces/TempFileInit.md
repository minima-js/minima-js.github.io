---
url: /api/@minimajs/multipart/@minimajs/multipart/schema/interfaces/TempFileInit.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart/schema](../README.md) / TempFileInit

# Interface: TempFileInit

Defined in: [packages/multipart/src/schema/file.ts:6](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L6)

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

Defined in: [packages/multipart/src/schema/file.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L10)

#### Overrides

```ts
FilePropertyBag.lastModified
```

***

### path

```ts
path: string;
```

Defined in: [packages/multipart/src/schema/file.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L7)

***

### signal?

```ts
optional signal: AbortSignal;
```

Defined in: [packages/multipart/src/schema/file.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L11)

***

### size

```ts
size: number;
```

Defined in: [packages/multipart/src/schema/file.ts:8](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L8)

***

### type?

```ts
optional type: string;
```

Defined in: [packages/multipart/src/schema/file.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L9)

#### Overrides

```ts
FilePropertyBag.type
```
