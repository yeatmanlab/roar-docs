[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / CompositeCondition

# Interface: CompositeCondition

Defined in: [src/models/condition.model.ts:11](src/src/models/condition.model.ts#11)

A condition that combines multiple conditions using a logical operator.
Can combine FieldConditions, CompositeConditions, or SelectAllConditions.

## See

- [FieldCondition](FieldCondition.md) - For field-based conditions
- [SelectAllCondition](../type-aliases/SelectAllCondition.md) - For select-all conditions

## Properties

| Property                             | Type                                          | Description                                            | Defined in                                                               |
| ------------------------------------ | --------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| <a id="op"></a> `op`                 | `"AND"` \| `"OR"`                             | Logical operator to combine conditions ('AND' or 'OR') | [src/models/condition.model.ts:13](src/src/models/condition.model.ts#13) |
| <a id="conditions"></a> `conditions` | [`Condition`](../type-aliases/Condition.md)[] | Array of conditions to be combined                     | [src/models/condition.model.ts:16](src/src/models/condition.model.ts#16) |
