[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / SingleFilter

# Interface: SingleFilter

Defined in: [src/filters/base.filter.ts:30](src/src/filters/base.filter.ts#30)

Represents a filter that compares a field to a specific value using a comparison operator.

## Properties

| Property                   | Type                                                          | Description                                                                                 | Defined in                                                         |
| -------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| <a id="field"></a> `field` | `string` \| `string`[]                                        | The field name or path to filter on (can be a string or array of strings for nested fields) | [src/filters/base.filter.ts:32](src/src/filters/base.filter.ts#32) |
| <a id="op"></a> `op`       | [`ComparisonOperator`](../type-aliases/ComparisonOperator.md) | The comparison operator to use for the filter condition                                     | [src/filters/base.filter.ts:34](src/src/filters/base.filter.ts#34) |
| <a id="value"></a> `value` | `any`                                                         | The value to compare the field against                                                      | [src/filters/base.filter.ts:36](src/src/filters/base.filter.ts#36) |
