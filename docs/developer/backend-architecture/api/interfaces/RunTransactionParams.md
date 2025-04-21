[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / RunTransactionParams

# Interface: RunTransactionParams\<T\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:64](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L64)

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

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:65](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L65)

Function to be executed within the transaction.

#### Parameters

##### transaction

`any`

#### Returns

`Promise`\<`T`\>
