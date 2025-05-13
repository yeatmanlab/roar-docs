[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / GetByRoarUidParams

# Interface: GetByRoarUidParams

Defined in: [src/repositories/base/userClaim.base.repository.interface.ts:8](src/src/repositories/base/userClaim.base.repository.interface.ts#8)

Parameters for retrieving user claims by ROAR user identifier.

## Extended by

- [`FirestoreGetByRoarUidParams`](FirestoreGetByRoarUidParams.md)

## Properties

| Property                                                 | Type      | Description                                   | Defined in                                                                                                                             |
| -------------------------------------------------------- | --------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="administratorroaruid"></a> `administratorRoarUid` | `string`  | ROAR system identifier for the administrator. | [src/repositories/base/userClaim.base.repository.interface.ts:10](src/src/repositories/base/userClaim.base.repository.interface.ts#10) |
| <a id="transaction"></a> `transaction?`                  | `unknown` | Optional transaction for atomic operations.   | [src/repositories/base/userClaim.base.repository.interface.ts:13](src/src/repositories/base/userClaim.base.repository.interface.ts#13) |
