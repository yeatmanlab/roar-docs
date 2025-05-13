[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / BaseRepository

# Interface: BaseRepository\<T\>

Defined in: [src/repositories/base/base.repository.interface.ts:88](src/src/repositories/base/base.repository.interface.ts#88)

Base repository interface that defines standard operations for data access.

## See

- [GetParams](GetParams.md) - Base params for retrieving data entities.
- [GetAllParams](GetAllParams.md) - Base params for retrieving all data entities.
- [CreateParams](CreateParams.md) - Base params for creating an entity.
- [UpdateParams](UpdateParams.md) - Base params for updating an entity.
- [DeleteParams](DeleteParams.md) - Base params for deleting an entity.
- [RunTransactionParams](RunTransactionParams.md) - Parameters for running a transaction in a repository.

## Extended by

- [`AdministrationBaseRepository`](AdministrationBaseRepository.md)
- [`IdentityProviderBaseRepository`](IdentityProviderBaseRepository.md)
- [`OrgBaseRepository`](OrgBaseRepository.md)
- [`UserBaseRepository`](UserBaseRepository.md)
- [`UserClaimBaseRepository`](UserClaimBaseRepository.md)

## Type Parameters

| Type Parameter | Description                                   |
| -------------- | --------------------------------------------- |
| `T`            | The type of entity managed by the repository. |

## Methods

### get()

#### Call Signature

```ts
get(params: GetParams & {
  id: string;
}): Promise<Result<T>>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:90](src/src/repositories/base/base.repository.interface.ts#90)

Retrieves an entity by its ID.

##### Parameters

| Parameter | Type                                                |
| --------- | --------------------------------------------------- |
| `params`  | [`GetParams`](GetParams.md) & \{ `id`: `string`; \} |

##### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>\>

#### Call Signature

```ts
get(params: GetParams & {
  filters: BaseFilter[];
}): Promise<Result<T>[]>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:93](src/src/repositories/base/base.repository.interface.ts#93)

Retrieves entities based on provided filters.

##### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `params`  | [`GetParams`](GetParams.md) & \{ `filters`: [`BaseFilter`](../type-aliases/BaseFilter.md)[]; \} |

##### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>[]\>

#### Call Signature

```ts
get(params: GetParams): Promise<Result<T> | Result<T>[]>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:96](src/src/repositories/base/base.repository.interface.ts#96)

Retrieves entities based on provided parameters.

##### Parameters

| Parameter | Type                        |
| --------- | --------------------------- |
| `params`  | [`GetParams`](GetParams.md) |

##### Returns

`Promise`\<[`Result`](Result.md)\<`T`\> \| [`Result`](Result.md)\<`T`\>[]\>

---

### getAll()

```ts
getAll(params: GetAllParams): Promise<Result<T>[]>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:99](src/src/repositories/base/base.repository.interface.ts#99)

Retrieves all entities with optional filtering.

#### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `params`  | [`GetAllParams`](GetAllParams.md) |

#### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>[]\>

---

### create()

```ts
create(params: CreateParams): Promise<Result<T>>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:102](src/src/repositories/base/base.repository.interface.ts#102)

Creates a new entity in the repository.

#### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `params`  | [`CreateParams`](CreateParams.md) |

#### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>\>

---

### update()

```ts
update(params: UpdateParams): Promise<Result<T>>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:105](src/src/repositories/base/base.repository.interface.ts#105)

Updates an existing entity in the repository.

#### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `params`  | [`UpdateParams`](UpdateParams.md) |

#### Returns

`Promise`\<[`Result`](Result.md)\<`T`\>\>

---

### delete()

```ts
delete(params: DeleteParams): Promise<void>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:108](src/src/repositories/base/base.repository.interface.ts#108)

Deletes an entity from the repository.

#### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `params`  | [`DeleteParams`](DeleteParams.md) |

#### Returns

`Promise`\<`void`\>

---

### runTransaction()

```ts
runTransaction(params: RunTransactionParams<T>): Promise<any>;
```

Defined in: [src/repositories/base/base.repository.interface.ts:111](src/src/repositories/base/base.repository.interface.ts#111)

Runs a transaction within the repository.

#### Parameters

| Parameter | Type                                                     |
| --------- | -------------------------------------------------------- |
| `params`  | [`RunTransactionParams`](RunTransactionParams.md)\<`T`\> |

#### Returns

`Promise`\<`any`\>
