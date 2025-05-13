[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / AssentConsent

# Interface: AssentConsent

Defined in: [src/models/legal.model.ts:5](src/src/models/legal.model.ts#5)

Represents a legal document (assent or consent) with its source control information
and configuration parameters.

## Properties

| Property                                         | Type       | Description                                            | Defined in                                                       |
| ------------------------------------------------ | ---------- | ------------------------------------------------------ | ---------------------------------------------------------------- |
| <a id="currentcommit"></a> `currentCommit`       | `string`   | Git commit hash of the current document version.       | [src/models/legal.model.ts:7](src/src/models/legal.model.ts#7)   |
| <a id="filename"></a> `fileName`                 | `string`   | Name of the document file in the repository.           | [src/models/legal.model.ts:10](src/src/models/legal.model.ts#10) |
| <a id="githuborg"></a> `gitHubOrg`               | `string`   | GitHub organization owning the document repository.    | [src/models/legal.model.ts:13](src/src/models/legal.model.ts#13) |
| <a id="githubrepository"></a> `gitHubRepository` | `string`   | Name of the GitHub repository containing the document. | [src/models/legal.model.ts:16](src/src/models/legal.model.ts#16) |
| <a id="lastupdated"></a> `lastUpdated`           | `string`   | ISO date string of when the document was last updated. | [src/models/legal.model.ts:19](src/src/models/legal.model.ts#19) |
| <a id="params"></a> `params`                     | `string`[] | Configuration parameters for the document.             | [src/models/legal.model.ts:22](src/src/models/legal.model.ts#22) |
| <a id="type"></a> `type`                         | `string`   | Type of legal document                                 | [src/models/legal.model.ts:25](src/src/models/legal.model.ts#25) |
