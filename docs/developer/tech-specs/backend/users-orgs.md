# ROAR Users and Organizations: Technical Specification

## Purpose and Scope

This document defines the data model for users and the organizational hierarchy in ROAR, including support for various org types (e.g., districts, schools, classes, families, groups) and user-org relationships.

## System Overview

ROAR supports hierarchical and non-hierarchical organizations. Users may belong to multiple orgs and may hold different roles depending on their context. This spec focuses on the representation of orgs and memberships only — permissions are handled in a separate spec.

### Definitions

* **User**: A person with a ROAR account (student, teacher, admin, etc.)

* **Organization (Org)**: A logical unit like a school or group

* **Org Type**: A string enum: district, school, family, group

* **Org Hierarchy**: Parent-child relationships among orgs

* **Course**: A curriculum-aligned instructional offering (e.g., "Grade 4 Math") that can be scheduled multiple times across different classes.

* **Class**: A scheduled instance of a course, with associated students, educators, term, and time block metadata. A class may reference a `course_id`.

* **Term**: A period of time during which classes are scheduled. Terms are used to group classes and students together for reporting and analysis.

* **Time Block**: A period of time during which a class is scheduled. Time blocks are used to group classes and students together for reporting and analysis.

* **Role**: A user’s function in an org (e.g., teacher, student, admin)

### Component Flow Diagram

```mermaid
graph TD
  A[User] --> B[Login]
  B --> C[Fetch org memberships]
  C --> D[Apply org-level role logic]
```

## Runtime Behavior

* A user may belong to multiple orgs at once.

* Roles are stored per org membership. That is, a user may have different roles in different orgs.

* Org hierarchies enable queries like "all students in a district."

## Edge Cases and Error Handling

| Scenario                         | Behavior                       |
| -------------------------------- | ------------------------------ |
| User has no orgs                 | May have limited access only   |
| Org with invalid `parent_org_id` | 400 Bad Request                |
| Circular org hierarchy attempted | 400 Bad Request or block at UI |

## Design Rationale

* A unified orgs table (as opposed to separate tables for districts, schools, etc.) keeps the model simple, flexible, and extensible.
* An enum for org types enables special-case logic (e.g., school vs. family).
* Separating courses and classes from other orgs aligns with both OneRoster and Clever data models (N.B. Clever refers to classes as "sections").
* Separate courses and classes allows course reuse across multiple classes (sections).
* Separate roles per org allows nuanced modeling (e.g., teacher in one, admin in another).
* The `*_change_logs` tables track all changes to user, org, and user-org relationships. This enables traceable provenance of enrollment and staff assignments: who made each change, when it happened, and what was changed. This is essential for supporting auditability, compliance, and longitudinal data accuracy.

## API Contract

### Create an org

```http
POST /api/orgs
{
  "name": "Lincoln High",
  "org_type": "school",
  "parent_org_id": "uuid-of-district"
}
```

### Update an org

```http
PATCH /api/orgs/:id
{
  "name": "Lincoln High"
}
```

### List orgs

```http
GET /api/orgs
```

### Get an org

```http
GET /api/orgs/:id
```

### Add a user to an org

```http
POST /api/user-orgs
{
  "user_id": "uuid",
  "org_id": "uuid",
  "role": "teacher"
}
```

### Remove a user from an org

```http
DELETE /api/user-orgs/:user_id/:org_id
```

### List user-org memberships

```http
GET /api/users
```

### Get a user

```http
GET /api/users/:id
```

### Create a user

```http
POST /api/users
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password"
}
```

### Update a user

```http
PATCH /api/users/:id
{
  "name": "John Doe"
}
```

## SQL Schema

### `grade_levels`

```sql
CREATE TABLE grade_levels (
  name TEXT PRIMARY KEY,         -- The normalized enum value used in ROAR
  display_name TEXT NOT NULL,     -- Human-readable label for UI
  order_index INTEGER NOT NULL,   -- For ordered display
  one_roster_equiv TEXT           -- Closest OneRoster-compatible mapping
  school_level TEXT CHECK (school_level IN ('early', 'elementary', 'middle', 'high', 'postsecondary', 'ungraded', 'other'))
);
```

Here is the entire `grade_levels` table:

| value                    | display\_name             | order\_index | one\_roster\_equiv | school\_level |
| ------------------------ | ------------------------- | ------------ | ------------------ | ------------- |
| InfantToddler            | Infant/Toddler            | 0            | Other              | early       |
| Preschool                | Preschool                 | 1            | Other              | early       |
| PreKindergarten          | Pre-K                     | 2            | PK                 | early       |
| TransitionalKindergarten | Transitional Kindergarten | 3            | Other              | early       |
| Kindergarten             | Kindergarten              | 4            | K                  | elementary  |
| 1                        | 1st Grade                 | 5            | 01                 | elementary  |
| 2                        | 2nd Grade                 | 6            | 02                 | elementary  |
| 3                        | 3rd Grade                 | 7            | 03                 | elementary  |
| 4                        | 4th Grade                 | 8            | 04                 | elementary  |
| 5                        | 5th Grade                 | 9            | 05                 | elementary  |
| 6                        | 6th Grade                 | 10           | 06                 | middle      |
| 7                        | 7th Grade                 | 11           | 07                 | middle      |
| 8                        | 8th Grade                 | 12           | 08                 | middle      |
| 9                        | 9th Grade                 | 13           | 09                 | high        |
| 10                       | 10th Grade                | 14           | 10                 | high        |
| 11                       | 11th Grade                | 15           | 11                 | high        |
| 12                       | 12th Grade                | 16           | 12                 | high        |
| 13                       | Post-secondary            | 17           | 13                 | postsecondary |
| PostGraduate             | Postgraduate              | 18           | Other              | postsecondary |
| Ungraded                 | Ungraded                  | 19           | Ungraded           | ungraded    |
| Other                    | Other                     | 20           | Other              | other       |

### `users`

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  email TEXT,

  -- Name Fields
  name_first TEXT,
  name_last TEXT,
  name_middle TEXT,

  -- Demographics
  dob DATE,
  gender TEXT,               -- See enum options below
  grade TEXT REFERENCES grade_levels(name)
  school_level TEXT,         -- Derived (elementary, middle, etc.)
  hispanic_ethnicity BOOLEAN,
  race TEXT[],               -- Multiselect array (e.g., ['White', 'Asian'])

  -- Identifiers
  state_id TEXT,
  local_id TEXT,
  pid TEXT UNIQUE NOT NULL,  -- Human-readable unique participant ID
  email TEXT UNIQUE,

  -- Metadata
  is_system_user BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
);
```

The `*_change_log` tables include a `changed_by_user_id` field to track who created the record. This is used for audit logging and provenance tracking. However, it's common to run into cases where no human user directly initiated the action — e.g., a backend job, sync service, or webhook from Clever or another system. In these cases, we use a special "system" user (with `is_system_user` set to `true`) to represent the action. For example:

```sql
INSERT INTO users (id, name_first, name_last, username, email, pid, is_system_user)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'System', 'Automated', 'system', 'system@roar.local', 'system', true),
  ('00000000-0000-0000-0000-000000000002', 'Clever', 'Sync', 'clever-sync', 'clever-sync@roar.local', 'clever-sync', true),
  ('00000000-0000-0000-0000-000000000003', 'OneRoster', 'Import', 'oneroster-import', 'oneroster-import@roar.local', 'oneroster-import', true);
```

### `external_id_types`

```sql
CREATE TABLE external_id_types (
  name TEXT PRIMARY KEY,         -- e.g., 'clever', 'oneroster'
  display_name TEXT NOT NULL,    -- e.g., 'Clever', '1EdTech OneRoster'
  description TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
);

INSERT INTO external_id_types (name, display_name, description) VALUES
  ('clever', 'Clever', 'External ID provided by the Clever platform'),
  ('oneroster', '1EdTech OneRoster', 'ID aligned with OneRoster spec'),
  ('sis', 'SIS', 'Student Information System ID'),
  ('custom', 'Custom ID', 'Locally defined or imported identifier'),
  ('state_id', 'State ID', 'State-assigned unique student or org identifier'),
  ('local_id', 'Local ID', 'District-assigned ID not tied to a formal rostering system');
```

### `user_external_ids`

```sql
CREATE TABLE user_external_ids (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  external_id TEXT NOT NULL,
  external_id_type TEXT REFERENCES external_id_types(name) NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(user_id, external_id_type),
);
```

### `org_types`

```sql
CREATE TABLE org_types (
  name TEXT PRIMARY KEY,
  one_roster_equiv TEXT CHECK (one_roster_equiv IN ('state', 'region', 'district', 'school', 'local', 'other')),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
);

-- Seed values
INSERT INTO org_types (name, one_roster_equiv) VALUES
  ('district', 'district'),
  ('school', 'school'),
  ('local', 'local'),
  ('state', 'state'),
  ('region', 'region'),
  ('family', 'other'),
  ('group', 'other');
```

### `orgs`

```sql
CREATE TABLE orgs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  org_type TEXT REFERENCES org_types(name),
  parent_org_id UUID REFERENCES orgs(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
);
```

### `org_external_ids`

```sql
CREATE TABLE org_external_ids (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES orgs(id),
  external_id TEXT NOT NULL,
  external_id_type TEXT REFERENCES external_id_types(name) NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(org_id, external_id_type),
);
```

### `users_orgs`

```sql
CREATE TABLE users_orgs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  org_id UUID REFERENCES orgs(id),
  role TEXT CHECK (role IN ('teacher', 'student', 'admin')),
  start_date DATE DEFAULT CURRENT_DATE,
  end_date DATE, -- NULL means currently active
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(user_id, org_id),
);
```

### `courses`

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES orgs(id),
  name TEXT NOT NULL,
  number TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(org_id, name),
);
```

### `course_grades`

```sql
CREATE TABLE course_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  grade TEXT REFERENCES grade_levels(name),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(course_id, grade),
);
```

### `course_subjects`

```sql
CREATE TABLE course_subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  subject TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(course_id, subject),
);
```

### `terms`

```sql
CREATE TABLE terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES orgs(id),
  name TEXT,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(org_id, name),
);
```

### `classes`

```sql
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES orgs(id),
  school_id UUID REFERENCES orgs(id),
  district_id UUID REFERENCES orgs(id),
  course_id UUID REFERENCES courses(id),
  class_type TEXT CHECK (class_type IN ('homeroom', 'scheduled', 'other')),
  name TEXT NOT NULL,
  number TEXT,
  term_id UUID REFERENCES terms(id),
  period TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
);
```

### `class_grades`

```sql
CREATE TABLE class_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES classes(id),
  grade TEXT REFERENCES grade_levels(name),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(class_id, grade),
);
```

### `class_subjects`

```sql
CREATE TABLE class_subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES classes(id),
  subject TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(class_id, subject),
);
```

### `class_terms`

```sql
CREATE TABLE class_terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES classes(id),
  term_id UUID REFERENCES terms(id),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(class_id, term_id),
);
```

### `class_periods`

```sql
CREATE TABLE class_periods (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES classes(id),
  period TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  deleted_at TIMESTAMP,
  UNIQUE(class_id, period),
);
```

### `orgs_change_logs`

```sql
CREATE TABLE orgs_change_logs (
  id SERIAL PRIMARY KEY,
  changed_by_user_id UUID REFERENCES users(id),
  target_id UUID REFERENCES orgs(id),
  change_type TEXT CHECK (change_type IN ('create', 'update', 'delete')),
  changes JSONB, -- e.g., { "name": ["Old School", "New School"] }
  notes TEXT,
  timestamp TIMESTAMP DEFAULT now(),
);
```

### `courses_change_logs`

```sql
CREATE TABLE courses_change_logs (
  id SERIAL PRIMARY KEY,
  changed_by_user_id UUID REFERENCES users(id),
  target_id UUID REFERENCES courses(id),
  change_type TEXT CHECK (change_type IN ('create', 'update', 'delete')),
  changes JSONB, -- e.g., { "name": ["Old Course", "New Course"] }
  notes TEXT,
  timestamp TIMESTAMP DEFAULT now(),
);
```

### `classes_change_logs`

```sql
CREATE TABLE classes_change_logs (
  id SERIAL PRIMARY KEY,
  changed_by_user_id UUID REFERENCES users(id),
  target_id UUID REFERENCES classes(id),
  change_type TEXT CHECK (change_type IN ('create', 'update', 'delete')),
  changes JSONB, -- e.g., { "name": ["Old Class", "New Class"] }
  notes TEXT,
  timestamp TIMESTAMP DEFAULT now(),
);
```

### `users_change_logs`

```sql
CREATE TABLE users_change_logs (
  id SERIAL PRIMARY KEY,
  changed_by_user_id UUID REFERENCES users(id),
  target_id UUID REFERENCES users(id),
  change_type TEXT CHECK (change_type IN ('create', 'update', 'delete')),
  changes JSONB, -- e.g., { "email": ["a@x.com", "b@x.com"] }
  notes TEXT,
  timestamp TIMESTAMP DEFAULT now(),
);
```

### `users_orgs_change_log`

```sql
CREATE TABLE users_orgs_change_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  changed_by_user_id UUID REFERENCES users(id),
  target_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  target_org_id UUID REFERENCES orgs(id) ON DELETE CASCADE,
  change_type TEXT CHECK (change_type IN ('create', 'update', 'delete')),
  changes JSONB, -- e.g., { "role": ["teacher", "admin"] }
  notes TEXT,
  timestamp TIMESTAMP DEFAULT now(),
);
```

### `user_external_ids_change_log`

```sql
CREATE TABLE user_external_ids_change_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  changed_by_user_id UUID REFERENCES users(id),
  target_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  target_external_id_id UUID REFERENCES user_external_ids(id) ON DELETE CASCADE,
  change_type TEXT CHECK (change_type IN ('create', 'update', 'delete')),
  changes JSONB, -- e.g., { "external_id": ["old_id", "new_id"] }
  notes TEXT,
  timestamp TIMESTAMP DEFAULT now(),
);
```

## Migration Plan

* Migrate current users and roles into the unified membership model
* Assign default roles where missing
* Migrate the Firestore org collections (`districts`, `schools`, `families`, `groups`) into the `orgs` table.
* Migrate the Firestore user-org relationships (currently stored in the `users` collection) into the `users_orgs` table.
* Populate org_type based on known groupings.

## Summary

This spec formalizes a scalable and flexible representation of users and their relationships to hierarchical and non-hierarchical organizations.
