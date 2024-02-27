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

This function will create a new administration document in the `/administrations/` collection in the [Admin Database](/databases/admin). The fields `createdBy` and `dateCreated` will be populated automatically with the calling user's roarUid and the current date respectivly. Other feilds will be filled in with the given values from the function's input.

When the `administrationId` is provided, this function will update an existing administration document matching the id.

::: warning
An administration that is already in progress is unable to be edited.
:::

## Assignment
