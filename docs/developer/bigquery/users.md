# BigQuery schema: users

## Assessment Users

The BigQuery table `gse-roar-assessment.assessment.users` conforms to the following schema.

| Field name        | Data type      | Key type | Description                                                                                  |
| :---------------- | :------------- | :------: | :------------------------------------------------------------------------------------------- |
| roar_uid          | STRING         |    PK    | The user's unique ID in the ROAR system                                                      |
| document_name     | STRING         |    UK    | The database document path                                                                   |
| timestamp         | TIMESTAMP      |          | A timestamp indicating when the database document was last modified                          |
| archived          | BOOLEAN        |          | Whether this user has been archived or unenrolled                                            |
| assessment_pid    | STRING         |    UK    | A human readable and unique "participant ID"                                                 |
| assessment_uid    | STRING         |    UK    | The UID associated with this user's Firebase auth account in the gse-roar-assessment project |
| birth_month       | INTEGER        |          | Birth month                                                                                  |
| birth_year        | INTEGER        |          | Birth year                                                                                   |
| classes_all       | ARRAY\<STRING> |    FK    | An array of all class IDs associated with this user                                          |
| classes_current   | ARRAY\<STRING> |    FK    | An array of currently enrolled class IDs associated with this user                           |
| districts_all     | ARRAY\<STRING> |    FK    | An array of all district IDs associated with this user                                       |
| districts_current | ARRAY\<STRING> |    FK    | An array of currently enrolled district IDs associated with this user                        |
| families_all      | ARRAY\<STRING> |    FK    | An array of all family IDs associated with this user                                         |
| families_current  | ARRAY\<STRING> |    FK    | An array of currently enrolled family IDs associated with this user                          |
| grade             | STRING         |          | The current grade of the user                                                                |
| groups_all        | ARRAY\<STRING> |    FK    | An array of all group IDs associated with this user                                          |
| groups_current    | ARRAY\<STRING> |    FK    | An array of currently enrolled group IDs associated with this user                           |
| last_roar_sync    | TIMESTAMP      |          | The date and time when this user's data was last synced between Clever and ROAR              |
| last_updated      | TIMESTAMP      |          | The date and time this user was last updated in ROAR                                         |
| school_level      | STRING         |          | The user's school level (e.g., elementary, middle, etc)                                      |
| schools_all       | ARRAY\<STRING> |    FK    | An array of all school IDs associated with this user                                         |
| schools_current   | ARRAY\<STRING> |    FK    | An array of currently enrolled school IDs associated with this user                          |
| sso_type          | STRING         |          | The user's single sign-on (SSO) provider                                                     |
| user_type         | STRING         |          | The user type (e.g., student, admin, educator)                                               |
| username          | STRING UK      |          | The user's username                                                                          |
| email             | STRING UK      |          | The user's email                                                                             |
| tasks             | ARRAY\<STRING> |    FK    | An array of task IDs that this user has attempted                                            |
| variants          | ARRAY\<STRING> |    FK    | An array of variant IDs that this user has attempted                                         |

## Admin Users

The BigQuery table `gse-roar-admin.admin.users` conforms to the following schema.

| Field name         | Data type      | Key type | Description                                                                                  |
| :----------------- | :------------- | :------: | :------------------------------------------------------------------------------------------- |
| roar_uid           | STRING         |    PK    | The user's unique ID in the ROAR system                                                      |
| document_name      | STRING         |    UK    | The database document path                                                                   |
| timestamp          | TIMESTAMP      |          | A timestamp indicating when the database document was last modified                          |
| archived           | BOOLEAN        |          | Whether this user has been archived or unenrolled                                            |
| assessment_pid     | STRING         |    UK    | A human readable and unique "participant ID"                                                 |
| assessment_uid     | STRING         |    UK    | The UID associated with this user's Firebase auth account in the gse-roar-assessment project |
| classes_all        | ARRAY\<STRING> |    FK    | An array of all class IDs associated with this user                                          |
| classes_current    | ARRAY\<STRING> |    FK    | An array of currently enrolled class IDs associated with this user                           |
| districts_all      | ARRAY\<STRING> |    FK    | An array of all district IDs associated with this user                                       |
| districts_current  | ARRAY\<STRING> |    FK    | An array of currently enrolled district IDs associated with this user                        |
| dob                | DATE           |          | The date of birth of the user                                                                |
| families_all       | ARRAY\<STRING> |    FK    | An array of all family IDs associated with this user                                         |
| families_current   | ARRAY\<STRING> |    FK    | An array of currently enrolled family IDs associated with this user                          |
| gender             | STRING         |          | The gender of the user                                                                       |
| grade              | STRING         |          | The current grade of the user                                                                |
| groups_all         | ARRAY\<STRING> |    FK    | An array of all group IDs associated with this user                                          |
| groups_current     | ARRAY\<STRING> |    FK    | An array of currently enrolled group IDs associated with this user                           |
| hispanic_ethnicity | STRING         |          | Whether the user is Hispanic or Latino                                                       |
| last_roar_sync     | TIMESTAMP      |          | The date and time when this user's data was last synced between Clever and ROAR              |
| last_updated       | TIMESTAMP      |          | The date and time this user was last updated in ROAR                                         |
| race               | STRING         |          | The user's race or ethnicity (e.g., Asian, Black, Hispanic, White, etc)                      |
| school_level       | STRING         |          | The user's school level (e.g., elementary, middle, etc)                                      |
| schools_all        | ARRAY\<STRING> |    FK    | An array of all school IDs associated with this user                                         |
| schools_current    | ARRAY\<STRING> |    FK    | An array of currently enrolled school IDs associated with this user                          |
| sis_id             | STRING         |          | The user's school information system (SIS) ID                                                |
| sso_type           | STRING         |          | The user's single sign-on (SSO) provider                                                     |
| state_id           | STRING         |          | The user's state ID                                                                          |
| student_number     | STRING         |          | The user's student number                                                                    |
| user_type          | STRING         |          | The user type (e.g., student, admin, educator)                                               |
| username           | STRING UK      |          | The user's username                                                                          |
| email              | STRING UK      |          | The user's email                                                                             |
| tasks              | ARRAY\<STRING> |    FK    | An array of task IDs that this user has attempted                                            |
| variants           | ARRAY\<STRING> |    FK    | An array of variant IDs that this user has attempted                                         |
