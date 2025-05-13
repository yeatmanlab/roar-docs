[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreAdministrationRepository

# Class: FirestoreAdministrationRepository

Defined in: [src/repositories/firestore/FirestoreAdministrationRepository.repository.firestore.ts:16](src/src/repositories/firestore/FirestoreAdministrationRepository.repository.firestore.ts#16)

The AdministrationRepository class is used to interact with the Firestore Administrations collection.

## See

[FirestoreBaseRepository](FirestoreBaseRepository.md) - The base repository class for Firestore.

## Extends

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md)\<[`Administration`](../interfaces/Administration.md)\>

## Implements

- [`AdministrationBaseRepository`](../interfaces/AdministrationBaseRepository.md)

## Constructors

### Constructor

```ts
new FirestoreAdministrationRepository(): FirestoreAdministrationRepository;
```

Defined in: [src/repositories/firestore/FirestoreAdministrationRepository.repository.firestore.ts:26](src/src/repositories/firestore/FirestoreAdministrationRepository.repository.firestore.ts#26)

Creates a new instance of FirestoreAdministrationRepository.
Uses default values for Firestore client and collection configuration.

#### Returns

`FirestoreAdministrationRepository`

#### See

- [FirestoreBaseRepository](FirestoreBaseRepository.md) - The base repository class for Firestore.
- [AdministrationBaseRepository](../interfaces/AdministrationBaseRepository.md) - The base interface for Administrations.

#### Overrides

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`constructor`](FirestoreBaseRepository.md#constructor)

## Methods

### getByName()

```ts
getByName(params: FirestoreGetByNameParams): Promise<Result<Administration>[]>;
```

Defined in: [src/repositories/firestore/FirestoreAdministrationRepository.repository.firestore.ts:37](src/src/repositories/firestore/FirestoreAdministrationRepository.repository.firestore.ts#37)

Get administrations by name.

#### Parameters

| Parameter | Type                                                                    | Description                                |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| `params`  | [`FirestoreGetByNameParams`](../interfaces/FirestoreGetByNameParams.md) | The GetAdministrationsByNameParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`Administration`](../interfaces/Administration.md)\>[]\>

A list of administrations.

#### Throws

[FirestoreAdministrationRepositoryError](FirestoreAdministrationRepositoryError.md) - An error occurred while retrieving the administrations by name.

#### See

[FirestoreGetByNameParams](../interfaces/FirestoreGetByNameParams.md) - The parameters for getting administrations by name.

#### Implementation of

[`AdministrationBaseRepository`](../interfaces/AdministrationBaseRepository.md).[`getByName`](../interfaces/AdministrationBaseRepository.md#getbyname)
