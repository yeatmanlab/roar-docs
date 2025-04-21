[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetByProviderIdParams

# Interface: GetByProviderIdParams

Defined in: [packages/core/src/repositories/base/identityProvider.base.repository.interface.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/identityProvider.base.repository.interface.ts#L13)

Parameters for retrieving an identity provider by provider ID.
GetByProviderIdParams

## Properties

### identityProviderId?

> `optional` **identityProviderId**: `string`

Defined in: [packages/core/src/repositories/base/identityProvider.base.repository.interface.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/identityProvider.base.repository.interface.ts#L14)

The unique identifier of the identity provider.

---

### identityProviderEmail?

> `optional` **identityProviderEmail**: `string`

Defined in: [packages/core/src/repositories/base/identityProvider.base.repository.interface.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/identityProvider.base.repository.interface.ts#L15)

The email associated with the identity provider.

---

### identityProviderType?

> `optional` **identityProviderType**: [`IdentityProviderType`](../enumerations/IdentityProviderType.md)

Defined in: [packages/core/src/repositories/base/identityProvider.base.repository.interface.ts:16](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/repositories/base/identityProvider.base.repository.interface.ts#L16)

The type of identity provider.
