[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FilterAdapter

# Interface: FilterAdapter\<T\>

Defined in: [src/filters/base.filter.ts:71](src/src/filters/base.filter.ts#71)

Interface that defines a function to create filters from a BaseFilter object.

This adapter pattern interface provides a way to transform BaseFilter objects
into domain-specific filter representations of type T. Implementations of this
interface should define how to convert both SingleFilter and CompositeFilter
structures into the target filter format.

## Type Parameters

| Type Parameter | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `T`            | The target filter type that BaseFilter objects will be converted to |

## Methods

### adapt()

```ts
adapt(filter: BaseFilter): T;
```

Defined in: [src/filters/base.filter.ts:73](src/src/filters/base.filter.ts#73)

The function to adapt a BaseFilter object into the target filter format

#### Parameters

| Parameter | Type                                          |
| --------- | --------------------------------------------- |
| `filter`  | [`BaseFilter`](../type-aliases/BaseFilter.md) |

#### Returns

`T`
