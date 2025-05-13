[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreUserClaimRepository

# Class: FirestoreUserClaimRepository

Defined in: [src/repositories/firestore/FirestoreUserClaimRepository.repository.firestore.ts:20](src/src/repositories/firestore/FirestoreUserClaimRepository.repository.firestore.ts#20)

Repository class for managing user claims in Firestore.

This class extends FirestoreRepository to provide specialized functionality
for working with user claims. It provides methods to retrieve user claims
based on their ROAR user ID.

## Extends

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md)\<[`UserClaim`](../interfaces/UserClaim.md)\>

## Implements

- [`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md)

## Constructors

### Constructor

```ts
new FirestoreUserClaimRepository(): FirestoreUserClaimRepository;
```

Defined in: [src/repositories/firestore/FirestoreUserClaimRepository.repository.firestore.ts:30](src/src/repositories/firestore/FirestoreUserClaimRepository.repository.firestore.ts#30)

Create a new FirestoreUserClaimRepository instance.
Uses default values for Firestore client and collection configuration.

#### Returns

`FirestoreUserClaimRepository`

#### See

- [FirestoreBaseRepository](FirestoreBaseRepository.md)
- [UserClaimBaseRepository](../interfaces/UserClaimBaseRepository.md)

#### Overrides

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`constructor`](FirestoreBaseRepository.md#constructor)

## Methods

### getByRoarUid()

```ts
getByRoarUid(params: FirestoreGetByRoarUidParams): Promise<Result<UserClaim>>;
```

Defined in: [src/repositories/firestore/FirestoreUserClaimRepository.repository.firestore.ts:41](src/src/repositories/firestore/FirestoreUserClaimRepository.repository.firestore.ts#41)

Get user claims by roarUid.

#### Parameters

| Parameter | Type                                                                          | Description                              |
| --------- | ----------------------------------------------------------------------------- | ---------------------------------------- |
| `params`  | [`FirestoreGetByRoarUidParams`](../interfaces/FirestoreGetByRoarUidParams.md) | The GetUserClaimsByRoarUidParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`UserClaim`](../interfaces/UserClaim.md)\>\>

The user claims object.

#### Throws

[FirestoreUserClaimRepositoryError](FirestoreUserClaimRepositoryError.md) - If there was an error attempting to retrieve a user by ROAR Uid.

#### See

[FirestoreGetByRoarUidParams](../interfaces/FirestoreGetByRoarUidParams.md) - Parameters for retrieving user claims by ROAR user ID.

#### Implementation of

[`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md).[`getByRoarUid`](../interfaces/UserClaimBaseRepository.md#getbyroaruid)
