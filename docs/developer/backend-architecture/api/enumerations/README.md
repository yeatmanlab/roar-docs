# Enumerations
This documentation covers the enumerations used in the ROAR Firebase Functions backend architecture. Enumerations provide type-safe sets of named constants used throughout the system.

## Available Enumerations

### [CollectionType](CollectionType.md)
Defines the types of Firestore collections:
- `Collection` - Standard Firestore collection
- `CollectionGroup` - Firestore collection group

### [IdentityProviderType](IdentityProviderType.md)
Specifies supported Single Sign-On (SSO) providers:
- `CLEVER` - Clever SSO integration
- `CLASSLINK` - ClassLink SSO integration

### [Operator](Operator.md)
Defines comparison operators used in queries and filters:
- `LESS_THAN`
- `GREATER_THAN`
- `LESS_THAN_OR_EQUAL`
- `GREATER_THAN_OR_EQUAL`
- `EQUAL`
- `NOT_EQUAL`

## Usage

These enumerations are used throughout the codebase to:

1. Provide type safety when working with collections, providers, and operators
2. Standardize string constants
3. Enable compile-time checking of valid values
4. Make code more maintainable by centralizing constant definitions

Example usage:

```typescript
// Using CollectionType
const type = CollectionType.Collection;

// Using IdentityProviderType
const provider = IdentityProviderType.CLEVER;

// Using Operator in filters
const filter = {
  operator: Operator.EQUAL,
  value: "someValue"
};
```

For more details on each enumeration, click the links above to view the individual documentation pages.
