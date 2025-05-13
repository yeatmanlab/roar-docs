[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Operator

# Enumeration: Operator

Defined in: [src/types/enums/Operator.enum.ts:13](src/src/types/enums/Operator.enum.ts#13)

Available comparison operators for field conditions.

Used in query filters to compare field values:

- Numeric comparisons (<, >, ≤, ≥)
- Equality comparisons (=, ≠)

## See

- [FieldCondition](../interfaces/FieldCondition.md) - Field-based condition structure.
- [Condition](../type-aliases/Condition.md) - General condition type
- [CompositeCondition](../interfaces/CompositeCondition.md) - Combined conditions
- [SelectAllCondition](../type-aliases/SelectAllCondition.md) - Select-all condition

## Enumeration Members

| Enumeration Member                                         | Value                     | Description                              | Defined in                                                                     |
| ---------------------------------------------------------- | ------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| <a id="less_than"></a> `LESS_THAN`                         | `"LESS_THAN"`             | Less than (<) comparison.                | [src/types/enums/Operator.enum.ts:15](src/src/types/enums/Operator.enum.ts#15) |
| <a id="greater_than"></a> `GREATER_THAN`                   | `"GREATER_THAN"`          | Greater than (>) compari.son             | [src/types/enums/Operator.enum.ts:18](src/src/types/enums/Operator.enum.ts#18) |
| <a id="less_than_or_equal"></a> `LESS_THAN_OR_EQUAL`       | `"LESS_THAN_OR_EQUAL"`    | Less than or equal to (≤.) comparison    | [src/types/enums/Operator.enum.ts:21](src/src/types/enums/Operator.enum.ts#21) |
| <a id="greater_than_or_equal"></a> `GREATER_THAN_OR_EQUAL` | `"GREATER_THAN_OR_EQUAL"` | Greater than or equal to. (≥) comparison | [src/types/enums/Operator.enum.ts:24](src/src/types/enums/Operator.enum.ts#24) |
| <a id="equal"></a> `EQUAL`                                 | `"EQUAL"`                 | Equal to (=) comparison .                | [src/types/enums/Operator.enum.ts:27](src/src/types/enums/Operator.enum.ts#27) |
| <a id="not_equal"></a> `NOT_EQUAL`                         | `"NOT_EQUAL"`             | Not equal to (≠) compari.son             | [src/types/enums/Operator.enum.ts:30](src/src/types/enums/Operator.enum.ts#30) |
