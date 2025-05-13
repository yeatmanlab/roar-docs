[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / AdministrationServiceError

# Class: AdministrationServiceError

Defined in: [src/errors/services/AdministrationServiceError.error.ts:7](src/src/errors/services/AdministrationServiceError.error.ts#7)

Error class for administration service operations.
Extends the base Error class to provide specialized
error handling for administration service operations.

## Extends

- `Error`

## Constructors

### Constructor

```ts
new AdministrationServiceError(message: string, error?: any): AdministrationServiceError;
```

Defined in: [src/errors/services/AdministrationServiceError.error.ts:14](src/src/errors/services/AdministrationServiceError.error.ts#14)

Creates a new instance of AdministrationServiceError

#### Parameters

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `message` | `string` | The error message.           |
| `error?`  | `any`    | The underlying error object. |

#### Returns

`AdministrationServiceError`

#### Overrides

```ts
Error.constructor;
```

## Properties

| Property                   | Modifier    | Type  | Description                 | Defined in                                                                                                                 |
| -------------------------- | ----------- | ----- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <a id="error"></a> `error` | `protected` | `any` | The underlying error object | [src/errors/services/AdministrationServiceError.error.ts:9](src/src/errors/services/AdministrationServiceError.error.ts#9) |
