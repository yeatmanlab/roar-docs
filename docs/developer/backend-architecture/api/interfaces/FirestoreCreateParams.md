[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreCreateParams

# Interface: FirestoreCreateParams

Defined in: [packages/core/src/types/firestore/params/base.params.ts:79](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L79)

Params for creating a new document in Firestore.
FirestoreCreateParams

## Extends

- [`CreateParams`](CreateParams.md)

## Properties

### data?

> `optional` **data**: `DocumentData`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:80](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L80)

Optional data to be stored in the document.

#### Overrides

[`CreateParams`](CreateParams.md).[`data`](CreateParams.md#data)

---

### transaction?

> `optional` **transaction**: `Transaction`

Defined in: [packages/core/src/types/firestore/params/base.params.ts:81](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/firestore/params/base.params.ts#L81)

Optional transaction instance for atomic operations.

#### Overrides

[`CreateParams`](CreateParams.md).[`transaction`](CreateParams.md#transaction)
