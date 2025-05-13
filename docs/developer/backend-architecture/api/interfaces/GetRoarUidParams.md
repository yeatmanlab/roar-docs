[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetRoarUidParams

# Interface: GetRoarUidParams

Defined in: [src/services/identityProvider.service.interface.ts:9](src/src/services/identityProvider.service.interface.ts#9)

Parameters for retrieving or generating a ROAR user identifier.

## Properties

| Property                                                    | Type                                                              | Description                                          | Defined in                                                                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="adminuid"></a> `adminUid?`                           | `string`                                                          | Administrator user identifier.                       | [src/services/identityProvider.service.interface.ts:11](src/src/services/identityProvider.service.interface.ts#11) |
| <a id="identityproviderid"></a> `identityProviderId?`       | `string`                                                          | Identity provider's unique identifier.               | [src/services/identityProvider.service.interface.ts:14](src/src/services/identityProvider.service.interface.ts#14) |
| <a id="identityprovideremail"></a> `identityProviderEmail?` | `string`                                                          | Email registered with the identity provider.         | [src/services/identityProvider.service.interface.ts:17](src/src/services/identityProvider.service.interface.ts#17) |
| <a id="identityprovidertype"></a> `identityProviderType?`   | [`IdentityProviderType`](../enumerations/IdentityProviderType.md) | Type of identity provider (e.g., Google, Microsoft). | [src/services/identityProvider.service.interface.ts:20](src/src/services/identityProvider.service.interface.ts#20) |
| <a id="createifnotfound"></a> `createIfNotFound?`           | `boolean`                                                         | Whether to create a new identifier if none exists.   | [src/services/identityProvider.service.interface.ts:23](src/src/services/identityProvider.service.interface.ts#23) |
| <a id="fallbacktoadminuid"></a> `fallBackToAdminUid?`       | `boolean`                                                         | Whether to use admin UID when provider lookup fails. | [src/services/identityProvider.service.interface.ts:26](src/src/services/identityProvider.service.interface.ts#26) |
