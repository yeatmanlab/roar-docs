[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / OrgBaseRepository

# Interface: OrgBaseRepository

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/org.base.repository.interface.ts#L25)

Repository interface for organization base operations
 OrgBaseRepository

## Extends

- [`BaseRepository`](BaseRepository.md)\<[`OrgBase`](OrgBase.md)\>

## Methods

### create()

> **create**(`params`): `Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:84](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L84)

Creates a new entity in the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`create`](BaseRepository.md#create)

***

### delete()

> **delete**(`params`): `Promise`\<`void`\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:86](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L86)

Deletes an entity from the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`delete`](BaseRepository.md#delete)

***

### get()

Retrieves one or more entities based on provided parameters.

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:80](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L80)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md) & `object`

##### Returns

`Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>\>

##### Inherited from

[`BaseRepository`](BaseRepository.md).[`get`](BaseRepository.md#get)

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:81](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L81)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md) & `object`

##### Returns

`Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>[]\>

##### Inherited from

[`BaseRepository`](BaseRepository.md).[`get`](BaseRepository.md#get)

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\> \| [`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:82](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L82)

Retrieves one or more entities based on provided parameters.

##### Parameters

###### params

[`GetParams`](GetParams.md)

##### Returns

`Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\> \| [`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>[]\>

##### Inherited from

[`BaseRepository`](BaseRepository.md).[`get`](BaseRepository.md#get)

***

### getAdministrationIdsFromOrgs()

> **getAdministrationIdsFromOrgs**(`params`): `Promise`\<`string`[]\>

Defined in: [packages/core/src/repositories/base/org.base.repository.interface.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/org.base.repository.interface.ts#L26)

Retrieves administration IDs from organizations

#### Parameters

##### params

[`getAdministrationIdsFromOrgsParams`](getAdministrationIdsFromOrgsParams.md)

#### Returns

`Promise`\<`string`[]\>

***

### getAll()

> **getAll**(`params`): `Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>[]\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:83](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L83)

Retrieves all entities with optional filtering.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>[]\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`getAll`](BaseRepository.md#getall)

***

### runTransaction()

> **runTransaction**(`params`): `Promise`\<`any`\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:87](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L87)

Executes operations within a transaction context.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`runTransaction`](BaseRepository.md#runtransaction)

***

### update()

> **update**(`params`): `Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>\>

Defined in: [packages/core/src/repositories/base/base.repository.interface.ts:85](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/base/base.repository.interface.ts#L85)

Updates an existing entity in the repository.

#### Parameters

##### params

`unknown`

#### Returns

`Promise`\<[`Result`](Result.md)\<[`OrgBase`](OrgBase.md)\>\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`update`](BaseRepository.md#update)
