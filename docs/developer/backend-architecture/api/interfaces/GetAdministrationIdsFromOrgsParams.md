[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetAdministrationIdsFromOrgsParams

# Interface: GetAdministrationIdsFromOrgsParams

Defined in: [src/repositories/base/org.base.repository.interface.ts:7](src/src/repositories/base/org.base.repository.interface.ts#7)

Parameters for retrieving administration IDs associated with organizations.

## Properties

| Property                                                                    | Type                      | Description                                                                                  | Defined in                                                                                                                 |
| --------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <a id="orgs"></a> `orgs`                                                    | [`OrgsList`](OrgsList.md) | Hierarchical list of organizations to query.                                                 | [src/repositories/base/org.base.repository.interface.ts:9](src/src/repositories/base/org.base.repository.interface.ts#9)   |
| <a id="transaction"></a> `transaction?`                                     | `any`                     | Optional transaction for atomic operations.                                                  | [src/repositories/base/org.base.repository.interface.ts:12](src/src/repositories/base/org.base.repository.interface.ts#12) |
| <a id="restricttoopenadministrations"></a> `restrictToOpenAdministrations?` | `boolean`                 | Whether to only include currently open administrations.                                      | [src/repositories/base/org.base.repository.interface.ts:15](src/src/repositories/base/org.base.repository.interface.ts#15) |
| <a id="testdata"></a> `testData?`                                           | `null` \| `boolean`       | Filter for test data: - true: only test data - false: exclude test data - null: include both | [src/repositories/base/org.base.repository.interface.ts:22](src/src/repositories/base/org.base.repository.interface.ts#22) |
| <a id="verbose"></a> `verbose?`                                             | `null` \| `boolean`       | Whether to include verbose output.                                                           | [src/repositories/base/org.base.repository.interface.ts:25](src/src/repositories/base/org.base.repository.interface.ts#25) |
