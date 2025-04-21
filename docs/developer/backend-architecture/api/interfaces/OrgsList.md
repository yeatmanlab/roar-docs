[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / OrgsList

# Interface: OrgsList

Defined in: [packages/core/src/models/org.model.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L27)

A base interface for readOrgs and assignedOrgs.
This interface is used to represent the organizations that can read or are assigned to an administration.
OrgsList

## See

[EducationalOrgsList](EducationalOrgsList.md)

## Extends

- [`EducationalOrgsList`](EducationalOrgsList.md)

## Extended by

- [`Administration`](Administration.md)

## Properties

### districts?

> `optional` **districts**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L13)

An array of district IDs.

#### Inherited from

[`EducationalOrgsList`](EducationalOrgsList.md).[`districts`](EducationalOrgsList.md#districts)

---

### schools?

> `optional` **schools**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L14)

An array of school IDs.

#### Inherited from

[`EducationalOrgsList`](EducationalOrgsList.md).[`schools`](EducationalOrgsList.md#schools)

---

### classes?

> `optional` **classes**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L15)

An array of class IDs.

#### Inherited from

[`EducationalOrgsList`](EducationalOrgsList.md).[`classes`](EducationalOrgsList.md#classes)

---

### families?

> `optional` **families**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:29](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L29)

An array of family IDs.

---

### groups?

> `optional` **groups**: `string`[]

Defined in: [packages/core/src/models/org.model.ts:31](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/org.model.ts#L31)

An array of group IDs.
