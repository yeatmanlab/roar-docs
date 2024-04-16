# syncAssignmentsOnUserUpdate

Hosted on: Admin Firebase project

Trigger: `document.written` on `/users/{userId}`

This function is designed to sync globally defined administrations with user-sepcific assignments.

This function will trigger when user documents (`/user/{userId}`) are written to. This function will perform actions only on documents with the userType field set to `student`. If so, the function will check the user's organizations. If they've changed, the function will add or remove assignments corresponding to the changed organizations. For example, if the user is assigned an administration from school1, then is removed from school1, this function will trigger, detect that removal, and remove the assignment that was assigned to school1. Similarly, if the user was not originally assigned to school1 then added to the organization, this function will trigger and add the assignment to the user's `/user/{userId}/assignments` subcollection.
