# ROAR Parent Accounts: Technical Specification

## Parent Accounts and Access Models

ROAR supports two primary parent access models, corresponding to distinct usage contexts: school-based access and ROAR@Home access.

### School-Linked Parent Access

In this model, the parent account is authenticated via a district portal (e.g., Clever Parent), and access to children is provisioned via rostering data.

* Authentication via SSO (Clever, ClassLink, etc.)
* Children linked via OneRoster/Clever API or CSV upload of district-provided rostering data
* Read-only access to school-assigned scores and task completions
* Access limited to the scope of district-provided enrollment data

#### Parent Permissions

* Role: `parent_of_student`
* Org context: `school`, `district`, `state`, `local`, `region`
* May view scores, progress, and historical runs that are part of school-linked administrations

### ROAR@Home Parent Access

This model supports direct parent use of ROAR, enabling household account creation and flexible, longitudinal assessment outside of a school setting.

#### Characteristics

* Authentication via email/password or OAuth (e.g., Google)
* Parent manually creates child profiles
* Children belong to a `family` org
* Tasks may be assigned in the context of an administration assigned to groups or cohorts. Or they may be freely selected and launched by parents outside of an administration.
* All runs are scored and retained for analysis

#### Parent Permissions

* Role: `admin` or `member` in `family` org
* Org context: `family`
* Full access to task selection, score viewing, and child account management
* Can join research `cohort` or `group` orgs via invitation codes

### Dual Identity Binding

A parent may have both types of accounts (e.g., a Clever-linked school account and a ROAR@Home household account). ROAR supports secure, explicit account linking.

#### Identity Linking Workflow

1. User logs in via one identity (e.g., SSO)
2. Optionally links second identity via login verification
3. System merges the two `users` records using the `merged_into` column
4. Canonical `user_id` is used for all future access control and display

#### Technical Notes

* `users.merged_into` tracks identity resolution
* Org memberships and roles are unioned under the canonical account

### Parent Consent and Cohort Enrollment

* For cohort-based research, a parent must explicitly approve child enrollment via an invitation code and consent flow
* Code redemption links the child to a `cohort` org as a `participant`
* Consent records are tracked per child per cohort (see [Agreements](agreements.md))

### Edge Cases

* A parent with multiple children may have each in different orgs (e.g., one in school, one in a study)
* A child may belong to both a school and a cohort simultaneously
* Account merges must be explicitly consented to and audited

### Design Rationale

* Distinct access models respect privacy boundaries between home and school
* Dual identity support enables seamless experience across both systems
* Invitation codes and per-child consents ensure secure, flexible study participation
