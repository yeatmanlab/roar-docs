---
sidebarDepth: 3
---

# Admin Database

The admin database is a NoSQL database hosted by Google's Cloud Firestore. This database keeps
information regarding administrations, organizations, and identifiable information for all users.
The database is organized into collections of documents. Each document is able to have a subcollection,
which itself is a collection of documents. Below is a schema for the structure of the database, as well
as expected fields in each document. A '?' appended to the field name denotes an optional field.

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

## Database Schema

### /administrations/

```json
/administrations/{administrationId}
{
  name: string,
  createdBy: string, // UserId of administration author
  sequential: boolean, // Whether tasks should be played in order
  assessments: [
    {
      taskId: string,
      params: {
        [x: string]: any
      }
    }
  ],
  districts: [string],
  schools: [string],
  classes: [string],
  groups: [string],
  families: [string],
  readOrgs: { // ReadOrgs is a list of organizations used to determine who can read from this document
    districts: [string],
    schools: [string],
    classes: [string],
    groups: [string],
    families: [string],
  }
  dateCreated: Date,
  dateOpened: Date,
  dateClosed: Date,
}

```

```json
/administrations/{administrationId}/stats/completion
{
  total: {
    assignment: {
      assigned: number,
      started: number,
      completed?: number,
    },
    [taskId]: { // Each task has its own object to track task specific progress
      assigned: number,
      started: number,
      completed?: number,
    }
  },
  [organizationId]: { // Each organization has its own object to track org specific progress
      assignment: {
        assigned: number,
        started: number,
        completed?: number,
      },
      [taskId]: { // Each task has its own object to track task / org specific progress
        assigned: number,
        started: number,
        completed?: number,
      }
    }
}
```

### /districts/

```json
/districts/{districtId}
{
  name: string
  schools: [string],
  abbreviation?: string
  id?: string, // Matches the document ID.
  // The following fields are optional and primarily used in districts from Clever.
  clever?: boolean,
  districtContact?: {
    district: string
    email: string,
    id: string,
    name: {
      first: string,
      last: string,
    },
    title: string,
  },
  lastSync?: Date,
  launchDate?: Date,
  loginMethods?: [string],
  portalUrl?: string,
  sisType?: string,
}
```

### /schools/

```json
/schools/{schoolId}
{
  name: string
  abbreviation: string,
  districtId: string,
  classes: [string],
  location?: {
    address: string,
    city?: string,
    state?: string,
    zip?: string,
  },
  lowGrade?: string,
  highGrade?: string,
  mdrNumber?: string,
  ncesId?: string,
  phone?: string,
  principal?: {
    email?: string,
    name?: string,
  }
  schoolNumber?: string,
  stateId?: string,
}
```

### /classes/

```json
/classes/{classId}
{
  name: string,
  districtId: string,
  grade: string,
  schoolId: string,
  schoolLevel: string,
  created?: Date,
  lastModified?: Date,
  subject?: string,
  tags?: [string],
  clever?: boolean,
  sectionId?: string,
}
```

### /groups/

```json
/groups/{groupId}
{
  name: string,
  abbreviation?: string,
  // The following fields are optional, but indicate that the group is a sub-group.
  parentOrgType?: string,
  parentOrgId?: string,
  familyId?: string,
}
```

### /families/

```json
/families/{familyId}
{
  name: string
  createdAt?: Date,
  lastUpdated?: Date,
}
```

### /legal/

The legal collection keeps track of which versions of the legal documents are current. For each form (assent, consent, terms of service), we store information to access the github document of the corresponding version.

```json
/legal/[{assent, consent, tos}]
{
  currentCommit: string,
  fileName: string,
  gitHubOrg: string,
  gitHubRepository: string,
}
```

```json
/legal/[{assent, consent, tos}]/versions/{versionId}
{
  validFrom: Date,
}
```

### /users/

```json
/users/{userId}
{
  assessmentPid: string,
  assessmentUid: string,
  assignments?: {
    assigned?: [string],
    completed?: [string],
    started?: [string],
  },
  assignmentsAsssigned?: {
    // A map of assignment ids, where the key is the assignmentId, and the value is the date assigned to the user.
    [{assignmentId}]: Date,
  },
  assignmentsCompleted?: {
    // A map of assignment ids, where the key is the assignmentId, and the value is the date assigned to the user.
    [{assignmentId}]: Date,
  },
  assignmentsStarted?: {
    // A map of assignment ids, where the key is the assignmentId, and the value is the date assigned to the user.
    [{assignmentId}]: Date,
  },
  districts: {
    all: [string],
    current: [string],
    dates: {
      [{districtId}]: {
        to: Date,
        from: Date,
      }
    }
  },
  schools: {
    all: [string],
    current: [string],
    dates: {
      [{schoolId}]: {
        to: Date,
        from: Date,
      }
    }
  }
  classes: {
    all: [string],
    current: [string],
    dates: {
      [{classId}]: {
        to: Date,
        from: Date,
      }
    }
  },
  legal: {
    [assent, consent, tos]: {
      {formVersion}: Date,
    }
  },
  name?: {
    first: string,
    middle: string,
    last: string,
  },
  studentData: {
    dob: Date,
    gender?: string,
    grade: string,
    hispanic_ethnicity?: string,
    race?: [string],
    schoolLevel: string,
    state_id?: string,
  },
  userType: string,
}
```

```json
/users/{userId}/assignments/{assignmentId}
{
  assessments: [
    {
      // For each assignment, taskId will always be present. If the task has not be started yet, taskId will be the only key present.
      taskId: string,
      allRunIds?: [string],
      completedOn: Date,
      runId?: string,
      startedOn?: Date,
    }
  ],
  assigningOrgs: {
    distrcits: [string],
    schools: [string],
    classes: [string],
    groups: [string],
    families: [string],
  },
  completed: Boolean,
  dateAssigned: Date,
  dateOpened: Date,
  dateClosed: Date,
  id: string,
  readOrgs: {
    distrcits: [string],
    schools: [string],
    classes: [string],
    groups: [string],
    families: [string],
  },
  started: Boolean,
  // We keep a copy of the user's data in this subcollection in order to perform composite queries on user data and assignment data.
  userData: {
    assessmentPid?: string,
    assessmentUid?: string,
    dob: Date,
    email?: string,
    gender?: string,
    grade: string,
    hispanic_ethnicity?: string,
    name?: {
      first: string,
      middle: string,
      last: string,
    },
    race?: [string],
    schoolLevel: string,
    state_id?: string,
    username?: string,
  }
}
```

```json
/users/{userId}/externalData/clever
{
  created: string,
  district: string,
  email: string,
  id: string,
  last_modified: string,
  name: {
    first: string,
    middle?: string,
    last: string,
  },
  roles: {
    student: {
      dob: string,
      gender: string,
      grade: string,
      hispanic_ethnicity: string,
      state_id: string,
    }
  }
}
```

### /userClaims/

```json
/userClaims/{userId}
{
  claims: {
    adminOrgs?: {

    },
    adminUid: string,
    assessmentUid: string,
    roarUid: string,
  },
  lastUpdated: Date,
}
```

### /deleted-users/

The deleted users collection is a collection of users documents that have been deleted. The schema of this collection matches that of /users/ collection, with the sole exception that the `/users/{userId}/assignments subcollection` is changed to `/deleted-users/{userId}/deleted-assignments`.
