[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FieldCondition

# Interface: FieldCondition

Defined in: [packages/core/src/models/condition.model.ts:25](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L25)

Interface representing a condition based on a document field, an operator,
and a reference value.

## See

 - [Operator](../enumerations/Operator.md)
 - [Condition](../type-aliases/Condition.md)
 - [CompositeCondition](CompositeCondition.md)
 - [SelectAllCondition](../type-aliases/SelectAllCondition.md)
 - [ParameterValue](../type-aliases/ParameterValue.md)

## Properties

### field

> **field**: `string`

Defined in: [packages/core/src/models/condition.model.ts:27](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L27)

***

### id

> **id**: `number`

Defined in: [packages/core/src/models/condition.model.ts:26](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L26)

***

### op

> **op**: [`Operator`](../enumerations/Operator.md)

Defined in: [packages/core/src/models/condition.model.ts:28](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L28)

***

### value

> **value**: `string` \| `number` \| `boolean` \| `Date`

Defined in: [packages/core/src/models/condition.model.ts:29](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/models/condition.model.ts#L29)
