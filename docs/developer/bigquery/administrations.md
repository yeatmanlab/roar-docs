# BigQuery schema: administrations

The BigQuery table `gse-roar-admin.admin.administrations` conforms to the following schema:

| Field name             | Data type      | Key type | Description                                                                            |
| :--------------------- | :------------- | :------: | :------------------------------------------------------------------------------------- |
| administration_id      | STRING         |    PK    | The unique identifier of the administration                                            |
| admin_name             | STRING         |          | The internal name of the administration                                                |
| assessments            | ARRAY\<STRING> |          | The array of assessments associated with the administration                            |
| classes_assigned       | ARRAY\<STRING> |          | The array of classes assigned to the administration                                    |
| created_by             | STRING         |          | The unique ID of the user who created the administration                               |
| date_closed            | TIMESTAMP      |          | The timestamp indicating when the administration was closed                            |
| date_created           | TIMESTAMP      |          | The timestamp indicating when the administration was created                           |
| districts_assigned     | ARRAY\<STRING> |          | The array of districts assigned to the administration                                  |
| document_name          | STRING         |    UK    | The database document path                                                             |
| families_assigned      | ARRAY\<STRING> |          | The array of families assigned to the administration                                   |
| groups_assigned        | ARRAY\<STRING> |          | The array of groups assigned to the administration                                     |
| legal                  | STRING         |          | The assent and/or consent documents associated with the administration                 |
| minimal_orgs_classes   | ARRAY\<STRING> |          | The array of top level classes which assigned the administration to its organization   |
| minimal_orgs_districts | ARRAY\<STRING> |          | The array of top level districts which assigned the administration to its organization |
| minimal_orgs_families  | ARRAY\<STRING> |          | The array of top level families which assigned the administration to its organization  |
| minimal_orgs_groups    | ARRAY\<STRING> |          | The array of top level groups which assigned the administration to its organization    |
| minimal_orgs_schools   | ARRAY\<STRING> |          | The array of top level schools which assigned the administration to its organization   |
| public_name            | STRING         |          | The public name of the administration                                                  |
| read_orgs_classes      | ARRAY\<STRING> |          | The array of classes which can read the administration                                 |
| read_orgs_districts    | ARRAY\<STRING> |          | The array of districts which can read the administration                               |
| read_orgs_families     | ARRAY\<STRING> |          | The array of families which can read the administration                                |
| read_orgs_groups       | ARRAY\<STRING> |          | The array of groups which can read the administration                                  |
| read_orgs_schools      | ARRAY\<STRING> |          | The array of schools which can read the administration                                 |
| schools_assigned       | ARRAY\<STRING> |          | The array of schools assigned to the administration                                    |
| sequential             | BOOLEAN        |          | Whether the administration is sequential or not                                        |
| tags                   | ARRAY\<STRING> |          | The array of tags assigned to the administration                                       |
| test_data              | BOOLEAN        |          | Whether the administration is a test data or not                                       |
| timestamp              | TIMESTAMP      |          | The timestamp indicating when the database document was last modifed                   |
