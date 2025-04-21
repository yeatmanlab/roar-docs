[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / getAdministrationIdsFromOrgsParams

# Interface: getAdministrationIdsFromOrgsParams

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/org.base.repository.interface.ts#L12)

Parameters for retrieving administration IDs from organizations
getAdministrationIdsFromOrgsParams

## Properties

### orgs

> **orgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/org.base.repository.interface.ts#L13)

List of organizations to retrieve administration IDs from

---

### transaction?

> `optional` **transaction**: `any`

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/org.base.repository.interface.ts#L14)

Transaction object for database operations

---

### restrictToOpenAdministrations?

> `optional` **restrictToOpenAdministrations**: `boolean`

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/org.base.repository.interface.ts#L15)

Restrict to open administrations only

---

### testData?

> `optional` **testData**: `null` \| `boolean`

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:16](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/org.base.repository.interface.ts#L16)

Flag indicating whether to use test data
