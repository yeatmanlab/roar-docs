[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / BaseFilter

# Type Alias: BaseFilter

> **BaseFilter** = [`SingleFilter`](../interfaces/SingleFilter.md) \| [`CompositeFilter`](../interfaces/CompositeFilter.md)

Defined in: [packages/core/src/filters/base.filter.ts:60](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/filters/base.filter.ts#L60)

Represents the base type for all filters used in filtering operations.

This type is a union of SingleFilter and CompositeFilter, allowing for
both simple field comparisons and complex nested filter logic.
It serves as the foundation for building filter structures of any complexity.
