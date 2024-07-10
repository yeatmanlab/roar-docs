# ROAR Data Validator Trigger

The ROAR Data Validator Trigger is a cloud function which instantiates the ROAR Data Validator function. The trigger uses the Python `concurrent.futures` module to run the validator function in parallel on multiple cloud function instances. \
The Data Validator Trigger is used to primarily as a PUB/SUB trigger to validate and upload data to Redivis on a Cloud Scheduler, though it can also be triggered by a POST request to its http endpoint.

The GitHub repository for the Data Validator Trigger can be found [here.](https://github.com/yeatmanlab/roar-data-validator)

The Data Validator Trigger function is deployed on Google Cloud and can be accessed at the following endpoint: \
`https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator-trigger`

## Parameters
The Data Validator Trigger function is triggered by a POST request to its http endpoint. The POST request may include the following parameters:

- `lab_ids`: A list of lab ids to validate and upload to Redivis.
- `is_from_firestore`: A boolean indicating whether the data is coming from Firestore.
- `is_save_to_storage`: A boolean indicating whether the data should be saved to a Google Cloud Bucket.
- `is_upload_to_redivis`: A boolean indicating whether the data should be uploaded to Redivis.
- `is_release_to_redivis`: A boolean indicating whether the data should be released to Redivis.
- `is_from_guest`: A boolean indicating whether the data is coming from the Firestore `guests` collection.
- `is_test`: A boolean indicating whether the function is being run in test mode.
- `is_local`: A boolean indicating whether the Data Validator function should be run locally or in the cloud.
- `is_all_data`: A boolean indicating whether the function is being run in all data mode.

## Usage

### Local Mode
The Data Validator Trigger can be run locally for testing purposes. This allows you to leverage `functions-framework` to run the function on a localhost port and pass in a small list of district ids to validate and upload to Redivis.

```bash
functions-framework --target=data_validator_trigger --port=9090
```
We set the port to 9090 to avoid conflicts with the Data Validator function which runs on port 8080. \
If you want to run the Data Validator Trigger locally and trigger the Data Validator function in the cloud, you must run the Data Validator Trigger locally only. \
If you want a local instance of the Data Validator Trigger to trigger a local instance of the Data Validator function, you must run both functions locally.

The presence and value of the `is_local` key in the JSON payload will determine whether the Data Validator Trigger function will trigger the Data Validator function locally or in the cloud. \
The POST request will fail if the `is_local` key is `true` and the Data Validator function is not running locally.

### Remote Mode
Once uploaded to Google Cloud, the Data Validator Trigger can be run remotely by sending a POST request to the Data Validator cloud function. \
When running remotely, the trigger will invoke a function to grab all district ids and group ids from Firestore and pass them to the Data Validator function. \
The Data Validator Trigger can be set up in a Cloud Scheduler to run at a specified time in order to validate and upload all Firestore data to Redivis continuously.


## Sample POST Requests

### Testing Locally with Fixed Lab Ids
Make sure that you are running the function locally with `functions-framework`

```bash
functions-framework --target=data_validator_trigger --port=9090

```

`POST` `http://localhost:9090` \
`Content-Type: application/json` \
`API-Key: [REDIVIS API KEY]`
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

Make sure that you are running the function locally with `functions-framework`

```bash
functions-framework --target=data_validator_trigger --port=9090

```

`POST` `http://localhost:9090` \
`Content-Type: application/json` \
`API-Key: [REDIVIS API KEY]`
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
`POST` `https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator-trigger` \
`Content-Type: application/json` \
`API-Key: [REDIVIS API KEY]`
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