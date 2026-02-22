---
url: /api/@minimajs/server/@minimajs/server/plugins/interfaces/CorsOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / CorsOptions

# Interface: CorsOptions

Defined in: [packages/server/src/plugins/cors/index.ts:5](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L5)

## Properties

### allowedHeaders?

```ts
optional allowedHeaders: string | string[];
```

Defined in: [packages/server/src/plugins/cors/index.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L11)

Configures the Access-Control-Allow-Headers header

***

### credentials?

```ts
optional credentials: boolean;
```

Defined in: [packages/server/src/plugins/cors/index.ts:15](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L15)

Configures the Access-Control-Allow-Credentials header

***

### exposedHeaders?

```ts
optional exposedHeaders: string | string[];
```

Defined in: [packages/server/src/plugins/cors/index.ts:13](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L13)

Configures the Access-Control-Expose-Headers header

***

### maxAge?

```ts
optional maxAge: number;
```

Defined in: [packages/server/src/plugins/cors/index.ts:17](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L17)

Configures the Access-Control-Max-Age header (in seconds)

***

### methods?

```ts
optional methods: string | string[];
```

Defined in: [packages/server/src/plugins/cors/index.ts:9](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L9)

Configures the Access-Control-Allow-Methods header. Default: 'GET,HEAD,PUT,PATCH,POST,DELETE'

***

### optionsSuccessStatus?

```ts
optional optionsSuccessStatus: number;
```

Defined in: [packages/server/src/plugins/cors/index.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L19)

Provides a status code to use for successful OPTIONS requests. Default: 204

***

### origin?

```ts
optional origin: string | string[] | (origin) => boolean | Promise<boolean>;
```

Defined in: [packages/server/src/plugins/cors/index.ts:7](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L7)

Configures the Access-Control-Allow-Origin header. Default: '\*'

***

### preflightContinue?

```ts
optional preflightContinue: boolean;
```

Defined in: [packages/server/src/plugins/cors/index.ts:21](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/cors/index.ts#L21)

Pass the CORS preflight response to the next handler. Default: false
