---
sidebarDepth: 3
---

# gse-roar-assessment

## **Assessment Database**

The assessment database is a NoSQL database hosted by Google's Cloud Firestore. This database keeps
each user's assignment responses, organized into trial-level data and run-level data. This database also
stores information about each task and its variants. The database is organized into collections of
documents. Each document is able to have a subcollection, which itself is a collection of documents.
Below is a schema for the structure of the database, as well as expected fields in each document.
A '?' appended to the field name denotes an optional field.

The assessment database (`gse-roar-assessment`) is crucial for storing trial-level and run-level user data, task information, and variants, which are essential for assessing reading skills. This NoSQL setup is designed to handle complex, scalable data structures typical of educational and assessment platforms.
## Information stored

  - Classes
  - Districts
  - Families
  - Groups
  - Guests
  - Schools
  - Tasks
- User metadata
  - User run information
  - User claims information
  - Deleted users

## **Database Schema Documentation**

### **/classes/**
- **Purpose**: Stores metadata for classes, including demographic and testing-related information.
- **Fields**:
  - `demoData`: Boolean indicating if this class is used for demonstration purposes.
  - `districtId`: Identifier for the district to which the class belongs.
  - `grade`: Educational grade level of the class.
  - `name`: Name of the class.
  - `schoolId`: Identifier for the school to which the class belongs.
  - `schoolLevel`: Educational level of the school.
  - `subject`: Academic subject taught in the class.
  - `tags`: Array of strings for tagging and categorization.
  - `testData`: Boolean indicating if this class is used for testing purposes.

### **/districts/**
- **Purpose**: Manages district-specific information including address and related schools.
- **Fields**:
  - `abbreviation`: Shortened name for the district.
  - `address`: Comprehensive address information, including components like street name, formatted address, and Google mapping identifiers.
  - `name`: Full name of the district.
  - `schools`: List of schools associated with this district.

### **/families/**
- **Purpose**: Organizes information about family units, particularly for user grouping and permissions.
- **Fields**:
  - `createdAt`, `lastUpdated`: Timestamps marking key lifecycle events.
  - `name`: Family name or identifier.
  - `testData`: Indicates whether the family data is used for testing.

### **/groups/**
- **Purpose**: Stores details about groups, which could be subsets or special groupings within classes, schools, or families.
- **Fields**:
  - `familyId`: Links to the family if the group is a sub-part of a family unit.
  - `name`: Name of the group.
  - `parentOrgId`, `parentOrgType`: Identifiers for the parent organization, helpful for hierarchical data structuring.

### **/guests/**
- **Purpose**: Manages temporary or guest user data, often used for one-off assessments without full user registration.
- **Fields**:
  - `age`, `ageMonths`, `birthMonth`, `birthYear`: Demographic data, optional for guests.
  - `assessmentPid`, `assessmentUid`: Identifiers linking to specific assessment processes.
  - `created`, `lastUpdated`: Timestamps for account creation and updates.
  - `districtId`: Associated district identifier.
  - `tasks`, `variants`: Lists of tasks and variants the guest has access to or has completed.
  - `userType`: Classification of the guest, e.g., student, researcher.

#### **/guests/{guestId}/runs/**
- **Subcollection Purpose**: Stores individual assessment runs for a guest, including scores and trial data.
- **Fields**:
  - Various identifiers and timestamps related to the task, variant, and assessment process.
  - `scores`: Detailed scoring data, including composite and raw scores.

#### **/guests/{guestId}/runs/{runId}/trials**
- **Subcollection Purpose**: Detailed trial-level data for each run, capturing responses, timing, and other metrics.

### **/schools/**
- **Purpose**: Contains data about schools, similar to the class collection but at a broader organizational level.
- **Fields**:
  - Similar to `/classes/` but focused on school-wide attributes.

### **/tasks/**
- **Purpose**: Defines tasks used in assessments, including descriptions and variant configurations.
- **Fields**:
  - `description`, `image`, `lastUpdated`, `name`, `registered`: General task information and metadata.

#### **/task/{taskName}/variants**
- **Subcollection Purpose**: Manages different configurations or versions of a task, allowing for customization of the assessment experience.
- **Fields**:
  - Detailed parameters defining the specifics of each variant, which can affect how the task is presented and interacts with users.

### **/userClaims/**
- **Purpose**: Manages custom claims for user authentication and authorization, essential for access control and permissions.
- **Fields**:
  - `claims`: Detailed administrative and organizational roles and identifiers.

### **/users/ and /deleted-users/**

- **Purpose**: Stores active and archived user data, including detailed demographic and organizational affiliations.
- **Fields**:
  Extensive information covering all aspects of user involvement in the system, from enrollment to assessment participation.

## Database Schema

### /classes/{classId}
```json
{
  "demoData": true,
  "districtId": "districtId_example",
  "grade": "grade_example",
  "name": "name_example",
  "schoolId": "schoolId_example",
  "schoolLevel": "schoolLevel_example",
  "subject": "subject_example",
  "tags": ["tag1", "tag2"],
  "testData": true
}


```


### /districts/{districtId}
```json
{
  "abbreviation": "abbreviation_example",
  "address": {
    "addressComponents": [
      {
        "long_name": "long_name_example",
        "short_name": "short_name_example",
        "types": ["type1", "type2"]
      },
      {
        "long_name": "long_name_example",
        "short_name": "short_name_example",
        "types": ["type1", "type2"]
      },
      {
        "long_name": "long_name_example",
        "short_name": "short_name_example",
        "types": ["type1", "type2"]
      }
    ],
    "formattedAddress": "formatted_address_example",
    "googleMapsUrl": "google_maps_url_example",
    "googlePlacesId": "google_places_id_example",
    "name": "name_example",
    "schools": ["schoolId1", "schoolId2"]
  }
}

```

### /families/{familyId}
```json
{
  "createdAt": "2023-09-15T00:00:00Z",
  "lastUpdated": "2023-09-15T00:00:00Z",
  "name": "family_name_example",
  "testData": true
}

```


### /groups/{groupId}
```json
{
  "familyId": "familyId_example",
  "name": "name_example",
  "parentOrgId": "parentOrgId_example",
  "parentOrgType": "parentOrgType_example"
}
```


### /guests/{guestId}
```json
{
  "age": null,
  "ageMonths": null,
  "assessmentPid": "assessmentPid_example",
  "assessmentUid": "assessmentUid_example",
  "birthMonth": null,
  "birthYear": null,
  "created": "2023-09-15T00:00:00Z",
  "districtId": "districtId_example",
  "lastUpdated": "2023-09-15T00:00:00Z",
  "tasks": ["taskId1", "taskId2"],
  "userType": "userType_example",
  "variants": ["variantId1", "variantId2"]
}

``` 

### /guests/{guestId}/runs/{runId}
```json
{
  "assigningOrgs": null,
  "assignmentId": null,
  "id": "runId_example",
  "newField": "newField_example",
  "scores": {
    "computed": {
      "composite": 100
    },
    "raw": {
      "composite": {
        "practice": {
          "numAttempted": 10,
          "numCorrect": 7,
          "numIncorrect": 3,
          "thetaEstimate": null,
          "thetaSE": null
        },
        "test": {
          "numAttempted": 20,
          "numCorrect": 15,
          "numIncorrect": 5,
          "thetaEstimate": null,
          "thetaSE": null
        }
      }
    }
  },
  "taskId": "taskId_example",
  "timeFinished": null,
  "timeStarted": "2023-09-15T00:00:00Z",
  "variantId": "variantId_example"
}
```

### /guests/{guestId}/runs/{runId}/trials/{trialId}
```json
{
  "answerWord": "exampleWord",
  "assessment_stage": "initial",
  "block": 1,
  "correct": 5,
  "correctSide": 2,
  "internal_node_id": "node123",
  "itemSource": "sourceExample",
  "itemType": "multipleChoice",
  "numAFC": 4,
  "options": {
    "0": "option1",
    "1": "option2",
    "2": "option3",
    "3": "option4"
  },
  "pid": "pid123",
  "replay": 0,
  "response": 3,
  "rt": 250,
  "save_trial": true,
  "serverTimestamp": "2024-04-15T00:00:00Z",
  "start_time": "15:30:00",
  "start_time_unix": 1617985200,
  "stimulus": "stimulusExample",
  "stimulusRule": "ruleExample",
  "targetWord": "targetExample",
  "time_elapsed": 30,
  "trialNumBlock": 10,
  "trialNumTotal": 50,
  "trial_index": 5,
  "trial_type": "typeExample"
}

``` 


###/schools/{schoolId}
```json
{
  "abbreviation": "abbreviation_example",
  "classes": ["classId1", "classId2"],
  "districtId": "districtId_example",
  "name": "school_name_example"
}
```

###/tasks/{taskName}
```json
{
  "description": "description_example",
  "image": "image_url_example",
  "lastUpdated": "2023-09-15T00:00:00Z",
  "name": "task_name_example",
  "registered": true
}
```

### /task/{taskName}/variants/{variantId}
```json
{
  "lastUpdated": "2023-09-15T00:00:00Z",
  "name": "variant_name_example",
  "params": {
    "audioFeedback": "audio_feedback_example",
    "buttonLayout": "button_layout_example",
    "consent": true,
    "numberOfTrials": 30,
    "practiceCorpus": "practice_corpus_example",
    "recruitment": "recruitment_example",
    "sequentialOrder": true,
    "skipInstructions": false,
    "stimulusCorpus": "stimulus_corpus_example",
    "userMode": "user_mode_example"
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
  "lastUpdated": 1692206400
}
```

### /users/{userId} and /deleted-users/{userId}
```json
{
  "assessmentPid": "assessmentPid_example",
  "assessmentUid": "assessmentUid_example",
  "birthMonth": 9,
  "birthYear": 2008,
  "classes": {
    "all": ["classId1", "classId2"],
    "current": ["classId1"],
    "dates": {}
  },
  "createdAt": "2023-09-15T00:00:00Z",
  "districts": {
    "all": ["districtId1", "districtId2"],
    "current": ["districtId1"],
    "dates": {
      "districtId1": {
        "from": "2023-09-15T00:00:00Z",
        "to": null
      }
    }
  },
  "families": {
    "all": ["familyId1", "familyId2"],
    "current": ["familyId1"],
    "dates": {}
  },
  "grade": "5",
  "groups": {
    "all": ["groupId1", "groupId2"],
    "current": ["groupId1"],
    "dates": {}
  },
  "schools": {
    "all": ["schoolId1", "schoolId2"],
    "current": ["schoolId1"],
    "dates": {
      "schoolId1": {
        "from": "2023-09-15T00:00:00Z",
        "to": null
      }
    }
  },
  "schoolLevel": "elementary",
  "userType": "student"
}

``` 