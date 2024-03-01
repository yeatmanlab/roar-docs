---
sidebarDepth: 1
---

# Creating an Assignment

The first step in this process is using the admin view form 'Create Assignment'. This will prompt the user for all the necessary information, including the name of the administration, open and close dates, organzations to be assigned the administration, and the tasks and variants to be assigned to the users.

This information is then sent to a firekit function, `createAdministration`.

## Firekit Function

The firekit function `createAdministration` an object with the following keys:

```
name: the name of the administration
assessments: Array of organization IDs to be assigned this adminsistration. //TODO add format for assignments
dateOpen: The date the administration becomes available to users
dateClose: The date the administration closes to users
sequential: Whether or not user is forced to play the tasks in order
orgs: List of organizations to be added to this administration // TODO double check format of organizations
tags: Array of metadata tags for this administration
administrationId: Optional ID of an existing administration. If provided, this function will update an existing administration.
```

This function will create a new administration document in the `/administrations/` collection in the [Admin Database](../databases/admin.md). The fields `createdBy` and `dateCreated` will be populated automatically with the calling user's roarUid and the current date respectively. Other feilds will be filled in with the given values from the function's input.

When the `administrationId` is provided, this function will update an existing administration document matching the id.

::: warning
An administration that is already in progress is unable to be edited.
:::

## Assignment to Participants

Assignments are assigned to users via organizations. When an administration is created, it will be assigned to all users in the organizations that are specified. They are assigned exaustively. For example, if a student belongs to a school with a parent district, administrations assigned to that parent district will also be assigned to that student.

::: tip
In this context, an **administration** is a master copy of an administration. This stores information about administration specifics such as parameters for variants, assigned organizations, group level statistics, et cetera. An **assignment** is a local copy of an adminstration, specific to each user. Assignments are stored in individual user's subcollection `/user/{userId}/assignments/{administrationId}`. Refers to information about the individual student's progress, runIds, et cetera.
:::

Once the firekit function has run and the administration document is created, the cloud function [`syncAssignmentsOnAdministrationUpdate`](../sync-assignments-on-administration-update.md) will fire. This cloud function triggers anytime a document in the `/administrations/{administrationId}` collection is written to. The function will sync user's assignments with the updated administration. If the assignment is being updated, every user assignment document will be updated with the new information. If it is a new administration, it will create a new document in the user's assignments subcollection.

If the assignment document had to be created, the [`syncAssignmentCreated`](../cloud-functions/sync-assignment-created.md) function will fire. This will update the administration's stats collection, as well as syncing the user's `assignedAssignments` object in the `/users/{userId}` document.
