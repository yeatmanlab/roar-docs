# Data Cleaning 

This section walks through the standards and steps of cleaning ROAR data. 

## General Guidelines

The following steps describe typical cleaning procedures of any ROAR Data (run- or trial-level). 

1. Removing extra characters ("\\", "[]", etc.) from the assinging_orgs variables (assinging_classes, assigning_schools, assigning_districts, assigning_groups, assigning_families). Removing these extra characters will help when merging with the organization key that matches organization ids to their names. 
   
```r
df <- df %>%
  mutate(assigning_districts = str_remove_all(assigning_districts, 
                                              "[\\[\\]\\\"\\\\]")) %>% 
  mutate(assigning_schools = str_remove_all(assigning_schools, 
                                              "[\\[\\]\\\"\\\\]")) %>% 
  mutate(assigning_classes = str_remove_all(assigning_classes, 
                                              "[\\[\\]\\\"\\\\]")) %>% 
  mutate(assigning_groups = str_remove_all(assigning_groups, 
                                              "[\\[\\]\\\"\\\\]")) %>% 
  mutate(assigning_families = str_remove_all(assigning_families, 
                                              "[\\[\\]\\\"\\\\]")) 
```

2. Substituting empty string ("") values within the dataframe to be NA values for easier database wrangling and filtering. 

```r
df <- df %>% 
  mutate_if(is.character, list(~na_if(.,"")))
```

3. Remove columns that have all NA values. There are many columns within the ROAR dataframes that only apply to specific assessments. Removing the columns that are all NA, removes columns that are unneccessary for the current assessment. 

```r
df <- df %>% 
  select(where(~ !all(is.na(.))))
```

4. Remove duplicate rows. Sometimes during merging, BigQuery will accidentally maintain duplicate or identical rows. Removing them ensures the researcher is accurately counting each unique student, run, or trial. 

```r   
df <- df %>% 
  distinct()
```

5. Remove test, demo, QA, pilot, and **opt-out** student accounts. Test aaccounts are often created for the interal developers and partnerships teams to test the assessments for correct features and outputs. Demo accounts are often created for organization administrators to explore ROAR and determine if the assessments are fitting for their students. QA accounts are often created for the QA testers to test any changes across the different variants or updates to the dashboard. Pilot accounts are typically created for school districts that are running a small set of students to determine if ROAR is a good fit for their organization. Opt-out accounts are students who have taken ROAR and their data will be used by the school, but their parents/guardians have opted out their data from research use and purposes. 

```r
# remove using is_test and is_demo 
df <- df %>% 
  filter(is_demo_data=="false") %>% 
  filter(is_test_data=="false")

# remove test, zzz, qa, demo assessment_pid 
df <- df %>%
  filter(!str_detect(tolower(assessment_pid), "zzz|test|demo|qa")) 

# remove opt-outs 
# https://drive.google.com/file/d/1s85ydQm8MUSJrb3ZAag_G7z6iMitd4it/view?usp=drive_link -> opt out csv 
opt.out.csv <- "opt_outs_2025-11-05.csv" 
opt.out <- read.csv(file.path(getwd(), 'data', opt.out.csv))
df <- df %>% 
  filter(!assessment_pid %in% opt.out$assessment_pid)

# remove known test districts  
# known assigning_districts used for testing
test_districts = c("kXyCT8BbFFbuXo5u0M84") # MB Demo District

# known assigning_groups used for testing
test_groups = c("xCfln1aBgGISoxhRhwax", # blank
                "yettgcgO25iX1uupiEgw", # Test Group
                "v1B0A4BY7uVQt4YwEMod", # LEVANTE-CORE-TASKS-TEST
                "S91j0taJd1rXCEXhbSnB", # zzzTG
                "7dX5tAGAFXkdwQ4idPms", # aerdf Demo
                "X7GFqFVDyLFDdun4TqP7" # Kyle Test Group
                )
  
# demo and test schools
test_schools = c("03xEaKoFXSe6QSvNe5Q2", # demo
                 "61e9fd89d016951095f43c65", # Clever Demo Bayview
                 "61e9fd89d016951095f43c68", # Clever Demo Westwood
                 "G2mM3eEwDPZU3h2A4ikZ", # Mia test
                 "RgrPvxn5kkKSal6wdpQy", # ROAR Demo
                 "RqAKFNEVjBrZXvSE7OsC", # SM Demo
                 "rZRPSq6IfUOkAQM2mecC" # MB Demo School
                 )

# remove known test id's
df <- df %>% 
  filter(!(assigning_districts %in% test_districts)) %>% 
  filter(!(assigning_groups %in% test_groups)) %>% 
  filter(!(assigning_schools %in% test_schools))
```

6. Remove NA values in assessment_pid. assessment_pid is the unique identifying variable that can link the run-level, trial-level, and demographic information for each student. Without it, the scores are not useful.

```r
df <- df %>% 
  filter(!is.na(assessment_pid))
```

7. **There is an active issue with grade. The grades for students prior to 24-25 school year were updated to be the current grade despite when the run was logged. Therefore, we have to use age_in_months_at_run to estimate grade for students who's grades were incorrectly upgraded to the current school year's grade.** In addition, to fixing the grade issue with estimation, researchers also have to clean up the values of the grades so they follow a unique pattern (e.g., K, Kinder, Kindergarten all represent the same thing). 

```r
# remove NA age months 
df <- df %>%
  filter(!is.na(age_months_at_run))

# clean up grade 
df <- df %>%
  muate(user_grade_at_run = case_when(
    user_grade_at_run %in% c("Kindergarten", "K", "Kindergarden", "k") ~ "Kindergarten", 
    user_grade_at_run %in% c("1", "1st", "01") ~ "1", 
    user_grade_at_run %in% c("2", "2nd", "02") ~ "2", 
    user_grade_at_run %in% c("3", "3rd", "03") ~ "3", 
    user_grade_at_run %in% c("4", "4th", "04") ~ "4", 
    user_grade_at_run %in% c("5", "5th", "05") ~ "5", 
    user_grade_at_run %in% c("6", "6th", "06") ~ "6", 
    user_grade_at_run %in% c("7", "7th", "07") ~ "7",
    user_grade_at_run %in% c("8", "8th", "08") ~ "8", 
    user_grade_at_run %in% c("9", "9th", "09") ~ "9", 
    user_grade_at_run %in% c("10", "10th") ~ "10", 
    user_grade_at_run %in% c("11", "11th") ~ "11", 
    user_grade_at_run %in% c("12", "12th") ~ "12", 
    user_grade_at_run %in% c("Invalid", "Other") ~ NA, 
    user_grade_at_run %in% c("PK", "Pre-k", "Pre-K", "pre-k", "pre-kindergarten") ~ "Pre-K", 
    TRUE ~ user_grade_at_run 
  ))

df <- df %>% 
  mutate(user_grade_at_run = ifelse(!user_grade_at_run %in% 
                                      c("Pre-K", "Kindergarten", "1", "2", "3", "4", "5", 
                                        "6", "7", "8", "9", "10", "11", "12"), 
                                    NA, user_grade_at_run))

# create a function to estimate grade based on age_months_at_run 
# estimate grade for anyone before 24-25 school year because of known grade issue 
estimate_grade <- function(age_months) {
  # Determine the grade based on age in months
  if (age_months < 60) {  # Less than 5 years old
    return("Pre-K")
  } else if (age_months >= 60 && age_months < 72) {  # 5 years old to (but not including) 6 years old
    return("Kindergarten")
  } else if (age_months >= 72 && age_months < 216) {  # From 6 years old to (but not including) 18 years old
    return(as.character(floor(age_months / 12) - 5))  # Grade 1 through 12
  } else {
    return("12")  # 18 years and older
  }
}

df <- df %>% 
  mutate(user_grade_at_run = ifelse(time_started < as.Date("2024-07-31"), 
                             map_chr(age_months_at_run, estimate_grade), 
                             user_grade_at_run))

# estimate grade for anyone with missing grade 
df <- df %>% 
  mutate(user_grade_at_run = ifelse(is.na(user_grade_at_run),
                             map_chr(age_months_at_run, estimate_grade),
                             user_grade_at_run))                                    
```

## Trial-level 

The following steps describe the typical cleaning procedures of ROAR trial-level data. 

1. Remove duplicate trial ids. In the trial-level dataframes, trial ids exist to uniquely identify the specific trial within the specific run that the student responded to. Ensuring uniqueness of trials ensures the accurate count of unique trials and the number of trials completed within a run. 

```r
df <- df %>% 
  distinct(trial_id, .keep_all = TRUE)
```

2. Depending on the analyses, researchers will often want to remove practice trials from their analyses so they can isolate test responses. 

```r
df <- df %>%
  filter(assessment_stage=="test_response")
```

## Run-level 

The following steps describe the typical cleaning procesdures of ROAR run-level data. 

1. Filter clean runs. For each of the ROAR assessments, the runs are cleaned using a combination of the following variables: completed, best_run, reliable. For all assessments, completed is used to determine if the student finished the assessment. For core assessment, best_run and reliable are used to determine if the student answered the items in a plausible and reliable way. For the non-core assessments, best_run and reliable are not active features. 

```r
# keep completed runs (non-core assessments) 
df <- df %>% 
  filter(completed=="true") 

# keep completed, best, and reliable runs (core assessments) 
df <- df %>% 
  filter(best_run=="true") %>%
  filter(completed=="true") %>% 
  filter(reliable %in% c("true", NA)) # for older core runs, reliable was set to NA for when it was not an active feature 
```
2. Remove NA values for scores. There could be a variety of reasons for NA scores: incomplete assessments, error in data logging, etc. These rows are not useful for analyses and could create issues in modeling moving forward. 

```r 
df <- df %>% 
  filter(!is.na(computed.composite.score))
```

1. Remove duplicate run ids. In the run-level dataframes, run ids exist to uniquely identify the specific run that the student completed. Ensuring uniqueness of runs ensures the accurate count of unique runs and the number of runs completed for each student. 

```r
df <- df %>% 
  distinct(run_id, .keep_all = TRUE)
```

*Optional*: Keep only the one run for students who have run more than once. For some analyses, it may be important to only count each student once. The two most common ways to achieve this is to keep the first run or the most recent run for students who have multiple runs of the same assessment. 

```r 
# Keep the first run for students who have run more than once on an assessment 
df <- df %>%
  mutate(time_started = ymd_hms(time_started, tz = "UTC")) %>% 
  group_by(assessment_pid, task_id) %>% 
  filter(n() = 1 | time_started == min(time_started)) $>$ 
  ungroup() 

# Keep the most recent run for students who have run more than once on an assessment 
df <- df %>%
  mutate(time_started = ymd_hms(time_started, tz = "UTC")) %>% 
  group_by(assessment_pid, task_id) %>% 
  filter(n() = 1 | time_started == max(time_started)) $>$ 
  ungroup() 
```

## BigQuery Demographics 
The demographics data can be difficult to wrangle for many reasons. Like most demographics data, there are opportunities for participants and researchers to enter data through open text boxes or drop downs with infinite options. Particularly, the race and ethnicity variables are often times filled with typing errors, grammatical errors, varying cases, and a variety of outcomes. The researcher will want to clean these variables and all other demographic variables to capture all the information they can while creating a concise and clean dataframe. 

1. Filter only student demographics. Across Clever and ClassLink, BigQuery stores demographic information for students, teachers, and administrators. Researchers likely only care about the student demographic data. 

```r 
demo <- demo %>% 
  filter(user_type=="student")
```
2. Remove duplicate assessment pids. In the demographic dataframe, assessment pids exist to uniquely identify the specific student and the demographics assigned to them. The demographics are not stored longitudinally, therefore, there shouldn't be repeat pids. 

```r 
demo <- demo %>% 
  distinct(assessment_pid, .keep_all = TRUE)
```

3. Create uniform values for the demographic variables: 

    - Gender 
    - English Language Learner Status
    - Free/Reduced Lunch Status 
    - IEP Status
    - Hispanic Ethnicity 
    - Race
    - Home Language 

See [Clean_Demographics.Rmd](https://github.com/yeatmanlab/Clean-ROAR-Data/blob/main/Clean_Demographics.Rmd) for details on cleaning. 

*Optional*: Remove grade variables. Researchers will likely want to use the user_grade_at_run variable to assign grade to each student in the assessment-level dataframes. However, if they are solely looking at demographics of students who are linked to ROAR, then they can keep the grade variable. 

```r
demo <- demo %>% 
  select(-grade) 
```
