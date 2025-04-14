[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FilterAdapter

# Interface: FilterAdapter\<T\>

Defined in: [packages/core/src/filters/base.filter.ts:72](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L72)

Interface that defines a function to create filters from a BaseFilter object.

This adapter pattern interface provides a way to transform BaseFilter objects
into domain-specific filter representations of type T. Implementations of this
interface should define how to convert both SingleFilter and CompositeFilter
structures into the target filter format.

## Type Parameters

### T

`T`

The target filter type that BaseFilter objects will be converted to

## Methods

### adapt()

> **adapt**(`filter`): `T`

Defined in: [packages/core/src/filters/base.filter.ts:73](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L73)

#### Parameters

##### filter

[`BaseFilter`](../type-aliases/BaseFilter.md)

#### Returns

`T`
