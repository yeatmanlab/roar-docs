[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / CreateParams

# Interface: CreateParams

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:30](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L30)

Parameters for creating a new entity in a repository.
 CreateParams

## Extended by

- [`FirestoreCreateParams`](FirestoreCreateParams.md)

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:31](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L31)

Optional data for the entity to be created.

***

### transaction?

> `optional` **transaction**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:32](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L32)

Optional transaction context.
