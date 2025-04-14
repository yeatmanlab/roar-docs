[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / CompositeFilter

# Interface: CompositeFilter

Defined in: [packages/core/src/filters/base.filter.ts:48](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L48)

Represents a composite filter that combines multiple filters using a logical operator.

## Properties

### filters

> **filters**: [`BaseFilter`](../type-aliases/BaseFilter.md)[]

Defined in: [packages/core/src/filters/base.filter.ts:49](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L49)

An array of filters (either SingleFilter or CompositeFilter) to be combined

***

### op

> **op**: `"and"` \| `"or"`

Defined in: [packages/core/src/filters/base.filter.ts:50](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L50)

The logical operator to use when combining filters:
               - 'and': All filter conditions must be true
               - 'or': At least one filter condition must be true
