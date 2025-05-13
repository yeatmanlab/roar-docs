[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreGetByNameParams

# Interface: FirestoreGetByNameParams

Defined in: [src/types/firestore/params/administration.params.ts:8](src/src/types/firestore/params/administration.params.ts#8)

Interface extending GetByNameParams for Firestore specific operations.
Adds optional select parameter to specify which fields to retrieve.

## Extends

- [`GetByNameParams`](GetByNameParams.md)

## Properties

| Property                      | Type                    | Description                                                        | Overrides                                                                     | Defined in                                                                                                           |
| ----------------------------- | ----------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <a id="select"></a> `select?` | `string` \| `FieldPath` | Optional field path or string to specify which fields to retrieve. | [`GetByNameParams`](GetByNameParams.md).[`select`](GetByNameParams.md#select) | [src/types/firestore/params/administration.params.ts:10](src/src/types/firestore/params/administration.params.ts#10) |
