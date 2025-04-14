[**@roar-firebase-functions/core**](../README.md)

***

[@roar-firebase-functions/core](../README.md) / FirestoreFilterAdapter

# Class: FirestoreFilterAdapter

Defined in: [packages/core/src/filters/firestore.filter.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/firestore.filter.ts#L14)

Adapter for converting application filter models to Firestore Filter objects

## Implements

- [`FilterAdapter`](../interfaces/FilterAdapter.md)\<`Filter`\>

## Constructors

### Constructor

> **new FirestoreFilterAdapter**(): `FirestoreFilterAdapter`

#### Returns

`FirestoreFilterAdapter`

## Methods

### adapt()

> **adapt**(`filter`): `Filter`

Defined in: [packages/core/src/filters/firestore.filter.ts:42](https://github.com/yeatmanlab/roar-firebase-functions/blob/24ea7b8e0f05ba2fca7d62901c43f15726f15a89/packages/core/src/filters/firestore.filter.ts#L42)

Adapts an application filter to a Firestore Filter

#### Parameters

##### filter

[`BaseFilter`](../type-aliases/BaseFilter.md)

The filter to adapt

#### Returns

`Filter`

A Firestore Filter object

#### Throws

Error if the filter is invalid

#### Implementation of

[`FilterAdapter`](../interfaces/FilterAdapter.md).[`adapt`](../interfaces/FilterAdapter.md#adapt)
