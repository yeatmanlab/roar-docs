[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / IdentityProvider

# Interface: IdentityProvider

Defined in: [packages/core/src/models/identityProvider.model.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L18)

An interface which defines the structure of an identity provider data object.
This interface is used to represent the data associated with an identity provider.
IdentityProvider

## Properties

### providerType

> **providerType**: [`IdentityProviderType`](../enumerations/IdentityProviderType.md)

Defined in: [packages/core/src/models/identityProvider.model.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L19)

The type of identity provider

---

### providerId

> **providerId**: `string`

Defined in: [packages/core/src/models/identityProvider.model.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L20)

Unique identifier for the provider

---

### lastSync

> **lastSync**: `Date`

Defined in: [packages/core/src/models/identityProvider.model.ts:21](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L21)

Timestamp of the last synchronization

---

### activated

> **activated**: `boolean`

Defined in: [packages/core/src/models/identityProvider.model.ts:22](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L22)

Whether the provider is activated

---

### role

> **role**: `string`

Defined in: [packages/core/src/models/identityProvider.model.ts:23](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L23)

Role associated with the identity

---

### roarUid

> **roarUid**: `string`

Defined in: [packages/core/src/models/identityProvider.model.ts:24](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L24)

ROAR system unique identifier

---

### email?

> `optional` **email**: `string`

Defined in: [packages/core/src/models/identityProvider.model.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L25)

Optional email address

---

### adminUid?

> `optional` **adminUid**: `string`

Defined in: [packages/core/src/models/identityProvider.model.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L26)

Optional admin user identifier

---

### adminOrgs?

> `optional` **adminOrgs**: [`Claims`](Claims.md)

Defined in: [packages/core/src/models/identityProvider.model.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/identityProvider.model.ts#L27)

Optional admin organizations claims f
