[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / IdentityProvider

# Interface: IdentityProvider

Defined in: [src/models/identityProvider.model.ts:8](src/src/models/identityProvider.model.ts#8)

Defines the structure of an identity provider data object.
Contains authentication and authorization information for a provider.

## Properties

| Property                                 | Type                                                              | Description                                              | Defined in                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <a id="providertype"></a> `providerType` | [`IdentityProviderType`](../enumerations/IdentityProviderType.md) | Type of identity provider (e.g., Google, Microsoft).     | [src/models/identityProvider.model.ts:10](src/src/models/identityProvider.model.ts#10) |
| <a id="providerid"></a> `providerId`     | `string`                                                          | Unique identifier assigned by the provider.              | [src/models/identityProvider.model.ts:13](src/src/models/identityProvider.model.ts#13) |
| <a id="lastsync"></a> `lastSync`         | `Date`                                                            | Timestamp of the last synchronization with the provider. | [src/models/identityProvider.model.ts:16](src/src/models/identityProvider.model.ts#16) |
| <a id="activated"></a> `activated`       | `boolean`                                                         | Whether this provider is currently active.               | [src/models/identityProvider.model.ts:19](src/src/models/identityProvider.model.ts#19) |
| <a id="role"></a> `role`                 | `string`                                                          | Role assigned to this provider.                          | [src/models/identityProvider.model.ts:22](src/src/models/identityProvider.model.ts#22) |
| <a id="roaruid"></a> `roarUid`           | `string`                                                          | Internal ROAR system unique identifier.                  | [src/models/identityProvider.model.ts:25](src/src/models/identityProvider.model.ts#25) |
| <a id="email"></a> `email?`              | `string`                                                          | Email address associated with the provider.              | [src/models/identityProvider.model.ts:28](src/src/models/identityProvider.model.ts#28) |
| <a id="adminuid"></a> `adminUid?`        | `string`                                                          | Administrator user identifier, if applicable.            | [src/models/identityProvider.model.ts:31](src/src/models/identityProvider.model.ts#31) |
| <a id="adminorgs"></a> `adminOrgs?`      | [`Claims`](Claims.md)                                             | Organization claims for administrator access.            | [src/models/identityProvider.model.ts:34](src/src/models/identityProvider.model.ts#34) |
