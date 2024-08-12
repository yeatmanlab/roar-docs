# ROAR Logging

Much of the infrastructure that supports ROAR operates on the Google Cloud Platform (GCP), including Firestore, Cloud Functions, and Cloud Scheduler. To monitor and debug these services, we leverage Google Cloud Console, which offers a comprehensive suite of tools for logging and observability.

Google Cloud Logging is a fully managed service that collects and stores logs from various Google Cloud services. It allows you to search, analyze, monitor, and set up alerts based on log data from both Google Cloud Platform (GCP) and Amazon Web Services (AWS). Logs are centralized, making it easy to search and filter entries from different services.

You can access the Google Cloud Platform web console [here](https://console.cloud.google.com/logs).

The console supports structured querying of logs, which is useful for debugging and monitoring services. Logs can be filtered by severity level, resource type, and time range, and they can be exported to Google Cloud Storage, BigQuery, or Pub/Sub for further analysis. Logs can also be saved as local `.csv` and `.json` files.

For more information on Google Cloud Logging query language, refer to the [documentation](https://cloud.google.com/logging/docs/view/logging-query-language).

## Cloud Audit Logging
ROAR has enabled Cloud Audit Logs, which provide a record of actions taken by users, service accounts, or APIs that modify resources. These logs are crucial for monitoring and troubleshooting activities within the Google Cloud Platform.

ROAR currently monitors admin activity, data access, policy denials, and system events for Firebase. These logs are stored in the Cloud Logging service and can be accessed through the Google Cloud Console.

For more information on Cloud Audit Logging, refer to the [documentation](https://cloud.google.com/logging/docs/audit).

## Logging Query Language
The Google Cloud Logging Query Language allows for structured queries on logs. Similar to SQL, it enables filtering and aggregation of logs based on various criteria such as severity level, resource type, and time range. The query language can also be used to create metrics based on log data.

You can construct queries using either the Google Cloud Console or the Google Cloud CLI.

Firebase Cloud Audit Logs provide a list of method events logged by Firebase during the execution of a transaction. The complete list of methods logged by Firebase is available [here](https://cloud.google.com/firestore/docs/audit-logging).

For a deeper understanding of audit logs, including their structure, refer to this [guide](https://cloud.google.com/logging/docs/audit/understanding-audit-logs).

### Sample Queries Using gcloud CLI

Here’s the general structure of the `gcloud logging read` command for querying Firestore methods in your project (replace `METHOD_NAME` and `LIMIT` with the appropriate values):

```bash
gcloud logging read 'resource.type="audited_resource" AND logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access" AND protoPayload.methodName="METHOD_NAME"' --project=gse-roar-admin --limit=LIMIT
```

- **`resource.type="audited_resource"`**: Specifies that the resource type being audited is `audited_resource`.
- **`logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access"`**: Filters the log entries to include only Data Access logs for the specified project.
- **`protoPayload.methodName="METHOD_NAME"`**: Filters the logs to include only the specified Firestore method.
- **`--limit=LIMIT`**: Limits the number of log entries returned. Replace `LIMIT` with the desired number.

#### Query for `google.firestore.v1.Firestore.GetDocument`

```bash
gcloud logging read 'resource.type="audited_resource" AND logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access" AND protoPayload.methodName="google.firestore.v1.Firestore.GetDocument"' --project=gse-roar-admin --limit=50
```

#### Query for `google.firestore.v1.Firestore.CreateDocument`

```bash
gcloud logging read 'resource.type="audited_resource" AND logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access" AND protoPayload.methodName="google.firestore.v1.Firestore.CreateDocument"' --project=gse-roar-admin --limit=50
```

#### Query for `google.firestore.v1.Firestore.DeleteDocument`

```bash
gcloud logging read 'resource.type="audited_resource" AND logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access" AND protoPayload.methodName="google.firestore.v1.Firestore.DeleteDocument"' --project=gse-roar-admin --limit=50
```

#### Adjusting Time Range (Optional)

To filter logs within a specific time range, add a `timestamp` filter to the query, as shown in previous examples.

### protoPayload Object

In Google Cloud Logging, the `protoPayload` field contains structured data about the log entry, including details about the request, the response, and the authentication context. Understanding `protoPayload` is essential for effectively querying and analyzing logs. Below are descriptions and examples of commonly used `protoPayload` fields:

#### `protoPayload.request`

The `protoPayload.request` field contains the request parameters sent by the client, which is useful for understanding the specific details of the operation performed.

- **`protoPayload.request.name`**: The name of the resource being accessed.

  ```bash
  gcloud logging read 'resource.type="audited_resource" AND logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access" AND protoPayload.request.name="projects/gse-roar-admin/databases/(default)/documents/users/VqjBqFBh4XOt9E0HdKVbTqfV1aq2"' --limit=50
  ```

- **`protoPayload.request.writes.delete`**: The delete field in the writes object indicates that a document was deleted.

  ```bash
  gcloud logging read 'resource.type="audited_resource" AND logName="projects/gse-roar-admin/logs/cloudaudit.googleapis.com%2Fdata_access" AND protoPayload.request.writes.delete:*' --project=gse-roar-admin
  ```

#### `protoPayload.response`

The `protoPayload.response` field contains the response returned by the server, including the result of the operation. This field is useful for debugging or verifying the outcomes of specific requests.

```bash
gcloud logging read 'resource.type="audited_resource" AND protoPayload.response.fields.field_name.stringValue="desired_value"' --limit=50
```

#### `protoPayload.methodName`

The `protoPayload.methodName` field specifies the method that was invoked. This field identifies the type of operation, such as `google.firestore.v1.Firestore.GetDocument`.

- **`google.firestore.v1.Firestore.GetDocument`**: Retrieves calls to fetch a document from Firestore.

  ```bash
  gcloud logging read 'resource.type="audited_resource" AND protoPayload.methodName="google.firestore.v1.Firestore.GetDocument"' --limit=50
  ```