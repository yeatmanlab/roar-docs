[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Administration

# Interface: Administration

Defined in: [src/models/administration.model.ts:9](src/src/models/administration.model.ts#9)

An interface representing an administration.
This interface defines the structure of an administration object.

## Extends

- [`OrgsList`](OrgsList.md)

## Properties

| Property                               | Type                            | Description                                                 | Defined in                                                                         |
| -------------------------------------- | ------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <a id="createdby"></a> `createdBy`     | `string`                        | ID of the user who created the administration.              | [src/models/administration.model.ts:11](src/src/models/administration.model.ts#11) |
| <a id="updatedby"></a> `updatedBy`     | `string`                        | ID of the user who last updated the administration.         | [src/models/administration.model.ts:14](src/src/models/administration.model.ts#14) |
| <a id="deletedby"></a> `deletedBy`     | `string`                        | ID of the user who last deleted the administration.         | [src/models/administration.model.ts:17](src/src/models/administration.model.ts#17) |
| <a id="modifiedby"></a> `modifiedBy`   | `string`                        | ID of the user who last modified the administration.        | [src/models/administration.model.ts:20](src/src/models/administration.model.ts#20) |
| <a id="datecreated"></a> `dateCreated` | `Date`                          | Date and time when the administration was created.          | [src/models/administration.model.ts:23](src/src/models/administration.model.ts#23) |
| <a id="dateopened"></a> `dateOpened`   | `Date`                          | Date and time when the administration opens.                | [src/models/administration.model.ts:26](src/src/models/administration.model.ts#26) |
| <a id="dateclosed"></a> `dateClosed`   | `Date`                          | Date and time when the administration closes.               | [src/models/administration.model.ts:29](src/src/models/administration.model.ts#29) |
| <a id="assessments"></a> `assessments` | [`Assessment`](Assessment.md)[] | Array of assessments included in this administration.       | [src/models/administration.model.ts:32](src/src/models/administration.model.ts#32) |
| <a id="sequential"></a> `sequential`   | `boolean`                       | Whether the assessments must be taken in sequential order.  | [src/models/administration.model.ts:35](src/src/models/administration.model.ts#35) |
| <a id="readorgs"></a> `readOrgs`       | [`OrgsList`](OrgsList.md)       | Organizations that have read access to administration data. | [src/models/administration.model.ts:38](src/src/models/administration.model.ts#38) |
| <a id="minimalorgs"></a> `minimalOrgs` | [`OrgsList`](OrgsList.md)       | Top-level organizations assigned to this administration.    | [src/models/administration.model.ts:41](src/src/models/administration.model.ts#41) |
| <a id="legal"></a> `legal?`            | [`Legal`](Legal.md)             | Information about consent and assent forms.                 | [src/models/administration.model.ts:44](src/src/models/administration.model.ts#44) |
| <a id="name"></a> `name?`              | `string`                        | Internal name of the administration.                        | [src/models/administration.model.ts:47](src/src/models/administration.model.ts#47) |
| <a id="publicname"></a> `publicName?`  | `string`                        | Full, user-facing name of the administration.               | [src/models/administration.model.ts:50](src/src/models/administration.model.ts#50) |
| <a id="testdata"></a> `testData?`      | `boolean`                       | Whether this administration contains test data.             | [src/models/administration.model.ts:53](src/src/models/administration.model.ts#53) |
| <a id="demodata"></a> `demoData?`      | `boolean`                       | Whether this administration contains demo data.             | [src/models/administration.model.ts:56](src/src/models/administration.model.ts#56) |
