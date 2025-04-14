[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreFetchDocumentParams

# Interface: FirestoreFetchDocumentParams

Defined in: [packages/core/src/types/firestore/params/base.params.ts:46](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/base.params.ts#L46)

Params for fetching a document from a specific DocumentReference in Firestore.
 FirestoreFetchDocumentParams

## Extends

- [`FirestoreGetParams`](FirestoreGetParams.md)

## Properties

### docRef

> **docRef**: `DocumentReference`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:47](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/base.params.ts#L47)

The document reference to fetch.

***

### filters?

> `optional` **filters**: [`BaseFilter`](../type-aliases/BaseFilter.md)[]

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L15)

Optional array of filters to apply to the query.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`filters`](FirestoreGetParams.md#filters)

***

### id?

> `optional` **id**: `string`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L14)

Optional ID for specific entity retrieval.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`id`](FirestoreGetParams.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L17)

Optional limit on the number of results.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`limit`](FirestoreGetParams.md#limit)

***

### select?

> `optional` **select**: `string` \| `FieldPath`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/base.params.ts#L27)

Optional field or path to select from the document.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`select`](FirestoreGetParams.md#select)

***

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/types/firestore/params/base.params.ts#L26)

Optional transaction instance for atomic operations.

#### Inherited from

[`FirestoreGetParams`](FirestoreGetParams.md).[`transaction`](FirestoreGetParams.md#transaction)
