# BigQuery schema: user_trials

The BigQuery table `gse-roar-assessment.assessment.user_trials` conforms to the following schema.

| Field name        | Data type | Key type | Description                                                                                           |
| :---------------- | :-------- | :------: | :---------------------------------------------------------------------------------------------------- |
| trial_id          | STRING    |    PK    | The unique trial ID                                                                                   |
| assessment_stage  | STRING    |          | Indicates the type of trial, either "practice_response" or "test_response"                            |
| audio_feedback    | STRING    |          |                                                                                                       |
| block             | STRING    |          |                                                                                                       |
| block_id          | STRING    |          |                                                                                                       |
| button_response   | INTEGER   |          | Indicates the button that the participant clicked on                                                  |
| corpus_id         | STRING    |          |                                                                                                       |
| correct           | INTEGER   |          | Indicates whether the response was correct                                                            |
| correct_response  | STRING    |          | Indicates the expected correct response                                                               |
| difficulty        | STRING    |          | Item difficulty parameter                                                                             |
| document_name     | STRING    |    UK    | The database document path                                                                            |
| goal              | STRING    |          |                                                                                                       |
| internal_node_id  | STRING    |          | The internal node ID of this trial in the jsPsych timeline                                            |
| is_demo_data      | BOOLEAN   |          | Whether this trial is demo data or not                                                                |
| is_test_data      | BOOLEAN   |          | Whether this trial is test data or not                                                                |
| item              | STRING    |          |                                                                                                       |
| item_id           | STRING    |          |                                                                                                       |
| keyboard_response | STRING    |          | Indicates the keyboard button that the participant pressed                                            |
| meta_data         | STRING    |          | A serialized (a.k.a. stringified) JSON object containing all other trial data                         |
| realpseudo        | STRING    |          |                                                                                                       |
| response          | STRING    |          |                                                                                                       |
| response_input    | STRING    |          |                                                                                                       |
| response_source   | STRING    |          |                                                                                                       |
| roar_uid          | STRING    |    FK    | The user's unique ID in the ROAR system                                                               |
| rt                | INTEGER   |          | Reaction time in milliseconds                                                                         |
| run_id            | STRING    |    FK    | The ID of the run that this trial belongs to                                                          |
| save_trial        | BOOLEAN   |          | Always true                                                                                           |
| server_timestamp  | TIMESTAMP |          | A timestamp indicating when this trials was saved to Firestore                                        |
| start_time        | STRING    |          | Indicates the start time of the run                                                                   |
| start_time_unix   | INTEGER   |          | Indicates the start time of the run as measured by the number of non-leap second since the Unix epoch |
| stim              | STRING    |          |                                                                                                       |
| stimulus          | STRING    |          | The stimulus that was presented to the participant                                                    |
| stimulus_rule     | STRING    |          |                                                                                                       |
| story             | BOOLEAN   |          |                                                                                                       |
| subtask           | STRING    |          |                                                                                                       |
| task_id           | STRING    |          | The ID of the task to which this trial belongs                                                        |
| theta_estimate    | FLOAT     |          | Ability estimate                                                                                      |
| theta_estimate_2  | FLOAT     |          | A second ability estimate                                                                             |
| theta_std_err     | FLOAT     |          | The standard error in the ability estimate                                                            |
| theat_std_err_2   | FLOAT     |          | The standard error in the second ability estimate                                                     |
| time_elapsed      | INTEGER   |          | Time elapsed since the beginning of the run                                                           |
| timestamp         | TIMESTAMP |          | The commit timestamp of this change in Cloud Firestore.                                               |
| timezone          | STRING    |          | The timezone in which this trial was completed                                                        |
| trial_index       | INTEGER   |          |                                                                                                       |
| trial_num_block   | INTEGER   |          |                                                                                                       |
| trial_num_total   | INTEGER   |          |                                                                                                       |
| trial_type        | STRING    |          |                                                                                                       |
| truefalse         | STRING    |          |                                                                                                       |
| word              | STRING    |          |                                                                                                       |
