[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreFilterAdapter

# Class: FirestoreFilterAdapter

Defined in: [src/filters/firestore.filter.ts:14](src/src/filters/firestore.filter.ts#14)

Adapter for converting application filter models to Firestore Filter objects

## Implements

- [`FilterAdapter`](../interfaces/FilterAdapter.md)\<`Filter`\>

## Constructors

### Constructor

```ts
new FirestoreFilterAdapter(): FirestoreFilterAdapter;
```

#### Returns

`FirestoreFilterAdapter`

## Methods

### adapt()

```ts
adapt(filter: BaseFilter): Filter;
```

Defined in: [src/filters/firestore.filter.ts:42](src/src/filters/firestore.filter.ts#42)

Adapts an application filter to a Firestore Filter

#### Parameters

| Parameter | Type                                          | Description         |
| --------- | --------------------------------------------- | ------------------- |
| `filter`  | [`BaseFilter`](../type-aliases/BaseFilter.md) | The filter to adapt |

#### Returns

`Filter`

A Firestore Filter object

#### Throws

Error if the filter is invalid

#### Implementation of

[`FilterAdapter`](../interfaces/FilterAdapter.md).[`adapt`](../interfaces/FilterAdapter.md#adapt)
