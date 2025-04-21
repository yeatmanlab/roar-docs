[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Result

# Interface: Result\<T\>

Defined in: [packages/core/src/types/base.types.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L11)

Represents a Result type that combines an identifier with a generic data payload.
This type is commonly used in CRUD operations to wrap responses.

## Param

{string} - The id of the Result

## Param

{T} - The base model of the result

## Param

{Date | string | number} - The creation date of the Result

## Param

{Date | string | number} - The last update date of the Result

## Param

{string} - The id of the user who created the Result

## Param

{string} - The id of the user who last modified the Result

## Type Parameters

### T

`T`

The type of the data payload\*

## Properties

### id

> **id**: `string`

Defined in: [packages/core/src/types/base.types.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L12)

---

### data

> **data**: `T`

Defined in: [packages/core/src/types/base.types.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L13)

---

### createdAt?

> `optional` **createdAt**: `string` \| `number` \| `Date`

Defined in: [packages/core/src/types/base.types.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L14)

---

### updatedAt?

> `optional` **updatedAt**: `string` \| `number` \| `Date`

Defined in: [packages/core/src/types/base.types.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L15)

---

### createdBy?

> `optional` **createdBy**: `string`

Defined in: [packages/core/src/types/base.types.ts:16](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L16)

---

### lastModifiedBy?

> `optional` **lastModifiedBy**: `string`

Defined in: [packages/core/src/types/base.types.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/types/base.types.ts#L17)
