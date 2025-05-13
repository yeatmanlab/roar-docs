[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / IdentityProviderService

# Interface: IdentityProviderService

Defined in: [src/services/identityProvider.service.interface.ts:58](src/src/services/identityProvider.service.interface.ts#58)

Service interface for managing identity provider operations.

## Methods

### getRoarUid()

```ts
getRoarUid(params: GetRoarUidParams): Promise<string>;
```

Defined in: [src/services/identityProvider.service.interface.ts:66](src/src/services/identityProvider.service.interface.ts#66)

Retrieves or generates a ROAR user identifier based on provided criteria.

#### Parameters

| Parameter | Type                                      | Description                    |
| --------- | ----------------------------------------- | ------------------------------ |
| `params`  | [`GetRoarUidParams`](GetRoarUidParams.md) | Search or creation parameters. |

#### Returns

`Promise`\<`string`\>

Promise resolving to ROAR user identifier.

#### See

[GetRoarUidParams](GetRoarUidParams.md) - Parameters for retrieving or generating a ROAR user identifier.
