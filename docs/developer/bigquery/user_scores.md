# BigQuery schema: user_scores

The BigQuery view `gse-roar-assessment.assessment.user_scores` conforms to the following schema.

| Field name       | Data type | Key type | Description                                                                         |
| :--------------- | :-------- | :------: | :---------------------------------------------------------------------------------- |
| assignment_id    | STRING    |    FK    | The ID for the assignment (administration) that this run belongs to                 |
| roar_uid         | STRING    |    FK    | The user's unique ID in the ROAR system                                             |
| run_id           | STRING    |    FK    | The run's unique ID                                                                 |
| type             | STRING    |          | The type of score (computed or raw)                                                 |
| domain           | STRING    |          | The domain of the score (lab, composite, DEL, FSM, LSM... )                         |
| name             | STRING    |          | The name of the score metric (e.g., sreScore, percentile, numAttempted, numCorrect) |
| value            | STRING    |          | The numeric value of the score                                                      |
| assessment_stage | STRING    |          | The assessment stage (e.g., practice, test) - only applicable for raw scores        |
| category_score   | BOOLEAN   |          | Indicates whether this score is a category score                                    |
| task_id          | STRING    |    FK    | The ID for this run's task (assessment)                                             |
| variant_id       | STRING    |    FK    | The ID for this run's task variant                                                  |
