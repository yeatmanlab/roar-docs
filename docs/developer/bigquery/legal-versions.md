# BigQuery schema: legal_versions

The BigQuery table `gse-roar-admin.admin.legal_versions` conforms to the following schema:

| Field name       | Data type | Key type | Description                                                           |
| :--------------- | :-------- | :------: | :-------------------------------------------------------------------- |
| document_name    | STRING    |    UK    | The database document path                                            |
| timestamp        | TIMESTAMP |          | The timestamp indicating when the database document was last modified |
| valid_from       | DATE      |          | The date from which the document is valid                             |
| legal_version_id | STRING    |          | The unique identifier for the legal version                           |
