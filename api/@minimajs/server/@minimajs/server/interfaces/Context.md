---
url: /api/@minimajs/server/@minimajs/server/interfaces/Context.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / Context

# Interface: Context\<S>

Defined in: [packages/server/src/interfaces/context.ts:23](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L23)

## Type Parameters

### S

`S` = `unknown`

## Properties

### $metadata

```ts
readonly $metadata: ContextMetadata;
```

Defined in: [packages/server/src/interfaces/context.ts:24](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L24)

***

### app

```ts
readonly app: App<S>;
```

Defined in: [packages/server/src/interfaces/context.ts:25](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L25)

***

### container

```ts
readonly container: Container<S>;
```

Defined in: [packages/server/src/interfaces/context.ts:31](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L31)

***

### incomingMessage

```ts
readonly incomingMessage: S extends 
  | Server<typeof IncomingMessage, typeof ServerResponse>
  | Server<typeof IncomingMessage, typeof ServerResponse> ? IncomingMessage : undefined;
```

Defined in: [packages/server/src/interfaces/context.ts:34](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L34)

***

### locals

```ts
readonly locals: ContextLocals;
```

Defined in: [packages/server/src/interfaces/context.ts:32](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L32)

***

### pathname

```ts
readonly pathname: string;
```

Defined in: [packages/server/src/interfaces/context.ts:28](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L28)

***

### request

```ts
readonly request: Request;
```

Defined in: [packages/server/src/interfaces/context.ts:29](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L29)

***

### responseState

```ts
readonly responseState: ResponseState;
```

Defined in: [packages/server/src/interfaces/context.ts:30](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L30)

***

### route

```ts
readonly route: Route<S> | null;
```

Defined in: [packages/server/src/interfaces/context.ts:33](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L33)

***

### server

```ts
readonly server: S;
```

Defined in: [packages/server/src/interfaces/context.ts:26](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L26)

***

### serverAdapter

```ts
readonly serverAdapter: ServerAdapter<S>;
```

Defined in: [packages/server/src/interfaces/context.ts:27](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L27)

***

### serverResponse

```ts
readonly serverResponse: S extends 
  | Server<typeof IncomingMessage, typeof ServerResponse>
  | Server<typeof IncomingMessage, typeof ServerResponse> ? ServerResponse<IncomingMessage> : undefined;
```

Defined in: [packages/server/src/interfaces/context.ts:35](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/context.ts#L35)
