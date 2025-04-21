[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / CompositeCondition

# Interface: CompositeCondition

Defined in: [packages/core/src/models/condition.model.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/condition.model.ts#L11)

Interface representing a condition based on a composite of other conditions.
The conditions are combined using a logical operator.
The conditions can be FieldConditions, CompositeConditions, or SelectAllConditions.

## See

- [FieldCondition](FieldCondition.md)
- [SelectAllCondition](../type-aliases/SelectAllCondition.md)

## Properties

### op

> **op**: `"AND"` \| `"OR"`

Defined in: [packages/core/src/models/condition.model.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/condition.model.ts#L12)

---

### conditions

> **conditions**: [`Condition`](../type-aliases/Condition.md)[]

Defined in: [packages/core/src/models/condition.model.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/models/condition.model.ts#L13)
