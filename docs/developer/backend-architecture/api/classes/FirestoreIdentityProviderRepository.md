[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreIdentityProviderRepository

# Class: FirestoreIdentityProviderRepository

Defined in: [packages/core/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts#L15)

Base interface for identity provider repositories.
 IdentityProviderBaseRepository

## Extends

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>

## Implements

- [`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md)

## Constructors

### Constructor

> **new FirestoreIdentityProviderRepository**(): `FirestoreIdentityProviderRepository`

Defined in: [packages/core/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts#L19)

#### Returns

`FirestoreIdentityProviderRepository`

#### Overrides

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`constructor`](FirestoreBaseRepository.md#constructor)

## Properties

### collection

> `protected` **collection**: `CollectionReference`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:46](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L46)

Collection reference

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`collection`](FirestoreBaseRepository.md#collection)

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

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`collectionGroup`](FirestoreBaseRepository.md#collectiongroup)

***

### collectionType

> `protected` **collectionType**: [`CollectionType`](../enumerations/CollectionType.md)

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:48](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L48)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`collectionType`](FirestoreBaseRepository.md#collectiontype)

***

### filterAdapter

> `protected` **filterAdapter**: [`FirestoreFilterAdapter`](FirestoreFilterAdapter.md)

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:49](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L49)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`filterAdapter`](FirestoreBaseRepository.md#filteradapter)

## Methods

### create()

> **create**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:229](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L229)

Creates a new entity in the repository.

#### Parameters

##### params

[`FirestoreCreateParams`](../interfaces/FirestoreCreateParams.md)

CreateParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

- Document data or null

#### Throws

- Error creating document

#### Implementation of

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`create`](../interfaces/IdentityProviderBaseRepository.md#create)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`create`](FirestoreBaseRepository.md#create)

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

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`delete`](../interfaces/IdentityProviderBaseRepository.md#delete)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`delete`](FirestoreBaseRepository.md#delete)

***

### fetchDocument()

> **fetchDocument**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:178](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L178)

Helper function to fetch a document
 fetchDocument

#### Parameters

##### params

[`FirestoreFetchDocumentParams`](../interfaces/FirestoreFetchDocumentParams.md)

FetchDocumentParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

- Document data or null

#### Throws

- Error fetching document

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`fetchDocument`](FirestoreBaseRepository.md#fetchdocument)

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

> **get**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:94](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L94)

Get document by ID
 get

##### Parameters

###### params

[`FirestoreGetParams`](../interfaces/FirestoreGetParams.md) & `object`

GetParams with ID

##### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

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

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`get`](../interfaces/IdentityProviderBaseRepository.md#get)

##### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`get`](FirestoreBaseRepository.md#get)

#### Call Signature

> **get**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:102](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L102)

Get documents by filters
 get

##### Parameters

###### params

[`FirestoreGetParams`](../interfaces/FirestoreGetParams.md) & `object`

GetParams with filters

##### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

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

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`get`](../interfaces/IdentityProviderBaseRepository.md#get)

##### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`get`](FirestoreBaseRepository.md#get)

***

### getAll()

> **getAll**(): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:204](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L204)

Retrieves all entities with optional filtering.

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

- Array of document data

#### Throws

- Error getting all documents

#### Implementation of

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`getAll`](../interfaces/IdentityProviderBaseRepository.md#getall)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`getAll`](FirestoreBaseRepository.md#getall)

***

### getById()

> **getById**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:154](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L154)

Helper function to get document by ID
 getById

#### Parameters

##### params

[`FirestoreGetByIdParams`](../interfaces/FirestoreGetByIdParams.md)

GetByIdParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

- Document data or null

#### Throws

- Error getting document by ID

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`getById`](FirestoreBaseRepository.md#getbyid)

***

### getByProviderId()

> **getByProviderId**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts:95](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts#L95)

Retrieves an identity provider by provider ID.

#### Parameters

##### params

[`GetByProviderIdParams`](../interfaces/GetByProviderIdParams.md)

The parameters for the query

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

An array of Identity Provider objects

#### Implementation of

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`getByProviderId`](../interfaces/IdentityProviderBaseRepository.md#getbyproviderid)

***

### getCollection()

> **getCollection**(): `CollectionReference`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:66](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L66)

Get collection reference
 getCollection

#### Returns

`CollectionReference`

- Collection reference

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`getCollection`](FirestoreBaseRepository.md#getcollection)

***

### getCollectionGroup()

> **getCollectionGroup**(): `CollectionGroup`

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:75](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L75)

Get collection group reference
 getCollectionGroup

#### Returns

`CollectionGroup`

- Collection group reference

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`getCollectionGroup`](FirestoreBaseRepository.md#getcollectiongroup)

***

### getCollectionType()

> **getCollectionType**(): [`CollectionType`](../enumerations/CollectionType.md)

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:84](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L84)

Get collection type
 getCollectionType

#### Returns

[`CollectionType`](../enumerations/CollectionType.md)

- Collection type

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`getCollectionType`](FirestoreBaseRepository.md#getcollectiontype)

***

### getWithFilters()

> **getWithFilters**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:300](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L300)

Get documents with filters
 getWithFilters

#### Parameters

##### params

[`FirestoreGetWithFiltersParams`](../interfaces/FirestoreGetWithFiltersParams.md)

GetWithFiltersParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

- Document data or null

#### Throws

- Error getting documents with filters

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`getWithFilters`](FirestoreBaseRepository.md#getwithfilters)

***

### runTransaction()

> **runTransaction**(`params`): `Promise`\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:360](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L360)

Executes operations within a transaction context.

#### Parameters

##### params

[`FirestoreRunTransactionParams`](../interfaces/FirestoreRunTransactionParams.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>

RunTransactionParams

#### Returns

`Promise`\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>

- Result of the transaction

#### Throws

- Error running transaction

#### Example

```ts
await runTransaction({ fn: async (transaction) => { ... } });
```

#### Implementation of

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`runTransaction`](../interfaces/IdentityProviderBaseRepository.md#runtransaction)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`runTransaction`](FirestoreBaseRepository.md#runtransaction)

***

### update()

> **update**(`params`): `Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

Defined in: [packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:256](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#L256)

Updates an existing entity in the repository.

#### Parameters

##### params

[`FirestoreUpdateParams`](../interfaces/FirestoreUpdateParams.md)

UpdateParams

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>\>

- Document data or null

#### Throws

- Error updating document

#### Implementation of

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`update`](../interfaces/IdentityProviderBaseRepository.md#update)

#### Inherited from

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`update`](FirestoreBaseRepository.md#update)
