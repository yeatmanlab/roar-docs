[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreRunTransactionParams

# Interface: FirestoreRunTransactionParams\<T\>

Defined in: [src/types/firestore/params/base.params.ts:98](src/src/types/firestore/params/base.params.ts#98)

Params for running a transaction in Firestore.

## Extends

- [`RunTransactionParams`](RunTransactionParams.md)\<`T`\>

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

## Properties

| Property             | Type                                               | Description                                     | Overrides                                                                            | Defined in                                                                                         |
| -------------------- | -------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| <a id="fn"></a> `fn` | (`transaction`: `Transaction`) => `Promise`\<`T`\> | The function to execute within the transaction. | [`RunTransactionParams`](RunTransactionParams.md).[`fn`](RunTransactionParams.md#fn) | [src/types/firestore/params/base.params.ts:101](src/src/types/firestore/params/base.params.ts#101) |
