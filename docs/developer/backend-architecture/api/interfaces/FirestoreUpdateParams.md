[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreUpdateParams

# Interface: FirestoreUpdateParams

Defined in: [packages/core/src/types/firestore/params/base.params.ts:91](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L91)

Params for updating a document in Firestore.
FirestoreUpdateParams

## Extends

- [`UpdateParams`](UpdateParams.md)

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:43](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L43)

ID of the entity to be updated.

#### Inherited from

[`UpdateParams`](UpdateParams.md).[`id`](UpdateParams.md#id)

---

### data

> **data**: `DocumentData`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:92](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L92)

The data to update in the document.

#### Overrides

[`UpdateParams`](UpdateParams.md).[`data`](UpdateParams.md#data)

---

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:93](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L93)

Optional transaction instance for atomic operations.

#### Overrides

[`UpdateParams`](UpdateParams.md).[`transaction`](UpdateParams.md#transaction)
