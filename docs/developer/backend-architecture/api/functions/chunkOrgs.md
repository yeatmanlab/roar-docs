[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / chunkOrgs

# Function: chunkOrgs()

> **chunkOrgs**(`orgs`, `chunkSize`): [`OrgsList`](../interfaces/OrgsList.md)[]

Defined in: [packages/core/src/utils/chunkOrgs.utils.ts:14](https://github.com/yeatmanlab/roar-firebase-functions/blob/0fc701649174b7557e55644b1065be2fa3d3d7ca/packages/core/src/utils/chunkOrgs.utils.ts#L14)

Chunks an OrgsList into smaller IOrgsLists of a specified size.

This function is useful when dealing with large amounts of data that need to be processed in smaller chunks.
It iterates over the properties of the input OrgsList and divides each property's array into smaller chunks.

## Parameters

### orgs

[`OrgsList`](../interfaces/OrgsList.md)

The input organization lists.

### chunkSize

`number`

The size of each chunk.

## Returns

[`OrgsList`](../interfaces/OrgsList.md)[]

An array of smaller OrgsLists, each containing a chunk of the original data.
