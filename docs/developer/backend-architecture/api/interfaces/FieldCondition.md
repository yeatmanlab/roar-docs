[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FieldCondition

# Interface: FieldCondition

Defined in: [src/models/condition.model.ts:25](src/src/models/condition.model.ts#25)

A condition that evaluates a field value against a reference value using an operator.

## See

- [Operator](../enumerations/Operator.md) - Available comparison operators
- [ParameterValue](../type-aliases/ParameterValue.md) - Valid value types

## Properties

| Property                   | Type                                        | Description                         | Defined in                                                               |
| -------------------------- | ------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| <a id="id"></a> `id`       | `number`                                    | Unique identifier for the condition | [src/models/condition.model.ts:27](src/src/models/condition.model.ts#27) |
| <a id="field"></a> `field` | `string`                                    | Document field to evaluate          | [src/models/condition.model.ts:30](src/src/models/condition.model.ts#30) |
| <a id="op"></a> `op`       | [`Operator`](../enumerations/Operator.md)   | Comparison operator to apply        | [src/models/condition.model.ts:33](src/src/models/condition.model.ts#33) |
| <a id="value"></a> `value` | `string` \| `number` \| `boolean` \| `Date` | Reference value to compare against  | [src/models/condition.model.ts:36](src/src/models/condition.model.ts#36) |
