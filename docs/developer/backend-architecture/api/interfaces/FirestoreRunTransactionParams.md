[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreRunTransactionParams

# Interface: FirestoreRunTransactionParams\<T\>

Defined in: [packages/core/src/types/firestore/params/base.params.ts:112](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L112)

Params for running a transaction in Firestore.
FirestoreRunTransactionParams

## Extends

- [`RunTransactionParams`](RunTransactionParams.md)\<`T`\>

## Type Parameters

### T

`T`

## Properties

### fn()

> **fn**: (`transaction`) => `Promise`\<`T`\>

Defined in: [packages/core/src/types/firestore/params/base.params.ts:114](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L114)

Function to be executed within the transaction.

#### Parameters

##### transaction

`Transaction`

#### Returns

`Promise`\<`T`\>

#### Overrides

[`RunTransactionParams`](RunTransactionParams.md).[`fn`](RunTransactionParams.md#fn)
