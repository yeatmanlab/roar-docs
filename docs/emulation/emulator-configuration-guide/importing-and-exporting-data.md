# Importing and Exporting Data
We can use Firebase CLI tools to import data from the `gse-roar-assessment-dev` Firestore database to the local Firestore emulator.

## Exporting Data from Firestore
To export data from the Firestore database, use the following command:

```bash
gcloud config set project gse-roar-assessment-dev
gsutil -m rm -r gs://roar-assessment-dev-export/variants
gcloud firestore export gs://roar-assessment-dev-export/variants --collection-ids="tasks, variants"
```
These commands set the project to `gse-roar-assessment-dev`,
remove the existing export of the `task` and `variants` collection, export `task` and `variants` collections  to a Cloud Storage bucket named `roar-assessment-dev-export`.<br>
The export metadata will be stored in the folder `variants`, which will be created in the bucket.<br>
We can export other collections by changing the `--collection-ids` parameter, but for now, we are only exporting the `tasks` and `variants` collection.
<br><br>
**Note**: You may need to install the `gcloud` CLI and authenticate with your Google Cloud account to run these commands.<br><br>
**Note**: Instead of overwriting the existing export, you can instead set the export path to a new folder in the bucket if you wish.<br><br>
**Note**: You may need specific IAM permissions in order to read and write to the Cloud Storage bucket in the `gse-roar-assessment-dev` project.**<br><br>

## Importing Data into the Firestore Emulator
We need to import the exported data into the local Firestore emulator. To do this, we need to download the exported data from the Cloud Storage bucket and then import it into the emulator.

### Downloading the Exported Data
To download the exported data from the Cloud Storage bucket, use the following command:

```bash
gsutil -m cp -r gs://roar-assessment-dev-export/variants . 
```

This command downloads the exported data from the `roar-assessment-dev-export` bucket to the current directory.
The metadata will be stored in the `variants` folder.
Firebase uses this metadata to import the data into the Firestore emulator.

**Note**: If you wrote the export to a different folder in the bucket, you will need to change the path in the `gsutil cp` command accordingly.

### Importing the Data into the Firestore Emulator
To import the downloaded data into the Firestore emulator, use the following command:

```bash
npx firebase emulators:start --project=gse-roar-assessment-dev --import=./variants --export-on-exit=./variants
```

**Note**: If you wrote the export to a different folder in the bucket, you will need to change the path in the `--import` and `--export-on-exit` parameters accordingly.<br><br>
**Note**: You may need to install the `firebase-tools` package globally to use the `firebase` command.

This command starts the Firestore emulator for the `gse-roar-assessment-dev` project, imports the data from the `variants` folder, and exports any changes back to the `variants` folder when the emulator is stopped.
This allows us to persist any changes made during testing.