---
url: /api/@minimajs/multipart/@minimajs/multipart/README.md
---
[**Minima.js API**](../../../../README.md)

***

[Minima.js API](../../../../README.md) / [@minimajs/multipart](../../README.md) / @minimajs/multipart

# @minimajs/multipart

Collection of multipart form data handling utilities including file uploads and schema validation.

## Example

```ts
import { multipart, helpers } from "@minimajs/multipart";

const file = await multipart.file('avatar');
console.log(file.name);
await helpers.save(file, '/uploads/avatars');
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [helpers](namespaces/helpers/README.md) | - |
| [multipart](namespaces/multipart/README.md) | - |
| [raw](namespaces/raw/README.md) | - |
| [streaming](namespaces/streaming/README.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [MultipartRawField](interfaces/MultipartRawField.md) | - |
| [MultipartRawFile](interfaces/MultipartRawFile.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [MultipartOptions](type-aliases/MultipartOptions.md) | - |
| [MultipartRawResult](type-aliases/MultipartRawResult.md) | - |
