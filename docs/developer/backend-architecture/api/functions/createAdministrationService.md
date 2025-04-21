[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / createAdministrationService

# Function: createAdministrationService()

> **createAdministrationService**\<`AdminRepo`, `OrgRepo`, `UserClaimRepo`\>(`params`): [`AdministrationService`](../interfaces/AdministrationService.md)

Defined in: [packages/core/src/services/createAdministrationService.service.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/services/createAdministrationService.service.ts#L18)

Creates an administration service.

## Type Parameters

### AdminRepo

`AdminRepo` _extends_ [`AdministrationBaseRepository`](../interfaces/AdministrationBaseRepository.md)

### OrgRepo

`OrgRepo` _extends_ [`OrgBaseRepository`](../interfaces/OrgBaseRepository.md)

### UserClaimRepo

`UserClaimRepo` _extends_ [`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md)

## Parameters

### params

[`CreateAdministrationServiceParams`](../interfaces/CreateAdministrationServiceParams.md)\<`AdminRepo`, `OrgRepo`, `UserClaimRepo`\>

The parameters to create the administration service.

## Returns

[`AdministrationService`](../interfaces/AdministrationService.md)

The administration service.
