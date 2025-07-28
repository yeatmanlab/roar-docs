# BigQuery schema: districts

The BigQuery table `gse-roar-assessment.assessment.districts` conforms to the following schema.

| Field name                  | Data type      | Key type | Description                                                                          |
| :-------------------------- | :------------- | :------: | :----------------------------------------------------------------------------------- |
| district_id                 | STRING         |    PK    | The unique district ID in the ROAR system                                            |
| abbreviation                | STRING         |          | A human-readable abbreviation for this district                                      |
| archived                    | BOOLEAN        |          | Whether this district has been archived or unenrolled                                |
| clever_launch_date          | TIMESTAMP      |          | The date this this district launched in Clever                                       |
| clever_roster_created       | TIMESTAMP      |          | The date this district created its Clever roster                                     |
| clever_roster_last_modified | TIMESTAMP      |          | The date this district's roster was last modified in Clever                          |
| clever_roster_pause_end     | TIMESTAMP      |          | Indicates when the district data is unpaused to reflect data for the new school year |
| clever_roster_pause_start   | TIMESTAMP      |          | Indicates when the district's data gets paused to reflect last year's data in Clever |
| current_activation_code     | STRING         |    UK    | The district's current parent sign-up activation code                                |
| document_name               | STRING         |    UK    | The database document path                                                           |
| is_classlink                | BOOLEAN        |          | Indicates whether this district is a ClassLink district                              |
| is_clever                   | BOOLEAN        |          | Indicates whether this district is a Clever district                                 |
| is_demo_data                | BOOLEAN        |          | Indicates whether this district is a demo district                                   |
| is_test_data                | BOOLEAN        |          | Indicates whether this district is a test district                                   |
| last_roar_sync              | TIMESTAMP      |          | The date and time when this district's data was last synced between Clever and ROAR  |
| last_updated                | TIMESTAMP      |          | The date and time this district was last updated in ROAR                             |
| location_address            | STRING         |          | The district address                                                                 |
| location_city               | STRING         |          | The district city                                                                    |
| location_state              | STRING         |          | The district state                                                                   |
| location_zip                | STRING         |          | The district zip code                                                                |
| mdr_number                  | STRING         |    UK    | The district's MDR number                                                            |
| name                        | STRING         |          | The district name                                                                    |
| nces_id                     | STRING         |    UK    | The district's NCES ID                                                               |
| public_name                 | STRING         |          | The district's public facing name                                                    |
| schools                     | ARRAY\<STRING> |    FK    | An array of IDs for the district's current schools                                   |
| schools_archived            | ARRAY\<STRING> |    FK    | An array of IDs for the district's archived (i.e., unenrolled) schools               |
| tags                        | ARRAY\<STRING> |          | An array of metadata tags for this district                                          |
| timestamp                   | TIMESTAMP      |          | The commit timestamp of this change in Cloud Firestore.                              |
| valid_activation_codes      | ARRAY\<STRING> |    UK    | An array of valid activation codes for this district                                 |
