# ROAR Backend Technical Specification

This index organizes all of ROAR's backend technical specifications by functional domain.
Incomplete specs are marked (in progress).

## Identity and Access

### [Users & Organizations](users-orgs.md)

Covers:

- User account model
- Org hierarchy (district → school → class, families, groups)
- Historical org membership
- Rostering provenance and audit logs
- FERPA/PII compliance and data minimization

### [Permissions & Access Control](permissions.md)

Covers:

- RBAC (Role-Based Access Control) design
- Granting permissions to orgs, users, and entities
- Role expiration and provenance
- Access and mutation logging

### [Parent Accounts and Access Modes](parent-accounts.md)

Covers:

- School-linked vs ROAR@Home access modes
- Parent-child relationship management
- Identity linking and cohort enrollment

## Task Infrastructure

### [Task Configuration](task-configuration.md)

Covers:

- Task definitions
- Parameter management
- Variant ID system
- Task versioning

### [Assessment Execution](assessment-execution.md) (in progress)

Covers:

- Run lifecycle and metadata
- Trial-level events
- Runtime modes (practice/test)
- Linking variants to executions

### [Measurement Services Integration](measurement-services.md)

Covers:

- Integration of task runtimes with measurement services
- Score schema (raw, computed, normed)
- Trial-level score accumulation
- Reliability evaluation and event tracking
- Stopping condition and item selection services
- Browser interaction logging
- Score and reliability compute/validate endpoints

## Delivery and Research Operations

### [Administrations & Assignments](administrations-assignments.md)

Covers:

- Assignment creation and management
- Administration series and scheduling logic
- Linking students and educators to tasks
- Tracking completion across assigned groups

### [Agreements](agreements.md)

Covers:

- User agreements such as assent, consent, and TOS
- Agreement versioning and translations
- Associating agreement versions with administrations
