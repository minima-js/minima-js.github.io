---
url: /api/@minimajs/schema/interfaces/ValidatorErrorOptions.md
---
[**Minima.js API**](../../../README.md)

***

[Minima.js API](../../../README.md) / [@minimajs/schema](../README.md) / [](../README.md) / ValidatorErrorOptions

# Interface: ValidatorErrorOptions

Defined in: [packages/schema/src/error.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L10)

Options for creating a validation error.
Extends HTTP error options with validation-specific properties.

## Extends

* `Omit`<[`HttpErrorOptions`](../../server/@minimajs/server/error/interfaces/HttpErrorOptions.md), `"base"`>

## Properties

### base?

```ts
optional base: unknown;
```

Defined in: [packages/schema/src/error.ts:14](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L14)

The base error

***

### cause?

```ts
optional cause: unknown;
```

Defined in: node\_modules/.bun/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:22

#### Inherited from

```ts
Omit.cause
```

***

### code?

```ts
optional code: string;
```

Defined in: packages/server/lib/error.d.ts:32

#### Inherited from

```ts
Omit.code
```

***

### headers?

```ts
optional headers: HeadersInit;
```

Defined in: packages/server/lib/error.d.ts:35

#### Inherited from

```ts
Omit.headers
```

***

### issues?

```ts
optional issues: $ZodIssue[];
```

Defined in: [packages/schema/src/error.ts:12](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/schema/src/error.ts#L12)

Array of zod issues

***

### message?

```ts
optional message: string;
```

Defined in: packages/server/lib/error.d.ts:31

#### Inherited from

```ts
Omit.message
```

***

### name?

```ts
optional name: string;
```

Defined in: packages/server/lib/error.d.ts:33

#### Inherited from

```ts
Omit.name
```
