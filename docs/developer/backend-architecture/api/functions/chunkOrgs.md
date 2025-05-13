[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / chunkOrgs

# Function: chunkOrgs()

```ts
function chunkOrgs(orgs: OrgsList, chunkSize: number): OrgsList[];
```

Defined in: [src/utils/chunkOrgs.utils.ts:13](src/src/utils/chunkOrgs.utils.ts#13)

Chunks an OrgsList into smaller IOrgsLists of a specified size.

This function is useful when dealing with large amounts of data that need to be processed in smaller chunks.
It iterates over the properties of the input OrgsList and divides each property's array into smaller chunks.

## Parameters

| Parameter   | Type                                    | Description                   |
| ----------- | --------------------------------------- | ----------------------------- |
| `orgs`      | [`OrgsList`](../interfaces/OrgsList.md) | The input organization lists. |
| `chunkSize` | `number`                                | The size of each chunk.       |

## Returns

[`OrgsList`](../interfaces/OrgsList.md)[]

An array of smaller OrgsLists, each containing a chunk of the original data.
