# ROAR Data Validator Trigger

The ROAR Data Validator Trigger is a cloud function which instantiates the ROAR Data Validator function. The trigger uses the Python `concurrent.futures` module to run the validator function in parallel on multiple cloud function instances.

https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator-trigger

## Usage

### Local Mode
The Data Validator Trigger can be run locally for testing purposes. This allows you to leverage `functions-framework` to run the function on a localhost port and pass in a small list of district ids to validate and upload to Redivis.

```bash
functions-framework --target=data_validator_trigger --port=9090
```
We set the port to 9090 to avoid conflicts with the Data Validator function which runs on port 8080. \
If you want to run the Data Validator Trigger locally and trigger the Data Validator function in the cloud, you must run the Data Validator Trigger locally only. \
If you want a local instance of the Data Validator Trigger to trigger a local instance of the Data Validator function, you must run both functions locally and pass the Data Validator function URL to the Data Validator Trigger function.

The presence of the `is_local` key in the JSON payload will determine whether the Data Validator Trigger function will trigger the Data Validator function locally or in the cloud. \
The POST request will fail if the `is_local` key is present and the Data Validator function is not running locally.

### Remote Mode
The data validator trigger can be run remotely by sending a POST request to the Data Validator cloud function. \
When running remotely, the trigger will invoke a function to grab all district ids from Firestore and pass them to the Data Validator function. \
The Data Validator Trigger can be set up in a Cloud Scheduler to run at a specified time in order to validate and upload all data to Redivis continuously.

## Parameters

## Sample POST Requests

### Testing Locally with Fixed Lab Ids
POST https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator-trigger
Content-Type: application/json \
API-Key: [REDIVIS API KEY]
```json
{ "lab_ids": ["HQFjwzLOBIgZmNlK4f0q", "5ee2ff39f1eae600014d2a20", "bm6N82WFObiurGAKeJUv"],
"is_from_firestore": true, 
"is_save_to_storage": true, 
"is_upload_to_redivis": true, 
"is_release_to_redivis": true,
"is_from_guest": false,
"is_test": true,
"is_local": true
}
```

### Testing Locally with all Firestore District Ids
POST https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator-trigger
Content-Type: application/json \
API-Key: [REDIVIS API KEY]
```json
{ "lab_ids": [""],
"is_from_firestore": true, 
"is_save_to_storage": true, 
"is_upload_to_redivis": true, 
"is_release_to_redivis": true,
"is_from_guest": false,
"is_test": false,
"is_local": true
}
```

### Testing Remotely with all Firestore District Ids
POST https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator-trigger
Content-Type: application/json \
API-Key: [REDIVIS API KEY]
```json
{ "lab_ids": [""],
"is_from_firestore": true, 
"is_save_to_storage": true, 
"is_upload_to_redivis": true, 
"is_release_to_redivis": true,
"is_from_guest": false,
"is_test": false,
"is_local": false
}
``` 