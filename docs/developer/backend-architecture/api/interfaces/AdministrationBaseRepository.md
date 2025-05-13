[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / AdministrationBaseRepository

# Interface: AdministrationBaseRepository

Defined in: [src/repositories/base/administration.base.repository.interface.ts:27](src/src/repositories/base/administration.base.repository.interface.ts#27)

Repository interface for Administration entities.
Extends the base repository with Administration-specific operations.

## See

- [BaseRepository](BaseRepository.md) - Base repository functionality
- [Administration](Administration.md) - Administration entity structure
- [GetByNameParams](GetByNameParams.md) - Parameters for retrieving administrations by name

## Extends

- [`BaseRepository`](BaseRepository.md)\<[`Administration`](Administration.md)\>

## Methods

### getByName()

```ts
getByName(params: GetByNameParams): Promise<Result<Administration>[]>;
```

Defined in: [src/repositories/base/administration.base.repository.interface.ts:36](src/src/repositories/base/administration.base.repository.interface.ts#36)

Retrieves administrations by matching their name.
Implements specialized filtering on the name field.

#### Parameters

| Parameter | Type                                    | Description                                                  |
| --------- | --------------------------------------- | ------------------------------------------------------------ |
| `params`  | [`GetByNameParams`](GetByNameParams.md) | Search parameters including name, limit, and field selection |

#### Returns

`Promise`\<[`Result`](Result.md)\<[`Administration`](Administration.md)\>[]\>

Promise resolving to an array of matching administrations
