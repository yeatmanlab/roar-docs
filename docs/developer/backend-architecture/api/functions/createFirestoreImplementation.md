[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / createFirestoreImplementation

# Function: createFirestoreImplementation()

```ts
function createFirestoreImplementation(): FirestoreImplementation;
```

Defined in: [src/factories/createFirestoreImplementation.factory.ts:61](src/src/factories/createFirestoreImplementation.factory.ts#61)

Factory function to create and initialize Firestore repositories and services.

## Returns

[`FirestoreImplementation`](../interfaces/FirestoreImplementation.md)

Object containing all initialized repositories and services.

## See

- [FirestoreImplementation](../interfaces/FirestoreImplementation.md) - Firestore backend implementation setup.
- [FirestoreAdministrationRepository](../classes/FirestoreAdministrationRepository.md) - Firestore repository for administration data entities.
- [FirestoreOrgRepository](../classes/FirestoreOrgRepository.md) - Firestore repository for organization data entities.
- [FirestoreUserClaimRepository](../classes/FirestoreUserClaimRepository.md) - Firestore repository for user claim data entities.
- [FirestoreUserRepository](../classes/FirestoreUserRepository.md) - Firestore repository for user data entities.
- [FirestoreIdentityProviderRepository](../classes/FirestoreIdentityProviderRepository.md) - Firestore repository for identity provider data entities.
