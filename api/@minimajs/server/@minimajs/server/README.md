---
url: /api/@minimajs/server/@minimajs/server/README.md
---
[**Minima.js API**](../../../../README.md)

***

[Minima.js API](../../../../README.md) / [@minimajs/server](../../README.md) / @minimajs/server

# @minimajs/server

@minimajs/server - High-performance HTTP framework

## Example

```typescript
import { createApp } from "@minimajs/server";

const app = createApp();

app.get("/", () => ({ message: "Hello World" }));

app.listen({ port: 3000 });
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [abort](namespaces/abort/README.md) | Utility functions for working with request aborts and errors |
| [compose](namespaces/compose/README.md) | - |
| [controller](namespaces/controller/README.md) | - |
| [headers](namespaces/headers/README.md) | Utility functions for working with HTTP headers |
| [hook](namespaces/hook/README.md) | - |
| [params](namespaces/params/README.md) | Utility functions for working with route parameters |
| [plugin](namespaces/plugin/README.md) | Plugin utilities namespace providing helper functions for creating and composing plugins. |
| [request](namespaces/request/README.md) | Request utilities for accessing request data |
| [response](namespaces/response/README.md) | Response utilities for managing HTTP responses |
| [runHooks](namespaces/runHooks/README.md) | - |
| [searchParams](namespaces/searchParams/README.md) | Utility functions for working with URL search parameters (query string) |

## Classes

| Class | Description |
| ------ | ------ |
| [Server](classes/Server.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AddressInfo](interfaces/AddressInfo.md) | Information about the server's network address and binding. |
| [App](interfaces/App.md) | - |
| [Context](interfaces/Context.md) | - |
| [ContextLocals](interfaces/ContextLocals.md) | - |
| [ContextMetadata](interfaces/ContextMetadata.md) | - |
| [ImportedModule](interfaces/ImportedModule.md) | - |
| [ListenOptions](interfaces/ListenOptions.md) | Options for starting a server listener. |
| [ListenResult](interfaces/ListenResult.md) | Result returned when a server starts listening. Contains the native server instance and address information. |
| [Meta](interfaces/Meta.md) | - |
| [Module](interfaces/Module.md) | - |
| [ModuleDiscoveryOptions](interfaces/ModuleDiscoveryOptions.md) | - |
| [Plugin](interfaces/Plugin.md) | - |
| [PluginSync](interfaces/PluginSync.md) | - |
| [RemoteAddr](interfaces/RemoteAddr.md) | - |
| [ResponseOptions](interfaces/ResponseOptions.md) | - |
| [ResponseState](interfaces/ResponseState.md) | - |
| [Route](interfaces/Route.md) | - |
| [RouteConfig](interfaces/RouteConfig.md) | - |
| [RouteFindResult](interfaces/RouteFindResult.md) | - |
| [RouteOptions](interfaces/RouteOptions.md) | - |
| [ServerAdapter](interfaces/ServerAdapter.md) | Adapter interface for different server implementations. Abstracts the underlying server runtime (Bun, Node, Deno, etc). |
| [ServerOptions](interfaces/ServerOptions.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Container](type-aliases/Container.md) | - |
| [Dict](type-aliases/Dict.md) | - |
| [ErrorHandler](type-aliases/ErrorHandler.md) | - |
| [GenericCallback](type-aliases/GenericCallback.md) | - |
| [GenericHookCallback](type-aliases/GenericHookCallback.md) | - |
| [Handler](type-aliases/Handler.md) | - |
| [HeadersInit](type-aliases/HeadersInit.md) | - |
| [HookFactoryCallback](type-aliases/HookFactoryCallback.md) | - |
| [HookStore](type-aliases/HookStore.md) | - |
| [HttpCodes](type-aliases/HttpCodes.md) | - |
| [HttpHeader](type-aliases/HttpHeader.md) | - |
| [HttpHeaderIncoming](type-aliases/HttpHeaderIncoming.md) | - |
| [LifecycleHook](type-aliases/LifecycleHook.md) | - |
| [LifeSpanCleanupCallback](type-aliases/LifeSpanCleanupCallback.md) | - |
| [Middleware](type-aliases/Middleware.md) | - |
| [MiddlewareNext](type-aliases/MiddlewareNext.md) | - |
| [ModuleScanner](type-aliases/ModuleScanner.md) | - |
| [Next](type-aliases/Next.md) | - |
| [OnceCallback](type-aliases/OnceCallback.md) | - |
| [OnCloseHook](type-aliases/OnCloseHook.md) | - |
| [OnErrorHook](type-aliases/OnErrorHook.md) | - |
| [OnListenHook](type-aliases/OnListenHook.md) | - |
| [OnReadyHook](type-aliases/OnReadyHook.md) | - |
| [OnRegisterHook](type-aliases/OnRegisterHook.md) | - |
| [OnRequestHook](type-aliases/OnRequestHook.md) | - |
| [OnSendHook](type-aliases/OnSendHook.md) | - |
| [OnTimeoutHook](type-aliases/OnTimeoutHook.md) | - |
| [OnTransformHook](type-aliases/OnTransformHook.md) | - |
| [PluginCallback](type-aliases/PluginCallback.md) | - |
| [PluginOptions](type-aliases/PluginOptions.md) | - |
| [Registerable](type-aliases/Registerable.md) | - |
| [RegisterOptions](type-aliases/RegisterOptions.md) | - |
| [RequestHandler](type-aliases/RequestHandler.md) | Handler function that processes HTTP requests. Takes a Web standard Request and returns a Web standard Response. |
| [RequestHandlerContext](type-aliases/RequestHandlerContext.md) | - |
| [ResponseBody](type-aliases/ResponseBody.md) | - |
| [RouteMetadata](type-aliases/RouteMetadata.md) | - |
| [RouteMetaDescriptor](type-aliases/RouteMetaDescriptor.md) | - |
| [Routes](type-aliases/Routes.md) | - |
| [Serializer](type-aliases/Serializer.md) | - |
| [Signals](type-aliases/Signals.md) | - |
| [StatusCode](type-aliases/StatusCode.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [executionContext](variables/executionContext.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [abort](functions/abort.md) | Aborts the request with the given response and status code. |
| [body](functions/body.md) | Retrieves the request body. Requires bodyParser plugin to be registered. |
| [compose](functions/compose.md) | Composes multiple plugins/modules into a single plugin that registers all of them sequentially. |
| [context](functions/context.md) | - |
| [controller](functions/controller.md) | - |
| [createContext](functions/createContext.md) | Creates a context for sharing data within a request's scope. |
| [createHooksStore](functions/createHooksStore.md) | Creates a new HookStore with proper cloning support for module isolation |
| [handler](functions/handler.md) | - |
| [headers](functions/headers.md) | Retrieves the request headers. |
| [hook](functions/hook.md) | Creates a plugin that registers a lifecycle hook |
| [maybeContext](functions/maybeContext.md) | - |
| [middleware](functions/middleware.md) | - |
| [params](functions/params.md) | Retrieves the request params. |
| [plugin](functions/plugin.md) | Wraps a plain function into a Plugin with automatic kPluginSkipOverride This prevents the plugin from being encapsulated and allows direct registration |
| [redirect](functions/redirect.md) | Redirects to the specified path. |
| [request](functions/request.md) | Retrieves the HTTP request object. |
| [response](functions/response.md) | Creates an HTTP response with serialized body, optional status code, and headers. |
| [runHooks](functions/runHooks.md) | Runs all hooks for a given lifecycle event with automatic order detection - Parent → Child hooks run in FIFO order (normal) - Child → Parent hooks run in LIFO order (reversed) |
| [safe](functions/safe.md) | - |
| [searchParams](functions/searchParams.md) | Retrieves the search params (query string). |

## References

### createApp

Re-exports [createApp](node/functions/createApp.md)

***

### defer

Re-exports [defer](plugins/functions/defer.md)

***

### DeferCallback

Re-exports [DeferCallback](plugins/type-aliases/DeferCallback.md)

***

### ErrorCallback

Re-exports [ErrorCallback](plugins/type-aliases/ErrorCallback.md)

***

### logger

Re-exports [logger](logger/variables/logger.md)

***

### onError

Re-exports [onError](plugins/functions/onError.md)
