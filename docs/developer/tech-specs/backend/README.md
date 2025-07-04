# ROAR Backend Technical Specification

This index organizes all of ROAR's backend technical specifications by functional domain.

## [Task Configuration](task-configuration.md)

Covers:

- Task definitions
- Parameter management
- Variant IDs
- Task versioning
- Dev vs production parameter handling

## [Assessment Execution](assessment-execution.md)

Covers:

- Run lifecycle and metadata
- Trial-level events
- Runtime modes (practice/test)
- Linking variants to executions

## [Measurement Services Integration](measurement-services.md)

Covers:

- Integration of task runtimes with measurement services
- Score schema (raw, computed, normed)
- Trial-level score accumulation
- Reliability evaluation and event tracking
- Stopping condition and item selection services
- Browser interaction logging
- Score and reliability compute/validate endpoints

## [Users & Organizations](users-orgs.md)

Covers:

- User account model
- Org hierarchy (district → school → class, families, groups)
- Historical org membership
- Rostering provenance and audit logs

## [Administrations & Assignments](administrations-assignments.md)

Covers:

- Assignment creation and management
- Linking students and educators to tasks
- Tracking completion across assigned groups

## [Agreements](agreements.md)

Covers:

- User agreements such as assent, consent, and TOS
- Versioning different agreements
- Associating agreement versions with administrations

## [Permissions & Access Control](permissions.md)

Covers:

- RBAC (Role-Based Access Control) design
- Granting permissions to orgs, users, and entities
- Role expiration and provenance
- Access audit logs (reads, updates, escalations)
