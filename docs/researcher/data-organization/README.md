# Data Organization

## BigQuery - a tool to help researchers pull ROAR data in an efficient way  
- Please read Adam’s documentation and introduction to BigQuery. 
    1. Installing BigQuery
    2. Learning SQL to query data
    3. Exporting data to a google cloud bucket 
    4. Learn more about ROAR data through the BigQuery Schemas 

## Guidelines to organizing pulled data
1. Store outputted csv’s on your own system (you can delete after you have compiled if they take up too much storage) 
2. Do not store individual outputted csv’s from BigQuery on Lab Google Drives (it will become too messy) 
3. If you are working on an existing project, store the data in the corresponding folder in the ROAR Research Data Drive 
4. If you are starting a new project, create a new folder in the ROAR Research Data Drive 
5. **DO NOT make any new folders on the ROAR Primary Research Data Drive!**

## Pulling All Runs of a Single Assessment using BigQuery
1. Make a copy of this page into your own drive or folder. 
2. Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation) 
3. Copy and paste the edited code into your terminal to pull all runs of a single assessment. 
4. Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data. 
5. In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_all_runs_###############.csv. 
6. Select all of the ones you would like to download. Google bucket will create code for you to download to your system. 
7. Create a singular folder with all downloaded csv’s.
8. Direct yourself to the GitHub Repository “Clean-ROAR-Data”. 
9. Clone the repository by clicking the “<> Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”. 
10. Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology runs, direct yourself to Clean_ROARComp_Runs.Rmd). 
11. Find the code chunks that match the assessment of the data you have pulled. 
12. Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull. 

**Note**: The extra code dealing with “assigning_” unpacks the JSON strings associated with those variables. Other variables such as “scores” are handled post pull.

```r
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
  uri="gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_allruns_*.csv",
  format="CSV",
  overwrite=true
) AS
SELECT 
  u.assessment_pid, 
  ur.* EXCEPT(
      assigning_districts,
      assigning_schools,
      assigning_classes,
      assigning_groups,
      assigning_families
  ),
  TO_JSON_STRING(ur.assigning_districts) AS assigning_districts,
  TO_JSON_STRING(ur.assigning_schools) AS assigning_schools,
  TO_JSON_STRING(ur.assigning_classes) AS assigning_classes,
  TO_JSON_STRING(ur.assigning_groups) AS assigning_groups,
  TO_JSON_STRING(ur.assigning_families) AS assigning_families
FROM 
  `gse-roar-assessment.assessment.users` AS u
JOIN 
  `gse-roar-assessment.assessment.user_runs` AS ur
ON 
  u.roar_uid = ur.roar_uid
WHERE 
  ur.task_id ="assessment_abbreviation"
'
```

## Pulling All Trials of a Single Assessment using BigQuery
1. Make a copy of this page into your own drive or folder. 
2. Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation) 
3. Copy and paste the edited code into your terminal to pull all trials of a single assessment. 
4. Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data. 
5. In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_alltrials_###############.csv. 
6. Select all of the ones you would like to download. Google bucket will create code for you to download to your system. 
7. Create a singular folder with all downloaded csv’s.
8. Direct yourself to the GitHub Repository “Clean-ROAR-Data”. 
9. Clone the repository by clicking the “<> Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”. 
10. Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology trials, direct yourself to Clean_ROARComp_Trials.Rmd). 
11. Find the code chunks that match the assessment of the data you have pulled. 
12. Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull. 

```r
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_alltrials_*.csv",
 format="csv",
 overwrite=true
) AS
SELECT u.assessment_pid, ut.* 
FROM 
  `gse-roar-assessment.assessment.users` AS u
JOIN
 `gse-roar-assessment.assessment.user_trials` AS ut
ON 
  u.roar_uid = ut.roar_uid
WHERE
 ut.task_id = "assessment_abbreviation"
'
```



