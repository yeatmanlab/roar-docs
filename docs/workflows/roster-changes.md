---
sidebarDepth: 1
---

# User Roster Changes

ROAR users are provisioned or imported through three service providers:

- ROAR, via CSV upload by a ROAR administrator,
- Clever, via a cloud function that uses the Clever API to sync organizations and their users, and
- ClassLink, via a similar cloud function that syncs organizations and their users.

When a user's information changes in these service providers, the ROAR platform must update it's own internal information accordingly. Most user information (such as name) can simply be updated in a user's Firestore documents. However, changes to the following fields must be handles differently:

- date of birth (DOB), and therefore age
- grade
- organizational affiliation of any kind (districts, schools, classes, etc.)

Changes to these fields can affect conditional assignment and scoring and must therefore be handled differently. We follow this rostering change flowchart to determine what to update when these fields change.

```mermaid
graph TD
  title["Student Roster Changes"]

  %% Update grade path
  Start([Start]) --> Ugrade[Update grade]
  Ugrade --> UGfirestore[
    Update grade in
    Firestore `/users` and
    open `/assignments`
  ]
  UGfirestore --> GradeCheck{
    Has user been
    promoted out of
    any open
    assignments?
  }
  GradeCheck --> |"Yes"| UnassignG[
    Unassign from
    these
    assignments
  ]
  GradeCheck --> |"No"| End([End])
  UnassignG --> End
  
  %% Update DOB path
  Start([Start]) --> Udob[Update DOB]
  Udob --> UDfirestore[
    Update DOB in
    Firestore `/users`
    and `/assignments`
  ]
  UDfirestore --> AgeCheck{
    Has user aged
    out of any open
    assignments?
  }
  AgeCheck --> |"Yes"| UnassignD[
    Unassign from
    these
    assignments
  ]
  AgeCheck --> |"No"| UpdateRunAges[
    Update Age in `runs`
  ]
  UnassignD --> UpdateRunAges
  UpdateRunAges --> RecomputeScores[
    Recompute age-based scores
  ]
  RecomputeScores --> End

  %% Add new org path
  Start --> NewOrg[Add new organization]
  NewOrg --> OrgCheck{
    Are any of user's current
    assignments assigned
    to this new org?
  }
  OrgCheck --> |"Yes"| AddOrg[
    Add new org to
    assigningOrgs in
    `assignments` and `runs`
  ]
  OrgCheck --> |"No"| ListNewOrg[
    List new org as
    'current' in
    Firestore user doc
  ]
  AddOrg --> RecomputeNew[
    Recompute readOrgs
    for new org
  ]
  RecomputeNew --> ListNewOrg
  ListNewOrg --> End
  
  %% Add new org path
  Start --> RemoveOrg[Remove organization]
  RemoveOrg --> OldOrgCheck{
    Are any of user's current
    assignments assigned
    to this old org?
  }
  OldOrgCheck --> |"Yes"| RemoveAssign[
    Remove org from
    assigningOrgs in
    `assignments` and `runs`
  ]
  OldOrgCheck --> |"No"| MoveOrg[
    Move org from
    'current' list
    to 'all' list
  ]
  RemoveAssign --> RecomputeOld[Recompute readOrgs]
  RecomputeOld --> MoveOrg
  MoveOrg --> End
```
