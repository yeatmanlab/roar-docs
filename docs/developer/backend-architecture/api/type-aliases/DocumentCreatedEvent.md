[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / DocumentCreatedEvent

# Type Alias: DocumentCreatedEvent

```ts
type DocumentCreatedEvent = FirestoreEvent<
  QueryDocumentSnapshot | undefined,
  ParamsOf<string>
>;
```

Defined in: [src/types/firestore/documentEvents.firestore.ts:40](src/src/types/firestore/documentEvents.firestore.ts#40)

Firestore event type for document creation operations.
Triggered when a new document is added to a collection.
