---
sidebarDepth: 3
---

# Assessment Database

The assessment database is a NoSQL database hosted by Google's Cloud Firestore. This database keeps
each user's assignment responses, organized into trial-level data and run-level data. This database also
stores information about each task and its variants. The database is organized into collections of
documents. Each document is able to have a subcollection, which itself is a collection of documents.
Below is a schema for the structure of the database, as well as expected fields in each document.
A '?' appended to the field name denotes an optional field.

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

## Database Schema

### /classes/

### Demo Data

```json
/classes/{classId}
{
  "demoData": boolean,
  "districtId": string,
  "grade": string,
  "name": string,
  "schoolId": string,
  "schoolLevel": string,
  "subject": string,
  "tags": [string],
  "testData": boolean,
}

```

### /districts/


```json
/districts/{districtId}
{
  "abbreviation": string,
  "address": {
    "addressComponents": [ //object for each addess component, e.g. route, street number
      {
        "long_name": string,
        "short_name": string,
        "types": [string]
      },
      {
        "long_name": string,
        "short_name": string,
        "types": [string]
      },
      {
        "long_name": string,
        "short_name": string,
        "types": [string]
      },
    ],
    "formattedAddress": string,
    "googleMapsUrl": string,
    "googlePlacesId": string,
    "name": string,
    "schools": [string]
  }
}
```
### /families/

```json
/families/{familyId}
{
  "createdAt": timestamp,
  "lastUpdated": timestamp,
  "name": string,
  "testData": boolean
}
```

### /groups/

### Data

```json
/groups/{groupId}
{
  "familyId": string,
  "name": string,
  "parentOrgId": string,
  "parentOrgType": string
}
```

### /guests/

```json
/guests/{guestId}
{
  "age": null,
  "ageMonths": null,
  "assessmentPid": string,
  "assessmentUid": string,
  "birthMonth": null,
  "birthYear": null,
  "created": timestamp,
  "districtId": string,
  "lastUpdated": timestamp,
  "tasks": [string],
  "userType": string,
  "variants": [string]
}
``` 
- #### /guests/{guestId}/runs

```json
/guests/{guestId}/runs/{runId}
{
  "assigningOrgs": null,
  "assignmentId": null,
  "id": string,
  "newField": string,
  "scores": {
    "computed": {
      "composite": number,
    },
    "raw": {
        "composite":{
            "practice":{
                "numAttempted": number,
                "numCorrect": number,
                "numIncorrect": number,
                "thetaEstimate": null,
                "thetaSE": null
            },
            "test": {
                "numAttempted": number,
                "numCorrect": number,
                "numIncorrect": number,
                "thetaEstimate": null,
                "thetaSE": null
            },
        },
    },
  },
  "taskId": string,
  "timeFinished": null,
  "timeStarted": timestamp,
  "variantId": string,
}
```
   - ##### /guests/{guestId}/runs/{runId}/trials

```json
/guests/{guestId}/runs/{runId}/trials/{trialId}
{
  "answerWord": string,
  "assessment_stage": string,
  "block": number,
  "correct": number,
  "correctSide": number,
  "internal_node_id": string,
  "itemSource": string,
  "itemType": string,
  "numAFC": number,
  "options": {
    "0": string,
    "1": string,
    "2": string,
    "3": string
  },
  "pid": string,
  "replay": number,
  "response": number,
  "rt": number,
  "save_trial": boolean,
  "serverTimestamp": timestamp,
  "start_time": string,
  "start_time_unix": number,
  "stimulus": string,
  "stimulusRule": string,
  "targetWord": string,
  "time_elapsed": number,
  "trialNumBlock": number,
  "trialNumTotal": number,
  "trial_index": number,
  "trial_type": string
}
``` 

### /schools/

```json
/schools/{schoolId}
{
  "abbreviation": string,
  "classes": [string],
  "districtId": string,
  "name": string
}
```
### /tasks/

```json
/tasks/{taskName}
{
  "description": string,
  "image": string,
  "lastUpdated": timestamp,
  "name": string,
  "registered": boolean
}
```
- #### /task/{taskName}/variants

```json
/task/{taskName}/variants/{variantId}
{
  "lastUpdated": timestamp,
  "name": string,
  "params": { //each variant will have different params
    "audioFeedback": string,
    "buttonLayout": string,
    "consent": boolean,
    "numberOfTrials": number,
    "practiceCorpus": string,
    "recruitment": string,
    "sequentialOrder": boolean,
    "skipInstructions": boolean,
    "stimulusCorpus": string,
    "userMode": string
  }
}
```

### /userClaims/
```json
{
  "claims": {
    "adminOrgs":{
        "adminUid": string,
        "assessmentUid": string,
    },
    "minimalAdminOrgs":{
        "roarUid": string,
    },
  },
  "lastUpdated": number
}
```

### /users/ and /deleted-users/

```json
/users/{userId}
{
  "assessmentPid": string,
  "assessmentUid": string,
  "birthMonth": number,
  "birthYear": number,
  "classes": {
    "all": [string],
    "current": [string],
    "dates": {}
  },
  "createdAt": timestamp,
  "districts": {
    "all": [string],
    "current": [string],
    "dates": {
      "[districtId]": {
        "from": timestamp,
        "to": null
      },
    },
  },
  "families": {
    "all": [string],
    "current": [string],
    "dates": {}
  },
  "grade": string,
  "groups": {
    "all": [string],
    "current": [string],
    "dates": {}
  },
  "schools": {
    "all": [string],
    "current": [string],
    "dates": {
      "[schoolId]": {
        "from": timestamp,
        "to": null
      },
    },
  },
  "schoolLevel": string,
  "userType": string
}
``` 