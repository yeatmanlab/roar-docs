[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / UserClaimBaseRepository

# Interface: UserClaimBaseRepository

Defined in: [src/repositories/base/userClaim.base.repository.interface.ts:24](src/src/repositories/base/userClaim.base.repository.interface.ts#24)

Repository interface for managing user claims.
Extends the base repository with claim-specific operations.

## See

- [BaseRepository](BaseRepository.md) - Base repository functionality.
- [UserClaim](UserClaim.md) - User claim entity structure.
- [GetByRoarUidParams](GetByRoarUidParams.md) - Parameters for retrieving user claims by ROAR user identifier.

## Extends

- [`BaseRepository`](BaseRepository.md)\<[`UserClaim`](UserClaim.md)\>

## Methods

### getByRoarUid()

```ts
getByRoarUid(params: GetByRoarUidParams): Promise<Result<UserClaim>>;
```

Defined in: [src/repositories/base/userClaim.base.repository.interface.ts:31](src/src/repositories/base/userClaim.base.repository.interface.ts#31)

Retrieves a user's claims using their ROAR system identifier.

#### Parameters

| Parameter | Type                                          | Description                                                   |
| --------- | --------------------------------------------- | ------------------------------------------------------------- |
| `params`  | [`GetByRoarUidParams`](GetByRoarUidParams.md) | Query parameters including ROAR UID and optional transaction. |

#### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

Promise resolving to the user's user claims data.
