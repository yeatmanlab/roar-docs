[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / GetAdministrationIdsFromOrgsParams

# Interface: GetAdministrationIdsFromOrgsParams

Defined in: [packages/core/src/services/administration.service.interface.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L15)

The parameters for the getAdministrationsFromOrgs method.

## Param

The orgs to retrieve the administrations for.

## Param

The transaction to use for the operation.

## Param

Whether to restrict the administrations to open administrations.

## Param

Whether to use test data.

## Param

Whether to log verbose output.

## Properties

### orgs

> **orgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/services/administration.service.interface.ts:16](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L16)

***

### restrictToOpenAdministrations?

> `optional` **restrictToOpenAdministrations**: `boolean`

Defined in: [packages/core/src/services/administration.service.interface.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L18)

***

### testData?

> `optional` **testData**: `null` \| `boolean`

Defined in: [packages/core/src/services/administration.service.interface.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L19)

***

### transaction?

> `optional` **transaction**: `Function`

Defined in: [packages/core/src/services/administration.service.interface.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L17)

***

### verbose?

> `optional` **verbose**: `boolean`

Defined in: [packages/core/src/services/administration.service.interface.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/administration.service.interface.ts#L20)
