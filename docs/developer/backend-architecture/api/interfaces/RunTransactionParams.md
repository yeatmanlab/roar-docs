[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / RunTransactionParams

# Interface: RunTransactionParams\<T\>

Defined in: [src/repositories/base/base.repository.interface.ts:73](src/src/repositories/base/base.repository.interface.ts#73)

Parameters for running a transaction in a repository.

## Extended by

- [`FirestoreRunTransactionParams`](FirestoreRunTransactionParams.md)

## Type Parameters

| Type Parameter | Description                                  |
| -------------- | -------------------------------------------- |
| `T`            | The type of entity managed by the repository |

## Properties

| Property             | Type                                         | Description                                     | Defined in                                                                                                         |
| -------------------- | -------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="fn"></a> `fn` | (`transaction`: `any`) => `Promise`\<`any`\> | Function to be executed within the transaction. | [src/repositories/base/base.repository.interface.ts:75](src/src/repositories/base/base.repository.interface.ts#75) |
