[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreGetByNameParams

# Interface: FirestoreGetByNameParams

Defined in: [packages/core/src/types/firestore/params/administration.params.ts:9](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/administration.params.ts#L9)

Interface extending GetByNameParams for Firestore specific operations.
Adds optional select parameter to specify which fields to retrieve.

## Extends

- [`GetByNameParams`](GetByNameParams.md)

## Properties

### limit?

> `optional` **limit**: `number`

Defined in: [packages/core/src/repositories/base/administration.base.repository.interface.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/administration.base.repository.interface.ts#L13)

Optional limit for the number of results

#### Inherited from

[`GetByNameParams`](GetByNameParams.md).[`limit`](GetByNameParams.md#limit)

***

### name

> **name**: `string`

Defined in: [packages/core/src/repositories/base/administration.base.repository.interface.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/administration.base.repository.interface.ts#L12)

The name to search for

#### Inherited from

[`GetByNameParams`](GetByNameParams.md).[`name`](GetByNameParams.md#name)

***

### select?

> `optional` **select**: `string` \| `FieldPath`

Defined in: [packages/core/src/types/firestore/params/administration.params.ts:10](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/administration.params.ts#L10)

Optional field path or string to specify which fields to retrieve.

#### Overrides

[`GetByNameParams`](GetByNameParams.md).[`select`](GetByNameParams.md#select)
