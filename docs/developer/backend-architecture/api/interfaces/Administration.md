[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Administration

# Interface: Administration

Defined in: [packages/core/src/models/administration.model.ts:24](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L24)

An interface representing an administration.
This interface is used to define the structure of an administration object.
Administration

## Extends

- [`OrgsList`](OrgsList.md)

## Properties

### createdBy

> **createdBy**: `string`

Defined in: [packages/core/src/models/administration.model.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L25)

The ID of the user who created the administration.

---

### dateCreated

> **dateCreated**: `Date`

Defined in: [packages/core/src/models/administration.model.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L26)

The date the administration was created.

---

### dateOpened

> **dateOpened**: `Date`

Defined in: [packages/core/src/models/administration.model.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L27)

The date the administration opens.

---

### dateClosed

> **dateClosed**: `Date`

Defined in: [packages/core/src/models/administration.model.ts:28](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L28)

The date the administration closes.

---

### assessments

> **assessments**: [`Assessment`](Assessment.md)[]

Defined in: [packages/core/src/models/administration.model.ts:29](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L29)

The array of assessments in this administration.

---

### sequential

> **sequential**: `boolean`

Defined in: [packages/core/src/models/administration.model.ts:30](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L30)

A boolean indicating whether the assessments in the administration are sequential.

---

### readOrgs

> **readOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/administration.model.ts:31](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L31)

An interface representing the organizations that can read administration data.

---

### minimalOrgs

> **minimalOrgs**: [`OrgsList`](OrgsList.md)

Defined in: [packages/core/src/models/administration.model.ts:32](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L32)

An interface representing only the top-level organizations that are assigned to this administration.

---

### legal?

> `optional` **legal**: [`Legal`](Legal.md)

Defined in: [packages/core/src/models/administration.model.ts:33](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L33)

An object with information about consent and assent forms for this administration.

---

### name?

> `optional` **name**: `string`

Defined in: [packages/core/src/models/administration.model.ts:34](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L34)

A string inidcating the name of the administration.

---

### publicName?

> `optional` **publicName**: `string`

Defined in: [packages/core/src/models/administration.model.ts:35](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L35)

A string indicating the full, user-facing name of the administration.

---

### testData?

> `optional` **testData**: `boolean`

Defined in: [packages/core/src/models/administration.model.ts:36](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L36)

A boolean indicating whether the administration contains test data.

---

### demoData?

> `optional` **demoData**: `boolean`

Defined in: [packages/core/src/models/administration.model.ts:37](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/administration.model.ts#L37)

A boolean indicating whether the administration contains demo data.

---

### districts?

> `optional` **districts**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L13)

An array of district IDs.

#### Inherited from

[`OrgsList`](OrgsList.md).[`districts`](OrgsList.md#districts)

---

### schools?

> `optional` **schools**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L14)

An array of school IDs.

#### Inherited from

[`OrgsList`](OrgsList.md).[`schools`](OrgsList.md#schools)

---

### classes?

> `optional` **classes**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L15)

An array of class IDs.

#### Inherited from

[`OrgsList`](OrgsList.md).[`classes`](OrgsList.md#classes)

---

### families?

> `optional` **families**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:29](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L29)

An array of family IDs.

#### Inherited from

[`OrgsList`](OrgsList.md).[`families`](OrgsList.md#families)

---

### groups?

> `optional` **groups**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:31](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L31)

An array of group IDs.

#### Inherited from

[`OrgsList`](OrgsList.md).[`groups`](OrgsList.md#groups)
