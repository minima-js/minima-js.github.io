---
url: /api/@minimajs/multipart/@minimajs/multipart/namespaces/multipart/README.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/multipart](../../../../README.md) / [@minimajs/multipart](../../README.md) / multipart

# multipart

## Functions

| Function | Description |
| ------ | ------ |
| [body](functions/body.md) | Retrieves both text fields and files from a multipart form request as an async iterable. Each iteration yields a tuple of \[fieldName, value] where value can be a string or File. |
| [fields](functions/fields.md) | Retrieves all text fields from a multipart form request. Files are ignored - only text field data is processed. |
| [file](functions/file.md) | Retrieves a single file from a multipart form request. |
| [files](functions/files.md) | Retrieves all files from a multipart form request as an async iterable. Field data is ignored - only files are processed. |
| [firstFile](functions/firstFile.md) | Retrieves the first file from a multipart form request. |
