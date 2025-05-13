[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / OrgBaseRepository

# Interface: OrgBaseRepository

Defined in: [src/repositories/base/org.base.repository.interface.ts:37](src/src/repositories/base/org.base.repository.interface.ts#37)

Repository interface for organization operations.
Extends the base repository with organization-specific queries.

## See

- [BaseRepository](BaseRepository.md) - Base repository functionality.
- [OrgBase](OrgBase.md) - Organization entity structure.
- [OrgsList](OrgsList.md) - Organization hierarchical structure.
- [GetAdministrationIdsFromOrgsParams](GetAdministrationIdsFromOrgsParams.md) - Parameters for retrieving administration IDs associated with organizations.

## Extends

- [`BaseRepository`](BaseRepository.md)\<[`OrgBase`](OrgBase.md)\>

## Methods

### getAdministrationIdsFromOrgs()

```ts
getAdministrationIdsFromOrgs(params: GetAdministrationIdsFromOrgsParams): Promise<string[]>;
```

Defined in: [src/repositories/base/org.base.repository.interface.ts:44](src/src/repositories/base/org.base.repository.interface.ts#44)

Retrieves administration IDs associated with specified organizations.

#### Parameters

| Parameter | Type                                                                          | Description                                      |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| `params`  | [`GetAdministrationIdsFromOrgsParams`](GetAdministrationIdsFromOrgsParams.md) | Query parameters including org list and filters. |

#### Returns

`Promise`\<`string`[]\>

Promise resolving to array of administration IDs.
