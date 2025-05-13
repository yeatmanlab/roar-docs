[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetByProviderIdParams

# Interface: GetByProviderIdParams

Defined in: [src/repositories/base/identityProvider.base.repository.interface.ts:10](src/src/repositories/base/identityProvider.base.repository.interface.ts#10)

Parameters for retrieving identity providers by their provider-specific details.
At least one parameter must be provided for the search.

## Properties

| Property                                                    | Type                                                              | Description                                          | Defined in                                                                                                                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="identityproviderid"></a> `identityProviderId?`       | `string`                                                          | Provider-assigned unique identifier.                 | [src/repositories/base/identityProvider.base.repository.interface.ts:12](src/src/repositories/base/identityProvider.base.repository.interface.ts#12) |
| <a id="identityprovideremail"></a> `identityProviderEmail?` | `string`                                                          | Email address registered with the provider.          | [src/repositories/base/identityProvider.base.repository.interface.ts:15](src/src/repositories/base/identityProvider.base.repository.interface.ts#15) |
| <a id="identityprovidertype"></a> `identityProviderType?`   | [`IdentityProviderType`](../enumerations/IdentityProviderType.md) | Type of identity provider (e.g., Google, Microsoft). | [src/repositories/base/identityProvider.base.repository.interface.ts:18](src/src/repositories/base/identityProvider.base.repository.interface.ts#18) |
