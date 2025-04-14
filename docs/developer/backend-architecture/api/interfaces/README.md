# Interfaces
This documentation covers the interfaces that define the core data structures and contracts in the ROAR Firebase Functions library.

## Administration & Assessment
- [Administration](interfaces/Administration.md) - Core data structure for administrations including assessments and org settings
- [AdministrationBaseRepository](interfaces/AdministrationBaseRepository.md) - Base repository for Administration CRUD operations
- [AdministrationService](interfaces/AdministrationService.md) - Service layer for administration operations
- [Assessment](interfaces/Assessment.md) - Data structure for individual assessments and parameters

## Identity & Authorization
- [IdentityProvider](interfaces/IdentityProvider.md) - Provider identity and sync state
- [IdentityProviderService](interfaces/IdentityProviderService.md) - Identity provider operations
- [User](interfaces/User.md) - Basic user properties
- [UserClaim](interfaces/UserClaim.md) - User permissions and roles
- [UserClaimBaseRepository](interfaces/UserClaimBaseRepository.md) - Repository for user claims

## Organizations
- [OrgBase](interfaces/OrgBase.md) - Core organization data model
- [OrgBaseRepository](interfaces/OrgBaseRepository.md) - Organization repository operations
- [OrgsList](interfaces/OrgsList.md) - Organization ID collection structure
- [EducationalOrgsList](interfaces/EducationalOrgsList.md) - Educational institution organization list

## Repository Base Classes
- [BaseRepository](interfaces/BaseRepository.md) - Generic repository with CRUD operations
- [Result](interfaces/Result.md) - Operation result wrapper
- [FilterAdapter](interfaces/FilterAdapter.md) - Filter format conversion
- [SingleFilter](interfaces/SingleFilter.md) - Field comparison filter

## Repository Parameters
- [CreateParams](interfaces/CreateParams.md) - Create operation parameters
- [DeleteParams](interfaces/DeleteParams.md) - Delete operation parameters
- [GetParams](interfaces/GetParams.md) - Get operation parameters
- [UpdateParams](interfaces/UpdateParams.md) - Update operation parameters
- [GetByNameParams](interfaces/GetByNameParams.md) - Name lookup parameters
- [GetByRoarUidParams](interfaces/GetByRoarUidParams.md) - ROAR UID lookup parameters
- [RunTransactionParams](interfaces/RunTransactionParams.md) - Transaction parameters

## Firestore Implementation
- [FirestoreImplementation](interfaces/FirestoreImplementation.md) - Firestore-specific repository and service implementation
- [FirestoreCreateParams](interfaces/FirestoreCreateParams.md) - Firestore create parameters
- [FirestoreDeleteParams](interfaces/FirestoreDeleteParams.md) - Firestore delete parameters
- [FirestoreGetParams](interfaces/FirestoreGetParams.md) - Firestore get parameters
- [FirestoreUpdateParams](interfaces/FirestoreUpdateParams.md) - Firestore update parameters

## Legal & Consent
- [Legal](interfaces/Legal.md) - Legal information structure
- [AssentConsent](interfaces/AssentConsent.md) - Assent/consent document structure
