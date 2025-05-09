[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / ComparisonOperator

# Type Alias: ComparisonOperator

> **ComparisonOperator** = `"equals"` \| `"notEquals"` \| `"lessThan"` \| `"lessThanOrEqual"` \| `"greaterThan"` \| `"greaterThanOrEqual"` \| `"contains"` \| `"in"` \| `"notIn"` \| `"containsAny"`

Defined in: [packages/core/src/filters/base.filter.ts:15](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/base.filter.ts#L15)

Represents comparison operators used in filtering operations.

- `equals`: Checks if field equals the specified value
- `notEquals`: Checks if field does not equal the specified value
- `lessThan`: Checks if field is less than the specified value
- `lessThanOrEqual`: Checks if field is less than or equal to the specified value
- `greaterThan`: Checks if field is greater than the specified value
- `greaterThanOrEqual`: Checks if field is greater than or equal to the specified value
- `contains`: Checks if field contains the specified value (for strings or arrays)
- `in`: Checks if field value is in the specified array
- `notIn`: Checks if field value is not in the specified array
- `containsAny`: Checks if field contains any of the specified values
