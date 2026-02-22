---
url: /api/@minimajs/server/@minimajs/server/interfaces/ResponseOptions.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / ResponseOptions

# Interface: ResponseOptions

Defined in: [packages/server/src/interfaces/response.ts:17](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L17)

## Properties

### headers?

```ts
optional headers: HeadersInit;
```

Defined in: [packages/server/src/interfaces/response.ts:20](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L20)

***

### status?

```ts
optional status: 
  | number
  | "CONTINUE"
  | "SWITCHING_PROTOCOLS"
  | "PROCESSING"
  | "EARLY_HINTS"
  | "OK"
  | "CREATED"
  | "ACCEPTED"
  | "NON_AUTHORITATIVE_INFORMATION"
  | "NO_CONTENT"
  | "RESET_CONTENT"
  | "PARTIAL_CONTENT"
  | "MULTI_STATUS"
  | "MULTIPLE_CHOICES"
  | "MOVED_PERMANENTLY"
  | "MOVED_TEMPORARILY"
  | "SEE_OTHER"
  | "NOT_MODIFIED"
  | "USE_PROXY"
  | "TEMPORARY_REDIRECT"
  | "PERMANENT_REDIRECT"
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "PAYMENT_REQUIRED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "METHOD_NOT_ALLOWED"
  | "NOT_ACCEPTABLE"
  | "PROXY_AUTHENTICATION_REQUIRED"
  | "REQUEST_TIMEOUT"
  | "CONFLICT"
  | "GONE"
  | "LENGTH_REQUIRED"
  | "PRECONDITION_FAILED"
  | "REQUEST_TOO_LONG"
  | "REQUEST_URI_TOO_LONG"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "REQUESTED_RANGE_NOT_SATISFIABLE"
  | "EXPECTATION_FAILED"
  | "IM_A_TEAPOT"
  | "INSUFFICIENT_SPACE_ON_RESOURCE"
  | "METHOD_FAILURE"
  | "MISDIRECTED_REQUEST"
  | "UNPROCESSABLE_ENTITY"
  | "LOCKED"
  | "FAILED_DEPENDENCY"
  | "UPGRADE_REQUIRED"
  | "PRECONDITION_REQUIRED"
  | "TOO_MANY_REQUESTS"
  | "REQUEST_HEADER_FIELDS_TOO_LARGE"
  | "UNAVAILABLE_FOR_LEGAL_REASONS"
  | "INTERNAL_SERVER_ERROR"
  | "NOT_IMPLEMENTED"
  | "BAD_GATEWAY"
  | "SERVICE_UNAVAILABLE"
  | "GATEWAY_TIMEOUT"
  | "HTTP_VERSION_NOT_SUPPORTED"
  | "INSUFFICIENT_STORAGE"
  | "NETWORK_AUTHENTICATION_REQUIRED";
```

Defined in: [packages/server/src/interfaces/response.ts:18](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L18)

***

### statusText?

```ts
optional statusText: string;
```

Defined in: [packages/server/src/interfaces/response.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/response.ts#L19)
