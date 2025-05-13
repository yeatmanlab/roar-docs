[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / CreateIdentityProviderServiceParams

# Interface: CreateIdentityProviderServiceParams\<IDPRepo, UserClaimRepo, UserRepo\>

Defined in: [src/services/identityProvider.service.interface.ts:40](src/src/services/identityProvider.service.interface.ts#40)

Parameters for creating an identity provider service instance.

## See

- [IdentityProviderBaseRepository](IdentityProviderBaseRepository.md)
- [UserClaimBaseRepository](UserClaimBaseRepository.md)
- [UserBaseRepository](UserBaseRepository.md)

## Type Parameters

| Type Parameter                                                                            | Description                                    |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `IDPRepo` _extends_ [`IdentityProviderBaseRepository`](IdentityProviderBaseRepository.md) | Type extending IdentityProviderBaseRepository. |
| `UserClaimRepo` _extends_ [`UserClaimBaseRepository`](UserClaimBaseRepository.md)         | Type extending UserClaimBaseRepository.        |
| `UserRepo` _extends_ [`UserBaseRepository`](UserBaseRepository.md)                        | Type extending UserBaseRepository.             |

## Properties

| Property                                                             | Type            | Description                                  | Defined in                                                                                                         |
| -------------------------------------------------------------------- | --------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="identityproviderrepository"></a> `identityProviderRepository` | `IDPRepo`       | Repository for identity provider operations. | [src/services/identityProvider.service.interface.ts:46](src/src/services/identityProvider.service.interface.ts#46) |
| <a id="userclaimrepository"></a> `userClaimRepository`               | `UserClaimRepo` | Repository for user claim operations.        | [src/services/identityProvider.service.interface.ts:49](src/src/services/identityProvider.service.interface.ts#49) |
| <a id="userrepository"></a> `userRepository`                         | `UserRepo`      | Repository for user operations.              | [src/services/identityProvider.service.interface.ts:52](src/src/services/identityProvider.service.interface.ts#52) |
