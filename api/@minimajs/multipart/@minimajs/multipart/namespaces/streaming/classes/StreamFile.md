---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/namespaces/streaming/classes/StreamFile.md
---
[**Minima.js API**](../../../../../../../README.md)

***

[Minima.js API](../../../../../../../README.md) / [@minimajs/multipart](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / [streaming](../README.md) / StreamFile

# Class: StreamFile

Defined in: [packages/multipart/src/streaming/file.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L11)

A File subclass that lazily buffers from a stream on first read.

## Extends

* `File`

## Constructors

### Constructor

```ts
new StreamFile(filename, __namedParameters): StreamFile;
```

Defined in: [packages/multipart/src/streaming/file.ts:15](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L15)

#### Parameters

##### filename

`string`

##### \_\_namedParameters

[`StreamFileInit`](../interfaces/StreamFileInit.md)

#### Returns

`StreamFile`

#### Overrides

```ts
File.constructor
```

## Properties

### lastModified

```ts
readonly lastModified: number;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/buffer.d.ts:1796

#### Inherited from

```ts
File.lastModified
```

***

### name

```ts
readonly name: string;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/buffer.d.ts:1797

#### Inherited from

```ts
File.name
```

***

### type

```ts
readonly type: string;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/buffer.d.ts:1784

#### Inherited from

```ts
File.type
```

***

### webkitRelativePath

```ts
readonly webkitRelativePath: string;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/buffer.d.ts:1798

#### Inherited from

```ts
File.webkitRelativePath
```

## Accessors

### \[toStringTag]

#### Get Signature

```ts
get toStringTag: string;
```

Defined in: [packages/multipart/src/streaming/file.ts:53](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L53)

##### Returns

`string`

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [packages/multipart/src/streaming/file.ts:20](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L20)

##### Returns

`number`

#### Overrides

```ts
File.size
```

## Methods

### arrayBuffer()

```ts
arrayBuffer(): Promise<ArrayBuffer>;
```

Defined in: [packages/multipart/src/streaming/file.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L31)

#### Returns

`Promise`<`ArrayBuffer`>

#### Overrides

```ts
File.arrayBuffer
```

***

### bytes()

```ts
bytes(): Promise<Uint8Array<ArrayBuffer>>;
```

Defined in: [packages/multipart/src/streaming/file.ts:40](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L40)

#### Returns

`Promise`<`Uint8Array`<`ArrayBuffer`>>

#### Overrides

```ts
File.bytes
```

***

### slice()

```ts
slice(): Blob;
```

Defined in: [packages/multipart/src/streaming/file.ts:49](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L49)

#### Returns

`Blob`

#### Overrides

```ts
File.slice
```

***

### stream()

```ts
stream(): ReadableStream<Uint8Array<ArrayBuffer>>;
```

Defined in: [packages/multipart/src/streaming/file.ts:24](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L24)

#### Returns

`ReadableStream`<`Uint8Array`<`ArrayBuffer`>>

#### Overrides

```ts
File.stream
```

***

### text()

```ts
text(): Promise<string>;
```

Defined in: [packages/multipart/src/streaming/file.ts:36](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L36)

#### Returns

`Promise`<`string`>

#### Overrides

```ts
File.text
```

***

### toFile()

```ts
toFile(): Promise<File>;
```

Defined in: [packages/multipart/src/streaming/file.ts:63](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L63)

Loads the file into memory and returns a standard File object.

#### Returns

`Promise`<`File`>

***

### toJSON()

```ts
toJSON(): {
  lastModified: number;
  name: string;
  size: number;
  type: string;
};
```

Defined in: [packages/multipart/src/streaming/file.ts:70](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L70)

#### Returns

```ts
{
  lastModified: number;
  name: string;
  size: number;
  type: string;
}
```

##### lastModified

```ts
lastModified: number;
```

##### name

```ts
name: string;
```

##### size

```ts
size: number;
```

##### type

```ts
type: string;
```

***

### toReadable()

```ts
toReadable(): Readable | null;
```

Defined in: [packages/multipart/src/streaming/file.ts:58](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/streaming/file.ts#L58)

Creates a Node.js Readable stream from the buffered content.

#### Returns

`Readable` | `null`
