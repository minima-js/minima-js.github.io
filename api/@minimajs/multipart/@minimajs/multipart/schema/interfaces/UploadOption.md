---
url: /api/@minimajs/multipart/@minimajs/multipart/schema/interfaces/UploadOption.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart/schema](../README.md) / UploadOption

# Interface: UploadOption

Defined in: [packages/multipart/src/schema/uploaded.ts:21](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/uploaded.ts#L21)

Configuration options for multipart upload handling.

## Extends

* [`MultipartOptions`](../../type-aliases/MultipartOptions.md)

## Properties

### defCharset?

```ts
optional defCharset: string;
```

Defined in: node\_modules/.bun/@fastify+busboy@3.2.0/node\_modules/@fastify/busboy/lib/main.d.ts:33

Default character set to use when one isn't defined.

#### Default

```ts
'utf8'
```

#### Inherited from

```ts
MultipartOptions.defCharset
```

***

### fileHwm?

```ts
optional fileHwm: number;
```

Defined in: node\_modules/.bun/@fastify+busboy@3.2.0/node\_modules/@fastify/busboy/lib/main.d.ts:28

highWaterMark to use for file streams.

#### Default

```ts
ReadableStream default.
```

#### Inherited from

```ts
MultipartOptions.fileHwm
```

***

### highWaterMark?

```ts
optional highWaterMark: number;
```

Defined in: node\_modules/.bun/@fastify+busboy@3.2.0/node\_modules/@fastify/busboy/lib/main.d.ts:23

`highWaterMark` to use for this Busboy instance.

#### Default

```ts
WritableStream default.
```

#### Inherited from

```ts
MultipartOptions.highWaterMark
```

***

### isPartAFile()?

```ts
optional isPartAFile: (fieldName, contentType, fileName) => boolean;
```

Defined in: node\_modules/.bun/@fastify+busboy@3.2.0/node\_modules/@fastify/busboy/lib/main.d.ts:43

Detect if a Part is a file.

By default a file is detected if contentType
is application/octet-stream or fileName is not
undefined.

Modify this to handle e.g. Blobs.

#### Parameters

##### fieldName

`string` | `undefined`

##### contentType

`string` | `undefined`

##### fileName

`string` | `undefined`

#### Returns

`boolean`

#### Inherited from

```ts
MultipartOptions.isPartAFile
```

***

### limits?

```ts
optional limits: {
  fieldNameSize?: number;
  fields?: number;
  fieldSize?: number;
  files?: number;
  fileSize?: number;
  headerPairs?: number;
  headerSize?: number;
  parts?: number;
};
```

Defined in: node\_modules/.bun/@fastify+busboy@3.2.0/node\_modules/@fastify/busboy/lib/main.d.ts:52

Various limits on incoming data.

#### fieldNameSize?

```ts
optional fieldNameSize: number;
```

Max field name size (in bytes)

##### Default

```ts
100 bytes
```

#### fields?

```ts
optional fields: number;
```

Max number of non-file fields

##### Default

```ts
Infinity
```

#### fieldSize?

```ts
optional fieldSize: number;
```

Max field value size (in bytes)

##### Default

```ts
1MB
```

#### files?

```ts
optional files: number;
```

For multipart forms, the max number of file fields

##### Default

```ts
Infinity
```

#### fileSize?

```ts
optional fileSize: number;
```

For multipart forms, the max file size (in bytes)

##### Default

```ts
Infinity
```

#### headerPairs?

```ts
optional headerPairs: number;
```

For multipart forms, the max number of header key=>value pairs to parse

##### Default

```ts
2000
```

#### headerSize?

```ts
optional headerSize: number;
```

For multipart forms, the max size of a header part

##### Default

```ts
81920
```

#### parts?

```ts
optional parts: number;
```

For multipart forms, the max number of parts (fields + files)

##### Default

```ts
Infinity
```

#### Inherited from

```ts
MultipartOptions.limits
```

***

### preservePath?

```ts
optional preservePath: boolean;
```

Defined in: node\_modules/.bun/@fastify+busboy@3.2.0/node\_modules/@fastify/busboy/lib/main.d.ts:48

If paths in the multipart 'filename' field shall be preserved.

#### Default

```ts
false
```

#### Inherited from

```ts
MultipartOptions.preservePath
```

***

### tmpDir?

```ts
optional tmpDir: string;
```

Defined in: [packages/multipart/src/schema/uploaded.ts:23](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/uploaded.ts#L23)

Directory for storing temporary files. Defaults to system temp directory.
