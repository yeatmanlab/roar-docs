[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / OrgBase

# Interface: OrgBase

Defined in: [packages/core/src/models/org.model.ts:54](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L54)

An interface representing an organization.
This interface is used to define the structure of an organization object.
 OrgBase

## See

 - [Legal](Legal.md)
 - [OrgsList](OrgsList.md)
 - [EducationalOrgsList](EducationalOrgsList.md)

## Properties

### administrationId

> **administrationId**: `string`

Defined in: [packages/core/src/models/org.model.ts:55](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L55)

The ID of the administration.

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/core/src/models/org.model.ts:56](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L56)

The ID of the user who created the organization.

***

### dateClosed

> **dateClosed**: `Date`

Defined in: [packages/core/src/models/org.model.ts:57](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L57)

The date the organization was closed.

***

### dateCreated

> **dateCreated**: `Date`

Defined in: [packages/core/src/models/org.model.ts:58](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L58)

The date the organization was created.

***

### dateOpened

> **dateOpened**: `Date`

Defined in: [packages/core/src/models/org.model.ts:59](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L59)

The date the organization was opened.

***

### legal

> **legal**: [`Legal`](Legal.md)

Defined in: [packages/core/src/models/org.model.ts:60](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L60)

An object with information about consent and assent forms for this organization.

***

### name

> **name**: `string`

Defined in: [packages/core/src/models/org.model.ts:61](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L61)

A string inidcating the name of the organization.

***

### orgId

> **orgId**: `string`

Defined in: [packages/core/src/models/org.model.ts:62](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L62)

The ID of the organization.

***

### orgType

> **orgType**: `string`

Defined in: [packages/core/src/models/org.model.ts:63](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L63)

The type of the organization.

***

### publicName

> **publicName**: `string`

Defined in: [packages/core/src/models/org.model.ts:64](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L64)

A string indicating the full, user-facing name of the organization.

***

### testData

> **testData**: `boolean`

Defined in: [packages/core/src/models/org.model.ts:65](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L65)

A boolean indicating whether the organization contains test data.

***

### timestamp

> **timestamp**: `Date`

Defined in: [packages/core/src/models/org.model.ts:66](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/org.model.ts#L66)

The timestamp of the organization.
