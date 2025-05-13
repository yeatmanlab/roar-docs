[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / DeleteParams

# Interface: DeleteParams

Defined in: [src/repositories/base/base.repository.interface.ts:61](src/src/repositories/base/base.repository.interface.ts#61)

Parameters for deleting an entity in a repository.

## Extended by

- [`FirestoreDeleteParams`](FirestoreDeleteParams.md)

## Properties

| Property                                | Type      | Description                                     | Defined in                                                                                                         |
| --------------------------------------- | --------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="id"></a> `id`                    | `string`  | ID of the entity to be deleted.                 | [src/repositories/base/base.repository.interface.ts:63](src/src/repositories/base/base.repository.interface.ts#63) |
| <a id="transaction"></a> `transaction?` | `unknown` | Optional transaction context for the operation. | [src/repositories/base/base.repository.interface.ts:66](src/src/repositories/base/base.repository.interface.ts#66) |
