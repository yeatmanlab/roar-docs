[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / CreateAdministrationServiceParams

# Interface: CreateAdministrationServiceParams\<AdminRepo, OrgRepo, UserClaimRepo\>

Defined in: [src/services/administration.service.interface.ts:36](src/src/services/administration.service.interface.ts#36)

Parameters for creating an Administration service instance.

## See

- [AdministrationBaseRepository](AdministrationBaseRepository.md)
- [OrgBaseRepository](OrgBaseRepository.md)
- [UserClaimBaseRepository](UserClaimBaseRepository.md)

## Type Parameters

| Type Parameter                                                                          | Description                                  |
| --------------------------------------------------------------------------------------- | -------------------------------------------- |
| `AdminRepo` _extends_ [`AdministrationBaseRepository`](AdministrationBaseRepository.md) | Type extending AdministrationBaseRepository. |
| `OrgRepo` _extends_ [`OrgBaseRepository`](OrgBaseRepository.md)                         | Type extending OrgBaseRepository.            |
| `UserClaimRepo` _extends_ [`UserClaimBaseRepository`](UserClaimBaseRepository.md)       | Type extending UserClaimBaseRepository.      |

## Properties

| Property                                                         | Type            | Description                                      | Defined in                                                                                                     |
| ---------------------------------------------------------------- | --------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| <a id="administrationrepository"></a> `administrationRepository` | `AdminRepo`     | Repository for managing administration entities. | [src/services/administration.service.interface.ts:42](src/src/services/administration.service.interface.ts#42) |
| <a id="orgrepository"></a> `orgRepository`                       | `OrgRepo`       | Repository for managing organization entities.   | [src/services/administration.service.interface.ts:45](src/src/services/administration.service.interface.ts#45) |
| <a id="userclaimrepository"></a> `userClaimRepository`           | `UserClaimRepo` | Repository for managing user claim entities.     | [src/services/administration.service.interface.ts:48](src/src/services/administration.service.interface.ts#48) |
