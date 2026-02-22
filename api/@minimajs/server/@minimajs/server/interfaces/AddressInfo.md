---
url: /api/@minimajs/server/@minimajs/server/interfaces/AddressInfo.md
---
[**Minima.js API**](../../../../../README.md)

***

[Minima.js API](../../../../../README.md) / [@minimajs/server](../../../README.md) / [@minimajs/server](../README.md) / AddressInfo

# Interface: AddressInfo

Defined in: [packages/server/src/interfaces/server.ts:13](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L13)

Information about the server's network address and binding.

## Properties

### family

```ts
family: "IPv4" | "IPv6" | "unix";
```

Defined in: [packages/server/src/interfaces/server.ts:19](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L19)

The IP address family

***

### hostname

```ts
hostname: string;
```

Defined in: [packages/server/src/interfaces/server.ts:15](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L15)

The hostname the server is bound to

***

### href

```ts
href: string;
```

Defined in: [packages/server/src/interfaces/server.ts:23](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L23)

The full address string

***

### port

```ts
port: number;
```

Defined in: [packages/server/src/interfaces/server.ts:17](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L17)

The port number the server is listening on

***

### protocol

```ts
protocol: "http" | "https";
```

Defined in: [packages/server/src/interfaces/server.ts:21](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L21)

The protocol being used

## Methods

### toString()

```ts
toString(): string;
```

Defined in: [packages/server/src/interfaces/server.ts:25](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/interfaces/server.ts#L25)

#### Returns

`string`
