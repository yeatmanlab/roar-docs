[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreUserRepositoryError

# Class: FirestoreUserRepositoryError

Defined in: [src/errors/firestore/FirestoreUserRepositoryError.error.ts:9](src/src/errors/firestore/FirestoreUserRepositoryError.error.ts#9)

Error handler for Firestore user repository operations.
Provides specific error identification for user profile management.

## See

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Base repository error class

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

```ts
new FirestoreUserRepositoryError(message: string, error?: unknown): FirestoreUserRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreUserRepositoryError.error.ts:16](src/src/errors/firestore/FirestoreUserRepositoryError.error.ts#16)

Creates a new FirestoreUserRepositoryError instance.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `message` | `string`  | Error description message        |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreUserRepositoryError`

#### Overrides

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`constructor`](FirestoreRepositoryError.md#constructor)
