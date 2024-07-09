# ROAR Redivis Instance

The ROAR Redivis instance is a convenient want for researchers and partners to share and access their data. It is a fully functional SQL web console with user-friendly features which
makes querying, sorting, filtering, and merging data easy for the non-programmer. \

The ROAR Redivis instance can be found [here](https://redivis.com/roar).

General documentation about Redivis can be found on [their official website.](https://docs.redivis.com/) \
The general Redivis documentation is useful for specific information about Redivis data structures like Datasets, Tables, Projects, Studies, etc.

A useful reference for working within Redivis Projects is their official [client library documentation](https://apidocs.redivis.com/), which has robust support for R and Pythin with limited support for JavaScript. This documentation is useful when working with the Redivis API in your IDE or within a Project Notebook. \

Read on for documentation specific to how ROAR utilizes Redivis.

The ROAR Redivis Pipeline is composed of two Google Cloud Functions: \ 
<br><br>
`data_validator` \
`data_validator_trigger`

These functions work together to create a CI/CD pipeline for uploading Firestore data into Redivis datasets.