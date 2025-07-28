# BigQuery schema: classes

The BigQuery table `gse-roar-assessment.assessment.classes` conforms to the following schema.

| Field name                  | Data type      | Key type | Description                                                                      |
| :-------------------------- | :------------- | :------: | :------------------------------------------------------------------------------- |
| class_id                    | STRING         |    PK    | The unique class ID in the ROAR system                                           |
| archived                    | BOOLEAN        |          | Whether this class has been archived or unenrolled                               |
| clever_roster_created       | TIMESTAMP      |          | The date this class created its Clever roster                                    |
| clever_roster_last_modified | TIMESTAMP      |          | The date this class's roster was last modified in Clever                         |
| current_activation_code     | STRING         |    UK    | The class's current parent sign-up activation code                               |
| district_id                 | STRING         |    FK    | The ID of this class's district                                                  |
| document_name               | STRING         |    UK    | The database document path                                                       |
| grade                       | STRING         |          | The grade associated with this class                                             |
| is_classlink                | BOOLEAN        |          | Indicates whether this class is a ClassLink class                                |
| is_clever                   | BOOLEAN        |          | Indicates whether this class is a Clever class                                   |
| is_demo_data                | BOOLEAN        |          | Indicates whether this class is a demo class                                     |
| is_test_data                | BOOLEAN        |          | Indicates whether this class is a test class                                     |
| last_roar_sync              | TIMESTAMP      |          | The date and time when this class's data was last synced between Clever and ROAR |
| last_updated                | TIMESTAMP      |          | The date and time this class was last updated in ROAR                            |
| name                        | STRING         |          | The class name                                                                   |
| school_id                   | STRING         |    FK    | The ID of this class's school                                                    |
| school_level                | STRING         |          | The school level (e.g., elementary, middle, etc)                                 |
| subject                     | STRING         |          | The class subject                                                                |
| tags                        | ARRAY\<STRING> |          | An array of metadata tags for this class                                         |
| timestamp                   | TIMESTAMP      |          | The commit timestamp of this change in Cloud Firestore.                          |
| valid_activation_codes      | ARRAY\<STRING> |    UK    | An array of valid activation codes for this class                                |
