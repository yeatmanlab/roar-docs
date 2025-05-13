[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreRepositoryError

# Class: FirestoreRepositoryError

Defined in: [src/errors/firestore/FirestoreRepositoryError.error.ts:5](src/src/errors/firestore/FirestoreRepositoryError.error.ts#5)

Base error class for Firestore repository operations.
Provides error tracking and logging functionality for repository errors.

## Extends

- `Error`

## Extended by

- [`FirestoreAdministrationRepositoryError`](FirestoreAdministrationRepositoryError.md)
- [`FirestoreIdentityProviderRepositoryError`](FirestoreIdentityProviderRepositoryError.md)
- [`FirestoreOrgRepositoryError`](FirestoreOrgRepositoryError.md)
- [`FirestoreUserClaimRepositoryError`](FirestoreUserClaimRepositoryError.md)
- [`FirestoreUserRepositoryError`](FirestoreUserRepositoryError.md)

## Constructors

### Constructor

```ts
new FirestoreRepositoryError(message: string, error?: unknown): FirestoreRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreRepositoryError.error.ts:15](src/src/errors/firestore/FirestoreRepositoryError.error.ts#15)

Creates a new FirestoreRepositoryError instance.

#### Parameters

| Parameter | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `message` | `string`  | Error description message                     |
| `error?`  | `unknown` | Optional underlying error object to be logged |

#### Returns

`FirestoreRepositoryError`

#### Overrides

```ts
Error.constructor;
```

## Properties

| Property                   | Modifier    | Type      | Description                                              | Defined in                                                                                                               |
| -------------------------- | ----------- | --------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <a id="error"></a> `error` | `protected` | `unknown` | Underlying error object that caused the repository error | [src/errors/firestore/FirestoreRepositoryError.error.ts:7](src/src/errors/firestore/FirestoreRepositoryError.error.ts#7) |
