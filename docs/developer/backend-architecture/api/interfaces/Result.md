[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Result

# Interface: Result\<T\>

Defined in: [src/types/base.types.ts:7](src/src/types/base.types.ts#7)

Wraps entity data with metadata for CRUD operations.
Combines an identifier with a generic data payload and tracking information.

## Type Parameters

| Type Parameter | Description              |
| -------------- | ------------------------ |
| `T`            | Type of the entity data. |

## Properties

| Property                                      | Type                           | Description                                                                      | Defined in                                                   |
| --------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| <a id="id"></a> `id`                          | `string`                       | Unique identifier for the entity.                                                | [src/types/base.types.ts:9](src/src/types/base.types.ts#9)   |
| <a id="data"></a> `data`                      | `T`                            | Entity data of type T.                                                           | [src/types/base.types.ts:12](src/src/types/base.types.ts#12) |
| <a id="createdat"></a> `createdAt?`           | `string` \| `number` \| `Date` | When the entity was created. Can be Date object, ISO string, or timestamp.       | [src/types/base.types.ts:16](src/src/types/base.types.ts#16) |
| <a id="updatedat"></a> `updatedAt?`           | `string` \| `number` \| `Date` | When the entity was last modified. Can be Date object, ISO string, or timestamp. | [src/types/base.types.ts:20](src/src/types/base.types.ts#20) |
| <a id="createdby"></a> `createdBy?`           | `string`                       | Identifier of the user who created the entity.                                   | [src/types/base.types.ts:23](src/src/types/base.types.ts#23) |
| <a id="lastmodifiedby"></a> `lastModifiedBy?` | `string`                       | Identifier of the user who last modified the entity.                             | [src/types/base.types.ts:26](src/src/types/base.types.ts#26) |
