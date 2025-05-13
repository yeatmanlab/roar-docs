[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetByNameParams

# Interface: GetByNameParams

Defined in: [src/repositories/base/administration.base.repository.interface.ts:8](src/src/repositories/base/administration.base.repository.interface.ts#8)

Parameters for retrieving administrations by their name.

## Extended by

- [`FirestoreGetByNameParams`](FirestoreGetByNameParams.md)

## Properties

| Property                      | Type      | Description                                | Defined in                                                                                                                                       |
| ----------------------------- | --------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="name"></a> `name`      | `string`  | Name of the administration to search for.  | [src/repositories/base/administration.base.repository.interface.ts:10](src/src/repositories/base/administration.base.repository.interface.ts#10) |
| <a id="limit"></a> `limit?`   | `number`  | Maximum number of results to return.       | [src/repositories/base/administration.base.repository.interface.ts:13](src/src/repositories/base/administration.base.repository.interface.ts#13) |
| <a id="select"></a> `select?` | `unknown` | Specific fields to include in the results. | [src/repositories/base/administration.base.repository.interface.ts:16](src/src/repositories/base/administration.base.repository.interface.ts#16) |
