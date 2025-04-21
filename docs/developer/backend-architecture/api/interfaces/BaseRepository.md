[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / BaseRepository

# Interface: BaseRepository\<T\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:79](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L79)

Base repository interface that defines standard operations for data access.
BaseRepository

## Extended by

- [`AdministrationBaseRepository`](AdministrationBaseRepository.md)
- [`IdentityProviderBaseRepository`](IdentityProviderBaseRepository.md)
- [`OrgBaseRepository`](OrgBaseRepository.md)
- [`UserBaseRepository`](UserBaseRepository.md)
- [`UserClaimBaseRepository`](UserClaimBaseRepository.md)

## Type Parameters

### T

`T`

The type of entity managed by the repository.

## Methods

### get()

Retrieves one or more entities based on provided parameters.

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:80](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L80)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md) & `object`

##### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>\>

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<`T`\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:81](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L81)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md) & `object`

##### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>[]\>

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<`T`\> \| [`Result`](Result.md)\<`T`\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:82](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L82)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md)

##### Returns

`Promise`\<[`Result`](Result.md)\<`T`\> \| [`Result`](Result.md)\<`T`\>[]\>

---

### getAll()

> **getAll**(`params`): `Promise`\<[`Result`](Result.md)\<`T`\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:83](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L83)

Retrieves all entities with optional filtering.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>[]\>

---

### create()

> **create**(`params`): `Promise`\<[`Result`](Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:84](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L84)

Creates a new entity in the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>\>

---

### update()

> **update**(`params`): `Promise`\<[`Result`](Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:85](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L85)

Updates an existing entity in the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>\>

---

### delete()

> **delete**(`params`): `Promise`\<`void`\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:86](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L86)

Deletes an entity from the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<`void`\>

---

### runTransaction()

> **runTransaction**(`params`): `Promise`\<`any`\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:87](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L87)

Executes operations within a transaction context.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<`any`\>
