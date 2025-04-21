[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / UpdateParams

# Interface: UpdateParams

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:42](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L42)

Parameters for updating an entity in a repository.
UpdateParams

## Extended by

- [`FirestoreUpdateParams`](FirestoreUpdateParams.md)

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:43](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L43)

ID of the entity to be updated.

---

### data

> **data**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:44](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L44)

Data for the entity to be updated.

---

### transaction?

> `optional` **transaction**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:45](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L45)

Optional transaction context.
