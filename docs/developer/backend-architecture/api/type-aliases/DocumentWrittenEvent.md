[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / DocumentWrittenEvent

# Type Alias: DocumentWrittenEvent

```ts
type DocumentWrittenEvent = FirestoreEvent<
  Change<DocumentSnapshot> | undefined,
  ParamsOf<string>
>;
```

Defined in: [src/types/firestore/documentEvents.firestore.ts:13](src/src/types/firestore/documentEvents.firestore.ts#13)

Firestore event type for document write operations.
Triggered by both create and update operations.
