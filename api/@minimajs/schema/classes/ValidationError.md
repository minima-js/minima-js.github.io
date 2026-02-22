---
url: /api/@minimajs/schema/classes/ValidationError.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / ValidationError

# Class: ValidationError

Defined in: [packages/schema/src/error.ts:35](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L35)

Custom validation error class for schema validation failures.
Extends the base HTTP error with validation-specific properties and methods.
Provides integration with Zod validation errors and enhanced error reporting.

## Extends

* [`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md)

## Constructors

### Constructor

```ts
new ValidationError(message, extend): ValidationError;
```

Defined in: [packages/schema/src/error.ts:95](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L95)

Creates a new ValidationError instance.

#### Parameters

##### message

`string`

##### extend

[`ValidatorErrorOptions`](../interfaces/ValidatorErrorOptions.md) = `{}`

#### Returns

`ValidationError`

#### Example

```ts
const error = new ValidationError('Validation failed');
```

#### Overrides

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`constructor`](../../server/@minimajs/server/error/classes/HttpError.md#constructor)

## Properties

### base?

```ts
optional base: unknown;
```

Defined in: packages/server/lib/error.d.ts:43

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`base`](../../server/@minimajs/server/error/classes/HttpError.md#base)

***

### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.bun/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

The cause of the error.

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`cause`](../../server/@minimajs/server/error/classes/HttpError.md#cause)

***

### code?

```ts
optional code: string;
```

Defined in: packages/server/lib/error.d.ts:26

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`code`](../../server/@minimajs/server/error/classes/HttpError.md#code)

***

### constructor

```ts
constructor: typeof HttpError;
```

Defined in: packages/server/lib/error.d.ts:45

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

```ts
BaseError.constructor
```

***

### headers?

```ts
optional headers: HeadersInit;
```

Defined in: packages/server/lib/error.d.ts:44

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`headers`](../../server/@minimajs/server/error/classes/HttpError.md#headers)

***

### issues?

```ts
optional issues: $ZodIssue[];
```

Defined in: [packages/schema/src/error.ts:37](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L37)

Array of zod issues

***

### message

```ts
message: string;
```

Defined in: [packages/schema/src/error.ts:96](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L96)

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`message`](../../server/@minimajs/server/error/classes/HttpError.md#message)

***

### name

```ts
name: string = ValidationError.name;
```

Defined in: [packages/schema/src/error.ts:85](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L85)

The name of this error class

#### Overrides

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`name`](../../server/@minimajs/server/error/classes/HttpError.md#name)

***

### response

```ts
response: unknown;
```

Defined in: packages/server/lib/error.d.ts:42

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`response`](../../server/@minimajs/server/error/classes/HttpError.md#response)

***

### stack?

```ts
optional stack: string;
```

Defined in: node\_modules/.bun/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`stack`](../../server/@minimajs/server/error/classes/HttpError.md#stack)

***

### status

```ts
status: number;
```

Defined in: packages/server/lib/error.d.ts:41

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`status`](../../server/@minimajs/server/error/classes/HttpError.md#status)

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/globals.d.ts:67

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured *after* the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`stackTraceLimit`](../../server/@minimajs/server/error/classes/HttpError.md#stacktracelimit)

## Methods

### render()

```ts
render(ctx): Promise<Response>;
```

Defined in: packages/server/lib/error.d.ts:48

#### Parameters

##### ctx

[`Context`](../../server/@minimajs/server/interfaces/Context.md)

#### Returns

`Promise`<`Response`>

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`render`](../../server/@minimajs/server/error/classes/HttpError.md#render)

***

### toJSON()

```ts
toJSON(): unknown;
```

Defined in: packages/server/lib/error.d.ts:47

#### Returns

`unknown`

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`toJSON`](../../server/@minimajs/server/error/classes/HttpError.md#tojson-1)

***

### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/globals.d.ts:51

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`captureStackTrace`](../../server/@minimajs/server/error/classes/HttpError.md#capturestacktrace)

***

### create()

```ts
static create(err, status?): HttpError<string>;
```

Defined in: packages/server/lib/error.d.ts:40

#### Parameters

##### err

`unknown`

##### status?

`number`

#### Returns

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md)<`string`>

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`create`](../../server/@minimajs/server/error/classes/HttpError.md#create)

***

### createFromZodError()

```ts
static createFromZodError(error): ValidationError;
```

Defined in: [packages/schema/src/error.ts:54](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L54)

Creates a ValidationError from a ZodError.
Recursively converts nested validation errors.

#### Parameters

##### error

`ZodError`

#### Returns

`ValidationError`

#### Example

```ts
try {
  await schema.parse(data);
} catch (err) {
  if (err instanceof ZodError) {
    const validationError = ValidationError.createFromZodError(err);
    throw validationError;
  }
}
```

***

### is()

```ts
static is(value): value is HttpError<unknown>;
```

Defined in: packages/server/lib/error.d.ts:39

#### Parameters

##### value

`unknown`

#### Returns

`value is HttpError<unknown>`

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`is`](../../server/@minimajs/server/error/classes/HttpError.md#is)

***

### isError()

```ts
static isError(error): error is Error;
```

Defined in: node\_modules/.bun/typescript@5.9.3/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters

##### error

`unknown`

#### Returns

`error is Error`

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`isError`](../../server/@minimajs/server/error/classes/HttpError.md#iserror)

***

### prepareStackTrace()

```ts
static prepareStackTrace(err, stackTraces): any;
```

Defined in: node\_modules/.bun/@types+node@25.0.5/node\_modules/@types/node/globals.d.ts:55

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`\[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`HttpError`](../../server/@minimajs/server/error/classes/HttpError.md).[`prepareStackTrace`](../../server/@minimajs/server/error/classes/HttpError.md#preparestacktrace)

***

### toJSON()

```ts
static toJSON(err): unknown;
```

Defined in: [packages/schema/src/error.ts:80](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L80)

Serializes a ValidationError to JSON for HTTP responses.

#### Parameters

##### err

`ValidationError`

#### Returns

`unknown`

#### Throws

AssertionError if err is not a ValidationError instance

#### Example

```ts
const json = ValidationError.toJSON(error);
// {
//   "message": "Validation failed for 'email'",
//   "issues": [
//     {
//       "code": "invalid_type",
//       "expected": "string",
//       "received": "undefined",
//       "path": ["email"],
//       "message": "Required"
//     }
//   ]
// }
```

#### Overrides

```ts
BaseError.toJSON
```
