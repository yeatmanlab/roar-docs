[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / createIdentityProviderService

# Function: createIdentityProviderService()

```ts
function createIdentityProviderService<IDPRepo, UserClaimRepo, UserRepo>(
  params: CreateIdentityProviderServiceParams<IDPRepo, UserClaimRepo, UserRepo>,
): IdentityProviderService;
```

Defined in: [src/services/createIdentityProviderService.service.ts:32](src/src/services/createIdentityProviderService.service.ts#32)

Creates and returns an Identity Provider Service

This service provides functions to interact with identity providers,
particularly for retrieving or creating Roar UIDs associated with
various identity providers.

## Type Parameters

| Type Parameter                                                                                          | Description                                   |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `IDPRepo` _extends_ [`IdentityProviderBaseRepository`](../interfaces/IdentityProviderBaseRepository.md) | Type extending IdentityProviderBaseRepository |
| `UserClaimRepo` _extends_ [`UserClaimBaseRepository`](../interfaces/UserClaimBaseRepository.md)         | Type extending UserClaimBaseRepository        |
| `UserRepo` _extends_ [`UserBaseRepository`](../interfaces/UserBaseRepository.md)                        | Type extending UserBaseRepository             |

## Parameters

| Parameter | Type                                                                                                                                    | Description                                                                          |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `params`  | [`CreateIdentityProviderServiceParams`](../interfaces/CreateIdentityProviderServiceParams.md)\<`IDPRepo`, `UserClaimRepo`, `UserRepo`\> | The CreateIdentityProviderServiceParams object containing the required repositories. |

## Returns

[`IdentityProviderService`](../interfaces/IdentityProviderService.md)

The Identity Provider Service instance.

## See

- [IdentityProviderService](../interfaces/IdentityProviderService.md) - The service interface.
- [IdentityProviderBaseRepository](../interfaces/IdentityProviderBaseRepository.md) - The base repository interface for identity provider data entities.
- [IdentityProviderType](../enumerations/IdentityProviderType.md) - The type for identity provider data entities.
- [UserBaseRepository](../interfaces/UserBaseRepository.md) - The base repository interface for user data entities.
- [UserClaimBaseRepository](../interfaces/UserClaimBaseRepository.md) - The base repository interface for user claim data entities.
