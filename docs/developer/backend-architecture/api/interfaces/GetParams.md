[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetParams

# Interface: GetParams

Defined in: [src/repositories/base/base.repository.interface.ts:12](src/src/repositories/base/base.repository.interface.ts#12)

Parameters for retrieving data from a repository.
If id is provided, retrieve a specific entity.
If filters are provided, retrieve entities that match the filters.
If transaction is provided, execute the operation within the transaction.
If limit is provided, limit the number of results.
If select is provided, select specific fields from the entities.

## Extended by

- [`FirestoreGetParams`](FirestoreGetParams.md)

## Properties

| Property                                | Type                                            | Description                                     | Defined in                                                                                                         |
| --------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="id"></a> `id?`                   | `string`                                        | ID for specific entity retrieval.               | [src/repositories/base/base.repository.interface.ts:14](src/src/repositories/base/base.repository.interface.ts#14) |
| <a id="filters"></a> `filters?`         | [`BaseFilter`](../type-aliases/BaseFilter.md)[] | Filters for entity retrieval.                   | [src/repositories/base/base.repository.interface.ts:17](src/src/repositories/base/base.repository.interface.ts#17) |
| <a id="transaction"></a> `transaction?` | `unknown`                                       | Optional transaction context for the operation. | [src/repositories/base/base.repository.interface.ts:20](src/src/repositories/base/base.repository.interface.ts#20) |
| <a id="limit"></a> `limit?`             | `number`                                        | Optional limit for the number of results.       | [src/repositories/base/base.repository.interface.ts:23](src/src/repositories/base/base.repository.interface.ts#23) |
| <a id="select"></a> `select?`           | `unknown`                                       | Optional fields to select from the entities.    | [src/repositories/base/base.repository.interface.ts:26](src/src/repositories/base/base.repository.interface.ts#26) |
