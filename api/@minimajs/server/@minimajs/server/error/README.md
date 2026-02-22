---
url: /api/@minimajs/server/@minimajs/server/error/README.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / @minimajs/server/error

# @minimajs/server/error

Error handling utilities

Provides error handling classes and utilities for HTTP error responses.
Includes base error classes, error decorators, and utilities for working with HTTP status codes.

## Example

```typescript
import { HttpError, NotFoundError } from '@minimajs/server/error';

throw new NotFoundError('Resource not found');
throw new HttpError('Custom error', 400);
```

## Classes

| Class | Description |
| ------ | ------ |
| [BaseHttpError](classes/BaseHttpError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |
| [HttpError](classes/HttpError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |
| [NotFoundError](classes/NotFoundError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |
| [RedirectError](classes/RedirectError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |
| [ValidationError](classes/ValidationError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [HttpErrorOptions](interfaces/HttpErrorOptions.md) | - |
