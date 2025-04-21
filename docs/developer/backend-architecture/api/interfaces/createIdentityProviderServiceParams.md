[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / createIdentityProviderServiceParams

# Interface: createIdentityProviderServiceParams\<IDPRepo, UserClaimRepo, UserRepo\>

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:33](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/services/identityProvider.service.interface.ts#L33)

Parameters for creating an identity provider service

## Type Parameters

### IDPRepo

`IDPRepo` _extends_ [`IdentityProviderBaseRepository`](IdentityProviderBaseRepository.md)

The type of identity provider repository extending IdentityProviderBaseRepository

### UserClaimRepo

`UserClaimRepo` _extends_ [`UserClaimBaseRepository`](UserClaimBaseRepository.md)

The type of user claim repository extending UserClaimBaseRepository

### UserRepo

`UserRepo` _extends_ [`UserBaseRepository`](UserBaseRepository.md)

The type of user repository extending UserBaseRepository

## Properties

### identityProviderRepository

> **identityProviderRepository**: `IDPRepo`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:38](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/services/identityProvider.service.interface.ts#L38)

The identity provider repository instance

---

### userClaimRepository

> **userClaimRepository**: `UserClaimRepo`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:39](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/services/identityProvider.service.interface.ts#L39)

The user claim repository instance

---

### userRepository

> **userRepository**: `UserRepo`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:40](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/services/identityProvider.service.interface.ts#L40)

The user repository instance
