[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreDeleteParams

# Interface: FirestoreDeleteParams

Defined in: [packages/core/src/types/firestore/params/base.params.ts:102](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/base.params.ts#L102)

Params for deleting a document from Firestore.
 FirestoreDeleteParams

## Extends

- [`DeleteParams`](DeleteParams.md)

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:55](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L55)

ID of the entity to be deleted.

#### Inherited from

[`DeleteParams`](DeleteParams.md).[`id`](DeleteParams.md#id)

***

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:103](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/base.params.ts#L103)

Optional transaction instance for atomic operations.

#### Overrides

[`DeleteParams`](DeleteParams.md).[`transaction`](DeleteParams.md#transaction)
