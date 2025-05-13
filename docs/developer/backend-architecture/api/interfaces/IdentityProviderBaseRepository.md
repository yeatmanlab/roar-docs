[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / IdentityProviderBaseRepository

# Interface: IdentityProviderBaseRepository

Defined in: [src/repositories/base/identityProvider.base.repository.interface.ts:30](src/src/repositories/base/identityProvider.base.repository.interface.ts#30)

Repository interface for IdentityProvider entities.
Extends the base repository with provider-specific operations.

## See

- [BaseRepository](BaseRepository.md) - Base repository functionality.
- [IdentityProvider](IdentityProvider.md) - Identity provider entity structure.
- [IdentityProviderType](../enumerations/IdentityProviderType.md) - Available provider types.
- [GetByProviderIdParams](GetByProviderIdParams.md) - Parameters for retrieving identity providers by their provider-specific details.

## Extends

- [`BaseRepository`](BaseRepository.md)\<[`IdentityProvider`](IdentityProvider.md)\>

## Methods

### getByProviderId()

```ts
getByProviderId(params: GetByProviderIdParams): Promise<Result<IdentityProvider>[]>;
```

Defined in: [src/repositories/base/identityProvider.base.repository.interface.ts:38](src/src/repositories/base/identityProvider.base.repository.interface.ts#38)

Retrieves identity providers matching the specified criteria.

#### Parameters

| Parameter | Type                                                | Description                                               |
| --------- | --------------------------------------------------- | --------------------------------------------------------- |
| `params`  | [`GetByProviderIdParams`](GetByProviderIdParams.md) | Search parameters including provider ID, email, and type. |

#### Returns

`Promise`\<[`Result`](Result.md)\<[`IdentityProvider`](IdentityProvider.md)\>[]\>

Promise resolving to an array of matching providers.
