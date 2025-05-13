[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreIdentityProviderRepository

# Class: FirestoreIdentityProviderRepository

Defined in: [src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts:21](src/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts#21)

The FirestoreIdentityProviderRepository class is used to interact with the Firestore Identity Providers collection.

## See

- [FirestoreBaseRepository](FirestoreBaseRepository.md) - The base repository class for Firestore operations.
- [IdentityProviderBaseRepository](../interfaces/IdentityProviderBaseRepository.md) - The base interface for identity provider operations.

## Extends

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>

## Implements

- [`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md)

## Constructors

### Constructor

```ts
new FirestoreIdentityProviderRepository(): FirestoreIdentityProviderRepository;
```

Defined in: [src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts:31](src/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts#31)

Create a new FirestoreIdentityProviderRepository instance
Uses default values for Firestore client and collection configuration.

#### Returns

`FirestoreIdentityProviderRepository`

#### See

- [FirestoreBaseRepository](FirestoreBaseRepository.md)
- [IdentityProviderBaseRepository](../interfaces/IdentityProviderBaseRepository.md)

#### Overrides

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`constructor`](FirestoreBaseRepository.md#constructor)

## Methods

### getByProviderId()

```ts
getByProviderId(params: GetByProviderIdParams): Promise<Result<IdentityProvider>[]>;
```

Defined in: [src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts:107](src/src/repositories/firestore/FirestoreIdentityProviderRepository.repository.firestore.ts#107)

Retrieves identity providers based on provider type and identity.

#### Parameters

| Parameter | Type                                                              | Description                       |
| --------- | ----------------------------------------------------------------- | --------------------------------- |
| `params`  | [`GetByProviderIdParams`](../interfaces/GetByProviderIdParams.md) | The GetByProviderIdParams object. |

#### Returns

`Promise`\<[`Result`](../interfaces/Result.md)\<[`IdentityProvider`](../interfaces/IdentityProvider.md)\>[]\>

An array of Identity Provider objects

#### Throws

[FirestoreIdentityProviderRepositoryError](FirestoreIdentityProviderRepositoryError.md) - If an error occurs while fetching identity providers.

#### See

[GetByProviderIdParams](../interfaces/GetByProviderIdParams.md) - The parameters used to fetch identity providers.

#### Implementation of

[`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md).[`getByProviderId`](../interfaces/IdentityProviderBaseRepository.md#getbyproviderid)
