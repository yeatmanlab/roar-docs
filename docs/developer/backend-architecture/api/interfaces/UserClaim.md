[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / UserClaim

# Interface: UserClaim

Defined in: [packages/core/src/models/userClaim.model.ts:36](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L36)

An interface representing a user's claims.
This interface is used to define the structure of a user's claims object.
UserClaim

## See

[Claims](Claims.md)

## Extends

- [`Claims`](Claims.md)

## Properties

### adminOrgs?

> `optional` **adminOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/userClaim.model.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L18)

The organizations the user is an admin of.

#### Inherited from

[`Claims`](Claims.md).[`adminOrgs`](Claims.md#adminorgs)

---

### minimalAdminOrgs?

> `optional` **minimalAdminOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/userClaim.model.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L19)

#### Inherited from

[`Claims`](Claims.md).[`minimalAdminOrgs`](Claims.md#minimaladminorgs)

---

### adminUid

> **adminUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L20)

The user ID of the admin.

#### Inherited from

[`Claims`](Claims.md).[`adminUid`](Claims.md#adminuid)

---

### assessmentUid

> **assessmentUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:21](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L21)

The user ID of the assessment.

#### Inherited from

[`Claims`](Claims.md).[`assessmentUid`](Claims.md#assessmentuid)

---

### roarUid

> **roarUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:22](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L22)

The user ID of the ROAR.

#### Inherited from

[`Claims`](Claims.md).[`roarUid`](Claims.md#roaruid)

---

### super_admin?

> `optional` **super_admin**: `boolean`

Defined in: [packages/core/src/models/userClaim.model.ts:23](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L23)

A boolean indicating whether the user is a super admin.

#### Inherited from

[`Claims`](Claims.md).[`super_admin`](Claims.md#super_admin)

---

### role

> **role**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:24](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L24)

The role of the user.

#### Inherited from

[`Claims`](Claims.md).[`role`](Claims.md#role)

---

### claims

> **claims**: [`Claims`](Claims.md)

Defined in: [packages/core/src/models/userClaim.model.ts:37](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L37)

The user's claims.

---

### lastUpdated

> **lastUpdated**: `number`

Defined in: [packages/core/src/models/userClaim.model.ts:38](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L38)

The timestamp of the last update.

---

### testData

> **testData**: `boolean`

Defined in: [packages/core/src/models/userClaim.model.ts:39](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L39)

A boolean indicating whether the user contains test data.
