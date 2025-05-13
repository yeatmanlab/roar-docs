[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / OrgBase

# Interface: OrgBase

Defined in: [src/models/org.model.ts:41](src/src/models/org.model.ts#41)

Defines the core structure and metadata for an organization entity.
Represents any organizational unit within ROAR including districts,
schools, classes, families, and groups.

## See

- [Legal](Legal.md) - Legal documentation settings
- [OrgsList](OrgsList.md) - Organization hierarchy types

## Properties

| Property                                         | Type                | Description                                                 | Defined in                                                   |
| ------------------------------------------------ | ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| <a id="administrationid"></a> `administrationId` | `string`            | Administration this organization belongs to.                | [src/models/org.model.ts:43](src/src/models/org.model.ts#43) |
| <a id="createdby"></a> `createdBy`               | `string`            | User who created this organization.                         | [src/models/org.model.ts:46](src/src/models/org.model.ts#46) |
| <a id="dateclosed"></a> `dateClosed`             | `Date`              | Timestamp when organization access ends.                    | [src/models/org.model.ts:49](src/src/models/org.model.ts#49) |
| <a id="datecreated"></a> `dateCreated`           | `Date`              | Timestamp when organization was created.                    | [src/models/org.model.ts:52](src/src/models/org.model.ts#52) |
| <a id="dateopened"></a> `dateOpened`             | `Date`              | Timestamp when organization access begins.                  | [src/models/org.model.ts:55](src/src/models/org.model.ts#55) |
| <a id="legal"></a> `legal`                       | [`Legal`](Legal.md) | Consent and legal documentation settings.                   | [src/models/org.model.ts:58](src/src/models/org.model.ts#58) |
| <a id="name"></a> `name`                         | `string`            | Internal organization identifier.                           | [src/models/org.model.ts:61](src/src/models/org.model.ts#61) |
| <a id="orgid"></a> `orgId`                       | `string`            | Unique organization identifier.                             | [src/models/org.model.ts:64](src/src/models/org.model.ts#64) |
| <a id="orgtype"></a> `orgType`                   | `string`            | Organization type (district, school, class, family, group). | [src/models/org.model.ts:67](src/src/models/org.model.ts#67) |
| <a id="publicname"></a> `publicName`             | `string`            | User-facing organization name.                              | [src/models/org.model.ts:70](src/src/models/org.model.ts#70) |
| <a id="testdata"></a> `testData`                 | `boolean`           | Indicates if organization contains test data.               | [src/models/org.model.ts:73](src/src/models/org.model.ts#73) |
| <a id="timestamp"></a> `timestamp`               | `Date`              | Last modification timestamp.                                | [src/models/org.model.ts:76](src/src/models/org.model.ts#76) |
