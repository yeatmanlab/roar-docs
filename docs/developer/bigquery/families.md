# BigQuery schema: families

The BigQuery table `gse-roar-assessment.assessment.families` conforms to the following schema.

| Field name              | Data type      | Key type | Description                                                         |
| :---------------------- | :------------- | :------: | :------------------------------------------------------------------ |
| family_id               | STRING         |    PK    | The unique family ID in the ROAR system                             |
| abbreviation            | STRING         |          | A human-readable abbreviation for this family                       |
| archived                | BOOLEAN        |          | Whether this family has been archived or unenrolled                 |
| created_at              | TIMESTAMP      |          | A timestamp indicating when this family was created                 |
| current_activation_code | STRING         |    UK    | The family's current parent sign-up activation code                 |
| document_name           | STRING         |    UK    | The database document path                                          |
| is_demo_data            | BOOLEAN        |          | Indicates whether this family is a demo school                      |
| is_test_data            | BOOLEAN        |          | Indicates whether this family is a test school                      |
| last_updated            | TIMESTAMP      |          | The date and time this family was last updated in ROAR              |
| name                    | STRING         |          | The family name                                                     |
| subgroups               | ARRAY\<STRING> |    FK    | An array of IDs for all groups associated with this family          |
| tags                    | ARRAY\<STRING> |          | An array of metadata tags for this family                           |
| timestamp               | TIMESTAMP      |          | A timestamp indicating when the database document was last modified |
| valid_activation_codes  | ARRAY\<STRING> |    UK    | An array of valid activation codes for this family                  |
