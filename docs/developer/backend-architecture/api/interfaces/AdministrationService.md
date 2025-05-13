[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / AdministrationService

# Interface: AdministrationService

Defined in: [src/services/administration.service.interface.ts:55](src/src/services/administration.service.interface.ts#55)

Service interface for performing high-level administration operations.
Provides methods for retrieving and managing administrations across organizations.

## Methods

### getAdministrationIdsFromOrgs()

```ts
getAdministrationIdsFromOrgs(params: GetAdministrationIdsFromOrgsParams): Promise<string[]>;
```

Defined in: [src/services/administration.service.interface.ts:63](src/src/services/administration.service.interface.ts#63)

Retrieves administration IDs associated with specified organizations.

#### Parameters

| Parameter | Type                                                                          | Description                                                                |
| --------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `params`  | [`GetAdministrationIdsFromOrgsParams`](GetAdministrationIdsFromOrgsParams.md) | The GetAdministrationIdsFromOrgsParams object containing query parameters. |

#### Returns

`Promise`\<`string`[]\>

Promise resolving to array of administration IDs

#### See

[GetAdministrationIdsFromOrgsParams](GetAdministrationIdsFromOrgsParams.md)

---

### getAdministrationIdsForAdministrator()

```ts
getAdministrationIdsForAdministrator(params: GetAdministrationIdsForAdministratorParams): Promise<string[]>;
```

Defined in: [src/services/administration.service.interface.ts:74](src/src/services/administration.service.interface.ts#74)

Retrieves administration IDs that an administrator has access to.

#### Parameters

| Parameter | Type                                                                                          | Description                                                                        |
| --------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `params`  | [`GetAdministrationIdsForAdministratorParams`](GetAdministrationIdsForAdministratorParams.md) | The GetAdministrationIdsForAdministratorParams object containing query parameters. |

#### Returns

`Promise`\<`string`[]\>

Promise resolving to array of administration IDs

#### See

[GetAdministrationIdsForAdministratorParams](GetAdministrationIdsForAdministratorParams.md)
