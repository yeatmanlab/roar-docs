[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreGetParams

# Interface: FirestoreGetParams

Defined in: [src/types/firestore/params/base.params.ts:21](src/src/types/firestore/params/base.params.ts#21)

Params for retrieving a document from Firestore.

## Extends

- [`GetParams`](GetParams.md)

## Extended by

- [`FirestoreGetByIdParams`](FirestoreGetByIdParams.md)
- [`FirestoreFetchDocumentParams`](FirestoreFetchDocumentParams.md)
- [`FirestoreGetWithFiltersParams`](FirestoreGetWithFiltersParams.md)

## Properties

| Property                                | Type                    | Description                                          | Overrides                                                             | Defined in                                                                                       |
| --------------------------------------- | ----------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <a id="transaction"></a> `transaction?` | `Transaction`           | Optional transaction instance for atomic operations. | [`GetParams`](GetParams.md).[`transaction`](GetParams.md#transaction) | [src/types/firestore/params/base.params.ts:23](src/src/types/firestore/params/base.params.ts#23) |
| <a id="select"></a> `select?`           | `string` \| `FieldPath` | Optional field or path to select from the document.  | [`GetParams`](GetParams.md).[`select`](GetParams.md#select)           | [src/types/firestore/params/base.params.ts:26](src/src/types/firestore/params/base.params.ts#26) |
