# Classes
This documentation covers the core classes used in the ROAR Firebase Functions backend architecture. The classes are organized into several key categories:

## Repository Classes

These classes handle data access and persistence:

- [`FirestoreBaseRepository`](FirestoreBaseRepository.md) - Base abstract class implementing common Firestore operations
- [`FirestoreAdministrationRepository`](FirestoreAdministrationRepository.md) - Repository for administration data
- [`FirestoreIdentityProviderRepository`](FirestoreIdentityProviderRepository.md) - Repository for identity provider data
- [`FirestoreOrgRepository`](FirestoreOrgRepository.md) - Repository for organization data
- [`FirestoreUserRepository`](FirestoreUserRepository.md) - Repository for user data
- [`FirestoreUserClaimRepository`](FirestoreUserClaimRepository.md) - Repository for user claims data

## Error Classes

Custom error classes for different parts of the system:

### Repository Errors
- [`FirestoreRepositoryError`](FirestoreRepositoryError.md) - Base error class for repository operations
- [`FirestoreAdministrationRepositoryError`](FirestoreAdministrationRepositoryError.md) - Administration repository specific errors
- [`FirestoreIdentityProviderRepositoryError`](FirestoreIdentityProviderRepositoryError.md) - Identity provider repository errors
- [`FirestoreOrgRepositoryError`](FirestoreOrgRepositoryError.md) - Organization repository errors
- [`FirestoreUserRepositoryError`](FirestoreUserRepositoryError.md) - User repository errors
- [`FirestoreUserClaimRepositoryError`](FirestoreUserClaimRepositoryError.md) - User claims repository errors

### Service Errors
- [`AdministrationServiceError`](AdministrationServiceError.md) - Administration service layer errors
- [`IdentityProviderServiceError`](IdentityProviderServiceError.md) - Identity provider service errors

### Client Errors
- [`FirebaseClientError`](FirebaseClientError.md) - Firebase client-related errors
- [`FirebaseImplementationError`](FirebaseImplementationError.md) - Firebase implementation-specific errors

## Utility Classes

- [`FirestoreFilterAdapter`](FirestoreFilterAdapter.md) - Adapter for converting application filters to Firestore format

## Key Features

- All repository classes extend [`FirestoreBaseRepository`](FirestoreBaseRepository.md) to inherit common Firestore operations
- Custom error handling with specialized error classes for each layer
- Type safety through TypeScript interfaces and generics
- Consistent patterns for data access and error handling
- Clear separation of concerns between repositories, services and error handling

## Usage

The classes are designed to be used together in a layered architecture:

1. Repository classes handle direct data access
2. Service classes use repositories and handle business logic
3. Error classes provide granular error handling and context
4. Filter adapter helps convert between application and Firestore data formats

Each class is documented with its purpose, methods, parameters and return types.

For more details on each class, click the links above to view the individual class documentation pages.
