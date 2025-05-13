[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / createAdministrationService

# Function: createAdministrationService()

```ts
function createAdministrationService<AdminRepo, OrgRepo, UserClaimRepo>(
  params: CreateAdministrationServiceParams<AdminRepo, OrgRepo, UserClaimRepo>,
): AdministrationService;
```

Defined in: [src/services/createAdministrationService.service.ts:32](src/src/services/createAdministrationService.service.ts#32)

Creates an instance of the Administration service.

## Type Parameters

| Type Parameter                                                                                        | Description                                 |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `AdminRepo` _extends_ [`AdministrationBaseRepository`](../interfaces/AdministrationBaseRepository.md) | Type extending AdministrationBaseRepository |
| `OrgRepo` _extends_ [`OrgBaseRepository`](../interfaces/OrgBaseRepository.md)                         | Type extending OrgBaseRepository            |
| `UserClaimRepo` _extends_ [`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md)       | Type extending UserClaimBaseRepository      |

## Parameters

| Parameter | Type                                                                                                                                 | Description                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| `params`  | [`CreateAdministrationServiceParams`](../interfaces/CreateAdministrationServiceParams.md)\<`AdminRepo`, `OrgRepo`, `UserClaimRepo`\> | Service configuration parameters |

## Returns

[`AdministrationService`](../interfaces/AdministrationService.md)

Configured AdministrationService instance

## See

- [AdministrationService](../interfaces/AdministrationService.md) - The service interface.
- [AdministrationBaseRepository](../interfaces/AdministrationBaseRepository.md) - The base repository interface for administration operations.
- [OrgBaseRepository](../interfaces/OrgBaseRepository.md) - The base repository interface for organization operations.
- [UserClaimBaseRepository](../interfaces/UserClaimBaseRepository.md) - The base repository interface for user claim operations.
- [AdministrationService](../interfaces/AdministrationService.md) - Service interface.
- [CreateAdministrationServiceParams](../interfaces/CreateAdministrationServiceParams.md) - Parameter interface.
