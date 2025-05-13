[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreBaseRepository

# Class: FirestoreBaseRepository\<T\>

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:30](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#30)

The FirestoreRepository base class is used to interact with Firestore collections.

## Extended by

- [`FirestoreAdministrationRepository`](FirestoreAdministrationRepository.md)
- [`FirestoreIdentityProviderRepository`](FirestoreIdentityProviderRepository.md)
- [`FirestoreOrgRepository`](FirestoreOrgRepository.md)
- [`FirestoreUserRepository`](FirestoreUserRepository.md)
- [`FirestoreUserClaimRepository`](FirestoreUserClaimRepository.md)

## Type Parameters

| Type Parameter | Description                                              |
| -------------- | -------------------------------------------------------- |
| `T`            | The type of the document data managed by the repository. |

## Implements

- [`BaseRepository`](../interfaces/BaseRepository.md)\<`T`\>

## Constructors

### Constructor

```ts
new FirestoreBaseRepository<T>(
   firestore: Firestore,
   collection: string,
collectionType: CollectionType): FirestoreBaseRepository<T>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:48](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#48)

Creates a new instance of FirestoreBaseRepository.

#### Parameters

| Parameter        | Type                                                  | Default value     | Description                                                           |
| ---------------- | ----------------------------------------------------- | ----------------- | --------------------------------------------------------------------- |
| `firestore`      | `Firestore`                                           | `FirestoreClient` | The Firestore instance.                                               |
| `collection`     | `string`                                              | `undefined`       | The Firestore collection name.                                        |
| `collectionType` | [`CollectionType`](../enumerations/CollectionType.md) | `undefined`       | The Firestore collection type, defaults to CollectionType.Collection. |

#### Returns

`FirestoreBaseRepository`\<`T`\>

## Properties

| Property                                       | Modifier    | Type                                                  | Description                                                       | Defined in                                                                                                                                                         |
| ---------------------------------------------- | ----------- | ----------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="collection"></a> `collection`           | `protected` | `CollectionReference`                                 | Firestore collection reference.                                   | [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:32](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#32) |
| <a id="collectiongroup"></a> `collectionGroup` | `protected` | `CollectionGroup`                                     | Firestore collection group reference.                             | [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:35](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#35) |
| <a id="collectiontype"></a> `collectionType`   | `protected` | [`CollectionType`](../enumerations/CollectionType.md) | Firestore collection type, one of collection or collection group. | [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:38](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#38) |
| <a id="filteradapter"></a> `filterAdapter`     | `protected` | [`FirestoreFilterAdapter`](FirestoreFilterAdapter.md) | Firestore filter adapter.                                         | [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:41](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#41) |

## Methods

### getCollection()

```ts
getCollection(): CollectionReference;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:62](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#62)

Get collection reference.

#### Returns

`CollectionReference`

The Firestore collection reference.

---

### getCollectionGroup()

```ts
getCollectionGroup(): CollectionGroup;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:70](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#70)

Get collection group reference.

#### Returns

`CollectionGroup`

The Firestore collection group reference.

---

### getCollectionType()

```ts
getCollectionType(): CollectionType;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:78](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#78)

Get collection type.

#### Returns

[`CollectionType`](../enumerations/CollectionType.md)

The Firestore collection type.

---

### get()

Retrieves document(s) from Firestore based on provided parameters.

This method supports two retrieval modes:

1. Single document retrieval by ID
2. Multiple documents retrieval using filters

#### Call Signature

```ts
get(params: FirestoreGetParams & {
  id: string;
}): Promise<Result<T>>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:92](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#92)

Get document by ID.

##### Parameters

| Parameter | Type                                                                                | Description                                               |
| --------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `params`  | [`FirestoreGetParams`](../interfaces/FirestoreGetParams.md) & \{ `id`: `string`; \} | The FirestoreGetParams object containing the document ID. |

##### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Single document data.

##### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - If no ID or filters are provided.

##### See

[FirestoreGetParams](../interfaces/FirestoreGetParams.md) - The parameters used to retrieve the documents.

##### Example

```ts
const doc = await repository.get({ id: "doc123" });
```

##### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`get`](../interfaces/BaseRepository.md#get)

#### Call Signature

```ts
get(params: FirestoreGetParams & {
  filters: any[];
}): Promise<Result<T>[]>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:107](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#107)

Get documents by filters.

##### Parameters

| Parameter | Type                                                                                    | Description                                                                 |
| --------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `params`  | [`FirestoreGetParams`](../interfaces/FirestoreGetParams.md) & \{ `filters`: `any`[]; \} | The FirestoreGetParams object containing filters, limit, and select fields. |

##### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

Array of document data.

##### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - If no ID or filters are provided.

##### See

[FirestoreGetParams](../interfaces/FirestoreGetParams.md) - The parameters used to retrieve the documents.

##### Example

```ts
const docs = await repository.get({
  filters: [{ field: "status", operator: "equals", value: "active" }],
  limit: 10,
});
```

##### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`get`](../interfaces/BaseRepository.md#get)

---

### getById()

```ts
getById(params: FirestoreGetByIdParams): Promise<Result<T>>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:153](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#153)

**`Internal`**

Helper function to get document by ID.

#### Parameters

| Parameter | Type                                                                | Description                        |
| --------- | ------------------------------------------------------------------- | ---------------------------------- |
| `params`  | [`FirestoreGetByIdParams`](../interfaces/FirestoreGetByIdParams.md) | The FirestoreGetByIdParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Document data or null.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - If an error occurs while getting the document by ID.

#### See

[FirestoreGetByIdParams](../interfaces/FirestoreGetByIdParams.md) - Parameters for getting a document by ID.

---

### fetchDocument()

```ts
fetchDocument(params: FirestoreFetchDocumentParams): Promise<Result<T>>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:176](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#176)

**`Internal`**

Helper function to fetch a document from Firestore.

#### Parameters

| Parameter | Type                                                                            | Description                             |
| --------- | ------------------------------------------------------------------------------- | --------------------------------------- |
| `params`  | [`FirestoreFetchDocumentParams`](../interfaces/FirestoreFetchDocumentParams.md) | The parameters for fetching a document. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

A Promise resolving to the document data and ID.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - If an error occurs while fetching the document.

#### See

[FirestoreFetchDocumentParams](../interfaces/FirestoreFetchDocumentParams.md) - Parameters for fetching a document.

---

### getAll()

```ts
getAll(): Promise<Result<T>[]>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:201](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#201)

Get all documents.

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

Array of document data.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Error getting all documents.

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`getAll`](../interfaces/BaseRepository.md#getall)

---

### create()

```ts
create(params: FirestoreCreateParams): Promise<Result<T>>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:224](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#224)

Create a document by passing in a data object and optional transaction.
If no data is provided, a new document will be created with a random ID.

#### Parameters

| Parameter | Type                                                              | Description                       |
| --------- | ----------------------------------------------------------------- | --------------------------------- |
| `params`  | [`FirestoreCreateParams`](../interfaces/FirestoreCreateParams.md) | The FirestoreCreateParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Document data or null.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Error creating document

#### See

[FirestoreCreateParams](../interfaces/FirestoreCreateParams.md) - The parameters required for creating a document.

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`create`](../interfaces/BaseRepository.md#create)

---

### update()

```ts
update(params: FirestoreUpdateParams): Promise<Result<T>>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:248](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#248)

Update a document.

#### Parameters

| Parameter | Type                                                              | Description                       |
| --------- | ----------------------------------------------------------------- | --------------------------------- |
| `params`  | [`FirestoreUpdateParams`](../interfaces/FirestoreUpdateParams.md) | The FirestoreUpdateParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>\>

Document data or null.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Error updating document.

#### See

[FirestoreUpdateParams](../interfaces/FirestoreUpdateParams.md) - The parameters required for updating a document.

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`update`](../interfaces/BaseRepository.md#update)

---

### delete()

```ts
delete(params: FirestoreDeleteParams): Promise<void>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:270](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#270)

Delete a document.

#### Parameters

| Parameter | Type                                                              | Description                       |
| --------- | ----------------------------------------------------------------- | --------------------------------- |
| `params`  | [`FirestoreDeleteParams`](../interfaces/FirestoreDeleteParams.md) | The FirestoreDeleteParams object. |

#### Returns

`Promise`\<`void`\>

Promise<void>.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Error deleting document.

#### See

[FirestoreDeleteParams](../interfaces/FirestoreDeleteParams.md) - The parameters required for deleting a document.

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`delete`](../interfaces/BaseRepository.md#delete)

---

### getWithFilters()

```ts
getWithFilters(params: FirestoreGetWithFiltersParams): Promise<Result<T>[]>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:288](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#288)

**`Internal`**

Get documents with filters.

#### Parameters

| Parameter | Type                                                                              | Description                               |
| --------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| `params`  | [`FirestoreGetWithFiltersParams`](../interfaces/FirestoreGetWithFiltersParams.md) | The FirestoreGetWithFiltersParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<`T`\>[]\>

A promise resolving to document data or null.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md)- Error getting documents with filters.

#### See

[FirestoreGetWithFiltersParams](../interfaces/FirestoreGetWithFiltersParams.md) - The parameters required for getting documents with filters.

---

### runTransaction()

```ts
runTransaction(params: FirestoreRunTransactionParams<T>): Promise<T>;
```

Defined in: [src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts:345](src/src/repositories/firestore/FirestoreBaseRepository.repository.firestore.ts#345)

Provide a callback function (fn) to run a transaction
and return the result of the transaction

#### Parameters

| Parameter | Type                                                                                     | Description                               |
| --------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- |
| `params`  | [`FirestoreRunTransactionParams`](../interfaces/FirestoreRunTransactionParams.md)\<`T`\> | The FirestoreRunTransactionParams object. |

#### Returns

`Promise`\<`T`\>

A promise resolving to the result of the transaction.

#### Throws

[FirestoreRepositoryError](FirestoreRepositoryError.md) - Error running transaction.

#### See

[FirestoreRunTransactionParams](../interfaces/FirestoreRunTransactionParams.md) - The parameters for running a FirestoreBaseRepository transaction.

#### Example

```ts
await runTransaction({ fn: async (transaction) => { ... } });
```

#### Implementation of

[`BaseRepository`](../interfaces/BaseRepository.md).[`runTransaction`](../interfaces/BaseRepository.md#runtransaction)
