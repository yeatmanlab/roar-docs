[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / createIdentityProviderService

# Function: createIdentityProviderService()

> **createIdentityProviderService**\<`IDPRepo`, `UserClaimRepo`, `UserRepo`\>(`params`): [`IdentityProviderService`](../interfaces/IdentityProviderService.md)

Defined in: [packages/core/src/services/createIdentityProviderService.service.ts:23](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/createIdentityProviderService.service.ts#L23)

Creates and returns an Identity Provider Service

This service provides functions to interact with identity providers,
particularly for retrieving or creating Roar UIDs associated with
various identity providers.

## Type Parameters

### IDPRepo

`IDPRepo` *extends* [`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md)

Type extending IdentityProviderBaseRepository

### UserClaimRepo

`UserClaimRepo` *extends* [`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md)

Type extending UserClaimBaseRepository

### UserRepo

`UserRepo` *extends* [`UserBaseRepository`](../interfaces/UserBaseRepository.md)

Type extending UserBaseRepository

## Parameters

### params

[`createIdentityProviderServiceParams`](../interfaces/createIdentityProviderServiceParams.md)\<`IDPRepo`, `UserClaimRepo`, `UserRepo`\>

Parameters for creating the service

## Returns

[`IdentityProviderService`](../interfaces/IdentityProviderService.md)

The Identity Provider Service instance
