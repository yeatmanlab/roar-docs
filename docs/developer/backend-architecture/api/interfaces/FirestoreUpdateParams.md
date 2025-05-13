[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreUpdateParams

# Interface: FirestoreUpdateParams

Defined in: [src/types/firestore/params/base.params.ts:79](src/src/types/firestore/params/base.params.ts#79)

Params for updating a document in Firestore.

## Extends

- [`UpdateParams`](UpdateParams.md)

## Properties

| Property                                | Type           | Description                                          | Overrides                                                                      | Defined in                                                                                       |
| --------------------------------------- | -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| <a id="data"></a> `data`                | `DocumentData` | The data to update in the document.                  | [`UpdateParams`](UpdateParams.md).[`data`](UpdateParams.md#data)               | [src/types/firestore/params/base.params.ts:81](src/src/types/firestore/params/base.params.ts#81) |
| <a id="transaction"></a> `transaction?` | `Transaction`  | Optional transaction instance for atomic operations. | [`UpdateParams`](UpdateParams.md).[`transaction`](UpdateParams.md#transaction) | [src/types/firestore/params/base.params.ts:84](src/src/types/firestore/params/base.params.ts#84) |
