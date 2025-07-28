# BigQuery schema: legal

The BigQuery table `gse-roar-admin.admin.legal` conforms to the following schema:

| Field name        | Data type | Key type | Description                                                |
| :---------------- | :-------- | :------: | :--------------------------------------------------------- |
| legal_id          | STRING    |    PK    | The unique identifier for the legal document               |
| current_commit    | STRING    |          | The current commit hash of the database document           |
| document_name     | STRING    |    UK    | The database document path                                 |
| file_name         | STRING    |          | The name of the file associated with the legal document    |
| github_org        | STRING    |          | The GitHub organization associated with the legal document |
| github_repository | STRING    |          | The GitHub repository associated with the legal document   |
| params            | STRING    |          | The parameters associated with the legal document          |
| timestamp         | TIMESTAMP |          | The commit timestamp of this change in Cloud Firestore.    |
