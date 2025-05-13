[**@roar-firebase-functions/core**](../README.md)

---

[@roar-firebase-functions/core](../README.md) / Claims

# Interface: Claims

Defined in: [src/models/userClaim.model.ts:8](src/src/models/userClaim.model.ts#8)

Represents a user's authorization claims and access permissions within the system.

## See

[OrgsList](OrgsList.md) - Organization structure for access permissions

## Extended by

- [`UserClaim`](UserClaim.md)

## Properties

| Property                                          | Type                      | Description                                                 | Defined in                                                               |
| ------------------------------------------------- | ------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| <a id="adminorgs"></a> `adminOrgs?`               | [`OrgsList`](OrgsList.md) | Organizations where user has administrative privileges.     | [src/models/userClaim.model.ts:10](src/src/models/userClaim.model.ts#10) |
| <a id="minimaladminorgs"></a> `minimalAdminOrgs?` | [`OrgsList`](OrgsList.md) | Organizations where user has limited administrative access. | [src/models/userClaim.model.ts:13](src/src/models/userClaim.model.ts#13) |
| <a id="adminuid"></a> `adminUid`                  | `string`                  | Administrator user identifier.                              | [src/models/userClaim.model.ts:16](src/src/models/userClaim.model.ts#16) |
| <a id="assessmentuid"></a> `assessmentUid`        | `string`                  | Assessment-specific user identifier.                        | [src/models/userClaim.model.ts:19](src/src/models/userClaim.model.ts#19) |
| <a id="roaruid"></a> `roarUid`                    | `string`                  | Internal ROAR system user identifier.                       | [src/models/userClaim.model.ts:22](src/src/models/userClaim.model.ts#22) |
| <a id="super_admin"></a> `super_admin?`           | `boolean`                 | Whether user has system-wide administrative privileges.     | [src/models/userClaim.model.ts:25](src/src/models/userClaim.model.ts#25) |
| <a id="role"></a> `role`                          | `string`                  | User's role within the system.                              | [src/models/userClaim.model.ts:28](src/src/models/userClaim.model.ts#28) |
