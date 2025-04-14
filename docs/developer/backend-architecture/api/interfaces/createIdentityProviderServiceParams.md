[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / createIdentityProviderServiceParams

# Interface: createIdentityProviderServiceParams\<IDPRepo, UserClaimRepo, UserRepo\>

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:33](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L33)

Parameters for creating an identity provider service

## Type Parameters

### IDPRepo

`IDPRepo` *extends* [`IdentityProviderBaseRepository`](IdentityProviderBaseRepository.md)

The type of identity provider repository extending IdentityProviderBaseRepository

### UserClaimRepo

`UserClaimRepo` *extends* [`UserClaimBaseRepository`](UserClaimBaseRepository.md)

The type of user claim repository extending UserClaimBaseRepository

### UserRepo

`UserRepo` *extends* [`UserBaseRepository`](UserBaseRepository.md)

The type of user repository extending UserBaseRepository

## Properties

### identityProviderRepository

> **identityProviderRepository**: `IDPRepo`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:38](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L38)

The identity provider repository instance

***

### userClaimRepository

> **userClaimRepository**: `UserClaimRepo`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:39](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L39)

The user claim repository instance

***

### userRepository

> **userRepository**: `UserRepo`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:40](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L40)

The user repository instance
