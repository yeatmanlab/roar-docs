[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / UserClaim

# Interface: UserClaim

Defined in: [src/models/userClaim.model.ts:37](src/src/models/userClaim.model.ts#37)

Extends Claims with metadata about the user's claim status.
Used for tracking and managing user permissions over time.

## See

[Claims](Claims.md) - Base authorization claims structure

## Extends

- [`Claims`](Claims.md)

## Properties

| Property                               | Type                  | Description                                    | Defined in                                                               |
| -------------------------------------- | --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------ |
| <a id="claims"></a> `claims`           | [`Claims`](Claims.md) | Complete set of user's authorization claims.   | [src/models/userClaim.model.ts:39](src/src/models/userClaim.model.ts#39) |
| <a id="lastupdated"></a> `lastUpdated` | `number`              | Unix timestamp of last claims update.          | [src/models/userClaim.model.ts:42](src/src/models/userClaim.model.ts#42) |
| <a id="testdata"></a> `testData`       | `boolean`             | Whether these claims are for testing purposes. | [src/models/userClaim.model.ts:45](src/src/models/userClaim.model.ts#45) |
