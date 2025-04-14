[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / SingleFilter

# Interface: SingleFilter

Defined in: [packages/core/src/filters/base.filter.ts:34](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L34)

Represents a filter that compares a field to a specific value using a comparison operator.

## Properties

### field

> **field**: `string` \| `string`[]

Defined in: [packages/core/src/filters/base.filter.ts:35](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L35)

The field name or path to filter on (can be a string or array of strings for nested fields)

***

### op

> **op**: [`ComparisonOperator`](../type-aliases/ComparisonOperator.md)

Defined in: [packages/core/src/filters/base.filter.ts:36](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L36)

The comparison operator to use for the filter condition

***

### value

> **value**: `any`

Defined in: [packages/core/src/filters/base.filter.ts:37](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L37)

The value to compare the field against
