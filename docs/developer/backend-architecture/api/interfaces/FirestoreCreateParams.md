[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreCreateParams

# Interface: FirestoreCreateParams

Defined in: [src/types/firestore/params/base.params.ts:68](src/src/types/firestore/params/base.params.ts#68)

Params for creating a new document in Firestore.
If no data is provided, a new document will be created with a generated ID.

## Extends

- [`CreateParams`](CreateParams.md)

## Properties

| Property                                | Type           | Description                                          | Overrides                                                                      | Defined in                                                                                       |
| --------------------------------------- | -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| <a id="data"></a> `data?`               | `DocumentData` | Optional data to be stored in the document.          | [`CreateParams`](CreateParams.md).[`data`](CreateParams.md#data)               | [src/types/firestore/params/base.params.ts:70](src/src/types/firestore/params/base.params.ts#70) |
| <a id="transaction"></a> `transaction?` | `Transaction`  | Optional transaction instance for atomic operations. | [`CreateParams`](CreateParams.md).[`transaction`](CreateParams.md#transaction) | [src/types/firestore/params/base.params.ts:73](src/src/types/firestore/params/base.params.ts#73) |
