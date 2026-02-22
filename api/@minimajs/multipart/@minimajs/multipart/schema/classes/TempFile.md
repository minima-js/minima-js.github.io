---
url: /api/@minimajs/multipart/@minimajs/multipart/schema/classes/TempFile.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart/schema](../README.md) / TempFile

# Class: TempFile

Defined in: [packages/multipart/src/schema/file.ts:14](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L14)

## Extends

* `File`

## Constructors

### Constructor

```ts
new TempFile(filename, __namedParameters): TempFile;
```

Defined in: [packages/multipart/src/schema/file.ts:21](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L21)

#### Parameters

##### filename

`string`

##### \_\_namedParameters

[`TempFileInit`](../interfaces/TempFileInit.md)

#### Returns

`TempFile`

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

### path

```ts
readonly path: string;
```

Defined in: [packages/multipart/src/schema/file.ts:18](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L18)

***

### signal?

```ts
readonly optional signal: AbortSignal;
```

Defined in: [packages/multipart/src/schema/file.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L19)

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

Defined in: [packages/multipart/src/schema/file.ts:108](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L108)

##### Returns

`string`

***

### size

#### Get Signature

```ts
get size(): number;
```

Defined in: [packages/multipart/src/schema/file.ts:28](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L28)

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

Defined in: [packages/multipart/src/schema/file.ts:36](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L36)

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

Defined in: [packages/multipart/src/schema/file.ts:45](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L45)

#### Returns

`Promise`<`Uint8Array`<`ArrayBuffer`>>

#### Overrides

```ts
File.bytes
```

***

### destroy()

```ts
destroy(): Promise<boolean>;
```

Defined in: [packages/multipart/src/schema/file.ts:88](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L88)

Destroys all active streams and deletes the temporary file from disk.
Waits for streams that are actively being consumed to finish before deleting.

#### Returns

`Promise`<`boolean`>

***

### slice()

```ts
slice(): Blob;
```

Defined in: [packages/multipart/src/schema/file.ts:52](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L52)

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

Defined in: [packages/multipart/src/schema/file.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L32)

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

Defined in: [packages/multipart/src/schema/file.ts:41](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L41)

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

Defined in: [packages/multipart/src/schema/file.ts:70](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L70)

Loads the file into memory and returns a standard File object.

#### Returns

`Promise`<`File`>

***

### toJSON()

```ts
toJSON(): {
  lastModified: number;
  name: string;
  path: string;
  size: number;
  type: string;
};
```

Defined in: [packages/multipart/src/schema/file.ts:75](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L75)

#### Returns

```ts
{
  lastModified: number;
  name: string;
  path: string;
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

##### path

```ts
path: string;
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
toReadable(): Readable;
```

Defined in: [packages/multipart/src/schema/file.ts:60](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/file.ts#L60)

Creates a Node.js Readable stream from the temporary file.
Multiple streams can be created; all are tracked for cleanup.

#### Returns

`Readable`
