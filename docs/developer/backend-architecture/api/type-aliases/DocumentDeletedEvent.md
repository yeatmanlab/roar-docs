[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / DocumentDeletedEvent

# Type Alias: DocumentDeletedEvent

```ts
type DocumentDeletedEvent = FirestoreEvent<
  QueryDocumentSnapshot | undefined,
  ParamsOf<string>
>;
```

Defined in: [src/types/firestore/documentEvents.firestore.ts:31](src/src/types/firestore/documentEvents.firestore.ts#31)

Firestore event type for document deletion operations.
Triggered when a document is removed from the collection.
