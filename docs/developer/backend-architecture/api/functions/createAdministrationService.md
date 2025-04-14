[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / createAdministrationService

# Function: createAdministrationService()

> **createAdministrationService**\<`AdminRepo`, `OrgRepo`, `UserClaimRepo`\>(`params`): [`AdministrationService`](../interfaces/AdministrationService.md)

Defined in: [packages/core/src/services/createAdministrationService.service.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/createAdministrationService.service.ts#L18)

Creates an administration service.

## Type Parameters

### AdminRepo

`AdminRepo` *extends* [`AdministrationBaseRepository`](../interfaces/AdministrationBaseRepository.md)

### OrgRepo

`OrgRepo` *extends* [`OrgBaseRepository`](../interfaces/OrgBaseRepository.md)

### UserClaimRepo

`UserClaimRepo` *extends* [`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md)

## Parameters

### params

[`CreateAdministrationServiceParams`](../interfaces/CreateAdministrationServiceParams.md)\<`AdminRepo`, `OrgRepo`, `UserClaimRepo`\>

The parameters to create the administration service.

## Returns

[`AdministrationService`](../interfaces/AdministrationService.md)

The administration service.
