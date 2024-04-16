# Mirroring Functions

The mirroring functions are used to prevent our two stores from getting out of sync.

## Mirror Users

The `MirrorUsers` function copies over any userdata that is created or updated in the administration database to the assessment database. As our assessment database cannot retain any personal identifiable information, we pass in an array of fields that are to be excluded in the copy. These include:

```
- studentData: {}
- name: String
- email: String
- assignments: []
```

**Trigger:** When a user is written to the admin database (`users/{roarUid}`)

**Logic:** The logic in this mirror function simple takes in the currDocData (the updated document data that triggered the call), parses out `grade`, `schoolLevel`, `birthMonth` and `birthYear` from the student's `studentData` object, and uses the `mirrorDoc` function to copy the data over.

## Mirror Districts

When a district is created, updated, or deleted, we want to trigger any necessary changes to assignments for users in that district. For example, suppose a district adds a new school to its `schools` field. We want to make sure that all users in the new school receive assignments for any administration assigned to a district. Here we enumerate the possible changes to a district document:

1. New document created - no action necessary, no administrations will have been assigned
2. Adding new schools to the `schools` field - handled in the else if (currData) block
    - 
3. Removing schools from the `schools` field - handled in the else if (currData) block
4. Adding new groups to the `subGroups` field - handled in the else if (currData) block
5. Removing groups from the `subGroups` field - handled in the else if (currData) block
6. Entire document deleted - handled in the else block below

## Mirror Schools

When a school is created, updated, or deleted, we want to trigger any necessary changes to assignments for users in that district. For example, suppose a school adds a new class to its ``classes`` field. We want to make sure that all users in the new class receive assignments for any administration assigned to the school. Here we enumerate the possible
changes to a school document:

1. New document created - handled in the if (currData && !prevData) block
2. Adding new schools to the ``classes`` field - handled in the else if (currData) block
3. Removing schools from the ``classes`` field - handled in the else if (currData) block
4. Adding new groups to the ``subGroups`` field - handled in the else if (currData) block
5. Removing groups from the ``subGroups`` field - handled in the else if (currData) block
6. Changing the ``districtId`` field - handled in the else if (currData) block
7. Entire document deleted - handled in the else block below

## Mirror Classes


When a class is created, updated, or deleted, we want to trigger any necessary changes to assignments for users in that class. For example, suppose a class changes its ``schoolId`` field. We want to make sure that all users in the class receive assignments for the new school and changes to a school document:

1. New document created - handled in the if (currData && !prevData) block
2. Adding new groups to the ``subGroups`` field - handled in the else if (currData) block
3. Removing groups from the ``subGroups`` field - handled in the else if (currData) block
4. Changing the ``districtId`` field - handled in the else if (currData) block
5. Changing the ``schoolId`` field - handled in the else if (currData) block
6. Entire document deleted - handled in the else block below

## Mirror Groups


When a family is created, updated, or deleted, we want to trigger any necessary changes to assignments for users in that family. For example, suppose a family changes its ``subGroups`` field. We want to make sure that all users in those subGroups receive assignments for the family.  Here we enumerate the possible changes to a family document:

1. New document created - handled in the if (currData && !prevData) block
2. Adding new groups to the ``subGroups`` field - handled in the else if (currData) block
3. Removing groups from the ``subGroups`` field - handled in the else if (currData) block
4. Changing the ``parentGroupId`` field - handled in the else if (currData) block
4. Changing the ``parentOrgType`` field - handled in the else if (currData) block
5. Changing the ``familyId`` field - handled in the else if (currData) block
6. Entire document deleted - handled in the else block below

## Helper Functions

### Mirror Doc

The mirrorDoc function is a helper function used extensively throughout the mirroring functions. It takes in 3 parameters:

-   `event`: The event that triggers the mirror function. This can be a write, update, or delete.
-   `excludeFields`: Fields to exclude from the mirror operation. This is pertinent for mirror operations that may contain PID.
-   `additionalData`: Additional fields to copy over to the write

The logic for this function checks to see if the triggering event is from a document being deleted, created, or updated.

If a document is being updated, it will remove the excluded fields passed in with a call to the lodash `_omit` function. Then, we will add any fields added in `additionalData` and use a `.set` function to update the new document in the `gse-roar-assessments` store.

### getClassesAndSubGroupsFromSchool

