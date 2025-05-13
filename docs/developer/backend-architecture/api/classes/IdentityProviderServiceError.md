[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / IdentityProviderServiceError

# Class: IdentityProviderServiceError

Defined in: [src/errors/services/IdentityProviderServiceError.error.ts:7](src/src/errors/services/IdentityProviderServiceError.error.ts#7)

Represents an error that occurred within the Identity Provider Service.
This class extends the built-in Error class to provide additional context
specific to identity provider operations.

## Extends

- `Error`

## Constructors

### Constructor

```ts
new IdentityProviderServiceError(message: string, error?: any): IdentityProviderServiceError;
```

Defined in: [src/errors/services/IdentityProviderServiceError.error.ts:14](src/src/errors/services/IdentityProviderServiceError.error.ts#14)

Creates a new instance of IdentityProviderServiceError

#### Parameters

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `message` | `string` | The error message.           |
| `error?`  | `any`    | The underlying error object. |

#### Returns

`IdentityProviderServiceError`

#### Overrides

```ts
Error.constructor;
```

## Properties

| Property                   | Modifier    | Type  | Description                 | Defined in                                                                                                                     |
| -------------------------- | ----------- | ----- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| <a id="error"></a> `error` | `protected` | `any` | The underlying error object | [src/errors/services/IdentityProviderServiceError.error.ts:9](src/src/errors/services/IdentityProviderServiceError.error.ts#9) |
