[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / DocumentUpdatedEvent

# Type Alias: DocumentUpdatedEvent

```ts
type DocumentUpdatedEvent = FirestoreEvent<
  Change<QueryDocumentSnapshot> | undefined,
  ParamsOf<string>
>;
```

Defined in: [src/types/firestore/documentEvents.firestore.ts:22](src/src/types/firestore/documentEvents.firestore.ts#22)

Firestore event type for document update operations.
Triggered when an existing document is modified.
