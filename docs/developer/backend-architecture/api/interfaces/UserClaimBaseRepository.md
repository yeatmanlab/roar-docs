[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / UserClaimBaseRepository

# Interface: UserClaimBaseRepository

Defined in: [packages/core/src/repositories/base/userClaim.base.repository.interface.ts:23](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/userClaim.base.repository.interface.ts#L23)

Repository interface for managing user claims.
Extends the base repository with user claim specific operations.

This interface provides methods to interact with the user claim data store,
including retrievals by Roar UID and other claim-specific operations.

## Extends

- [`BaseRepository`](BaseRepository.md)\<[`UserClaim`](UserClaim.md)\>

## Methods

### get()

Retrieves one or more entities based on provided parameters.

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:80](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L80)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md) & `object`

##### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

##### Inherited from

[`BaseRepository`](BaseRepository.md).[`get`](BaseRepository.md#get)

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:81](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L81)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md) & `object`

##### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>[]\>

##### Inherited from

[`BaseRepository`](BaseRepository.md).[`get`](BaseRepository.md#get)

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\> \| [`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:82](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L82)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md)

##### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\> \| [`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>[]\>

##### Inherited from

[`BaseRepository`](BaseRepository.md).[`get`](BaseRepository.md#get)

---

### getAll()

> **getAll**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:83](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L83)

Retrieves all entities with optional filtering.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>[]\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`getAll`](BaseRepository.md#getall)

---

### create()

> **create**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:84](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L84)

Creates a new entity in the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`create`](BaseRepository.md#create)

---

### update()

> **update**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:85](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/base.repository.interface.ts#L85)

Updates an existing entity in the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`update`](BaseRepository.md#update)

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`delete`](BaseRepository.md#delete)

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`runTransaction`](BaseRepository.md#runtransaction)

---

### getByRoarUid()

> **getByRoarUid**(`params`): `Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>

Defined in: [packages/core/src/repositories/base/userClaim.base.repository.interface.ts:24](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/userClaim.base.repository.interface.ts#L24)

Retrieves a user claim by Roar UID.

#### Parameters

##### params

[`GetByRoarUidParams`](GetByRoarUidParams.md)

#### Returns

`Promise`\<[`Result`](Result.md)\<[`UserClaim`](UserClaim.md)\>\>
