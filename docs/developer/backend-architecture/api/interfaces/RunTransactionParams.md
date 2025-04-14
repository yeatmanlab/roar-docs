[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / RunTransactionParams

# Interface: RunTransactionParams\<T\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:64](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L64)

Parameters for running a transaction in a repository.
 RunTransactionParams

## Extended by

- [`FirestoreRunTransactionParams`](FirestoreRunTransactionParams.md)

## Type Parameters

### T

`T`

## Properties

### fn()

> **fn**: (`transaction`) => `Promise`\<`T`\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:65](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L65)

Function to be executed within the transaction.

#### Parameters

##### transaction

`any`

#### Returns

`Promise`\<`T`\>
