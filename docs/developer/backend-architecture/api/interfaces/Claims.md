[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Claims

# Interface: Claims

Defined in: [packages/core/src/models/userClaim.model.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L17)

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

Defined in: [packages/core/src/models/userClaim.model.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L18)

The organizations the user is an admin of.

---

### minimalAdminOrgs?

> `optional` **minimalAdminOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/userClaim.model.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L19)

---

### adminUid

> **adminUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L20)

The user ID of the admin.

---

### assessmentUid

> **assessmentUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:21](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L21)

The user ID of the assessment.

---

### roarUid

> **roarUid**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:22](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L22)

The user ID of the ROAR.

---

### super_admin?

> `optional` **super_admin**: `boolean`

Defined in: [packages/core/src/models/userClaim.model.ts:23](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L23)

A boolean indicating whether the user is a super admin.

---

### role

> **role**: `string`

Defined in: [packages/core/src/models/userClaim.model.ts:24](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/userClaim.model.ts#L24)

The role of the user.
