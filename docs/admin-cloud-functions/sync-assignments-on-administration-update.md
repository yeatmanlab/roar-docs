# syncAssignmentsOnAdministrationUpdate

Hosted on: Admin Firebase Project

Trigger: `document.written` on `administrations/{administrationId}`

This function is designed to sync globally defined adminstrations with user-specific assignments.

Administrations are globally defined, while assignments are specific to each user. This function determines all assigned users and syncs the globally defined adminstration data with their local assignment data.

It also checks to see that the list of assigned orgs is exhaustive. By "exhaustive," we mean that any organization in the administration's org list must have each of it's dependent organizations explicitly listed in the same administration's org list. For example, if district1 is in the `districts` list and district1 contains schools A and B. Then schools A and B should also be in the `schools` list of the administration. Likewise if school A contains classes alpha and beta, then classes alpha and beta should also be in the administration's `classes` list. This function ensures that org lists are exhaustive. Because this function both writes to and is triggered by changes to the administration document, we check to prevent infinite loops where document change -> function trigger -> document change, and so on.
