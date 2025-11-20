# BigQuery schema: user_assignments

The BigQuery view `gse-roar-admin.admin.user_assignments` conforms to the following schema.

| Field name                      | Data type      | Key type | Description                                                                                               |
| :------------------------------ | :------------- | :------: | :-------------------------------------------------------------------------------------------------------- |
| roar_uid                        | STRING         |    FK    | The user's unique ID in the ROAR system                                                                   |
| assessment_pid                  | STRING         |          | The user's human-readable assessment PID                                                                  |
| assessment_uid                  | STRING         |          | The user's auto-generated assessment UID                                                                  |
| assessments                     | ARRAY\<STRING> |    FK    | A serialized (stringified) JSON object containing the array of assessment IDs included in this assignment |
| assigning_classes               | ARRAY\<STRING> |    FK    | An array of IDs for classes that assigned this assignment to this user                                    |
| assigning_districts             | ARRAY\<STRING> |    FK    | An array of IDs for districts that assigned this assignment to this user                                  |
| assigning_families              | ARRAY\<STRING> |    FK    | An array of IDs for families that assigned this assignment to this user                                   |
| assigning_groups                | ARRAY\<STRING> |    FK    | An array of IDs for groups that assigned this assignment to this user                                     |
| assigning_schools               | ARRAY\<STRING> |    FK    | An array of IDs for schools that assigned this assignment to this user                                    |
| cloud_sync_timestamp            | TIMESTAMP      |          | An internal timestamp used to coordinate ROAR's cloud functions                                           |
| completed                       | BOOLEAN        |          | Indicates whether the user completed this assignment                                                      |
| created_by                      | STRING         |          | The ID of the user who created this assignment                                                            |
| date_assigned                   | TIMESTAMP      |          | Time the assignment was assigned to the user                                                              |
| date_closed                     | TIMESTAMP      |          | Time the assignment was closed                                                                            |
| date_created                    | TIMESTAMP      |          | Time the assignment was created                                                                           |
| date_opened                     | TIMESTAMP      |          | Time the assignment was opened to the user                                                                |
| email                           | STRING         |          | The user's email address                                                                                  |
| gender                          | STRING         |          | The user's gender                                                                                         |
| hispanic_ethnicity              | STRING         |          | The user's Hispanic ethnicity                                                                             |
| id                              | STRING         |    PK    | The assignment's unique ID                                                                                |
| is_demo_data                    | BOOLEAN        |          | Whether this assignment is demo data or not                                                               |
| is_test_data                    | BOOLEAN        |          | Whether this assignment is test data or not                                                               |
| last_synced_from_administration | TIMESTAMP      |          | Time the assignment was last synced from the administration                                               |
| legal                           | STRING         |          | The legal version associated with this assignment                                                         |
| name                            | STRING         |          | A serialized (stringified) JSON object containing the user's name                                         |
| progress                        | STRING         |          | A serialized (stringified) JSON object containing the assignment progress                                 |
| public_name                     | STRING         |          | The public name for the assignment                                                                        |
| race                            | STRING         |          | The user's race                                                                                           |
| sequential                      | BOOLEAN        |          | Indicates whether the assessments must be completed sequentially                                          |
| started                         | BOOLEAN        |          | Indicates whether the user has started this assignment                                                    |
| username                        | STRING         |          | The user's username                                                                                       |
| user_birth_month                | STRING         |          | The user's birth month                                                                                    |
| user_birth_year                 | STRING         |          | The user's birth year                                                                                     |
| user_age_months_at_assignment   | STRING         |          | The user's age in months at the time the assignment was started                                           |
| user_grade_at_assignment        | STRING         |          | The user's grade at the time the assignment was started                                                   |
| user_school_level               | STRING         |          | The user's school level                                                                                   |
