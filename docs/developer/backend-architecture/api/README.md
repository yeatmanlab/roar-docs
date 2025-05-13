**@roar-firebase-functions/core**

---

# @roar-firebase-functions/core

## Enumerations

- [CollectionType](enumerations/CollectionType.md)
- [IdentityProviderType](enumerations/IdentityProviderType.md)
- [Operator](enumerations/Operator.md)

## Classes

- [FirebaseClientError](classes/FirebaseClientError.md)
- [FirebaseImplementationError](classes/FirebaseImplementationError.md)
- [FirestoreAdministrationRepositoryError](classes/FirestoreAdministrationRepositoryError.md)
- [FirestoreIdentityProviderRepositoryError](classes/FirestoreIdentityProviderRepositoryError.md)
- [FirestoreOrgRepositoryError](classes/FirestoreOrgRepositoryError.md)
- [FirestoreRepositoryError](classes/FirestoreRepositoryError.md)
- [FirestoreUserClaimRepositoryError](classes/FirestoreUserClaimRepositoryError.md)
- [FirestoreUserRepositoryError](classes/FirestoreUserRepositoryError.md)
- [AdministrationServiceError](classes/AdministrationServiceError.md)
- [IdentityProviderServiceError](classes/IdentityProviderServiceError.md)
- [FirestoreFilterAdapter](classes/FirestoreFilterAdapter.md)
- [FirestoreAdministrationRepository](classes/FirestoreAdministrationRepository.md)
- [FirestoreBaseRepository](classes/FirestoreBaseRepository.md)
- [FirestoreIdentityProviderRepository](classes/FirestoreIdentityProviderRepository.md)
- [FirestoreOrgRepository](classes/FirestoreOrgRepository.md)
- [FirestoreUserClaimRepository](classes/FirestoreUserClaimRepository.md)
- [FirestoreUserRepository](classes/FirestoreUserRepository.md)

## Interfaces

- [FirestoreImplementation](interfaces/FirestoreImplementation.md)
- [SingleFilter](interfaces/SingleFilter.md)
- [CompositeFilter](interfaces/CompositeFilter.md)
- [FilterAdapter](interfaces/FilterAdapter.md)
- [Administration](interfaces/Administration.md)
- [Assessment](interfaces/Assessment.md)
- [BaseModel](interfaces/BaseModel.md)
- [CompositeCondition](interfaces/CompositeCondition.md)
- [FieldCondition](interfaces/FieldCondition.md)
- [IdentityProvider](interfaces/IdentityProvider.md)
- [AssentConsent](interfaces/AssentConsent.md)
- [Legal](interfaces/Legal.md)
- [EducationalOrgsList](interfaces/EducationalOrgsList.md)
- [OrgsList](interfaces/OrgsList.md)
- [OrgBase](interfaces/OrgBase.md)
- [User](interfaces/User.md)
- [Claims](interfaces/Claims.md)
- [UserClaim](interfaces/UserClaim.md)
- [GetByNameParams](interfaces/GetByNameParams.md)
- [AdministrationBaseRepository](interfaces/AdministrationBaseRepository.md)
- [GetParams](interfaces/GetParams.md)
- [GetAllParams](interfaces/GetAllParams.md)
- [CreateParams](interfaces/CreateParams.md)
- [UpdateParams](interfaces/UpdateParams.md)
- [DeleteParams](interfaces/DeleteParams.md)
- [RunTransactionParams](interfaces/RunTransactionParams.md)
- [BaseRepository](interfaces/BaseRepository.md)
- [GetByProviderIdParams](interfaces/GetByProviderIdParams.md)
- [IdentityProviderBaseRepository](interfaces/IdentityProviderBaseRepository.md)
- [GetAdministrationIdsFromOrgsParams](interfaces/GetAdministrationIdsFromOrgsParams.md)
- [OrgBaseRepository](interfaces/OrgBaseRepository.md)
- [UserBaseRepository](interfaces/UserBaseRepository.md)
- [GetByRoarUidParams](interfaces/GetByRoarUidParams.md)
- [UserClaimBaseRepository](interfaces/UserClaimBaseRepository.md)
- [GetAdministrationIdsForAdministratorParams](interfaces/GetAdministrationIdsForAdministratorParams.md)
- [CreateAdministrationServiceParams](interfaces/CreateAdministrationServiceParams.md)
- [AdministrationService](interfaces/AdministrationService.md)
- [GetRoarUidParams](interfaces/GetRoarUidParams.md)
- [CreateIdentityProviderServiceParams](interfaces/CreateIdentityProviderServiceParams.md)
- [IdentityProviderService](interfaces/IdentityProviderService.md)
- [Result](interfaces/Result.md)
- [FirestoreGetByNameParams](interfaces/FirestoreGetByNameParams.md)
- [FirestoreGetParams](interfaces/FirestoreGetParams.md)
- [FirestoreGetByIdParams](interfaces/FirestoreGetByIdParams.md)
- [FirestoreFetchDocumentParams](interfaces/FirestoreFetchDocumentParams.md)
- [FirestoreGetWithFiltersParams](interfaces/FirestoreGetWithFiltersParams.md)
- [FirestoreGetAllParams](interfaces/FirestoreGetAllParams.md)
- [FirestoreCreateParams](interfaces/FirestoreCreateParams.md)
- [FirestoreUpdateParams](interfaces/FirestoreUpdateParams.md)
- [FirestoreDeleteParams](interfaces/FirestoreDeleteParams.md)
- [FirestoreRunTransactionParams](interfaces/FirestoreRunTransactionParams.md)
- [FutureParams](interfaces/FutureParams.md)
- [\_setAdministrationIdsParams](interfaces/setAdministrationIdsParams.md)
- [FirestoreGetByRoarUidParams](interfaces/FirestoreGetByRoarUidParams.md)

## Type Aliases

- [ComparisonOperator](type-aliases/ComparisonOperator.md)
- [BaseFilter](type-aliases/BaseFilter.md)
- [ParameterValue](type-aliases/ParameterValue.md)
- [Condition](type-aliases/Condition.md)
- [SelectAllCondition](type-aliases/SelectAllCondition.md)
- [DocumentWrittenEvent](type-aliases/DocumentWrittenEvent.md)
- [DocumentUpdatedEvent](type-aliases/DocumentUpdatedEvent.md)
- [DocumentDeletedEvent](type-aliases/DocumentDeletedEvent.md)
- [DocumentCreatedEvent](type-aliases/DocumentCreatedEvent.md)

## Variables

- [FirebaseAppClient](variables/FirebaseAppClient.md)
- [FirebaseAuthClient](variables/FirebaseAuthClient.md)
- [FirestoreClient](variables/FirestoreClient.md)
- [ORG_NAMES](variables/ORG_NAMES.md)

## Functions

- [createFirestoreImplementation](functions/createFirestoreImplementation.md)
- [createAdministrationService](functions/createAdministrationService.md)
- [createIdentityProviderService](functions/createIdentityProviderService.md)
- [chunkOrgs](functions/chunkOrgs.md)
- [isEmptyOrgs](functions/isEmptyOrgs.md)
