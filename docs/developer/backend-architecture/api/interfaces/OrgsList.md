[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / OrgsList

# Interface: OrgsList

Defined in: [src/models/org.model.ts:25](src/src/models/org.model.ts#25)

Extends educational organizations to include family and group structures.
Used for defining read access permissions and assignments in administrations.

## See

[EducationalOrgsList](EducationalOrgsList.md) - Base educational organization structure

## Extends

- [`EducationalOrgsList`](EducationalOrgsList.md)

## Extended by

- [`Administration`](Administration.md)

## Properties

| Property                          | Type       | Description                  | Defined in                                                   |
| --------------------------------- | ---------- | ---------------------------- | ------------------------------------------------------------ |
| <a id="families"></a> `families?` | `string`[] | Array of family identifiers. | [src/models/org.model.ts:27](src/src/models/org.model.ts#27) |
| <a id="groups"></a> `groups?`     | `string`[] | Array of group identifiers.  | [src/models/org.model.ts:30](src/src/models/org.model.ts#30) |
