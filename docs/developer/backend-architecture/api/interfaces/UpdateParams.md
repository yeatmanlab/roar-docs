[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / UpdateParams

# Interface: UpdateParams

Defined in: [src/repositories/base/base.repository.interface.ts:47](src/src/repositories/base/base.repository.interface.ts#47)

Parameters for updating an entity in a repository.

## Extended by

- [`FirestoreUpdateParams`](FirestoreUpdateParams.md)

## Properties

| Property                                | Type      | Description                                     | Defined in                                                                                                         |
| --------------------------------------- | --------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="id"></a> `id`                    | `string`  | ID of the entity to be updated.                 | [src/repositories/base/base.repository.interface.ts:49](src/src/repositories/base/base.repository.interface.ts#49) |
| <a id="data"></a> `data`                | `unknown` | Data for the entity to be updated.              | [src/repositories/base/base.repository.interface.ts:52](src/src/repositories/base/base.repository.interface.ts#52) |
| <a id="transaction"></a> `transaction?` | `unknown` | Optional transaction context for the operation. | [src/repositories/base/base.repository.interface.ts:55](src/src/repositories/base/base.repository.interface.ts#55) |
