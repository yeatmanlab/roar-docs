# ROAR Data Validator

The ROAR Data Validator is a Python function which takes raw data from Firestore, cleans and validates it, and then writes the data to a Google Cloud Bucket as a json file.
From this bucket the function uploads the raw json data to Redivis where it is sorted by district.

https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator

## Usage

### Local Mode
The Data Validator can be run locally for testing purposes. This allows you to leverage `functions-framework` to run the function on a localhost port and pass in a small list of district ids to validate and upload to Redivis.

```bash
functions-framework --target=data_validator --port=8080
```

### Remote Mode
The Data Validator can be run remotely by sending a POST request to the cloud function. This allows you to pass in a list of district ids to validate and upload to Redivis with the computations running on the cloud.

### Guest Mode
Guest mode can be run locally or in remote mode. By passing in a json key `is_from_guest` with a value of `True`, 
the function will clean and validate all data from the Firestore `guests` collection and upload it to Redivis.

### All Data Mode
All data mode can be run locally or in remote mode. By passing in a json key `is_all_data` with a value of `True`,
the function will clean and validate all data from the Firestore `districts` collection and upload it to Redivis in a single dataset. This mode is still under development.

## Parameters

## Sample POST Requests

### Testing Locally
POST https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator \
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
"is_all_data": false
}
```
}

### Testing Remotely with all Firestore District Ids
POST https://us-central1-gse-roar-admin.cloudfunctions.net/data-validator \
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
"is_all_data": false
}
```