[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreBaseRepository

# Class: `abstract` FirestoreBaseRepository\<T\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:45](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L45)

The FirestoreRepository base class is used to interact with Firestore collections.
 FirestoreRepository
 FirestoreRepository

## Throws

- Error handling for FirestoreRepository

## Extended by

- [`FirestoreAdministrationRepository`](FirestoreAdministrationRepository.md)
- [`FirestoreIdentityProviderRepository`](FirestoreIdentityProviderRepository.md)
- [`FirestoreOrgRepository`](FirestoreOrgRepository.md)
- [`FirestoreUserRepository`](FirestoreUserRepository.md)
- [`FirestoreUserClaimRepository`](FirestoreUserClaimRepository.md)

## Type Parameters

### T

`T`

## Implements

- [`BaseRepository`](../interfaces/BaseRepository.md)\<`T`\>

## Constructors

### Constructor

> **new FirestoreBaseRepository**\<`T`\>(`firestore`, `collection`, `collectionType`): `FirestoreBaseRepository`\<`T`\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:51](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L51)

#### Parameters

##### firestore

`Firestore` = `FirestoreClient`

##### collection

`string`

##### collectionType

[`CollectionType`](../enumerations/CollectionType.md)

#### Returns

`FirestoreBaseRepository`\<`T`\>

## Properties

### collection

> `protected` **collection**: `CollectionReference`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:46](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L46)

Collection reference

***

### collectionGroup

> `protected` **collectionGroup**: `CollectionGroup`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:47](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L47)

Collection group reference
{getCollectionName} - Get collection reference
{getCollectionGroupName} - Get collection group reference
{getCollectionType} - Get collection type
{get} - Get document by ID or with filters
{getById} - Get document by ID, helper function for get()
{fetchDocument} - Fetch document, helper function for getById() and getWithFilters()
{getAll} - Get all documents
{runTransaction} - Run transaction
{create} - Create document
{update} - Update document
{delete} - Delete document
{getWithFilters} - Get documents with filters, helper function for get()

***

### collectionType

> `protected` **collectionType**: [`CollectionType`](../enumerations/CollectionType.md)

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:48](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L48)

***

### filterAdapter

> `protected` **filterAdapter**: [`FirestoreFilterAdapter`](FirestoreFilterAdapter.md)

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:49](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L49)

## Methods

### create()

> **create**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:229](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L229)

Creates a new entity in the repository.

#### Parameters

##### params

[`FirestoreCreateParams`](../interfaces/FirestoreCreateParams.md)

CreateParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

- Document data or null

#### Throws

- Error creating document

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`create`](../interfaces/BaseRepository.md#create)

***

### delete()

> **delete**(`params`): `Promise`\<`void`\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:280](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L280)

Deletes an entity from the repository.

#### Parameters

##### params

[`FirestoreDeleteParams`](../interfaces/FirestoreDeleteParams.md)

DeleteParams

#### Returns

`Promise`\<`void`\>

#### Throws

- Error deleting document

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`delete`](../interfaces/BaseRepository.md#delete)

***

### fetchDocument()

> **fetchDocument**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:178](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L178)

Helper function to fetch a document
 fetchDocument

#### Parameters

##### params

[`FirestoreFetchDocumentParams`](../interfaces/FirestoreFetchDocumentParams.md)

FetchDocumentParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

- Document data or null

#### Throws

- Error fetching document

***

### get()

Get document(s) based on parameters
- If `id` is provided, returns a single document
- If `filters` are provided, returns multiple documents that match the filters
- Requires either `id` or `filters` to be specified

#### Param

Parameters for retrieving documents

#### Param

Document ID for single document retrieval

#### Param

Array of filters for querying documents

#### Param

Maximum number of documents to return (for filtered queries)

#### Param

Fields to include in the result

#### Param

Firestore transaction

#### Throws

If neither ID nor filters are provided

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:94](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L94)

Get document by ID
 get

##### Parameters

###### params

[`FirestoreGetParams`](../interfaces/FirestoreGetParams.md) & `object`

GetParams with ID

##### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

- Single document or array of documents

##### Param

Parameters for retrieving documents

##### Param

Document ID for single document retrieval

##### Param

Array of filters for querying documents

##### Param

Maximum number of documents to return (for filtered queries)

##### Param

Fields to include in the result

##### Param

Firestore transaction

##### Throws

If neither ID nor filters are provided

##### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`get`](../interfaces/BaseRepository.md#get)

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:102](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L102)

Get documents by filters
 get

##### Parameters

###### params

[`FirestoreGetParams`](../interfaces/FirestoreGetParams.md) & `object`

GetParams with filters

##### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

- Single document or array of documents

##### Param

Parameters for retrieving documents

##### Param

Document ID for single document retrieval

##### Param

Array of filters for querying documents

##### Param

Maximum number of documents to return (for filtered queries)

##### Param

Fields to include in the result

##### Param

Firestore transaction

##### Throws

If neither ID nor filters are provided

##### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`get`](../interfaces/BaseRepository.md#get)

***

### getAll()

> **getAll**(): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:204](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L204)

Retrieves all entities with optional filtering.

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

- Array of document data

#### Throws

- Error getting all documents

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`getAll`](../interfaces/BaseRepository.md#getall)

***

### getById()

> **getById**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:154](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L154)

Helper function to get document by ID
 getById

#### Parameters

##### params

[`FirestoreGetByIdParams`](../interfaces/FirestoreGetByIdParams.md)

GetByIdParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

- Document data or null

#### Throws

- Error getting document by ID

***

### getCollection()

> **getCollection**(): `CollectionReference`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:66](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L66)

Get collection reference
 getCollection

#### Returns

`CollectionReference`

- Collection reference

***

### getCollectionGroup()

> **getCollectionGroup**(): `CollectionGroup`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:75](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L75)

Get collection group reference
 getCollectionGroup

#### Returns

`CollectionGroup`

- Collection group reference

***

### getCollectionType()

> **getCollectionType**(): [`CollectionType`](../enumerations/CollectionType.md)

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:84](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L84)

Get collection type
 getCollectionType

#### Returns

[`CollectionType`](../enumerations/CollectionType.md)

- Collection type

***

### getWithFilters()

> **getWithFilters**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:300](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L300)

Get documents with filters
 getWithFilters

#### Parameters

##### params

[`FirestoreGetWithFiltersParams`](../interfaces/FirestoreGetWithFiltersParams.md)

GetWithFiltersParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

- Document data or null

#### Throws

- Error getting documents with filters

***

### runTransaction()

> **runTransaction**(`params`): `Promise`\<`T`\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:360](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L360)

Executes operations within a transaction context.

#### Parameters

##### params

[`FirestoreRunTransactionParams`](../interfaces/FirestoreRunTransactionParams.md)\<`T`\>

RunTransactionParams

#### Returns

`Promise`\<`T`\>

- Result of the transaction

#### Throws

- Error running transaction

#### Example

```ts
await runTransaction({ fn: async (transaction) => { ... } });
```

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`runTransaction`](../interfaces/BaseRepository.md#runtransaction)

***

### update()

> **update**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:256](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L256)

Updates an existing entity in the repository.

#### Parameters

##### params

[`FirestoreUpdateParams`](../interfaces/FirestoreUpdateParams.md)

UpdateParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

- Document data or null

#### Throws

- Error updating document

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`update`](../interfaces/BaseRepository.md#update)
