# Data Tools
The purpose of this page is to get researchers familiar with various tools often used in the lab. If you have any questions regarding any of these tools, please refer to the [Data Requests Page](https://yeatmanlab.github.io/roar-docs/researcher/data-requests/). 

## BigQuery 
The purpose of this section is to get researchers familiar with BigQuery (a tool to help researchers pull ROAR data in an efficient way), SQL (the coding language used to query data), and using the terminal to query ROAR data and Google Buckets to store the ROAR data. 

- Please read Adam’s documentation and introduction to [BigQuery](https://yeatmanlab.github.io/roar-docs/developer/bigquery/). 
    1. [Installing BigQuery](https://yeatmanlab.github.io/roar-docs/developer/bigquery/#installation-and-initialization)
    2. [Learning SQL to query data](https://yeatmanlab.github.io/roar-docs/developer/bigquery/#querying-data)
    3. [Exporting data to a google cloud bucket](https://yeatmanlab.github.io/roar-docs/developer/bigquery/#exporting-large-queries-to-a-google-cloud-bucket) 
    4. Learn more about ROAR data through the BigQuery Schemas 

### General Information for Pulling Data
1. Copy the code chunks you would like to use.  
**Note**: The extra code dealing with “assigning_” unpacks the JSON strings associated with those variables. Other variables such as “scores” are handled post pull.
**Note**: Remove --comments before running query. 
2. Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation) 
3. Copy and paste the edited code into your terminal. 
4. Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data. 
5. In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_###############.csv (or other csv name you have designated). 
6. Select all of the ones you would like to download. Google bucket will create code for you to download to your system. 
7. Create a singular folder with all downloaded csv’s.
8. Direct yourself to the GitHub Repository “[Clean-ROAR-Data](https://github.com/yeatmanlab/Clean-ROAR-Data)”. 
9.  Clone the repository by clicking the “<> Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”. If you have issues please refer to the [GitHub tool section](https://yeatmanlab.github.io/roar-docs/researcher/data-tools/#github)
10. Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology runs, direct yourself to Clean_ROARComp_Runs.Rmd). 
11. Find the code chunks that match the assessment of the data you have pulled. 
12. Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull. 


### Pulling All Runs of a Single Assessment
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

### Pulling All Trials of a Single Assessment
```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_alltrials_*.csv", --sets the Google Bucket and the csv names
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

### Pulling All Runs of a Single Assessment by Date and Schools
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

**Note**: This code can be generalized to any specific date to determine the student count for any range of dates and any specific tasks. 

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/YYYY-MM-DD_checkdata_runs_*.csv",
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

```r
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

```r
# Define the base file name and the file path
# You will have to change the date at the beginning of the base file name if you pulled on a different date 
checkdata_run_base <- "YYYY-MM-DD_checkdata_runs_"
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

```r
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

### Pulling All Time All Runs Across All Assessments 
This data pull is massive and pulls all runs across all students across all time periods across all assessments. 

This may be helpful in determining how many students have taken at least one ROAR measure. The researcher can pull this and then run ```r length(unique(df$assessment_pid))``` to determine the number of unique students who have taken ROAR. 

**Note: Pulling this amount of data is extremely costly! Please check to make sure that the existing datasets do not already exist in the Primary ROAR Research Data Google Drive or within other researchers local drives before pulling.**

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/YYYY-MM-DD_all_runs_*.csv",
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
'
```

### Pulling Demographic Data 
Demographic data will include race, ethnicity, ELL status, IEP status, FRL status, home language, gender variables for students where the data was provided (via Clever/ClassLink or CSV upload).

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/YYYY-MM-DD_demographics_*.csv",
 format="csv",
 overwrite=true
) AS
SELECT au.* EXCEPT(classes_current, classes_all, districts_current, districts_all, families_current, families_all, groups_current, groups_all, schools_current, schools_all, race, tasks, variants, home_language),
  TO_JSON_STRING(au.classes_current) AS classes_current,
  TO_JSON_STRING(au.classes_all) AS classes_all,
  TO_JSON_STRING(au.districts_current) AS districts_current,
  TO_JSON_STRING(au.districts_all) AS districts_all,
  TO_JSON_STRING(au.families_current) AS families_current,
  TO_JSON_STRING(au.families_all) AS families_all,
  TO_JSON_STRING(au.groups_current) AS groups_current,
  TO_JSON_STRING(au.groups_all) AS groups_all,
  TO_JSON_STRING(au.schools_current) AS schools_current,
  TO_JSON_STRING(au.schools_all) AS schools_all,
  TO_JSON_STRING(au.race) AS race,
  TO_JSON_STRING(au.tasks) AS tasks,
  TO_JSON_STRING(au.variants) AS variants,
  TO_JSON_STRING(au.home_language) AS home_language
FROM `gse-roar-admin.admin.users` AS au
'
```

#### Cleaning Demographic Data 
The demographics data can be difficult to wrangle for many reasons. Like most demographics data, there are opportunities for participants and researchers to enter data through open text boxes or drop downs with infinite options. Particularly, the race and ethnicity variables are often times filled with typing errors, grammatical errors, varying cases, and a variety of outcomes. The researcher will want to clean these variables and all other demographic variables to capture all the information they can while creating a concise and clean dataframe. 

Feel free to explore and build off of this [cleaning script](https://github.com/yeatmanlab/Clean-ROAR-Data/blob/main/Clean_Demographics.Rmd) for cleaning demographics pulled from BigQuery. 

### Pulling District Data
This will help determine how many unique districts have been linked with ROAR. 

**Note**: not all districts will have ROAR data. For example many districts will link via Clever, however, they might not yet or might never run ROAR. Additionally, the researcher will want to remove any test, demo, QA, and pilot districts. 

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/YYYY-MM-DD_districts_*.csv",
 format="csv",
 overwrite=true
) AS
SELECT
  d.district_id,
  d.is_demo_data,
  d.is_test_data,
  d.location_state,
  d.name,
  d.public_name
FROM `gse-roar-assessment.assessment.districts` AS d
'
```

### Pulling Schools Data
This will help determine how many unique schools have been linked with ROAR. 

**Note**: not all schools will have ROAR data. For example many schools will link via Clever, however, they might not yet or might never run ROAR. Additionally, the researcher will want to remove any test, demo, QA, and pilot schools. 

```sql
bq query --nouse_legacy_sql \
'EXPORT DATA
OPTIONS(
 uri="gs://google_bucket_name/YYYY-MM-DD_schools_*.csv",
 format="csv",
 overwrite=true
) AS
SELECT
  s.school_id,
  s.district_id,
  s.is_demo_data,
  s.is_test_data,
  s.location_state,
  s.name
FROM `gse-roar-assessment.assessment.schools` AS s
'
```

## ROAR Data Dashboard 
This section introduced researchers to the [ROAR Data Dashbaord](https://kelwentz.shinyapps.io/roar_data_dashboard/). The ROAR Data Dashboard is maintained by the ROAR Data Scientist using the All Time All Runs Across All Assessments query. 

The ROAR Data Dashboard acts as an informative dashboard for researchers to determine completion rates, distributions, and overall look into the ROAR data without requiring expensive queries and data processing time. 

The ROAR Data Dashboard has features for filtering including date filters, grade selections, assessment selection, and variant filters for each assessment selected. 

The ROAR Data Dashboard visualizes data by unique runs or by unique students. There are grade distributions and tables, district distributions with deidentified district ids, distributions of runs/students across time, and a demographics table that depicts the percent of data that researchers have access to for each demographic variable. 

## GitHub 
This section will get researchers acquainted with using GitHub for research projects, IRB modifications, documentation updates, etc. 

### [GitHub Lingo](https://docs.github.com/en/get-started/learning-about-github/github-glossary) 
- Repository: A project's folder. A repository contains all of the project files (including documentation), and stores each file's revision history. Repositories can have multiple collaborators and can be either public or private.
- Clone: To copy the files of a repository to the user's local device. 
- Main: The "live" branch that should never directly be edited (unless approved by ROAR leads or Kelly Wentzlof, data scientist). The default development branch. Whenever you create a Git repository, a branch named main is created, and becomes the active branch. 
- Branch: A parallel version of a repository. It is contained within the repository, but does not affect the primary or main branch allowing you to work freely without disrupting the "live" version. When you've made the changes you want to make, you can merge your branch back into the main branch to publish your changes. 
- Commit: A "revision"--an individual change to a file (or set of files). When you make a commit to save your work, Git creates a unique ID that allows you to keep record of the specific changes committed along with who made them and when. 
- Push: To send your committed changes to a remote repository on GitHub.com where others can see them. 
- Fetch: When you're adding changes from the remote repository to your local working branch without committing them. 
- Pull: When you are fetching in changes and merging them. For instance, if someone has edited the remote file you're both working on, you'll want to pull in those changes to your local copy so that it's up to date.
- Merge:  Takes the changes from one branch (in the same repository or from a fork), and applies them into another.
- Pull Request: Proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Linked to a specific branch and the changes pushed to that branch. 
- Issue: Suggested improvements, tasks or questions related to the repository.
- Markdown (.md, .Rmd): An incredibly simple semantic file format, not too dissimilar from .doc, .rtf and .txt. Markdown makes it easy for even those without a web-publishing background to write prose (including with links, lists, bullets, etc.) and have it displayed like a website.
- README: A text file containing information about the files in a repository that is typically the first file a visitor to your repository will see. 

### Downloading GitHub
Follow the instructions to [download GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop). 

### Yeatman Lab GitHub 
Please tag Adam Richie-Halford in a slack message in #roar-pii-maintanence-requests requesting access to the Yeatman Lab GitHub. This will grant you access to all public and private repositories 

### Navigating the GitHub website 
On the Yeatman Lab homepage, users will see >100 different repositories. Each repository should have a README.md file which will explain what the repository stores and the researchers'/developers' goals. The user should find the repository that they would like to read/contribute to via the search bar or scrolling. 

### Cloning a repository 
Once the user finds the repository that they would like to contribute to, they will click the repository and be taken to the home page of the repository. To contribute to the files within the repository, the user will need to "clone" the repository to their local device. 

1. On the repository homepage, click the green button "<> Code". 
2. Click "Open wtith GitHub Desktop". 
3. User should already have GitHub Desktop downloaded, the User will see a page on GitHub Desktop asking which folder to clone the repository into--most common locations are a GitHub folder in the Documents directory or the Home directory. 
4. Once the user decides the location of the repository, click "Clone". 
5. The Desktop should say the repository name in the top left corner under "Current Repository", "main" indicating the user is on the main branch under "Current Branch" and a "Fetch origin" button. 
The repository now exists locally on the user's device. 

::: tip Try to clone a repository on GitHub

Try to clone the following repository [github-learning](https://github.com/yeatmanlab/github-learning). This repository is a fake repository, so feel free to play around, add text to the existing documents, add new files, rewrite text, etc. Please message Kelly Wentzlof on slack if you do not have access. 
:::


### Creating a new branch 
Before any changes are made, the user should create their own new branch and make changes on the new branch. Creating a branch can happen on the GitHub Desktop or on the GitHub.com website. 

*Desktop*: 
1. Click "Current Branch: main". 
2. Click "New Branch". 
3. Give the branch a name (Tip: Make sure to include your initials and enough of a description so other users can see what you are working on). 
4. Click "Create Branch" 
5. Now in the top left, the new branch name should be under "Current Branch". If it is not, please click "Current Branch" and select the correct branch. 
6. Click "Publish branch"--this pushes the branch to the GitHub.com website so other users can see the branch. 

*GitHub.com website*: 
1. On the repository homepage, next to the "main" button, the user should click "## Branches". 
2. In the top right corner, click the green button "New branch". 
3. Give the branch a name (Tip: Make sure to include your initials and enough of a description so other users can see what you are working on). 
4. Click "Create new branch". 
5. Now navigate back to GitHub Desktop, click the "Fetch" button. 
6. Please click "Current Branch" and select the new branch you created. 

::: tip Try to create a new branch 

Try to create a branch on the following repository [github-learning](https://github.com/yeatmanlab/github-learning). Please name the branch with your initials and an informational description of what you are changing (e.g., kw-adding-scatter-plot-iris).
:::

### Making a contribution to a repository
Once the user has cloned the repository to their local device, they will likely want to make a contribution to one or more of the files within the repository. Reminder to never edit the main branch and to only make edits on the new branch the user created. 

1. Locate the GitHub folder on your local device. 
2. Open the file you want to make a contribution to/edit. (Note: You can often open files in R Studio, Visual Studio Code, etc.)
3. Make the edits in whatever editor you chose (R Studio, VS Code, etc.). 
4. Press save. 
5. Open the GitHub Desktop. You should see the files you edited pop up under the left side tab under "Changes". 
6. Click the checkboxes for the files you want to commit. 
7. In the "Summary" box, Write a short summary of the changes you made on the files you selected. If you want to write in more detail about the changes you can write in the "Description" box. 
8. Before committing, click "Fetch origin" in the top middle, to make sure there aren't any changes that other users have made on your same branch that you did not previously have. 
    8a. If there are change that you were missing, you will see the button change from "Fetch origin" to "Pull" with the number of commits that you were missing. 
    8b. Click the "Pull" button. 
9. Click "Commit to branch-name". 
10. In the middle top, where it once said "Fetch origin", you will see an option to "Push origin". This will push all the changes you made to the GitHub.com website where other users can see it. 
The change(s) you made will now appear on the GitHub.com website under the branch you made. 

::: tip Try to make a contribution on a branch

Try to make a contribution to the branch that you created. Please remember to switch to your branch before committing and pushing any changes. 
:::

### Making a pull request (PR)
Once the user has pushed changes to their branch, they will have the option to create a pull request. Pull requests can happen after the user has already pushed changes to a branch.

This feature is especially helpful when multiple users are working on the same repository. 
- You have the option to assign reviewers who can review all code and commits that are pushed to the branch. 
- You can assign "assignees" who will be continuously working on the repository and making changes in the current pull request. 
- You can converse with other users in the comment section about various changes happening within the repository files. 
- You can navigate to "Files changed" and leave comments on the specific lines of the document/code. 
- You can @ people in the comments to notify them of an issue or a change. 
- You can see all the various commits, who made them, and the descriptions under "Commits". 

*From main page*: 
1. Direct yourself to the GitHub.com website on the repository you are working on. 
2. You will see a yellow highlighted bar pop up on the homepage of the repository which says "branch-name had recent pushes # seconds/minutes ago". 
3. Click the green button "Compare & pull request". 
4. The title section will prefill with the summary you had provided with the commit. If the summary does not highlight all the things you will be working on in the pull request, rewrite it and add an informative title and description for the entire pull request (not just the first commit). 
5. Click the green button "Create pull request". 
Now a pull request has been created. This pull request is associated with the branch that you created. Therefore, any commits that are pushed to the branch are recorded in the pull request. 

::: tip Try to make a pull request 

Try to create a pull request with a title, details, add an assignee and a reviewer for the commits you pushed to your branch. 
:::

### Merging a pull request into the main branch 
Once you have made all the changes you want to the files, you can merge this pull request into the main branch. However, you will often want someone to review your work before you do. 

1. GitHub will automatically check to see if there are any conflicts with the base branch (in most cases the base branch is the main branch). If there are merging issues, please have someone review and/or fill out a [data request form](https://github.com/yeatmanlab/roar-bigquery/issues) to get help with resolving the merging issues. 
2. If there are no merging issues, after being reviewed, click the green "Merge pull request" button. 
3. You can change the commit message or description to something more informational. 
4. Click "Confirm merge". 
5. You will then be told "Pull request successfully merged and closed". 
6. If you do not plan to make any more changes to the branch you were working out of, click "Delete branch". 
You now have merged a pull reqeust from your own branch into main. 

::: tip Try to merge the pull request 

Try to merge the pull request that you created with all the commits that you pushed to the branch you created (these should all be tracked within the same pull request). Review the changes and if there are no merging issues, merge into main. If there are merging issues, try to work through them, if you are struggling please fill out a [data request form](https://github.com/yeatmanlab/roar-bigquery/issues). 
:::

### Creating an issue 
Issues are a great way of tracking tasks and communication between users. 

1. On the homepage of the repository on the GitHub.com website, navigate to the "Issues" tab in the top left corner. 
2. Click the green button in the top right corner "New issue". 
3. Add a title to describe the task or question that needs to be done/answered. 
4. Add a description with all needed details and files that are involved. 
5. Assign the user you want to complete the issue/task. (Tip: Creating issues for yourself is a great way of keeping track of your tasks). 
6. Click the green button "Create". 
You can continue to comment within the issue to talk about progress with other users or to write notes to yourself. Additionally, you can comment the related pull requests or branches that are working on solving the issue. Comment the PR or branch by doing # and selecting the corresponding branch/PR from the dropdown that appears. 

::: tip Try to create an issue

Try to create an issue related to the current repository, it can be anything. Assign it to yourself and make a few comments, tag the pull request related to the issue, etc. 
:::

### Good practices 
- Always "Fetch origin" before committing changes. 
- Commit and Push more often than you would think--this helps other users see your changes in "live" time. 
- Creating a pull request for any new branch will help you keep track of your changes and make merging into main branch easier. 
- Be descriptive in your commits--you are communicating to the team not just making notes for yourself. 
- Never push to main. Even when you think you are the only one working on a repository, always work out of a separate branch and merge. 
- Don't be afraid to ask questions--GitHub is very daunting at the beginning, just reach out to devs or Kelly Wentzlof and everyone will be happy to help. 

### Try out GitHub
The repository [github-learning](https://github.com/yeatmanlab/github-learning) is a way for researchers to get hands-on experience with GitHub without the fear of messing up research code or lab materials. Feel free to mess around with it as much as possible, get comfortable with this fake repository, so you are confident in the real repository with real data. 
