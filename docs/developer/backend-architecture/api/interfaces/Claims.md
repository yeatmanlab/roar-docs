[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / Claims

# Interface: Claims

Defined in: [packages/core/src/models/userClaim.model.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L17)

An interface representing a user's claims.
This interface is used to define the structure of a user's claims object.
 Claims

## See

 - [OrgsList](OrgsList.md)
 - [UserClaim](UserClaim.md)

## Extended by

- [`UserClaim`](UserClaim.md)

## Properties

### adminOrgs?

> `optional` **adminOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/userClaim.model.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L18)

The organizations the user is an admin of.

***

### adminUid

> **adminUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L20)

The user ID of the admin.

***

### assessmentUid

> **assessmentUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:21](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L21)

The user ID of the assessment.

***

### minimalAdminOrgs?

> `optional` **minimalAdminOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/userClaim.model.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L19)

***

### roarUid

> **roarUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:22](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L22)

The user ID of the ROAR.

***

### role

> **role**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:24](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L24)

The role of the user.

***

### super\_admin?

> `optional` **super\_admin**: `boolean`

Defined in: [packages/core/src/models/userClaim.model.ts:23](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/userClaim.model.ts#L23)

A boolean indicating whether the user is a super admin.
