[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / BaseFilter

# Type Alias: BaseFilter

```ts
type BaseFilter = SingleFilter | CompositeFilter;
```

Defined in: [src/filters/base.filter.ts:59](src/src/filters/base.filter.ts#59)

Represents the base type for all filters used in filtering operations.

This type is a union of SingleFilter and CompositeFilter, allowing for
both simple field comparisons and complex nested filter logic.
It serves as the foundation for building filter structures of any complexity.
