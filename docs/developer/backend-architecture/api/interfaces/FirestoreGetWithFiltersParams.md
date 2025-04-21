[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreGetWithFiltersParams

# Interface: FirestoreGetWithFiltersParams

Defined in: [packages/core/src/types/firestore/params/base.params.ts:57](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L57)

Params for retrieving documents with filters from Firestore.
FirestoreGetWithFiltersParams

## Extends

- [`FirestoreGetParams`](FirestoreGetParams.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L14)

Optional ID for specific entity retrieval.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`id`](FirestoreGetParams.md#id)

---

### limit?

> `optional` **limit**: `number`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L17)

Optional limit on the number of results.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`limit`](FirestoreGetParams.md#limit)

---

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L26)

Optional transaction instance for atomic operations.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`transaction`](FirestoreGetParams.md#transaction)

---

### select?

> `optional` **select**: `string` \| `FieldPath`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L27)

Optional field or path to select from the document.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`select`](FirestoreGetParams.md#select)

---

### collection?

> `optional` **collection**: `CollectionReference`\<`DocumentData`, `DocumentData`\>

Defined in: [packages/core/src/types/firestore/params/base.params.ts:58](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L58)

Optional collection reference to query.

---

### filters

> **filters**: [`BaseFilter`](../type-aliases/BaseFilter.md)[]

Defined in: [packages/core/src/types/firestore/params/base.params.ts:59](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L59)

Array of filters to apply to the query.

#### Overrides

[`FirestoreGetParams`](FirestoreGetParams.md).[`filters`](FirestoreGetParams.md#filters)
