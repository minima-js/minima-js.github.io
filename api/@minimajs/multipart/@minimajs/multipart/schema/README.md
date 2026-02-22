---
url: /api/@minimajs/multipart/@minimajs/multipart/schema/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/multipart](../../../README.md) / @minimajs/multipart/schema

# @minimajs/multipart/schema

Type-safe multipart form data parsing with Zod schema validation.

This module provides schema-based validation for multipart uploads using Zod.
Files are automatically saved to disk as TempFile instances (memory-efficient),
while text fields are validated according to your schema.

## Remarks

Key features:

* Full TypeScript type inference from Zod schemas
* Automatic file size validation with `.max()` and `.min()`
* Disk-backed file storage (TempFile) to avoid memory issues
* Native File API compatibility
* Supports single and multiple file uploads
* Built-in MIME type validation with `.mime()`

## Examples

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

```ts
import { createMultipart } from "@minimajs/multipart/schema";

const upload = createMultipart({
  email: z.string().email(),
  photos: z.array(z.file().max(5 * 1024 * 1024)).max(10), // Max 10 photos, 5MB each
});

const data = await upload();
for (const photo of data.photos) {
  await helpers.save(photo, "./uploads/photos");
}
```

```ts
const upload = createMultipart({
  avatar: z.file()
    .max(2 * 1024 * 1024)
    .mime(['image/jpeg', 'image/png']),
});
```

## Classes

| Class | Description |
| ------ | ------ |
| [TempFile](classes/TempFile.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TempFileInit](interfaces/TempFileInit.md) | - |
| [UploadOption](interfaces/UploadOption.md) | Configuration options for multipart upload handling. |

## Functions

| Function | Description |
| ------ | ------ |
| [createMultipart](functions/createMultipart.md) | Creates a type-safe multipart form data parser with Zod schema validation. Returns a function that parses and validates incoming multipart requests, providing TempFile instances for uploaded files (disk-backed, memory-efficient). |
| [isUploadedFile](functions/isUploadedFile.md) | - |
