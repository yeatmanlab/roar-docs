# Querying Admin Data

ROAR's [admin data][link_admin_firestore_doc] is automatically exported from Firestore to [BigQuery][link_bigquery] for analysis and reporting. This document explains how to query admin data in BigQuery.

## Key Differences from Assessment Data

Admin data queries follow the same principles as [querying assessment data][link_querying_assessment_data], but with these important differences:

- **Location**: Admin data is stored in a separate BigQuery project (`gse-roar-admin`) under the `admin` dataset
- **Privacy**: Admin data includes personally identifiable information (PII) that requires special handling
- **Access**: Admin data access is more restricted due to privacy requirements

## Shared and Unique Tables

### Shared Tables

These tables exist in both admin and assessment datasets with identical schemas:

- `classes`
- `districts`
- `families`
- `groups`
- `schools`

### Users Table Differences

The `users` table exists in both datasets but with different schemas:

- **Admin dataset** (`gse-roar-admin.admin.users`): Contains complete user information including PII
- **Assessment dataset** (`gse-roar-assessment.assessment.users`): PII fields are omitted for privacy

## Available Tables

The admin dataset (`gse-roar-admin.admin`) contains the following tables:

- [`administrations`][link_schema_administrations]
- [`classes`][link_schema_classes]
- [`districts`][link_schema_districts]
- [`families`][link_schema_families]
- [`groups`][link_schema_groups]
- [`legal`][link_schema_legal]
- [`legal_versions`][link_schema_legal_versions]
- [`schools`][link_schema_schools]
- [`user_assignments`][link_schema_user_assignments]
- [`users`][link_schema_users]

[link_querying_assessment_data]: ./README.md
[link_admin_firestore_doc]: ../databases/admin.md
[link_bigquery]: https://cloud.google.com/bigquery?hl=en
[link_schema_administrations]: ./administrations.md
[link_schema_classes]: ./classes.md
[link_schema_districts]: ./districts.md
[link_schema_families]: ./families.md
[link_schema_groups]: ./groups.md
[link_schema_legal]: ./legal.md
[link_schema_legal_versions]: ./legal-versions.md
[link_schema_schools]: ./schools.md
[link_schema_users]: ./users.md#admin-users
[link_schema_user_assignments]: ./user-assignments.md
