[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / GetRoarUidParams

# Interface: GetRoarUidParams

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L15)

Parameters for getting or creating a roar uid

## Properties

### adminUid?

> `optional` **adminUid**: `string`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:16](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L16)

The optional admin uid

***

### createIfNotFound?

> `optional` **createIfNotFound**: `boolean`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:20](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L20)

Whether to create a new uid if not found

***

### fallBackToAdminUid?

> `optional` **fallBackToAdminUid**: `boolean`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:21](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L21)

Whether to fall back to admin uid if identity provider parameters don't match

***

### identityProviderEmail?

> `optional` **identityProviderEmail**: `string`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:18](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L18)

The optional identity provider email

***

### identityProviderId?

> `optional` **identityProviderId**: `string`

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:17](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L17)

The optional identity provider id

***

### identityProviderType?

> `optional` **identityProviderType**: [`IdentityProviderType`](../enumerations/IdentityProviderType.md)

Defined in: [packages/core/src/services/identityProvider.service.interface.ts:19](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/services/identityProvider.service.interface.ts#L19)

The optional identity provider type
