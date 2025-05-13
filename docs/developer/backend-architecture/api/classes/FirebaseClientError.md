[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirebaseClientError

# Class: FirebaseClientError

Defined in: [src/errors/clients/FirebaseClientError.error.ts:5](src/src/errors/clients/FirebaseClientError.error.ts#5)

Custom error class for Firebase client-related errors.
Extends the native Error class to provide additional context for Firebase operations.

## Extends

- `Error`

## Constructors

### Constructor

```ts
new FirebaseClientError(message: string, error?: any): FirebaseClientError;
```

Defined in: [src/errors/clients/FirebaseClientError.error.ts:12](src/src/errors/clients/FirebaseClientError.error.ts#12)

Creates a new instance of FirebaseClientError

#### Parameters

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `message` | `string` | The error message.           |
| `error?`  | `any`    | The underlying error object. |

#### Returns

`FirebaseClientError`

#### Overrides

```ts
Error.constructor;
```

## Properties

| Property                   | Modifier    | Type  | Description                 | Defined in                                                                                                 |
| -------------------------- | ----------- | ----- | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <a id="error"></a> `error` | `protected` | `any` | The underlying error object | [src/errors/clients/FirebaseClientError.error.ts:7](src/src/errors/clients/FirebaseClientError.error.ts#7) |
