[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreGetByRoarUidParams

# Interface: FirestoreGetByRoarUidParams

Defined in: [src/types/firestore/params/userClaim.params.ts:8](src/src/types/firestore/params/userClaim.params.ts#8)

Represents parameters for Firestore operations that fetch data by a Roar user ID.
Extends the base GetByRoarUidParams with optional transaction support.

## Extends

- [`GetByRoarUidParams`](GetByRoarUidParams.md)

## Properties

| Property                                | Type          | Description                                      | Overrides                                                                                        | Defined in                                                                                                 |
| --------------------------------------- | ------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| <a id="transaction"></a> `transaction?` | `Transaction` | The transaction object for Firestore operations. | [`GetByRoarUidParams`](GetByRoarUidParams.md).[`transaction`](GetByRoarUidParams.md#transaction) | [src/types/firestore/params/userClaim.params.ts:10](src/src/types/firestore/params/userClaim.params.ts#10) |
