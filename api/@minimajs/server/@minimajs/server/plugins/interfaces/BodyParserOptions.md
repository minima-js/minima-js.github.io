---
url: /api/@minimajs/server/@minimajs/server/plugins/interfaces/BodyParserOptions.md
---
[**Minima.js API**](../../../../../../README.md)

***

[Minima.js API](../../../../../../README.md) / [@minimajs/server](../../../../README.md) / [@minimajs/server/plugins](../README.md) / BodyParserOptions

# Interface: BodyParserOptions

Defined in: [packages/server/src/plugins/body-parser/index.ts:10](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/body-parser/index.ts#L10)

Options for body parser plugin

## Properties

### clone?

```ts
optional clone: boolean;
```

Defined in: [packages/server/src/plugins/body-parser/index.ts:16](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/body-parser/index.ts#L16)

Clone the request before parsing (useful if you need to read the body multiple times)

#### Default

```ts
false
```

***

### enabled?

```ts
optional enabled: boolean;
```

Defined in: [packages/server/src/plugins/body-parser/index.ts:11](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/body-parser/index.ts#L11)

***

### type?

```ts
optional type: 
  | BodyParserType
  | BodyParserType[];
```

Defined in: [packages/server/src/plugins/body-parser/index.ts:26](https://github.com/minima-js/minimajs/blob/15b6e807136b0797f41b873bcc5ffc55e94e112c/packages/server/src/plugins/body-parser/index.ts#L26)

Content types to parse (array for multiple types, or single type)

* "json": Parse as JSON (application/json)
* "text": Parse as text (text/\*)
* "form": Parse as form data (application/x-www-form-urlencoded, multipart/form-data) - **DEPRECATED**: Use @minimajs/multipart instead
* "arrayBuffer": Parse as ArrayBuffer
* "blob": Parse as Blob

#### Default

```ts
["json"]
```
