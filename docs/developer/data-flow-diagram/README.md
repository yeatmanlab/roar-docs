# ROAR Data Flow Diagram (DFD)

## Definitions

- **Item**: A single stimulus in an assessment.
- **Trial**: A single stimulus/response pair.
- **Run**: A collection of trials within a single assessment.
- **Assessment**: A collection of items designed to assess a facet of the participant's reading ability.
- **Assignment**: A list of assessments chosen for a participant to complete.
- **Administration**: A collection of assignments assigned to an organization.
- **Organization**: A collection of participants, participant administrators, and research administrators.
- **Participant**: A user with the ability to access the assessments within an assigned administration.
- **Researcher**: A user with the ability to access the participant demographics and assignment run data for specified organizations.
- **Participant Administrator**: A user with the ability to enroll participants, generate assignment specifications for specified administrations, and access completion statistics and scores for specified administrations.
- **Research Administrator**: A user with the ability to enroll participants, create Participant Administrator accounts, and design assessment and assignment specifications.

## System Components (Vendor-Agnostic)

- **Admin Database**: system-of-record for identifiable operational data (PII/admin/org/rosters, etc.).
- **Assessment Database**: system-of-record for de-identified assessment response/run/trial data and derived scores.
- **Identity Provider & Access Management**: authentication and authorization for ROAR users.
- **Authorization & Data Validation Layer**: enforcement of access control and request/data validation.
- **Backend Compute Services**: backend business logic (serverless functions and/or containerized services), including cross-store synchronization and data-intensive operations.
- **Object Storage**: bucket-based object store for assets/corpora and participant artifacts like audio/video recordings.

## Level 0 DFD (Context)

```mermaid
flowchart LR
  P[Participant]
  PA[Participant Administrator]
  RA[Research Administrator]
  R[Researcher]

  ROAR((0.0 ROAR))

  P -->|Login / consent / assigned assessments| ROAR
  ROAR -->|Item stimuli| P
  P -->|Item responses| ROAR

  PA -->|Assignment specification + enrollment actions| ROAR
  ROAR -->|Assignment completion statistics| PA
  ROAR -->|Assignment scores| PA
  ROAR -->|"Participant demographics (authorized subset)"| PA

  RA -->|Assessment specification + org/admin actions| ROAR
  ROAR -->|"Participant demographics (authorized subset)"| RA

  R -->|Run-level queries| ROAR
  ROAR -->|"Run-level data + raw run/trial data (authorized)"| R
```

## Level 1 DFD (User-Facing Processes)

```mermaid
flowchart TB
  %% External interfaces
  subgraph UI_P[Participant View]
    p_auth[1.1 Authenticate]
    p_consent[1.2 Consent]
    p_view_assigned[1.8 View assigned assessments]
    p_take[1.12 Take assessments]
  end

  subgraph UI_A["Administrator View (Participant Admins + Research Admins)"]
    a_progress[1.3 View administration progress]
    a_scores[1.7 View scores]
    a_enroll[1.9 Enroll participants]
    a_create_assign[1.10 Create assignments]
    a_org_view[1.4 View organizations]
    a_org_edit[1.11 Create/edit/delete organizations]
    a_users[1.13 View users for specified organization]
  end

  subgraph UI_RA["Administrator View (Research Admins Only)"]
    ra_create_pa[1.6 Create participant administrator]
    ra_create_assess[1.14 Create assessment]
  end

  subgraph CLI["Command Line Interface (Researchers Only)"]
    r_raw[1.16 View raw run and trial data]
  end

  %% Gatekeeping / decisions
  creds[(Login credentials)]
  consentQ{Has user consented?}

  creds --> p_auth --> consentQ
  consentQ -->|No: prompt for consent| p_consent --> consentQ
  consentQ -->|Yes: allow access| p_view_assigned --> p_take

  %% Admin flows
  consentQ -->|Permission to administer| a_progress
  a_progress --> a_scores
  a_progress --> a_enroll
  a_progress --> a_create_assign
  a_progress --> a_org_view --> a_org_edit
  a_org_view --> a_users

  %% Research admin flows
  consentQ -->|Research admin role| ra_create_pa
  ra_create_pa --> ra_create_assess

  %% Researcher CLI flow
  consentQ -->|Researcher role| r_raw
```

## Level 2 DFD (System-Level Processes)

Level 2 is visually dense. To make it maintainable we represent it here as:

- A shared system component map, then
- Process-focused sub-diagrams aligned to the Level 2 numbering.

### Level 2 — Shared System Components

```mermaid
flowchart LR
  %% External actors
  Any[Any User]
  Part[Participant]
  Admin[Administrator]
  ResAdmin[Research Administrator]
  Researcher[Researcher]

  %% Core app
  App[[ROAR Application]]

  %% Services
  IAM[[Identity Provider & Access Management]]
  Authz[[Authorization & Data Validation Layer]]
  Compute[[Backend Compute Services]]

  %% Data stores
  AdminDB[("Admin Database<br/>PII / admin / org / roster")]
  AssessDB[("Assessment Database<br/>de-identified run/trial/response data")]
  Obj[("Object Storage<br/>game assets/corpora + optional participant artifacts")]

  %% High-level connections
  Any --> App
  Part --> App
  Admin --> App
  ResAdmin --> App
  Researcher --> App

  App --> IAM
  App --> Authz
  App --> Compute

  Compute --> AdminDB
  Compute --> AssessDB
  Compute --> Obj

  App --> AdminDB
  App --> AssessDB
  App --> Obj
```

### 2.1–2.2 Authenticate + Consent (Gatekeeping)

```mermaid
flowchart TB
  Any[Any User] -->|Login credentials| P21[2.1 Authenticate]
  P21 --> IAM[[Identity Provider & Access Management]]
  IAM -->|Auth result + user identity| P21

  P21 --> ConsentQ{Has user consented?}
  ConsentQ -->|No| P22[2.2 Consent]
  P22 -->|Prompt for consent| Any
  P22 -->|Update consent on file| AdminDB[(Admin Database)]
  P22 --> ConsentQ

  ConsentQ -->|Yes: allow access| Access[Proceed to authorized actions]
```

### 2.3–2.4 View Assigned Assessments + Take Assessments

```mermaid
flowchart TB
  Part[Participant] --> P23[2.3 View Assigned Assessments]
  P23 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Permission denied| Err1[Throw Error\nPermission Denied]
  Authz -->|Permission granted| AdminDB[(Admin Database)]
  AdminDB -->|Assignment information| P23
  P23 -->|List of assigned assessments| Part

  Part --> P24[2.4 Take Assessments]
  P24 -->|Select assessment| Sel[Assessment Selection]
  Sel -->|Item stimuli| Obj[(Object Storage\nAssets/Corpora)]
  Obj -->|Stimuli| P24

  P24 -->|Trial response| AssessDB[(Assessment Database)]
  P24 -->|Run ID + trial responses| AssessDB
  AssessDB -->|Updated run scores| P24

  P24 -->|Completion status + Run ID| AdminDB
  P24 -->|Assignment complete| Done[Participant dashboard updated]
```

### 2.6–2.7 View Scores + View Administration Progress

```mermaid
flowchart TB
  Admin[Administrator] --> P26[2.6 View Scores]
  P26 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Denied| Err[Throw Error\nPermission Denied]
  Authz -->|Granted| Join[(Query: assignment + run)]
  Join --> AdminDB[(Admin Database)]
  Join --> AssessDB[(Assessment Database)]
  AdminDB -->|User + assignment context| P26
  AssessDB -->|Run data + scores| P26
  P26 -->|Scores| Admin

  Admin --> P27[2.7 View Administration Progress]
  P27 --> Authz
  Authz -->|Denied| Err2[Throw Error\nPermission Denied]
  Authz -->|Granted| AdminDB
  AdminDB -->|Participant data + assignment completion statuses| P27
  P27 -->|Completion statistics| Admin
```

### 2.8–2.9 Enroll Participants + Create Assignments (with Backend Sync)

```mermaid
flowchart TB
  Admin[Administrator] --> P28[2.8 Enroll Participants]
  P28 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Denied| Err1[Throw Error\nPermission Denied]
  Authz -->|Granted| AdminDB[(Admin Database)]
  AdminDB -->|Participant data| P28

  %% Optional backend normalization / de-id mapping
  P28 --> Compute[[Backend Compute Services]]
  Compute --> AssessDB[(Assessment Database)]
  Compute -->|De-identified participant linkage / operational sync| AssessDB

  Admin --> P29[2.9 Create Assignments]
  P29 --> Authz
  Authz -->|Denied| Err2[Throw Error\nPermission Denied]
  Authz -->|Granted| AdminDB
  AdminDB -->|Administration data| P29

  %% Assignment propagation
  P29 --> Compute
  Compute -->|Administration document change triggers backend processing| Compute
  Compute -->|Copy as assignment to all assigned users| AdminDB
```

### 2.10–2.12 Organizations + View Users for Organization

```mermaid
flowchart TB
  Admin[Administrator] --> P210[2.10 Create/Edit/Delete Organizations]
  P210 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Denied| Err1[Throw Error\nPermission Denied]
  Authz -->|Granted| AdminDB[(Admin Database)]
  P210 -->|Org edits| AdminDB

  %% Optional backend processing / denormalization
  AdminDB -->|Org change event| Compute[[Backend Compute Services]]
  Compute -->|Maintain derived org views / mirrors| AdminDB

  Admin --> P211[2.11 View Organizations]
  P211 --> Authz
  Authz -->|Denied| Err2[Throw Error\nPermission Denied]
  Authz -->|Granted| AdminDB
  AdminDB -->|Org data| P211
  P211 -->|Org list| Admin

  Admin --> P212[2.12 View Users for Specified Organization]
  P212 --> Authz
  Authz -->|Denied| Err3[Throw Error\nPermission Denied]
  Authz -->|Granted| AdminDB
  AdminDB -->|User data for selected org| P212
  P212 -->|User list| Admin
```

### 2.13 Create Participant Administrator

```mermaid
flowchart TB
  ResAdmin[Research Administrator] --> P213[2.13 Create Participant Administrator]
  P213 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Denied| Err[Permission Denied]
  Authz -->|Granted| Compute[[Backend Compute Services]]
  Compute --> AdminDB[(Admin Database)]
  AdminDB -->|Administrator account data| P213
  P213 -->|Participant Administrator created| ResAdmin
```

### 2.14 Create Assessment + Assets/Corpora

```mermaid
flowchart TB
  ResAdmin[Research Administrator] --> P214[2.14 Create Assessment]
  P214 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Denied| Err[Throw Error\nPermission Denied]
  Authz -->|Granted| AssessSpec[Assessment design + specification]
  AssessSpec -->|Write/update specs| AssessDB[(Assessment Database)]

  AssessSpec -->|Upload/maintain| Obj[(Object Storage\nGame Assets & Corpora)]
  Obj -->|Assets available to runtime| Runtime[Assessment runtime]
```

### 2.16 View Raw Run and Trial Data (Researcher CLI)

```mermaid
flowchart TB
  Researcher[Researcher] --> CLI[roarquery CLI / researcher tooling]
  CLI --> P216[2.16 View Raw Run and Trial Data]
  P216 --> Authz[[Authorization & Data Validation Layer]]
  Authz -->|Denied| Err[Throw Error\nPermission Denied]
  Authz -->|Granted| AssessDB[(Assessment Database)]
  AssessDB -->|"Run + trial data (authorized scope)"| P216
  P216 -->|Query results| Researcher
```

## Notes for Maintainers

- The "Admin Database" vs "Assessment Database" split is intentional: it supports PII separation and de-identified analytics/scoring.
- "Backend Compute Services" covers both event-driven sync and batch-ish operations (and can include vendor-agnostic ELT steps, provided they run inside your environment and don't create new external data recipients).
- "Object Storage" is used for assets/corpora and can be extended for participant artifacts (e.g., audio/video) if that's in scope.
