# Variables API Documentation

This documentation covers the constant variables and client instances used in the ROAR Firebase Functions backend architecture. These variables provide essential Firebase client instances and system constants.

## Firebase Client Instances

### [`FirebaseAppClient`](FirebaseAppClient.md)
The main Firebase App instance used throughout the application.

```typescript
import { FirebaseAppClient } from '@roar-firebase-functions/core';

// Access Firebase app configuration
const appConfig = FirebaseAppClient.options;
```

### [`FirebaseAuthClient`](FirebaseAuthClient.md)
Firebase Authentication client instance for handling user authentication.

```typescript
import { FirebaseAuthClient } from '@roar-firebase-functions/core';

// Example usage in authentication operations
const user = await FirebaseAuthClient.getUser(uid);
```

### [`FirestoreClient`](FirestoreClient.md)
Firestore database client instance for database operations.

```typescript
import { FirestoreClient } from '@roar-firebase-functions/core';

// Example of accessing Firestore collections
const usersCollection = FirestoreClient.collection('users');
```

## System Constants

### [`ORG_NAMES`](ORG_NAMES.md)
Array of valid organization names used throughout ROAR.

```typescript
import { ORG_NAMES } from '@roar-firebase-functions/core';

// Validate organization name
const isValidOrg = ORG_NAMES.includes(orgName);
```

## Usage Patterns

These variables are typically used in the following ways:

1. Client Initialization
   - Firebase clients are initialized once and reused
   - Provides consistent access to Firebase services
   - Ensures proper configuration across the application

2. Authentication and Database Operations
   - Used for user management
   - Database CRUD operations
   - Security and access control

3. Organization Validation
   - Validating organization names
   - Type checking
   - Maintaining consistency in organization references

For more details on each variable, click the links above to view the individual documentation pages.

## Best Practices

- Always use the provided client instances rather than creating new ones
- Reference `ORG_NAMES` for organization validation
- Handle potential initialization errors appropriately
- Use type annotations with client instances for better type safety
