[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Legal

# Interface: Legal

Defined in: [src/models/legal.model.ts:33](src/src/models/legal.model.ts#33)

Represents the legal configuration for a project.

## See

[AssentConsent](AssentConsent.md) - Structure of assent and consent documents

## Properties

| Property                                  | Type                                | Description                                          | Defined in                                                       |
| ----------------------------------------- | ----------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------- |
| <a id="amount"></a> `amount?`             | `string`                            | Compensation amount for participation.               | [src/models/legal.model.ts:35](src/src/models/legal.model.ts#35) |
| <a id="assent"></a> `assent?`             | [`AssentConsent`](AssentConsent.md) | Assent document configuration for minors.            | [src/models/legal.model.ts:38](src/src/models/legal.model.ts#38) |
| <a id="consent"></a> `consent?`           | [`AssentConsent`](AssentConsent.md) | Consent document configuration for adults/guardians. | [src/models/legal.model.ts:41](src/src/models/legal.model.ts#41) |
| <a id="expectedtime"></a> `expectedTime?` | `string`                            | Expected time commitment for participation.          | [src/models/legal.model.ts:44](src/src/models/legal.model.ts#44) |
