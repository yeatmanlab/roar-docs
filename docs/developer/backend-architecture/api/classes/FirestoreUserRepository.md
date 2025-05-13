[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / FirestoreUserRepository

# Class: FirestoreUserRepository

Defined in: [src/repositories/firestore/FirestoreUserRepository.repository.firestore.ts:7](src/src/repositories/firestore/FirestoreUserRepository.repository.firestore.ts#7)

User base repository interface.

## Extends

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md)\<[`User`](../interfaces/User.md)\>

## Implements

- [`UserBaseRepository`](../interfaces/UserBaseRepository.md)

## Constructors

### Constructor

```ts
new FirestoreUserRepository(): FirestoreUserRepository;
```

Defined in: [src/repositories/firestore/FirestoreUserRepository.repository.firestore.ts:17](src/src/repositories/firestore/FirestoreUserRepository.repository.firestore.ts#17)

Create a new FirestoreUserRepository instance
Uses default values for Firestore client and collection configuration.

#### Returns

`FirestoreUserRepository`

#### See

- [FirestoreBaseRepository](FirestoreBaseRepository.md)
- [UserBaseRepository](../interfaces/UserBaseRepository.md)

#### Overrides

[`FirestoreBaseRepository`](FirestoreBaseRepository.md).[`constructor`](FirestoreBaseRepository.md#constructor)
