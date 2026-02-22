---
url: /api/@minimajs/auth/README.md
---
[**Minima.js API**](../../README.md)

***

[Minima.js API](../../README.md) / @minimajs/auth

# @minimajs/auth

## Classes

| Class | Description |
| ------ | ------ |
| [ForbiddenError](classes/ForbiddenError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |
| [UnauthorizedError](classes/UnauthorizedError.md) | Represents the response body of an HTTP error. Can be either a simple string message or a dictionary object with custom error data. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AuthOption](interfaces/AuthOption.md) | - |
| [AuthResourceOptional](interfaces/AuthResourceOptional.md) | - |
| [AuthResourceWithRequired](interfaces/AuthResourceWithRequired.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AuthCallback](type-aliases/AuthCallback.md) | - |
| [GuardCallback](type-aliases/GuardCallback.md) | - |
| [GuardMessageCallback](type-aliases/GuardMessageCallback.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createAuth](functions/createAuth.md) | Creates an authentication middleware plugin and resource accessor for Minima.js applications. |
