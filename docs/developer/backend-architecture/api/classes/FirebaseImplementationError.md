[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirebaseImplementationError

# Class: FirebaseImplementationError

Defined in: [src/errors/factories/FirebaseImplementationError.error.ts:10](src/src/errors/factories/FirebaseImplementationError.error.ts#10)

FirebaseImplementationError

An error class for handling Firebase implementation-specific errors.
This class extends the standard Error class and provides additional
functionality to store the original Firebase error object.

FirebaseImplementationError

## Extends

- `Error`

## Constructors

### Constructor

```ts
new FirebaseImplementationError(message: string, error?: any): FirebaseImplementationError;
```

Defined in: [src/errors/factories/FirebaseImplementationError.error.ts:17](src/src/errors/factories/FirebaseImplementationError.error.ts#17)

Creates a new instance of FirebaseImplementationError

#### Parameters

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `message` | `string` | The error message.           |
| `error?`  | `any`    | The underlying error object. |

#### Returns

`FirebaseImplementationError`

#### Overrides

```ts
Error.constructor;
```

## Properties

| Property                   | Modifier    | Type  | Description                 | Defined in                                                                                                                       |
| -------------------------- | ----------- | ----- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <a id="error"></a> `error` | `protected` | `any` | The underlying error object | [src/errors/factories/FirebaseImplementationError.error.ts:12](src/src/errors/factories/FirebaseImplementationError.error.ts#12) |
