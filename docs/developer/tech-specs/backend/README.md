# ROAR Backend Technical Specification

This index organizes all of ROAR's backend technical specifications by functional domain.

## [Task Configuration](task-configuration.md)

Covers:

- Task definitions
- Parameter management
- Variant IDs
- Task versioning
- Dev vs production parameter handling

## Assessment Execution (Upcoming)

Covers:

- Run lifecycle and metadata
- Trial-level events
- Runtime modes (practice/test)
- Linking variants to executions

## [Scoring & Interaction](scoring-interaction.md)

Covers:

- Score schema (raw, computed, normed)
- Trial-level score accumulation
- Reliability event tracking
- Browser interaction logging
- Score compute/validate endpoints

## [Users & Organizations](users-orgs.md)

Covers:

- User account model
- Org hierarchy (district → school → class, families, groups)
- Historical org membership
- Rostering provenance and audit logs

## Administrations & Assignments (Upcoming)

Covers:

- Assignment creation and management
- Linking students and educators to tasks
- Tracking completion across assigned groups

## Permissions & Access Control (Upcoming)

Covers:

- RBAC (Role-Based Access Control) design
- Granting permissions to orgs, users, and entities
- Role expiration and provenance
- Access audit logs (reads, updates, escalations)
