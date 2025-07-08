# Authentication Technical Specification

::: warning Draft Notice

This document is a work in progress and is subject to change.
:::

## Overview

## Authentication Flow

### Account Creation

```mermaid
graph TD
    AccountCreation[Account Creation] --> Method[Select Method]
    Method --> |SSO| SSOSelect[Select SSO Provider]
    SSOSelect --> |Rostering Provider| RosteringProvider[Rostering Provider]
    SSOSelect --> |External Provider| ExternalProvider[External Provider]
    RosteringProvider --> CreateRosterAccount[Backend creates DB and identity provider records only]
    CreateRosterAccount --> ExplicitAccountLinking[ROAR UID is set. Auth UID unknown.]
    ExternalProvider --> CreateGuest[Backend creates guest account]
    Method --> |Email/Password| EmailPassword[Provide email and password]
    EmailPassword --> CreateAccount[Backend creates DB and Auth records simultaneously]
    Method --> |Email Link| EmailLink[Provide email only]
    EmailLink --> CreateAccount
    CreateAccount --> ImplicitAccountLinking[ROAR UID is Auth UID]
    CreateGuest --> ImplicitAccountLinking
```

### Login

```mermaid
graph TD
    Login[Login] --> EnterEmail[Enter email]
    EnterEmail --> ProviderLookup[Backend returns list of linked providers. Email is the default/fallback method.]
    ProviderLookup --> Method[Select Method]
    Method --> |SSO| SSOSelect[Select SSO Provider]
    SSOSelect --> |Rostering Provider| RosteringProvider[Rostering Provider]
    SSOSelect --> |External Provider| ExternalProvider[External Provider]
    Method --> |Email/Password| EmailPassword[Provide email and password]
    EmailPassword --> ClientAuthenticationImplicit[Authenticate using Firebase Client SDK]
    Method --> |Email Link| EmailLink[Send email link]
    EmailLink --> UserVerifiesEmail[User verifies email]
    UserVerifiesEmail --> ClientAuthenticationImplicit
    ExternalProvider --> ClientAuthenticationImplicit
    ClientAuthenticationImplicit --> ImplicitAccountLinking[Auth UID is ROAR UID]
    RosteringProvider --> ClientAuthenticationExplicit[Authenticate using Firebase Client SDK]
    ClientAuthenticationExplicit --> ExplicitAccountLinking[Use rostering ID to lookup ROAR UID via identity provider records]
    ImplicitAccountLinking --> DBAccess[Fetch records using ROAR UID]
    ExplicitAccountLinking --> DBAccess
```

### Password Reset

```mermaid
graph TD
    PasswordReset[Password Reset] --> RequestEmail[Request email]
    RequestEmail --> SendPasswordResetRequest[Send password reset request]
    SendPasswordResetRequest --> UserVerifiesEmail[User verifies password reset]
    UserVerifiesEmail --> PasswordResetForm[User provides new password]
    PasswordResetForm --> NoSignInRedirect[Use explicitly navigates to login page]
    NoSignInRedirect --> Login[Login]
```
