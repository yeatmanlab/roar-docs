# BigQuery schema: user_runs

The BigQuery table `gse-roar-assessment.assessment.user_runs` conforms to the following schema.

| Field name           | Data type      | Key type | Description                                                                         |
| :------------------- | :------------- | :------: | :---------------------------------------------------------------------------------- |
| run_id               | STRING         |    PK    | The run's unique ID                                                                 |
| age_months_at_run    | STRING         |          | The user's age in months at the time the run was started                            |
| assigning_classes    | ARRAY\<STRING> |    FK    | An array of IDs for classes that assigned this run's task to this user              |
| assigning_districts  | ARRAY\<STRING> |    FK    | An array of IDs for districts that assigned this run's task to this user            |
| assigning_families   | ARRAY\<STRING> |    FK    | An array of IDs for families that assigned this run's task to this user             |
| assigning_groups     | ARRAY\<STRING> |    FK    | An array of IDs for groups that assigned this run's task to this user               |
| assigning_schools    | ARRAY\<STRING> |    FK    | An array of IDs for schools that assigned this run's task to this user              |
| assignment_id        | STRING         |    FK    | The ID for the assignment (administration) that this run belongs to                 |
| best_run             | BOOLEAN        |          | Indicates whether this run is the "best" run and is used for scoring                |
| cloud_sync_timestamp | TIMESTAMP      |          | An internal timestamp used to coordinate ROAR's cloud functions                     |
| completed            | BOOLEAN        |          | Indicates whether the participant completed this run                                |
| document_name        | STRING         |    UK    | The database document path                                                          |
| engagement_flags     | STRING         |          | A serialized (stringified) JSON object indicating the engagement flags for this run |
| is_demo_data         | BOOLEAN        |          | Whether this run is demo data or not                                                |
| is_test_data         | BOOLEAN        |          | Whether this run is test data or not                                                |
| reliable             | BOOLEAN        |          | Indicates whether this run is classified as reliable for scoring                    |
| roar_uid             | STRING         |    FK    | The user's unique ID in the ROAR system                                             |
| scores               | STRING         |          | A serialized (stringified) JSON object containing scores for this run               |
| task_id              | STRING         |    FK    | The ID for this run's task (assessment)                                             |
| task_version         | STRING         |          | The version of the assessment                                                       |
| time_finished        | TIMESTAMP      |          | Time the run was completed                                                          |
| time_started         | TIMESTAMP      |          | Time the run was started                                                            |
| timestamp            | TIMESTAMP      |          | The commit timestamp of this change in Cloud Firestore.                             |
| user_birth_month     | STRING         |          | The user's birth month                                                              |
| user_birth_year      | STRING         |          | The user's birth year                                                               |
| user_grade_at_run    | STRING         |          | The user's grade at the time the run was started                                    |
| user_school_level    | STRING         |          | The user's school level                                                             |
| variant_id           | STRING         |    FK    | The ID for this run's task variant                                                  |
