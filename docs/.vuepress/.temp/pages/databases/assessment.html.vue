<template><div><h1 id="assessment-database" tabindex="-1"><a class="header-anchor" href="#assessment-database"><span>Assessment Database</span></a></h1>
<p>The assessment database is a NoSQL database hosted by Google's Cloud Firestore. This database keeps
each user's assignment responses, organized into trial-level data and run-level data. This database also
stores information about each task and its variants. The database is organized into collections of
documents. Each document is able to have a subcollection, which itself is a collection of documents.
Below is a schema for the structure of the database, as well as expected fields in each document.
A '?' appended to the field name denotes an optional field.</p>
</div></template>


