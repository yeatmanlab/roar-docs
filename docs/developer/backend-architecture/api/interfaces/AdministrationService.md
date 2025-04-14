[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / AdministrationService

# Interface: AdministrationService

Defined in: [packages/core/src/services/administration.service.interface.ts:59](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L59)

An interface representing the administration service.
This interface is used to define the higher order operations that can be performed on administrations.

## Methods

### getAdministrationIdsForAdministrator()

> **getAdministrationIdsForAdministrator**(`params`): `Promise`\<`string`[]\>

Defined in: [packages/core/src/services/administration.service.interface.ts:83](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L83)

Retrieves the administration IDs for the specified administrator.

#### Parameters

##### params

[`GetAdministrationIdsForAdministratorParams`](GetAdministrationIdsForAdministratorParams.md)

The parameters to retrieve the administration IDs for the specified administrator.

#### Returns

`Promise`\<`string`[]\>

The administration IDs for the specified administrator.

***

### getAdministrationIdsFromOrgs()

> **getAdministrationIdsFromOrgs**(`params`): `Promise`\<`string`[]\>

Defined in: [packages/core/src/services/administration.service.interface.ts:70](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L70)

Retrieves the administration IDs for the specified orgs.

#### Parameters

##### params

[`GetAdministrationIdsFromOrgsParams`](GetAdministrationIdsFromOrgsParams-1.md)

The parameters to retrieve the administration IDs for the specified orgs.

#### Returns

`Promise`\<`string`[]\>

The administration IDs for the specified orgs.
