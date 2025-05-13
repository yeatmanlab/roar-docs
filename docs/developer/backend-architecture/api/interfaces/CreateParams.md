[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / CreateParams

# Interface: CreateParams

Defined in: [src/repositories/base/base.repository.interface.ts:36](src/src/repositories/base/base.repository.interface.ts#36)

Parameters for creating a new entity in a repository.
If no data is provided, a new entity will be created with a generated ID.

## Extended by

- [`FirestoreCreateParams`](FirestoreCreateParams.md)

## Properties

| Property                                | Type      | Description                                     | Defined in                                                                                                         |
| --------------------------------------- | --------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="data"></a> `data?`               | `unknown` | Optional data for the entity to be created.     | [src/repositories/base/base.repository.interface.ts:38](src/src/repositories/base/base.repository.interface.ts#38) |
| <a id="transaction"></a> `transaction?` | `unknown` | Optional transaction context for the operation. | [src/repositories/base/base.repository.interface.ts:41](src/src/repositories/base/base.repository.interface.ts#41) |
