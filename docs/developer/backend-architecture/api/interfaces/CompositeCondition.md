[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / CompositeCondition

# Interface: CompositeCondition

Defined in: [packages/core/src/models/condition.model.ts:11](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L11)

Interface representing a condition based on a composite of other conditions.
The conditions are combined using a logical operator.
The conditions can be FieldConditions, CompositeConditions, or SelectAllConditions.

## See

 - [FieldCondition](FieldCondition.md)
 - [SelectAllCondition](../type-aliases/SelectAllCondition.md)

## Properties

### conditions

> **conditions**: [`Condition`](../type-aliases/Condition.md)[]

Defined in: [packages/core/src/models/condition.model.ts:13](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L13)

***

### op

> **op**: `"AND"` \| `"OR"`

Defined in: [packages/core/src/models/condition.model.ts:12](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L12)
