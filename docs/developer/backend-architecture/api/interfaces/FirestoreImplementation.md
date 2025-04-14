[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreImplementation

# Interface: FirestoreImplementation

Defined in: [packages/core/src/factories/createFirestoreImplementation.factory.ts:31](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/factories/createFirestoreImplementation.factory.ts#L31)

Interface defining the structure of Firestore implementation objects
This interface represents the complete set of repositories and services for Firestore backend

 FirestoreImplementation

## Properties

### client

> **client**: `object`

Defined in: [packages/core/src/factories/createFirestoreImplementation.factory.ts:32](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/factories/createFirestoreImplementation.factory.ts#L32)

Firestore client instance

#### app

> **app**: `App`

#### auth

> **auth**: `Auth`

#### db

> **db**: `Firestore`

***

### repositories

> **repositories**: `object`

Defined in: [packages/core/src/factories/createFirestoreImplementation.factory.ts:37](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/factories/createFirestoreImplementation.factory.ts#L37)

Collection of all repository instances

#### administration

> **administration**: [`FirestoreAdministrationRepository`](../classes/FirestoreAdministrationRepository.md)

#### identityProvider

> **identityProvider**: [`FirestoreIdentityProviderRepository`](../classes/FirestoreIdentityProviderRepository.md)

#### organization

> **organization**: [`FirestoreOrgRepository`](../classes/FirestoreOrgRepository.md)

#### user

> **user**: [`FirestoreUserRepository`](../classes/FirestoreUserRepository.md)

#### userClaim

> **userClaim**: [`FirestoreUserClaimRepository`](../classes/FirestoreUserClaimRepository.md)

***

### services

> **services**: `object`

Defined in: [packages/core/src/factories/createFirestoreImplementation.factory.ts:44](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/factories/createFirestoreImplementation.factory.ts#L44)

Collection of all service instances

#### administration

> **administration**: [`AdministrationService`](AdministrationService.md)

#### identityProvider

> **identityProvider**: [`IdentityProviderService`](IdentityProviderService.md)
