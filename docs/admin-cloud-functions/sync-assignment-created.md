# syncAssignmentsCreated

Hosted on: Admin Firebase Project

Trigger: `document.created` on `/users/{userId}/assignments/{assignmentId}`

This function will trigger when an assignment is created in a user's assignments subcollection. It serves to update all the places where the assignment is being listed and counted, namely the user's assignments object in the `/users/{userId}` document and the administration's stats document.

When an assignment is created, the function will update the user's `assignmentsAssigned` object with the new assignment ID.

The function will also update the administration's stats document at `/administrations/{administrationId}/stats/completion`. This document keeps track of the number of students who have have been assigned, started, and completed the assignment. This function will update both the total number of students assigned, as well as the number of students from the user's particular organization that have been assigned the administration.

::: tip
The document IDs in the `/users/{userId}/assignments` collection will always match with the administration they refer to, so when a new file is created we can assume that it is a new assignment to the user.
:::
