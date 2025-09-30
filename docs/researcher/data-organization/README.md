# Data Organization

The purpose of this page is to get researchers familiar with BigQuery, SQL, and using the terminal to query ROAR data and Google Buckets to store the ROAR data. 

## BigQuery - a tool to help researchers pull ROAR data in an efficient way  
- Please read Adam’s documentation and introduction to [BigQuery](https://yeatmanlab.github.io/roar-docs/developer/bigquery/). 
    1. [Installing BigQuery](https://yeatmanlab.github.io/roar-docs/developer/bigquery/#installation-and-initialization)
    2. [Learning SQL to query data](https://yeatmanlab.github.io/roar-docs/developer/bigquery/#querying-data)
    3. [Exporting data to a google cloud bucket](https://yeatmanlab.github.io/roar-docs/developer/bigquery/#exporting-large-queries-to-a-google-cloud-bucket) 
    4. Learn more about ROAR data through the BigQuery Schemas 

## Guidelines to organizing pulled ROAR assessment data
1. Store outputted csv’s on your own system (you can delete after you have compiled if they take up too much storage) 
2. Do not store individual outputted csv’s from BigQuery on Lab Google Drives (it will become too messy) 
3. If you are working on an existing project, store the data in the corresponding folder in the ROAR Research Data Drive 
4. If you are starting a new project, create a new folder in the ROAR Research Data Drive 
5. **DO NOT make any new folders on the ROAR Primary Research Data Drive!**

### Pulling All Runs of a Single Assessment using BigQuery
1. Make a copy of this page into your own drive or folder. 
2. Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation) 
3. Copy and paste the edited code into your terminal to pull all runs of a single assessment. 
4. Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data. 
5. In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_all_runs_###############.csv. 
6. Select all of the ones you would like to download. Google bucket will create code for you to download to your system. 
7. Create a singular folder with all downloaded csv’s.
8. Direct yourself to the GitHub Repository “[Clean-ROAR-Data](https://github.com/yeatmanlab/Clean-ROAR-Data)”. 
9. Clone the repository by clicking the “<> Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”. 
10. Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology runs, direct yourself to Clean_ROARComp_Runs.Rmd). 
11. Find the code chunks that match the assessment of the data you have pulled. 
12. Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull. 

**Note**: The extra code dealing with “assigning_” unpacks the JSON strings associated with those variables. Other variables such as “scores” are handled post pull.

**Note**: Remove --comments before running query. 

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
  uri="gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_allruns_*.csv", --sets the Google Bucket and the csv names 
  format="CSV", --sets the output format
  overwrite=true
) AS
SELECT --selects the variables the user wants and which dataframe they are coming from
  u.assessment_pid, 
  ur.* EXCEPT( --removes these variables from the selection
      assigning_districts,
      assigning_schools,
      assigning_classes,
      assigning_groups,
      assigning_families
  ),
  TO_JSON_STRING(ur.assigning_districts) AS assigning_districts, --turns the variables from JSONs into strings 
  TO_JSON_STRING(ur.assigning_schools) AS assigning_schools,
  TO_JSON_STRING(ur.assigning_classes) AS assigning_classes,
  TO_JSON_STRING(ur.assigning_groups) AS assigning_groups,
  TO_JSON_STRING(ur.assigning_families) AS assigning_families
FROM 
  `gse-roar-assessment.assessment.users` AS u --assigns the users dataframe to the name "u"
JOIN 
  `gse-roar-assessment.assessment.user_runs` AS ur --assigns the user_runs dataframe to the name "ur"
ON 
  u.roar_uid = ur.roar_uid --merges the dataframes based on the variable roar_uid
WHERE 
  ur.task_id ="assessment_abbreviation"  --filters the dataframe to only the given task_id
'
```

### Pulling All Trials of a Single Assessment using BigQuery
1. Make a copy of this page into your own drive or folder. 
2. Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation) 
3. Copy and paste the edited code into your terminal to pull all trials of a single assessment. 
4. Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data. 
5. In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_alltrials_###############.csv. 
6. Select all of the ones you would like to download. Google bucket will create code for you to download to your system. 
7. Create a singular folder with all downloaded csv’s.
8. Direct yourself to the GitHub Repository “[Clean-ROAR-Data](https://github.com/yeatmanlab/Clean-ROAR-Data)”. 
9. Clone the repository by clicking the “<> Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”. 
10. Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology trials, direct yourself to Clean_ROARComp_Trials.Rmd). 
11. Find the code chunks that match the assessment of the data you have pulled. 
12. Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull. 

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_allruns_*.csv", --sets the Google Bucket and the csv names
 format="csv", --sets the output format
 overwrite=true
) AS
SELECT --selects the variables the user wants and which dataframe they come from 
  u.assessment_pid,
  u.birth_month,
  u.birth_year,
  u.grade,
  ur.time_started,
  ur.time_finished,
  ut.*
FROM
  `gse-roar-assessment.assessment.users` AS u --assigns the users dataframe to the name "u" 
JOIN
 `gse-roar-assessment.assessment.user_trials` AS ut --assigns the user_trials dataframe to the name "ut" 
ON
  u.roar_uid = ut.roar_uid --merges the users and user_trials dataframes based on the variable roar_uid
JOIN
  `gse-roar-assessment.assessment.user_runs` AS ur --assigns the user_runs dataframe to the name "ur" 
ON
  ur.run_id = ut.run_id --merges the user_trials + user merged dataframe to create a large data frame with user_runs
WHERE
 ut.task_id = "assessment_abbreviation" --filters the dataframe to only the given task_id
'
```

### Pulling All Runs of a Single Assessment by Data and Schools using BigQuery
**Note**: The current output will go to your home directory saved as "output.csv". You can change the starting settings to save to a Google Bucket using the same format as above. 

```sql
bq query --nouse_legacy_sql --format=csv \
'SELECT 
  ur.roar_uid, 
  u.roar_uid,
  u.assessment_pid,
  ur.run_id, 
  ur.task_id, 
  ur.time_started,
  ur.time_finished,
  ur.user_grade,
  ur.age_months, 
  ur.reliable,
  ur.best_run, 
  ur.completed, 
  ur.engagement_flags, 
  ur.user_school_level, 
  TO_JSON_STRING(ur.assigning_districts) as assigning_districts,
  TO_JSON_STRING(ur.assigning_schools) as assigning_schools, 
  JSON_VALUE(ur.scores,"$.computed.composite.roarScore") AS swr_roar_score,
  JSON_VALUE(ur.scores,"$.computed.composite.thetaEstimate") AS theta_estimate_run
FROM `gse-roar-assessment.assessment.user_runs` AS ur
JOIN `gse-roar-assessment.assessment.users` AS u
ON u.roar_uid = ur.roar_uid
WHERE 
  task_id = "swr" 
AND 
  time_started > "2025-03-26" 
AND 
  "wsYCwr1E0goNR5yDvLak" IN UNNEST(assigning_schools)
LIMIT 10' > output.csv
```

### Pulling All Runs for the 25-26 School Year to Determine the Student Count for Specific Runs 
The [script](https://github.com/yeatmanlab/Clean-ROAR-Data/blob/main/CheckDataCount.Rmd) below helps pull the data for the 25-26 School Year, combines the BigQuery output and cleans the data so the researcher can calculate the number of students who have run all four foundational assessments and three (swr, pa, letter) of the foundational reading assessments. 

```{sql}
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://roar-bq-export_internal_ctflores/2025-09-30_checkdata_runs_*.csv",
 format="csv",
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
FROM `gse-roar-assessment.assessment.user_runs` AS ur
JOIN `gse-roar-assessment.assessment.users` AS u
ON
  u.roar_uid = ur.roar_uid
WHERE
  time_started > "2025-06-30"
'
```

```{r}
# All run csv's pulled from BigQuery will have the same run column names 
# Set the run column names now
run_colnames <- c("assessment_pid",	"document_name",	"timestamp",	"age_months_at_run",
                  "assignment_id",	"best_run",	"cloud_sync_timestamp",	"completed",
                  "engagement_flags", "is_demo_data", "is_test_data",
                  "reliable",	"run_id",	"scores",	"task_id",
                  "task_version",	"time_finished",	"time_started",	"user_birth_month",
                  "user_birth_year",	"user_grade_at_run",	"user_school_level",
                  "variant_id",	"roar_uid",	"assigning_districts",	
                  "assigning_schools",	"assigning_classes",	"assigning_groups",
                  "assigning_families")
```

```{r}
# Define the base file name and the file path
# You will have to change the date at the beginning of the base file name if you pulled on a different date 
checkdata_run_base <- "2025-09-30_checkdata_runs_"
checkdata_run_file_path <- "~/Documents/ROAR Primary Research Data/Check Data Count"

# For loop creates a list of data file csv's that we will read in all at once 
checkdata_run_data_list <- list()

# Change the number after the colon (:) to be however many csv's downloaded out of the query from BigQuery 
for (i in 0:48) {
  file_name <- sprintf("%s%012d.csv", checkdata_run_base, i) # Create a string of zeros 
  full_path <- file.path(checkdata_run_file_path, file_name) # Connect the file paths (base and file name)
  
  if (file.exists(full_path)) {
    checkdata_run_data_list[[i + 1]] <- read.csv(full_path, header = FALSE, col.names = run_colnames) # Read in each separate csv 
  } else {
    warning(paste("File", full_path, "does not exist.")) # Print a warning if file does not exist 
  }
}

# Combine all the separate data files into one 
checkdata_run_combined_data <- do.call(rbind, checkdata_run_data_list) 
```

```{r}
# Keep only the foundational reading measures 
all_foundation_data <- checkdata_run_combined_data %>% 
  filter(task_id %in% c("swr", "pa", "letter", "sre"))

# Clean the data for complete and best reliable runs 
# Count how many assessments each student has taken in a single administration 
all_foundation_data_2526 <- all_foundation_data %>% 
  group_by(assessment_pid, assignment_id) %>% 
  filter(best_run=="true") %>% 
  filter(reliable=="true") %>% 
  filter(completed=="true") %>% 
  filter(is_demo_data=="false") %>% 
  filter(is_test_data=="false") %>% 
  mutate(total_assessments = n())

# Select important variables 
all_foundation_data_2526 <- all_foundation_data_2526 %>% 
  select(c(assessment_pid, task_id, assignment_id, total_assessments))

# Filter for only students who have completed all 4 foundational assessments and 
# keep only unique pids 
foundational_only <- all_foundation_data_2526 %>% 
  distinct(assessment_pid, .keep_all = TRUE) %>% 
  filter(total_assessments==4)
#925

# Filter for only students who have completed 3 foundational assessments and 
# keep only unique pids 
three_foundation <- all_foundation_data_2526 %>% 
  group_by(assessment_pid, assignment_id) %>% 
  filter(task_id %in% c("swr", "pa", "letter")) %>%
  mutate(total_assessments = n()) %>%
  filter(total_assessments==3)
#3291
```

## ROAR Demographics Data

### Where to find ROAR demographics data 
There are many places where demographics data exists and is safely stored.
1. **ROAR-SchoolDistrict-Data** is a secure Stanford Google Shared Drive. The data that is put in this could include any demographics data provided by a school. Carrie Townley-Flores and Kelly Wentzlof downloaded all student demographics for the 23-24 school year from the CSV schools and the Clever schools and placed the demographcis in this folder. These downloaded csv's where used in the majority of the technical manual. Additionally, this drive contains school assessment data that does not include ROAR data. The assessment data could be state standardized tests or other measures the school took the same year or previous years that they took ROAR including iReady, MCAS, ELPAC, etc. 
2. **ROAR - CSV Upload** is a secure Stanford Google Shared Drive. The data that is put in this includes all CSV Upload schools and their students' accounts. Some schools provide demographics and the number of demographics per school varies. While we ask for race, ethnicity, gender, home language, free/reduced lunch status, english language learner status, special education status--only a few schools give all the demographics of all the students that take ROAR. 
3. **ROAR - Primary Demographics Data** is a secure Stanford Google Shared Drive. The data that is put in this is pulled from BigQuery. The data likely overlaps with the data in the other google drives, but *it does not hold longitudinal data*. 

### How to clean ROAR demographics data 
The demographics data can be difficult to wrangle for many reasons. Like most demographics data, there are opportunities for participants and researchers to enter data through open text boxes or drop downs with infinite options. Particularly, the race and ethnicity variables are often times filled with typing errors, grammatical errors, varying cases, and a variety of outcomes. The researcher will want to clean these variables and all other demographic variables to capture all the information they can while creating a concise and clean dataframe. 

Feel free to build off of this [cleaning script](https://github.com/yeatmanlab/Clean-ROAR-Data/blob/main/Clean_Demographics.Rmd) for cleaning demographics pulled from BigQuery. 

```{r}
# All run csv's pulled from BigQuery will have the same run column names 
# Set the run column names now
demo_colnames <- c("document_name", "timestamp",	"archived",	"assessment_pid",
                   "assessment_uid",	"dob",	"ell_status",	"frl_status",	
                   "gender",	"grade",	"hispanic_ethnicity",	"iep_status",
                   "last_roar_sync",	"last_updated",	"school_level",	"sis_id",
                   "sso_type",	"state_id",	"student_number",	"user_type",
                   "username",	"email",	"roar_uid",	"classes_current",
                   "classes_all",	"districts_current",	"districts_all",
                   "families_current",	"families_all",	"groups_current",
                   "groups_all",	"schools_current",	"schools_all",	"race",
                   "tasks",	"variants",	"home_language")
```

```{r}
# Define the base file name and the file path
# You will have to change the date at the beginning of the base file name if you pulled on a different date 
demo_base <- "2025-07-07_demographics_"
demo_file_path <- "~/Documents/ROAR Primary Demographics Data"

# For loop creates a list of data file csv's that we will read in all at once 
demo_data_list <- list()

# Change the number after the colon (:) to be however many csv's downloaded out of the query from BigQuery 
for (i in 0:20) {
  file_name <- sprintf("%s%012d.csv", demo_base, i) # Create a string of zeros 
  full_path <- file.path(demo_file_path, file_name) # Connect the file paths (base and file name)
  
  if (file.exists(full_path)) {
    demo_data_list[[i + 1]] <- read.csv(full_path, header = FALSE, col.names = demo_colnames) # Read in each separate csv 
  } else {
    warning(paste("File", full_path, "does not exist.")) # Print a warning if file does not exist 
  }
}

# Combine all the separate data files into one 
demo_combined_data <- do.call(rbind, demo_data_list) %>% 
  select(-c(tasks, variants))
```

```{r}
demo_cleaned_data <- demo_combined_data %>%
  mutate(classes_current = str_remove_all(classes_current, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(classes_all = str_remove_all(classes_all, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(districts_current = str_remove_all(districts_current, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(districts_all = str_remove_all(districts_all, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(schools_current = str_remove_all(schools_current, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(schools_all = str_remove_all(schools_all, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(families_current = str_remove_all(families_current, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(families_all = str_remove_all(families_all, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(groups_current = str_remove_all(groups_current, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(groups_all = str_remove_all(groups_all, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(race = str_remove_all(race, "[\\[\\]\\\"\\\\]")) %>% 
  mutate(home_language = str_remove_all(home_language, "[\\[\\]\\\"\\\\]"))

demo_cleaned_data <- demo_cleaned_data %>% 
  mutate_if(is.character, list(~na_if(.,"")))
```

```{r}
write.csv(demo_cleaned_data, "~/Documents/ROAR Primary Demographics Data/demographics_2025-07-07.csv")
```

```{r}
# Only want to keep student demographic data 
demo <- demo_cleaned_data %>% 
  filter(user_type=="student")
# [1] "student" 
```

```{r}
# Create uniform grades 
demo <- demo %>% 
  mutate(grade = ifelse(grade %in% c("K", "Kindergarten", "k"), "Kindergarten", 
                        ifelse(grade %in% c("5", "5th"), "5", 
                               ifelse(grade %in% c("TK", "TransitionalKindergarten"), 
                                      "Transitional Kindergarten", 
                                      ifelse(grade %in% c("PK", "PreKindergarten", "Prek"), 
                                             "Pre-Kindergarten", 
                                             ifelse(grade %in% c("`12", "12"), "12", 
                                                    ifelse(grade %in%
                                                             c("Invalid", 
                                                               "99", "24", "26", 
                                                               "25", "13", "22", 
                                                               "23", "21", 
                                                               "Other", "Ungraded"), 
                                                           "Other", grade)))))))
#  [1] "3"                         "Kindergarten"             
#  [3] "1"                         "6"                        
#  [5] "7"                         "11"                       
#  [7] "4"                         "12"                       
#  [9] "2"                         "10"                       
# [11] "Other"                     "5"                        
# [13] "8"                         "9"                        
# [15] "Transitional Kindergarten" "Pre-Kindergarten"         
# [17] NA     
```

```{r}
# Create uniform gender
demo <- demo %>%
  mutate(gender = ifelse(gender %in% c("M", "Male", "male", "m"), "Male", 
                         ifelse(gender %in% c("F", "female", "f", "Female"), 
                                "Female", 
                                ifelse(gender %in% c("X", "N", "NB", 
                                                     "Non-Binary", 
                                                     "Genderfluid/Gender Non-Conforming", 
                                                     "dns", "Other"), "Other", 
                                       ifelse(gender %in% c(NA, "na"), NA, 
                                              gender)))))
# [1] "Male"   NA       "Female" "Other"
```

```{r ell-status, echo=FALSE}
# Create uniform ell_status 
demo <- demo %>% 
  mutate(ell_status = ifelse(ell_status %in% c("N", "No", "false", "no"), 0, 
                             ifelse(ell_status %in% c("Yes", "yes", "Y"), 1, 
                                    ell_status)))

# [1] NA  "0" "1"
```

```{r}
## Free lunch binary variable 
demo <- demo %>% 
  mutate(free_lunch = ifelse(frl_status %in% c("Free", "free"), 1, 0)) 

## Reduced lunch binary variable 
demo <- demo %>% 
  mutate(reduced_lunch = ifelse(frl_status %in% c("Reduced", "reduced"), 1, 0))
```

```{r}
# Create uniform frl_status
demo <- demo %>% 
  mutate(frl_status = ifelse(frl_status %in% c("Free", "yes", "YES", "Reduced", 
                                               "Yes", "free", "Y", "reduced"), 1, 
                             ifelse(frl_status %in% c(NA, "N/A"), NA, 
                                    ifelse(frl_status %in% c("false", "No", "no", 
                                                             "N", "NO", "Paid"), 0, 
                                           frl_status))))
# [1] NA  "1" "0"

## Change values to NA for frl binary variables 
demo <- demo %>% 
  mutate(free_lunch = ifelse(is.na(frl_status), NA, 
                           free_lunch))
demo <- demo %>% 
  mutate(reduced_lunch = ifelse(is.na(frl_status), NA, 
                           reduced_lunch))
```

```{r}
# Create uniform iep_status 
demo <- demo %>% 
  mutate(iep_status = ifelse(iep_status %in% c("Y", "Yes", "yes", "YES"), 1, 
                             ifelse(iep_status %in% c("false", "No", "no", "NO", 
                                                      "N"), 0, iep_status)))
# [1] NA  "1" "0"
```

```{r}
# Create uniform hispanic ethnicity 
demo <- demo %>% mutate(hispanic_ethnicity = 
                          ifelse(hispanic_ethnicity %in% c("no", "No", "false", "n", "N"), 0, 
                               ifelse(hispanic_ethnicity %in% c("Y", "Yes", "yes"), 1, 
                                      ifelse(hispanic_ethnicity %in% c(NA, "Not reported"), 
                                             NA, hispanic_ethnicity))))
# [1] "0" NA  "1"
```

```{r}
## Black/African American binary variable 
demo <- demo %>% 
  mutate(black_aa = ifelse(race %in% 
                              c("Black", "African-American/Black", 
                                "Black/AA", "BLACK", "black", 
                                "Black or African American", 
                                "African-American", 
                                "Black/Non Hispanic", "B", 
                                "African American/Black", 
                                "African American", 
                                "black or african American", 
                                "Black,African American", 
                                "African American,Eritrea", 
                                "Black/African American", 
                                "Black,African America", 
                                "African American,Ethiopian", 
                                "Black, Hispanic", 
                                "multiracial,african american", 
                                "Black or African American, Latinx", 
                                "African-American/Black/White", 
                                "black,white", 
                                "african american,white", 
                                "Asian,Black,African American,White", 
                                "multiracial, african american"), 1, 0))

## White 
demo <- demo %>% 
  mutate(white = ifelse(race %in%
                           c("White", "WHITE", "white", "White/Non Hispanic", 
                             "Caucasian", "Caucasian/White", "W", "white ", 
                            "White,NA,NA,NA", "caucasian",  "Moroccan", 
                            "Portuguese", "White,Hipanic,Filipino", 
                            "Asian,White", 
                            "middle eastern,white,api", 
                            "white,api,middle eastern",
                            "Asian, White", "MR", "Asian, white", 
                            "Asian,White,Hispanic,Latino", 
                            "African-American/Black/White", 
                            "native hawaiian or other pacific islander,hispanic or latino,white", 
                            "african american,white", 
                            "Asian,Black,African American,White", 
                            "black,white", 
                            "White,Hispanic,Latino", 
                            "Native Hawaiian or Pacific Islander, Caucasian", 
                            "Asian, White,NA,NA,NA", 
                            "White,Hispanic,Latino", 
                            "White,Hispanic,Latino", 
                            "Native Hawaiian or Pacific Islander,Caucasian",
                            "White,Hipanic,Latino"), 1, 0))

## Asian 
demo <- demo %>% 
  mutate(asian = ifelse(race %in% 
                           c("Asian", "ASIAN", "AS", "asian", "Asian,Afghan", 
                             "Asian,Burmese","Asian,Rohingya", "Filipino", 
                             "Asian,Nepali", "Mongolian", "Cambodian", 
                             "Asian,White", "Asian, White,NA,NA,NA", 
                             "Asian, White", "Asian, white", 
                             "Asian,White,Hispanic,Latino", 
                             "Asian,Black,African American,White", 
                             "middle eastern,white,api", 
                             "white,api,middle eastern", 
                             "White,Hispanic,Filipino", 
                             "White,Hipanic,Latino"), 1, 0)) 

## Native Hawaiian/Other Pacific Islander 
demo <- demo %>% 
  mutate(native_hawaiian_pacific_island = ifelse(race %in% 
                                        c("Hawaiian or Other Pacific Islander", 
                                          "Pacific Islander", 
                                          "Native Hawaiian or Other Pacific Islander", 
                                          "Native Hawiian/Other Pac Islander", 
                                          "Native Hawaiian or Pacific Islander, Caucasian", 
                                          "native hawaiian or other pacific islander,hispanic or latino,white"), 
                                      1, 0))

## American Indian/Alaska Native 
demo <- demo %>% 
  mutate(american_indian_alaska = ifelse(race %in% 
                                           c("American Indian", 
                                             "Native American", 
                                             "American Indian/Alaska Native", 
                                             "American Indian or Alaska Native", 
                                             "American Indian/Alaskan Native", 
                                             "American Indian,Alaska Native,Hispanic,Latino", 
                                             "American Indian, Hispanic or Latino"), 
                                         1, 0)) 

## Hispanic/Latinx 
demo <- demo %>% 
  mutate(hispanic_latinx = ifelse(race %in% 
                                    c("Hispanic", "Hispanic/Latino", 
                                     "Hispanic/latino", 
                                     "Hispanic or Latino", 
                                     "Hispanic, Latino", "Latinx", 
                                     "hispanic", "hispanic/Latino", 
                                     "Hispanic,Latino", 
                                     "Hispanic,Latino,NA,NA", 
                                     "Hispanic Latino", "H", 
                                     "Latino or Hispanic", 
                                     "White,Hispanic,Filipino", 
                                     "Black, Hispanic", 
                                     "American Indian,Alaska Native,Hispanic,Latino", 
                                     "White,Hispanic,Latino", 
                                     "Black or African American, Latinx", 
                                     "Asian,White,Hispanic,Latino", 
                                     "White,Hipanic,Latino", 
                                     "native hawaiian or other pacific islander,hispanic or latino,white", 
                                     "American Indian, Hispanic or Latino", 
                                     "White,Hipanic,Latino"), 
                                  1, 0)) 

## Middle Eastern/North African
demo <- demo %>% mutate(middle_east_north_african = ifelse(race %in% 
                                        c("Arabic"), 1, 0))
```

```{r}
# Create uniform race 
## Black/African American 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("Black", "African-American/Black", 
                                          "Black/AA", "BLACK", "black", 
                                          "Black or African American", 
                                          "African-American", 
                                          "Black/Non Hispanic", "B", 
                                          "African American/Black", 
                                          "African American", 
                                          "black or african American", 
                                          "Black,African American", 
                                          "African American,Eritrea", 
                                          "Black/African American", 
                                          "Black,African America", 
                                          "African American,Ethiopian"), 
                                      "Black/African American", race))

## White
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("White", "WHITE", "white", 
                                          "White/Non Hispanic", "Caucasian", 
                                          "Caucasian/White", "W", "white ", 
                                          "White,NA,NA,NA", "caucasian", 
                                          "Moroccan", "Portuguese"), "White", 
                                      race))

## Asian 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("Asian", "ASIAN", "AS", "asian", 
                                          "Asian,Afghan", "Asian,Burmese", 
                                          "Asian,Rohingya", "Filipino", 
                                          "Asian,Nepali", "Mongolian", 
                                          "Cambodian"), "Asian", 
                                      race))

## Native Hawaiian/Other Pacific Islander 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("Hawaiian or Other Pacific Islander", 
                                          "Pacific Islander", 
                                          "Native Hawaiian or Other Pacific Islander", 
                                          "Native Hawiian/Other Pac Islander"), 
                                      "Native Hawaiian/Other Pacific Islander", 
                                      race))

## Multiracial 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("Two or More Races", 
                                          "White,Hipanic,Filipino", 
                                          "Multi", "Two or more races", 
                                          "Multiracial", 
                                          "Multiple Categories Reported", 
                                          "Asian,White", "MultiEthinic", 
                                          "mixed", "multiracial, african american", 
                                          "MultiEthnic", 
                                          "middle eastern,white,api", 
                                          "white,api,middle eastern", 
                                          "Asian, White", "MR", "Asian, white", 
                                          "Asian,White,Hispanic,Latino", 
                                          "Multi Racial", 
                                          "African-American/Black/White", 
                                          "multiracial", 
                                          "native hawaiian or other pacific islander,hispanic or latino,white", 
                                          "african american,white", 
                                          "Asian,Black,African American,White", 
                                          "multiracial,african american", 
                                          "black,white", 
                                          "American Indian, Hispanic or Latino", 
                                          "White,Hispanic,Latino", 
                                          "Native Hawaiian or Pacific Islander, Caucasian", 
                                          "Black or African American, Latinx", 
                                          "Asian, White,NA,NA,NA", 
                                          "White,Hispanic,Latino", 
                                          "American Indian,Alaska Native,Hispanic,Latino", 
                                          "Black, Hispanic", 
                                          "White,Hispanic,Latino", 
                                          "African American,Ethiopian", 
                                          "Black or African American, Latinx", 
                                          "Native Hawaiian or Pacific Islander,Caucasian", 
                                          "American Indian, Hispanic or Latino",
                                          "White,Hipanic,Latino"), 
                                      "Multiracial", race))

## NA 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c(NA, "Unknown", "other", 
                                          "Unspecified", "Not reported", 
                                          "Other", "unspecified", 
                                          "Decline to respond,NA,NA,NA", 
                                          "Race not listed", 
                                          "Race unsure/not reported", 
                                          "NA", "P", "A", 
                                          "Brazillian", "T"), NA, race))
## Change values to NA for race binary variables 
demo <- demo %>% 
  mutate(black_aa = ifelse(is.na(race), NA, 
                           black_aa))
demo <- demo %>% 
  mutate(white = ifelse(is.na(race), NA, 
                           white))
demo <- demo %>% 
  mutate(asian = ifelse(is.na(race), NA, 
                           asian))
demo <- demo %>% 
  mutate(native_hawaiian_pacific_island = ifelse(is.na(race), NA, 
                           native_hawaiian_pacific_island))
demo <- demo %>% 
  mutate(hispanic_latinx = ifelse(is.na(race), NA, 
                           hispanic_latinx))
demo <- demo %>% 
  mutate(middle_east_north_african = ifelse(is.na(race), NA, 
                           middle_east_north_african))
demo <- demo %>% 
  mutate(american_indian_alaska = ifelse(is.na(race), NA, 
                           american_indian_alaska))

## American Indian/Alaska Native 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("American Indian", 
                                          "Native American", 
                                          "American Indian/Alaska Native", 
                                          "American Indian or Alaska Native", 
                                          "American Indian/Alaskan Native"), 
                                      "American Indian/Alaska Native", race))

## Hispanic/Latinx 
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("Hispanic", "Hispanic/Latino", 
                                          "Hispanic/latino", 
                                          "Hispanic or Latino", 
                                          "Hispanic, Latino", "Latinx", 
                                          "hispanic", "hispanic/Latino", 
                                          "Hispanic,Latino", 
                                          "Hispanic,Latino,NA,NA", 
                                          "Hispanic Latino", "H", 
                                          "Latino or Hispanic"), "Hispanic/Latinx", 
                                      race))

## Middle Eastern/North African
demo <- demo %>% mutate(race = ifelse(race %in% 
                                        c("Arabic"), 
                                      "Middle Eastern/North African", race))
```

```{r}
# 1 option for identifying duplicate asessment pid rows that need to be removed and how to pick which one to keep 
# Identify pids that are duplicated 
duplicated_pids_list <- demo$assessment_pid[duplicated(demo$assessment_pid)]
duplicated_pids_df <- demo %>%
  filter(assessment_pid %in% duplicated_pids_list) #961

# Create a binary variable to determine who to remove (duplicates) -- lines who are not duplicated we keep, lines who are duplicated and have the word "roar" in it are also kept because this is the project that holds the most data  
demo_unique <- demo %>% mutate(remove = ifelse((!assessment_pid %in% duplicated_pids_list), 0, 
                                        ifelse(grepl("roar", document_name), 0, 1)))

# Filter out those who needed to be removed -- lines who are duplicated and do not have "roar" in the document_name
demo_unique <- demo_unique %>% 
  filter(remove==0)

# Determine if there are any duplicates left 
duplicated_pids_list_2 <- demo_unique$assessment_pid[duplicated(demo_unique$assessment_pid)]
duplicated_pids_df_2 <- demo_unique %>%
  filter(assessment_pid %in% duplicated_pids_list_2) #47 

# Now we know that the remaining duplicates just have different roar_uid and everything else is the same, so we can just keep one row of the duplicated 
demo_unique <- demo_unique %>% 
  distinct(assessment_pid, .keep_all = TRUE) 
```

```{r}
write.csv(demo, "~/Documents/ROAR Primary Demographics Data/cleaned_demographics_2025-07-07.csv")
```
