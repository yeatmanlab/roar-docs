[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreUserClaimRepositoryError

# Class: FirestoreUserClaimRepositoryError

Defined in: [src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts:9](src/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts#9)

Error handler for Firestore user claim repository operations.
Manages errors related to user authorization claims and permissions.

## See

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Base repository error class

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

```ts
new FirestoreUserClaimRepositoryError(message: string, error?: unknown): FirestoreUserClaimRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts:16](src/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts#16)

Creates a new FirestoreUserClaimRepositoryError instance.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `message` | `string`  | Error description message        |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreUserClaimRepositoryError`

#### Overrides

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`constructor`](FirestoreRepositoryError.md#constructor)

## Methods

### getByRoarUidError()

```ts
getByRoarUidError(): FirestoreUserClaimRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts:27](src/src/errors/firestore/FirestoreUserClaimRepositoryError.error.ts#27)

Creates an error instance for ROAR UID claim lookup failures.

#### Returns

`FirestoreUserClaimRepositoryError`

New error instance with appropriate message

#### Throws

When user claims cannot be retrieved
