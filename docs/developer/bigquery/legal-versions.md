# BigQuery schema: legal_versions

The BigQuery table `gse-roar-admin.admin.legal_versions` conforms to the following schema:

| Field name       | Data type | Key type | Description                                             |
| :--------------- | :-------- | :------: | :------------------------------------------------------ |
| legal_version_id | STRING    |    PK    | The unique identifier for the legal version             |
| document_name    | STRING    |    UK    | The database document path                              |
| timestamp        | TIMESTAMP |          | The commit timestamp of this change in Cloud Firestore. |
| valid_from       | DATE      |          | The date from which the document is valid               |
