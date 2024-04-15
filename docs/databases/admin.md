---
sidebarDepth: 3
---

# gse-roar-admin

## **Admin Database**

The admin database is a NoSQL database hosted by Google's Cloud Firestore. This database keeps
information regarding administrations, organizations, and identifiable information for all users.
The database is organized into collections of documents. Each document is able to have a subcollection,
which itself is a collection of documents. Below is a schema for the structure of the database, as well
as expected fields in each document. A '?' appended to the field name denotes an optional field.

The admin database (`gse-roar-admin`)  is crucial for managing information about administrations, organizations, users, and legal compliance across various educational entities involved in the project.

## Information stored

- Administration metadata
- Organization metadata
  - Districts
  - Schools
  - Classes
  - Groups
  - Families
- Legal document versions
- User metadata
  - User demographic information
  - User run information
  - User claims information

## **Database Schema Documentation**

### **/administrations/**
- **Purpose**: Stores metadata about each administration including the sequence of tasks, involved organizations, and visibility control.
- **Fields**:
  - `name`: Name of the administration.
  - `createdBy`: User ID of the person who created the administration.
  - `sequential`: Indicates if tasks are to be played in a specific order.
  - `assessments`: Array of tasks and their parameters.
  - `districts`, `schools`, `classes`, `groups`, `families`: Lists of IDs representing organizational involvement.
  - `readOrgs`: Defines which organizations have read access to the administration data.
  - `dateCreated`, `dateOpened`, `dateClosed`: Timestamps marking the administration lifecycle.

### **/districts/**
- **Purpose**: Manages information about districts, including associated schools and optional details such as contact and sync information.
- **Fields**:
  - `name`, `abbreviation`, `id`: Basic identity and optional abbreviation.
  - `schools`: List of associated school IDs.
  - `clever`, `districtContact`, `lastSync`, `launchDate`, `loginMethods`, `portalUrl`, `sisType`: Optional fields primarily for districts integrating with external systems like Clever.

### **/schools/**
- **Purpose**: Contains data about schools, including their districts and optional location details.
- **Fields**:
  - `name`, `abbreviation`, `districtId`: Essential identifiers.
  - `classes`: List of associated class IDs.
  - `location`, `lowGrade`, `highGrade`, `mdrNumber`, `ncesId`, `phone`, `principal`, `schoolNumber`, `stateId`: Optional detailed information.

### **/classes/**
- **Purpose**: Details about classes, including school affiliation and optional educational details.
- **Fields**:
  - `name`, `districtId`, `grade`, `schoolId`, `schoolLevel`: Core class identifiers.
  - `created`, `lastModified`, `subject`, `tags`, `clever`, `sectionId`: Optional attributes for further classification and integration.

### **/groups/**
- **Purpose**: Manages group data, potentially representing subgroups within other organizational units.
- **Fields**:
  - `name`, `abbreviation`: Basic identifiers.
  - `parentOrgType`, `parentOrgId`, `familyId`: Optional fields for hierarchical organization.

### **/families/**
- **Purpose**: Stores data on family units, useful for organizing user data and permissions.
- **Fields**:
  - `name`: Identifier for the family.
  - `createdAt`, `lastUpdated`: Optional timestamps.

### **/legal/**
- **Purpose**: Tracks versions of legal documents using GitHub as a reference point.
- **Fields**:
  - `currentCommit`, `fileName`, `gitHubOrg`, `gitHubRepository`: Identifiers linking to specific GitHub documents.
  - `validFrom`: Date from which a version is considered valid.

### **/users/**
- **Purpose**: Stores comprehensive user data including demographics, assignments, and organizational affiliations.
- **Fields**: Extensive including demographics, legal compliance, assignment tracking, and organizational history.

### **/userClaims/**
- **Purpose**: Manages custom claims for users, facilitating access control based on administrative roles or organizational affiliations.
- **Fields**:
  - `claims`: Stores administrative and assessment-related UIDs and organizational claims.
  - `lastUpdated`: Timestamp of the last update.

### **/deleted-users/**
- **Purpose**: Archives data of users who have been removed from the active users collection.
- **Fields**: Mirrors `/users/` with adjustments for assignment tracking.



## Database Schema

### /administrations/{administrationId}
```json
{
  "name": "string",
  "createdBy": "string",
  "sequential": true,
  "assessments": [
    {
      "taskId": "string",
      "params": {
        "key": "value"
      }
    }
  ],
  "districts": ["string"],
  "schools": ["string"],
  "classes": ["string"],
  "groups": ["string"],
  "families": ["string"],
  "readOrgs": {
    "districts": ["string"],
    "schools": ["string"],
    "classes": ["string"],
    "groups": ["string"],
    "families": ["string"]
  },
  "dateCreated": "ISO8601-date-string",
  "dateOpened": "ISO8601-date-string",
  "dateClosed": "ISO8601-date-string"
}
```

###  /administrations/{administrationId}/stats/completion
```json
{
  "total": {
    "assignment": {
      "assigned": 0,
      "started": 0,
      "completed": 0
    },
    "taskId": {
      "assigned": 0,
      "started": 0,
      "completed": 0
    }
  },
  "organizationId": {
    "assignment": {
      "assigned": 0,
      "started": 0,
      "completed": 0
    },
    "taskId": {
      "assigned": 0,
      "started": 0,
      "completed": 0
    }
  }
}
```

### /districts/{districtId}
```json
{
  "name": "string",
  "schools": ["string"],
  "abbreviation": "string",
  "id": "string",
  "clever": true,
  "districtContact": {
    "district": "string",
    "email": "string",
    "id": "string",
    "name": {
      "first": "string",
      "last": "string"
    },
    "title": "string"
  },
  "lastSync": "ISO8601-date-string",
  "launchDate": "ISO8601-date-string",
  "loginMethods": ["string"],
  "portalUrl": "string",
  "sisType": "string"
}

```


### /schools/{schoolId}
```json
{
  "name": "string",
  "abbreviation": "string",
  "districtId": "string",
  "classes": ["string"],
  "location": {
    "address": "string",
    "city": "string",
    "state": "string",
    "zip": "string"
  },
  "lowGrade": "string",
  "highGrade": "string",
  "mdrNumber": "string",
  "ncesId": "string",
  "phone": "string",
  "principal": {
    "email": "string",
    "name": "string"
  },
  "schoolNumber": "string",
  "stateId": "string"
}
```


### /classes/{classId}
```json
{
  "name": "string",
  "districtId": "string",
  "grade": "string",
  "schoolId": "string",
  "schoolLevel": "string",
  "created": "ISO8601-date-string",
  "lastModified": "ISO8601-date-string",
  "subject": "string",
  "tags": ["string"],
  "clever": true,
  "sectionId": "string"
}
```

### /groups/{groupId}
```json
{
  "name": "string",
  "abbreviation": "string",
  "parentOrgType": "string",
  "parentOrgId": "string",
  "familyId": "string"
}
```

### /families/{familyId}
```json
{
  "name": "string",
  "createdAt": "ISO8601-date-string",
  "lastUpdated": "ISO8601-date-string"
}
```

### /legal/[{assent, consent, tos}]

The legal collection keeps track of which versions of the legal documents are current. For each form (assent, consent, terms of service), we store information to access the github document of the corresponding version.

```json
{
  "currentCommit": "string",
  "fileName": "string",
  "gitHubOrg": "string",
  "gitHubRepository": "string",
}
```

## /legal/[{assent, consent, tos}]/versions/{versionId}
```json
{
  "validFrom": "ISO8601-date-string"
}
```

### /users/{userId}
```json
{
  "assessmentPid": "string",
  "assessmentUid": "string",
  "assignments": {
    "assigned": ["string"],
    "completed": ["string"],
    "started": ["string"]
  },
  "districts": {
    "all": ["string"],
    "current": ["string"],
    "dates": {
      "districtId": {
        "to": "ISO8601-date-string",
        "from": "ISO8601-date-string"
      }
    }
  },
  "schools": {
    "all": ["string"],
    "current": ["string"],
    "dates": {
      "schoolId": {
        "to": "ISO8601-date-string",
        "from": "ISO8601-date-string"
      }
    }
  },
  "name": {
    "first": "string",
    "middle": "string",
    "last": "string"
  },
  "studentData": {
    "dob": "ISO8601-date-string",
    "gender": "string",
    "grade": "string",
    "hispanic_ethnicity": "string",
    "race": ["string"],
    "schoolLevel": "string",
    "state_id": "string"
  },
  "userType": "string"
}
```

### /users/{userId}/assignments/{assignmentId}
```json
{
  "assessments": [
    {
      "taskId": "taskId_example",
      "allRunIds": ["runId1", "runId2"],
      "completedOn": "2024-04-15T00:00:00Z",
      "runId": "runId_example",
      "startedOn": "2024-04-15T00:00:00Z"
    }
  ],
  "assigningOrgs": {
    "districts": ["districtId1", "districtId2"],
    "schools": ["schoolId1", "schoolId2"],
    "classes": ["classId1", "classId2"],
    "groups": ["groupId1", "groupId2"],
    "families": ["familyId1", "familyId2"]
  },
  "completed": true,
  "dateAssigned": "2024-04-15T00:00:00Z",
  "dateOpened": "2024-04-15T00:00:00Z",
  "dateClosed": "2024-04-15T00:00:00Z",
  "id": "assignmentId_example",
  "readOrgs": {
    "districts": ["districtId1", "districtId2"],
    "schools": ["schoolId1", "schoolId2"],
    "classes": ["classId1", "classId2"],
    "groups": ["groupId1", "groupId2"],
    "families": ["familyId1", "familyId2"]
  },
  "started": true,
  "userData": {
    "assessmentPid": "assessmentPid_example",
    "assessmentUid": "assessmentUid_example",
    "dob": "2008-09-15T00:00:00Z",
    "email": "user@example.com",
    "gender": "female",
    "grade": "5",
    "hispanic_ethnicity": "no",
    "name": {
      "first": "Jane",
      "middle": "Q",
      "last": "Doe"
    },
    "race": ["White", "Hispanic"],
    "schoolLevel": "elementary",
    "state_id": "stateId_example",
    "username": "janeqdoe"
  }
}

```

### /users/{userId}/externalData/clever
```json
{
  "created": "2024-04-15T00:00:00Z",
  "district": "districtId_example",
  "email": "user@example.com",
  "id": "cleverUserId",
  "last_modified": "2024-04-15T00:00:00Z",
  "name": {
    "first": "John",
    "middle": "B",
    "last": "Doe"
  },
  "roles": {
    "student": {
      "dob": "2012-05-01",
      "gender": "male",
      "grade": "5",
      "hispanic_ethnicity": "yes",
      "state_id": "stateId123"
    }
  }
}
```

### /userClaims/{userId}
```json
{
  "claims": {
    "adminOrgs": {
      "adminUid": "adminUid_example",
      "assessmentUid": "assessmentUid_example"
    },
    "minimalAdminOrgs": {
      "roarUid": "roarUid_example"
    }
  },
  "lastUpdated": "2024-04-15T00:00:00Z"
}
```

### /deleted-users/

The deleted users collection is a collection of users documents that have been deleted. The schema of this collection matches that of /users/ collection, with the sole exception that the `/users/{userId}/assignments subcollection` is changed to `/deleted-users/{userId}/deleted-assignments`.
