---
url: >-
  /api/@minimajs/multipart/@minimajs/multipart/schema/functions/createMultipart.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart/schema](../README.md) / createMultipart

# Function: createMultipart()

```ts
function createMultipart<T>(obj, option): () => Promise<$InferObjectOutput<T, {
}>>;
```

Defined in: [packages/multipart/src/schema/index.ts:94](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/multipart/src/schema/index.ts#L94)

Creates a type-safe multipart form data parser with Zod schema validation.
Returns a function that parses and validates incoming multipart requests,
providing TempFile instances for uploaded files (disk-backed, memory-efficient).

## Type Parameters

### T

`T` *extends* `Readonly`<{
\[`k`: `string`]: `$ZodType`<`unknown`, `unknown`, `$ZodTypeInternals`<`unknown`, `unknown`>>;
}>

Zod schema shape defining expected fields and files

## Parameters

### obj

`T`

Zod schema object defining the structure of multipart data

### option

[`UploadOption`](../interfaces/UploadOption.md) = `{}`

Optional upload configuration (limits, temp directory, etc.)

## Returns

Async function that parses and validates multipart data

```ts
(): Promise<$InferObjectOutput<T, {
}>>;
```

### Returns

`Promise`<`$InferObjectOutput`<`T`, {
}>>

## Throws

When validation fails (wrapped ZodError)

## Example

```ts
import { z } from 'zod';
import { createMultipart } from "@minimajs/multipart/schema";
import { helpers } from "@minimajs/multipart";

const upload = createMultipart({
  name: z.string().min(3).max(30),
  avatar: z.file().max(2 * 1024 * 1024), // 2MB max
});

const data = await upload();
console.log(data.name); // Type-safe access
await helpers.save(data.avatar, "./uploads/avatars");
```
