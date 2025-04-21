[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / DeleteParams

# Interface: DeleteParams

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:54](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L54)

Parameters for deleting an entity in a repository.
DeleteParams

## Extended by

- [`FirestoreDeleteParams`](FirestoreDeleteParams.md)

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:55](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L55)

ID of the entity to be deleted.

---

### transaction?

> `optional` **transaction**: `unknown`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:56](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L56)

Optional transaction context.
