[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreGetParams

# Interface: FirestoreGetParams

Defined in: [packages/core/src/types/firestore/params/base.params.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L25)

Params for retrieving a document from Firestore.
FirestoreGetParams

## Extends

- [`GetParams`](GetParams.md)

## Extended by

- [`FirestoreGetByIdParams`](FirestoreGetByIdParams.md)
- [`FirestoreFetchDocumentParams`](FirestoreFetchDocumentParams.md)
- [`FirestoreGetWithFiltersParams`](FirestoreGetWithFiltersParams.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L14)

Optional ID for specific entity retrieval.

#### Inherited from

[`GetParams`](GetParams.md).[`id`](GetParams.md#id)

---

### filters?

> `optional` **filters**: [`BaseFilter`](../type-aliases/BaseFilter.md)[]

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L15)

Optional array of filters to apply to the query.

#### Inherited from

[`GetParams`](GetParams.md).[`filters`](GetParams.md#filters)

---

### limit?

> `optional` **limit**: `number`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L17)

Optional limit on the number of results.

#### Inherited from

[`GetParams`](GetParams.md).[`limit`](GetParams.md#limit)

---

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L26)

Optional transaction instance for atomic operations.

#### Overrides

[`GetParams`](GetParams.md).[`transaction`](GetParams.md#transaction)

---

### select?

> `optional` **select**: `string` \| `FieldPath`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L27)

Optional field or path to select from the document.

#### Overrides

[`GetParams`](GetParams.md).[`select`](GetParams.md#select)
