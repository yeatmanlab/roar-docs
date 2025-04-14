[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreGetByRoarUidParams

# Interface: FirestoreGetByRoarUidParams

Defined in: [packages/core/src/types/firestore/params/userClaim.params.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/userClaim.params.ts#L11)

Represents parameters for Firestore operations that fetch data by a Roar user ID.
Extends the base GetByRoarUidParams with optional transaction support.

 FirestoreGetByRoarUidParams

## Extends

- [`GetByRoarUidParams`](GetByRoarUidParams.md)

## Properties

### administratorRoarUid

> **administratorRoarUid**: `string`

Defined in: [packages/core/src/repositories/base/userClaim.base.repository.interface.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/userClaim.base.repository.interface.ts#L11)

#### Inherited from

[`GetByRoarUidParams`](GetByRoarUidParams.md).[`administratorRoarUid`](GetByRoarUidParams.md#administratorroaruid)

***

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/userClaim.params.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/userClaim.params.ts#L12)

#### Overrides

[`GetByRoarUidParams`](GetByRoarUidParams.md).[`transaction`](GetByRoarUidParams.md#transaction)
