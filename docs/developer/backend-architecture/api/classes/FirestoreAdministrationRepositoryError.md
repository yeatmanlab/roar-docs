[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreAdministrationRepositoryError

# Class: FirestoreAdministrationRepositoryError

Defined in: [src/errors/firestore/FirestoreAdministrationRepositoryError.error.ts:9](src/src/errors/firestore/FirestoreAdministrationRepositoryError.error.ts#9)

Error class for Firestore administration repository operations.
Provides specific error handling and messages for administration-related operations.

## See

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Base repository error class

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

```ts
new FirestoreAdministrationRepositoryError(message: string, error?: unknown): FirestoreAdministrationRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreAdministrationRepositoryError.error.ts:16](src/src/errors/firestore/FirestoreAdministrationRepositoryError.error.ts#16)

Creates a new FirestoreAdministrationRepositoryError instance.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `message` | `string`  | Error description message        |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreAdministrationRepositoryError`

#### Overrides

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`constructor`](FirestoreRepositoryError.md#constructor)

## Methods

### getAdministrationsByNameError()

```ts
getAdministrationsByNameError(): FirestoreAdministrationRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreAdministrationRepositoryError.error.ts:27](src/src/errors/firestore/FirestoreAdministrationRepositoryError.error.ts#27)

Creates an error instance for administration name query failures.

#### Returns

`FirestoreAdministrationRepositoryError`

New error instance with appropriate message

#### Throws

When administration name query fails
