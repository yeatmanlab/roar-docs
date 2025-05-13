[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / EducationalOrgsList

# Interface: EducationalOrgsList

Defined in: [src/models/org.model.ts:8](src/src/models/org.model.ts#8)

Represents the hierarchical structure of educational organizations within ROAR.
Used for defining access control and organization assignments at district,
school, and class levels.

## Extended by

- [`OrgsList`](OrgsList.md)

## Properties

| Property                            | Type       | Description                    | Defined in                                                   |
| ----------------------------------- | ---------- | ------------------------------ | ------------------------------------------------------------ |
| <a id="districts"></a> `districts?` | `string`[] | Array of district identifiers. | [src/models/org.model.ts:10](src/src/models/org.model.ts#10) |
| <a id="schools"></a> `schools?`     | `string`[] | Array of school identifiers.   | [src/models/org.model.ts:13](src/src/models/org.model.ts#13) |
| <a id="classes"></a> `classes?`     | `string`[] | Array of class identifiers.    | [src/models/org.model.ts:16](src/src/models/org.model.ts#16) |
