# BigQuery schema: schools

The BigQuery table `gse-roar-assessment.assessment.schools` conforms to the following schema.

| Field name                  | Data type      | Key type | Description                                                                       |
| :-------------------------- | :------------- | :------: | :-------------------------------------------------------------------------------- |
| school_id                   | STRING         |    PK    | The unique school ID in the ROAR system                                           |
| document_name               | STRING         |    UK    | The database document path                                                        |
| timestamp                   | TIMESTAMP      |          | A timestamp indicating when the database document was last modified               |
| abbreviation                | STRING         |          | A human-readable abbreviation for this school                                     |
| archived                    | BOOLEAN        |          | Whether this school has been archived or unenrolled                               |
| classes                     | ARRAY\<STRING> |    FK    | An array of IDs for the schools's current classes                                 |
| classes_archived            | ARRAY\<STRING> |    FK    | An array of IDs for the schools's archived (i.e., unenrolled) classes             |
| clever_roster_created       | TIMESTAMP      |          | The date this school created its Clever roster                                    |
| clever_roster_last_modified | TIMESTAMP      |          | The date this schools's roster was last modified in Clever                        |
| current_activation_code     | STRING         |    UK    | The school's current parent sign-up activation code                               |
| district_id                 | STRING         |    FK    | The ID of this school's district                                                  |
| is_classlink                | BOOLEAN        |          | Indicates whether this school is a ClassLink school                               |
| is_clever                   | BOOLEAN        |          | Indicates whether this school is a Clever school                                  |
| is_demo_data                | BOOLEAN        |          | Indicates whether this school is a demo school                                    |
| is_test_data                | BOOLEAN        |          | Indicates whether this school is a test school                                    |
| location_address            | STRING         |          | The school address                                                                |
| location_city               | STRING         |          | The school city                                                                   |
| location_state              | STRING         |          | The school state                                                                  |
| location_zip                | STRING         |          | The school zip code                                                               |
| low_grade                   | STRING         |          | The lowest grade served at this school                                            |
| high_grade                  | STRING         |          | The highest grade served at this school                                           |
| last_roar_sync              | TIMESTAMP      |          | The date and time when this school's data was last synced between Clever and ROAR |
| last_updated                | TIMESTAMP      |          | The date and time this school was last updated in ROAR                            |
| mdr_number                  | STRING         |    UK    | The school's MDR number                                                           |
| name                        | STRING         |          | The school name                                                                   |
| nces_id                     | STRING         |    UK    | The school's NCES ID                                                              |
| school_number               | STRING         |          | District or county school identifier                                              |
| state_id                    | STRING         |          | State school identifier                                                           |
| tags                        | ARRAY\<STRING> |          | An array of metadata tags for this school                                         |
| valid_activation_codes      | ARRAY\<STRING> |    UK    | An array of valid activation codes for this school                                |
