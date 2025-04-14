[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / UpdateParams

# Interface: UpdateParams

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:42](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L42)

Parameters for updating an entity in a repository.
 UpdateParams

## Extended by

- [`FirestoreUpdateParams`](FirestoreUpdateParams.md)

## Properties

### data

> **data**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:44](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L44)

Data for the entity to be updated.

***

### id

> **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:43](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L43)

ID of the entity to be updated.

***

### transaction?

> `optional` **transaction**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:45](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L45)

Optional transaction context.
