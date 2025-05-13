[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / CompositeFilter

# Interface: CompositeFilter

Defined in: [src/filters/base.filter.ts:42](src/src/filters/base.filter.ts#42)

Represents a composite filter that combines multiple filters using a logical operator.

## Properties

| Property                       | Type                                            | Description                                                                                                                                        | Defined in                                                         |
| ------------------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| <a id="filters"></a> `filters` | [`BaseFilter`](../type-aliases/BaseFilter.md)[] | An array of filters (either SingleFilter or CompositeFilter) to be combined                                                                        | [src/filters/base.filter.ts:44](src/src/filters/base.filter.ts#44) |
| <a id="op"></a> `op`           | `"and"` \| `"or"`                               | The logical operator to use when combining filters: - 'and': All filter conditions must be true - 'or': At least one filter condition must be true | [src/filters/base.filter.ts:49](src/src/filters/base.filter.ts#49) |
