[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreOrgRepositoryError

# Class: FirestoreOrgRepositoryError

Defined in: [src/errors/firestore/FirestoreOrgRepositoryError.error.ts:9](src/src/errors/firestore/FirestoreOrgRepositoryError.error.ts#9)

Error handler for Firestore organization repository operations.
Manages errors related to read and assigned organization queries.

## See

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Base repository error class

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

```ts
new FirestoreOrgRepositoryError(message: string, error?: unknown): FirestoreOrgRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreOrgRepositoryError.error.ts:16](src/src/errors/firestore/FirestoreOrgRepositoryError.error.ts#16)

Creates a new FirestoreOrgRepositoryError instance.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `message` | `string`  | Error description message        |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreOrgRepositoryError`

#### Overrides

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`constructor`](FirestoreRepositoryError.md#constructor)

## Methods

### getAdministrationIdsFromOrgsError()

```ts
getAdministrationIdsFromOrgsError(): FirestoreOrgRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreOrgRepositoryError.error.ts:27](src/src/errors/firestore/FirestoreOrgRepositoryError.error.ts#27)

Creates an error instance for organization administration ID lookup failures.

#### Returns

`FirestoreOrgRepositoryError`

New error instance with appropriate message

#### Throws

When administration IDs cannot be retrieved
