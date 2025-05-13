[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreIdentityProviderRepositoryError

# Class: FirestoreIdentityProviderRepositoryError

Defined in: [src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:10](src/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#10)

Error handler for Firestore identity provider repository operations.
Provides standardized error messages and handling for common failure scenarios
in identity provider management.

## See

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Base repository error class

## Extends

- [`FirestoreRepositoryError`](FirestoreRepositoryError.md)

## Constructors

### Constructor

```ts
new FirestoreIdentityProviderRepositoryError(message: string, error?: unknown): FirestoreIdentityProviderRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:17](src/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#17)

Creates a new FirestoreIdentityProviderRepositoryError instance.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `message` | `string`  | Error description message        |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreIdentityProviderRepositoryError`

#### Overrides

[`FirestoreRepositoryError`](FirestoreRepositoryError.md).[`constructor`](FirestoreRepositoryError.md#constructor)

## Methods

### noProviderDataError()

```ts
noProviderDataError(error?: unknown): FirestoreIdentityProviderRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:29](src/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#29)

Creates an error instance for provider data retrieval failures.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreIdentityProviderRepositoryError`

New error instance with appropriate message

#### Throws

When provider data cannot be retrieved

---

### getByProviderIdError()

```ts
getByProviderIdError(error?: unknown): FirestoreIdentityProviderRepositoryError;
```

Defined in: [src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts:45](src/src/errors/firestore/FirestoreIdentityProviderRepositoryError.error.ts#45)

Creates an error instance for provider ID lookup failures.

#### Parameters

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| `error?`  | `unknown` | Optional underlying error object |

#### Returns

`FirestoreIdentityProviderRepositoryError`

New error instance with appropriate message

#### Throws

When provider ID lookup fails
