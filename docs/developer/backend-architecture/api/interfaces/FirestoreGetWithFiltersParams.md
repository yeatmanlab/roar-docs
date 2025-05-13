[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreGetWithFiltersParams

# Interface: FirestoreGetWithFiltersParams

Defined in: [src/types/firestore/params/base.params.ts:48](src/src/types/firestore/params/base.params.ts#48)

Params for retrieving documents with filters from Firestore.

## Extends

- [`FirestoreGetParams`](FirestoreGetParams.md)

## Properties

| Property                              | Type                                                    | Description                             | Overrides                    | Defined in                                                                                       |
| ------------------------------------- | ------------------------------------------------------- | --------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| <a id="collection"></a> `collection?` | `CollectionReference`\<`DocumentData`, `DocumentData`\> | Optional collection reference to query. | -                            | [src/types/firestore/params/base.params.ts:50](src/src/types/firestore/params/base.params.ts#50) |
| <a id="filters"></a> `filters`        | [`BaseFilter`](../type-aliases/BaseFilter.md)[]         | Filters to apply to the query.          | `FirestoreGetParams.filters` | [src/types/firestore/params/base.params.ts:53](src/src/types/firestore/params/base.params.ts#53) |
