[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreOrgRepository

# Class: FirestoreOrgRepository

Defined in: [src/repositories/firestore/FirestoreOrgRepository.repository.firestore.ts:22](src/src/repositories/firestore/FirestoreOrgRepository.repository.firestore.ts#22)

The OrgRepository class is used to interact with the Firestore readOrgs and assignedOrgs collections.

## See

- [FirestoreBaseRepository](FirestoreBaseRepository.md) - The base repository for Firestore operations.
- [OrgBaseRepository](../interfaces/OrgBaseRepository.md) - The base interface for org operations.

## Extends

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md)\<[`OrgBase`](../interfaces/OrgBase.md)\>

## Implements

- [`OrgBaseRepository`](../interfaces/OrgBaseRepository.md)

## Constructors

### Constructor

```ts
new FirestoreOrgRepository(collection: string, collectionType: CollectionType): FirestoreOrgRepository;
```

Defined in: [src/repositories/firestore/FirestoreOrgRepository.repository.firestore.ts:32](src/src/repositories/firestore/FirestoreOrgRepository.repository.firestore.ts#32)

Create a new instance of FirestoreOrgRepository.
Uses default values for Firestore client and collection configuration.

#### Parameters

| Parameter        | Type                                                  | Default value                    |
| ---------------- | ----------------------------------------------------- | -------------------------------- |
| `collection`     | `string`                                              | `"readOrgs"`                     |
| `collectionType` | [`CollectionType`](../enumerations/CollectionType.md) | `CollectionType.CollectionGroup` |

#### Returns

`FirestoreOrgRepository`

#### See

- [FirestoreBaseRepository](FirestoreBaseRepository.md)
- [OrgBaseRepository](../interfaces/OrgBaseRepository.md)

#### Overrides

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`constructor`](FirestoreBaseRepository.md#constructor)

## Methods

### getAdministrationIdsFromOrgs()

```ts
getAdministrationIdsFromOrgs(params: GetAdministrationIdsFromOrgsParams): Promise<string[]>;
```

Defined in: [src/repositories/firestore/FirestoreOrgRepository.repository.firestore.ts:45](src/src/repositories/firestore/FirestoreOrgRepository.repository.firestore.ts#45)

Return an array of unique administrationIds associated with a list of readOrgs or assigningOrgs.

#### Parameters

| Parameter | Type                                                                                        | Description                                    |
| --------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `params`  | [`GetAdministrationIdsFromOrgsParams`](../interfaces/GetAdministrationIdsFromOrgsParams.md) | The getAdministrationIdsFromOrgsParams object. |

#### Returns

`Promise`\<`string`[]\>

- The administrationIds array or an empty array.

#### Throws

[FirestoreOrgRepositoryError](FirestoreOrgRepositoryError.md) - An error occurred in OrgRepository.

#### See

[GetAdministrationIdsFromOrgsParams](../interfaces/GetAdministrationIdsFromOrgsParams.md) - The parameters object.

#### Implementation of

[`OrgBaseRepository`](../interfaces/OrgBaseRepository.md).[`getAdministrationIdsFromOrgs`](../interfaces/OrgBaseRepository.md#getadministrationidsfromorgs)
