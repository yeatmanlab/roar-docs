import{_ as n,c as a,f as e,o as i}from"./app-FrdTVLMr.js";const l={};function t(u,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="data-organization" tabindex="-1"><a class="header-anchor" href="#data-organization"><span>Data Organization</span></a></h1><p>The purpose of this page is to get researchers familiar with BigQuery, SQL, and using the terminal to query ROAR data and Google Buckets to store the ROAR data.</p><h2 id="bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way" tabindex="-1"><a class="header-anchor" href="#bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way"><span>BigQuery - a tool to help researchers pull ROAR data in an efficient way</span></a></h2><ul><li>Please read Adam’s documentation and introduction to <a href="https://yeatmanlab.github.io/roar-docs/developer/bigquery/" target="_blank" rel="noopener noreferrer">BigQuery</a>. <ol><li><a href="https://yeatmanlab.github.io/roar-docs/developer/bigquery/#installation-and-initialization" target="_blank" rel="noopener noreferrer">Installing BigQuery</a></li><li><a href="https://yeatmanlab.github.io/roar-docs/developer/bigquery/#querying-data" target="_blank" rel="noopener noreferrer">Learning SQL to query data</a></li><li><a href="https://yeatmanlab.github.io/roar-docs/developer/bigquery/#exporting-large-queries-to-a-google-cloud-bucket" target="_blank" rel="noopener noreferrer">Exporting data to a google cloud bucket</a></li><li>Learn more about ROAR data through the BigQuery Schemas</li></ol></li></ul><h2 id="guidelines-to-organizing-pulled-roar-assessment-data" tabindex="-1"><a class="header-anchor" href="#guidelines-to-organizing-pulled-roar-assessment-data"><span>Guidelines to organizing pulled ROAR assessment data</span></a></h2><ol><li>Store outputted csv’s on your own system (you can delete after you have compiled if they take up too much storage)</li><li>Do not store individual outputted csv’s from BigQuery on Lab Google Drives (it will become too messy)</li><li>If you are working on an existing project, store the data in the corresponding folder in the ROAR Research Data Drive</li><li>If you are starting a new project, create a new folder in the ROAR Research Data Drive</li><li><strong>DO NOT make any new folders on the ROAR Primary Research Data Drive!</strong></li></ol><h3 id="pulling-all-runs-of-a-single-assessment-using-bigquery" tabindex="-1"><a class="header-anchor" href="#pulling-all-runs-of-a-single-assessment-using-bigquery"><span>Pulling All Runs of a Single Assessment using BigQuery</span></a></h3><ol><li>Make a copy of this page into your own drive or folder.</li><li>Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation)</li><li>Copy and paste the edited code into your terminal to pull all runs of a single assessment.</li><li>Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data.</li><li>In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_all_runs_###############.csv.</li><li>Select all of the ones you would like to download. Google bucket will create code for you to download to your system.</li><li>Create a singular folder with all downloaded csv’s.</li><li>Direct yourself to the GitHub Repository “<a href="https://github.com/yeatmanlab/Clean-ROAR-Data" target="_blank" rel="noopener noreferrer">Clean-ROAR-Data</a>”.</li><li>Clone the repository by clicking the “&lt;&gt; Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”.</li><li>Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology runs, direct yourself to Clean_ROARComp_Runs.Rmd).</li><li>Find the code chunks that match the assessment of the data you have pulled.</li><li>Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull.</li></ol><p><strong>Note</strong>: The extra code dealing with “assigning_” unpacks the JSON strings associated with those variables. Other variables such as “scores” are handled post pull.</p><p><strong>Note</strong>: Remove --comments before running query.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">bq query <span class="token comment">--nouse_legacy_sql \\</span></span>
<span class="line"><span class="token string">&#39;EXPORT DATA</span>
<span class="line">OPTIONS(</span>
<span class="line">  uri=&quot;gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_allruns_*.csv&quot;, --sets the Google Bucket and the csv names </span>
<span class="line">  format=&quot;CSV&quot;, --sets the output format</span>
<span class="line">  overwrite=true</span>
<span class="line">) AS</span>
<span class="line">SELECT --selects the variables the user wants and which dataframe they are coming from</span>
<span class="line">  u.assessment_pid, </span>
<span class="line">  ur.* EXCEPT( --removes these variables from the selection</span>
<span class="line">      assigning_districts,</span>
<span class="line">      assigning_schools,</span>
<span class="line">      assigning_classes,</span>
<span class="line">      assigning_groups,</span>
<span class="line">      assigning_families</span>
<span class="line">  ),</span>
<span class="line">  TO_JSON_STRING(ur.assigning_districts) AS assigning_districts, --turns the variables from JSONs into strings </span>
<span class="line">  TO_JSON_STRING(ur.assigning_schools) AS assigning_schools,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_classes) AS assigning_classes,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_groups) AS assigning_groups,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_families) AS assigning_families</span>
<span class="line">FROM </span>
<span class="line">  \`gse-roar-assessment.assessment.users\` AS u --assigns the users dataframe to the name &quot;u&quot;</span>
<span class="line">JOIN </span>
<span class="line">  \`gse-roar-assessment.assessment.user_runs\` AS ur --assigns the user_runs dataframe to the name &quot;ur&quot;</span>
<span class="line">ON </span>
<span class="line">  u.roar_uid = ur.roar_uid --merges the dataframes based on the variable roar_uid</span>
<span class="line">WHERE </span>
<span class="line">  ur.task_id =&quot;assessment_abbreviation&quot;  --filters the dataframe to only the given task_id</span>
<span class="line">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pulling-all-trials-of-a-single-assessment-using-bigquery" tabindex="-1"><a class="header-anchor" href="#pulling-all-trials-of-a-single-assessment-using-bigquery"><span>Pulling All Trials of a Single Assessment using BigQuery</span></a></h3><ol><li>Make a copy of this page into your own drive or folder.</li><li>Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation)</li><li>Copy and paste the edited code into your terminal to pull all trials of a single assessment.</li><li>Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data.</li><li>In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_alltrials_###############.csv.</li><li>Select all of the ones you would like to download. Google bucket will create code for you to download to your system.</li><li>Create a singular folder with all downloaded csv’s.</li><li>Direct yourself to the GitHub Repository “<a href="https://github.com/yeatmanlab/Clean-ROAR-Data" target="_blank" rel="noopener noreferrer">Clean-ROAR-Data</a>”.</li><li>Clone the repository by clicking the “&lt;&gt; Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”.</li><li>Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology trials, direct yourself to Clean_ROARComp_Trials.Rmd).</li><li>Find the code chunks that match the assessment of the data you have pulled.</li><li>Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">bq query <span class="token comment">--nouse_legacy_sql \\</span></span>
<span class="line"><span class="token string">&#39;EXPORT DATA</span>
<span class="line">OPTIONS(</span>
<span class="line"> uri=&quot;gs://google_bucket_name/yyyy-mm-dd_assessment_abbreviation_allruns_*.csv&quot;, --sets the Google Bucket and the csv names</span>
<span class="line"> format=&quot;csv&quot;, --sets the output format</span>
<span class="line"> overwrite=true</span>
<span class="line">) AS</span>
<span class="line">SELECT --selects the variables the user wants and which dataframe they come from </span>
<span class="line">  u.assessment_pid,</span>
<span class="line">  u.birth_month,</span>
<span class="line">  u.birth_year,</span>
<span class="line">  u.grade,</span>
<span class="line">  ur.time_started,</span>
<span class="line">  ur.time_finished,</span>
<span class="line">  ut.*</span>
<span class="line">FROM</span>
<span class="line">  \`gse-roar-assessment.assessment.users\` AS u --assigns the users dataframe to the name &quot;u&quot; </span>
<span class="line">JOIN</span>
<span class="line"> \`gse-roar-assessment.assessment.user_trials\` AS ut --assigns the user_trials dataframe to the name &quot;ut&quot; </span>
<span class="line">ON</span>
<span class="line">  u.roar_uid = ut.roar_uid --merges the users and user_trials dataframes based on the variable roar_uid</span>
<span class="line">JOIN</span>
<span class="line">  \`gse-roar-assessment.assessment.user_runs\` AS ur --assigns the user_runs dataframe to the name &quot;ur&quot; </span>
<span class="line">ON</span>
<span class="line">  ur.run_id = ut.run_id --merges the user_trials + user merged dataframe to create a large data frame with user_runs</span>
<span class="line">WHERE</span>
<span class="line"> ut.task_id = &quot;assessment_abbreviation&quot; --filters the dataframe to only the given task_id</span>
<span class="line">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery" tabindex="-1"><a class="header-anchor" href="#pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery"><span>Pulling All Runs of a Single Assessment by Data and Schools using BigQuery</span></a></h3><p><strong>Note</strong>: The current output will go to your home directory saved as &quot;output.csv&quot;. You can change the starting settings to save to a Google Bucket using the same format as above.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">bq query <span class="token comment">--nouse_legacy_sql --format=csv \\</span></span>
<span class="line"><span class="token string">&#39;SELECT </span>
<span class="line">  ur.roar_uid, </span>
<span class="line">  u.roar_uid,</span>
<span class="line">  u.assessment_pid,</span>
<span class="line">  ur.run_id, </span>
<span class="line">  ur.task_id, </span>
<span class="line">  ur.time_started,</span>
<span class="line">  ur.time_finished,</span>
<span class="line">  ur.user_grade,</span>
<span class="line">  ur.age_months, </span>
<span class="line">  ur.reliable,</span>
<span class="line">  ur.best_run, </span>
<span class="line">  ur.completed, </span>
<span class="line">  ur.engagement_flags, </span>
<span class="line">  ur.user_school_level, </span>
<span class="line">  TO_JSON_STRING(ur.assigning_districts) as assigning_districts,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_schools) as assigning_schools, </span>
<span class="line">  JSON_VALUE(ur.scores,&quot;$.computed.composite.roarScore&quot;) AS swr_roar_score,</span>
<span class="line">  JSON_VALUE(ur.scores,&quot;$.computed.composite.thetaEstimate&quot;) AS theta_estimate_run</span>
<span class="line">FROM \`gse-roar-assessment.assessment.user_runs\` AS ur</span>
<span class="line">JOIN \`gse-roar-assessment.assessment.users\` AS u</span>
<span class="line">ON u.roar_uid = ur.roar_uid</span>
<span class="line">WHERE </span>
<span class="line">  task_id = &quot;swr&quot; </span>
<span class="line">AND </span>
<span class="line">  time_started &gt; &quot;2025-03-26&quot; </span>
<span class="line">AND </span>
<span class="line">  &quot;wsYCwr1E0goNR5yDvLak&quot; IN UNNEST(assigning_schools)</span>
<span class="line">LIMIT 10&#39;</span> <span class="token operator">&gt;</span> output<span class="token punctuation">.</span>csv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pulling-all-runs-for-the-25-26-school-year-to-determine-the-student-count-for-specific-runs" tabindex="-1"><a class="header-anchor" href="#pulling-all-runs-for-the-25-26-school-year-to-determine-the-student-count-for-specific-runs"><span>Pulling All Runs for the 25-26 School Year to Determine the Student Count for Specific Runs</span></a></h3><p>The <a href="https://github.com/yeatmanlab/Clean-ROAR-Data/blob/main/CheckDataCount.Rmd" target="_blank" rel="noopener noreferrer">script</a> below helps pull the data for the 25-26 School Year, combines the BigQuery output and cleans the data so the researcher can calculate the number of students who have run all four foundational assessments and three (swr, pa, letter) of the foundational reading assessments.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">bq query --nouse_legacy_sql \\</span>
<span class="line">&#39;EXPORT DATA</span>
<span class="line">OPTIONS(</span>
<span class="line"> uri=&quot;gs://roar-bq-export_internal_ctflores/2025-09-30_checkdata_runs_*.csv&quot;,</span>
<span class="line"> format=&quot;csv&quot;,</span>
<span class="line"> overwrite=true</span>
<span class="line">) AS</span>
<span class="line">SELECT</span>
<span class="line">  u.assessment_pid,</span>
<span class="line">  ur.* EXCEPT(</span>
<span class="line">      assigning_districts,</span>
<span class="line">      assigning_schools,</span>
<span class="line">      assigning_classes,</span>
<span class="line">      assigning_groups,</span>
<span class="line">      assigning_families</span>
<span class="line">  ),</span>
<span class="line">  TO_JSON_STRING(ur.assigning_districts) AS assigning_districts,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_schools) AS assigning_schools,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_classes) AS assigning_classes,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_groups) AS assigning_groups,</span>
<span class="line">  TO_JSON_STRING(ur.assigning_families) AS assigning_families</span>
<span class="line">FROM \`gse-roar-assessment.assessment.user_runs\` AS ur</span>
<span class="line">JOIN \`gse-roar-assessment.assessment.users\` AS u</span>
<span class="line">ON</span>
<span class="line">  u.roar_uid = ur.roar_uid</span>
<span class="line">WHERE</span>
<span class="line">  time_started &gt; &quot;2025-06-30&quot;</span>
<span class="line">&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># All run csv&#39;s pulled from BigQuery will have the same run column names </span>
<span class="line"># Set the run column names now</span>
<span class="line">run_colnames &lt;- c(&quot;assessment_pid&quot;,	&quot;document_name&quot;,	&quot;timestamp&quot;,	&quot;age_months_at_run&quot;,</span>
<span class="line">                  &quot;assignment_id&quot;,	&quot;best_run&quot;,	&quot;cloud_sync_timestamp&quot;,	&quot;completed&quot;,</span>
<span class="line">                  &quot;engagement_flags&quot;, &quot;is_demo_data&quot;, &quot;is_test_data&quot;,</span>
<span class="line">                  &quot;reliable&quot;,	&quot;run_id&quot;,	&quot;scores&quot;,	&quot;task_id&quot;,</span>
<span class="line">                  &quot;task_version&quot;,	&quot;time_finished&quot;,	&quot;time_started&quot;,	&quot;user_birth_month&quot;,</span>
<span class="line">                  &quot;user_birth_year&quot;,	&quot;user_grade_at_run&quot;,	&quot;user_school_level&quot;,</span>
<span class="line">                  &quot;variant_id&quot;,	&quot;roar_uid&quot;,	&quot;assigning_districts&quot;,	</span>
<span class="line">                  &quot;assigning_schools&quot;,	&quot;assigning_classes&quot;,	&quot;assigning_groups&quot;,</span>
<span class="line">                  &quot;assigning_families&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Define the base file name and the file path</span>
<span class="line"># You will have to change the date at the beginning of the base file name if you pulled on a different date </span>
<span class="line">checkdata_run_base &lt;- &quot;2025-09-30_checkdata_runs_&quot;</span>
<span class="line">checkdata_run_file_path &lt;- &quot;~/Documents/ROAR Primary Research Data/Check Data Count&quot;</span>
<span class="line"></span>
<span class="line"># For loop creates a list of data file csv&#39;s that we will read in all at once </span>
<span class="line">checkdata_run_data_list &lt;- list()</span>
<span class="line"></span>
<span class="line"># Change the number after the colon (:) to be however many csv&#39;s downloaded out of the query from BigQuery </span>
<span class="line">for (i in 0:48) {</span>
<span class="line">  file_name &lt;- sprintf(&quot;%s%012d.csv&quot;, checkdata_run_base, i) # Create a string of zeros </span>
<span class="line">  full_path &lt;- file.path(checkdata_run_file_path, file_name) # Connect the file paths (base and file name)</span>
<span class="line">  </span>
<span class="line">  if (file.exists(full_path)) {</span>
<span class="line">    checkdata_run_data_list[[i + 1]] &lt;- read.csv(full_path, header = FALSE, col.names = run_colnames) # Read in each separate csv </span>
<span class="line">  } else {</span>
<span class="line">    warning(paste(&quot;File&quot;, full_path, &quot;does not exist.&quot;)) # Print a warning if file does not exist </span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># Combine all the separate data files into one </span>
<span class="line">checkdata_run_combined_data &lt;- do.call(rbind, checkdata_run_data_list) </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Keep only the foundational reading measures </span>
<span class="line">all_foundation_data &lt;- checkdata_run_combined_data %&gt;% </span>
<span class="line">  filter(task_id %in% c(&quot;swr&quot;, &quot;pa&quot;, &quot;letter&quot;, &quot;sre&quot;))</span>
<span class="line"></span>
<span class="line"># Clean the data for complete and best reliable runs </span>
<span class="line"># Count how many assessments each student has taken in a single administration </span>
<span class="line">all_foundation_data_2526 &lt;- all_foundation_data %&gt;% </span>
<span class="line">  group_by(assessment_pid, assignment_id) %&gt;% </span>
<span class="line">  filter(best_run==&quot;true&quot;) %&gt;% </span>
<span class="line">  filter(reliable==&quot;true&quot;) %&gt;% </span>
<span class="line">  filter(completed==&quot;true&quot;) %&gt;% </span>
<span class="line">  filter(is_demo_data==&quot;false&quot;) %&gt;% </span>
<span class="line">  filter(is_test_data==&quot;false&quot;) %&gt;% </span>
<span class="line">  mutate(total_assessments = n())</span>
<span class="line"></span>
<span class="line"># Select important variables </span>
<span class="line">all_foundation_data_2526 &lt;- all_foundation_data_2526 %&gt;% </span>
<span class="line">  select(c(assessment_pid, task_id, assignment_id, total_assessments))</span>
<span class="line"></span>
<span class="line"># Filter for only students who have completed all 4 foundational assessments and </span>
<span class="line"># keep only unique pids </span>
<span class="line">foundational_only &lt;- all_foundation_data_2526 %&gt;% </span>
<span class="line">  distinct(assessment_pid, .keep_all = TRUE) %&gt;% </span>
<span class="line">  filter(total_assessments==4)</span>
<span class="line">#925</span>
<span class="line"></span>
<span class="line"># Filter for only students who have completed 3 foundational assessments and </span>
<span class="line"># keep only unique pids </span>
<span class="line">three_foundation &lt;- all_foundation_data_2526 %&gt;% </span>
<span class="line">  group_by(assessment_pid, assignment_id) %&gt;% </span>
<span class="line">  filter(task_id %in% c(&quot;swr&quot;, &quot;pa&quot;, &quot;letter&quot;)) %&gt;%</span>
<span class="line">  mutate(total_assessments = n()) %&gt;%</span>
<span class="line">  filter(total_assessments==3)</span>
<span class="line">#3291</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="roar-demographics-data" tabindex="-1"><a class="header-anchor" href="#roar-demographics-data"><span>ROAR Demographics Data</span></a></h2><h3 id="where-to-find-roar-demographics-data" tabindex="-1"><a class="header-anchor" href="#where-to-find-roar-demographics-data"><span>Where to find ROAR demographics data</span></a></h3><p>There are many places where demographics data exists and is safely stored.</p><ol><li><strong>ROAR-SchoolDistrict-Data</strong> is a secure Stanford Google Shared Drive. The data that is put in this could include any demographics data provided by a school. Carrie Townley-Flores and Kelly Wentzlof downloaded all student demographics for the 23-24 school year from the CSV schools and the Clever schools and placed the demographcis in this folder. These downloaded csv&#39;s where used in the majority of the technical manual. Additionally, this drive contains school assessment data that does not include ROAR data. The assessment data could be state standardized tests or other measures the school took the same year or previous years that they took ROAR including iReady, MCAS, ELPAC, etc.</li><li><strong>ROAR - CSV Upload</strong> is a secure Stanford Google Shared Drive. The data that is put in this includes all CSV Upload schools and their students&#39; accounts. Some schools provide demographics and the number of demographics per school varies. While we ask for race, ethnicity, gender, home language, free/reduced lunch status, english language learner status, special education status--only a few schools give all the demographics of all the students that take ROAR.</li><li><strong>ROAR - Primary Demographics Data</strong> is a secure Stanford Google Shared Drive. The data that is put in this is pulled from BigQuery. The data likely overlaps with the data in the other google drives, but <em>it does not hold longitudinal data</em>.</li></ol><h3 id="how-to-clean-roar-demographics-data" tabindex="-1"><a class="header-anchor" href="#how-to-clean-roar-demographics-data"><span>How to clean ROAR demographics data</span></a></h3><p>The demographics data can be difficult to wrangle for many reasons. Like most demographics data, there are opportunities for participants and researchers to enter data through open text boxes or drop downs with infinite options. Particularly, the race and ethnicity variables are often times filled with typing errors, grammatical errors, varying cases, and a variety of outcomes. The researcher will want to clean these variables and all other demographic variables to capture all the information they can while creating a concise and clean dataframe.</p><p>Feel free to build off of this <a href="https://github.com/yeatmanlab/Clean-ROAR-Data/blob/main/Clean_Demographics.Rmd" target="_blank" rel="noopener noreferrer">cleaning script</a> for cleaning demographics pulled from BigQuery.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># All run csv&#39;s pulled from BigQuery will have the same run column names </span>
<span class="line"># Set the run column names now</span>
<span class="line">demo_colnames &lt;- c(&quot;document_name&quot;, &quot;timestamp&quot;,	&quot;archived&quot;,	&quot;assessment_pid&quot;,</span>
<span class="line">                   &quot;assessment_uid&quot;,	&quot;dob&quot;,	&quot;ell_status&quot;,	&quot;frl_status&quot;,	</span>
<span class="line">                   &quot;gender&quot;,	&quot;grade&quot;,	&quot;hispanic_ethnicity&quot;,	&quot;iep_status&quot;,</span>
<span class="line">                   &quot;last_roar_sync&quot;,	&quot;last_updated&quot;,	&quot;school_level&quot;,	&quot;sis_id&quot;,</span>
<span class="line">                   &quot;sso_type&quot;,	&quot;state_id&quot;,	&quot;student_number&quot;,	&quot;user_type&quot;,</span>
<span class="line">                   &quot;username&quot;,	&quot;email&quot;,	&quot;roar_uid&quot;,	&quot;classes_current&quot;,</span>
<span class="line">                   &quot;classes_all&quot;,	&quot;districts_current&quot;,	&quot;districts_all&quot;,</span>
<span class="line">                   &quot;families_current&quot;,	&quot;families_all&quot;,	&quot;groups_current&quot;,</span>
<span class="line">                   &quot;groups_all&quot;,	&quot;schools_current&quot;,	&quot;schools_all&quot;,	&quot;race&quot;,</span>
<span class="line">                   &quot;tasks&quot;,	&quot;variants&quot;,	&quot;home_language&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Define the base file name and the file path</span>
<span class="line"># You will have to change the date at the beginning of the base file name if you pulled on a different date </span>
<span class="line">demo_base &lt;- &quot;2025-07-07_demographics_&quot;</span>
<span class="line">demo_file_path &lt;- &quot;~/Documents/ROAR Primary Demographics Data&quot;</span>
<span class="line"></span>
<span class="line"># For loop creates a list of data file csv&#39;s that we will read in all at once </span>
<span class="line">demo_data_list &lt;- list()</span>
<span class="line"></span>
<span class="line"># Change the number after the colon (:) to be however many csv&#39;s downloaded out of the query from BigQuery </span>
<span class="line">for (i in 0:20) {</span>
<span class="line">  file_name &lt;- sprintf(&quot;%s%012d.csv&quot;, demo_base, i) # Create a string of zeros </span>
<span class="line">  full_path &lt;- file.path(demo_file_path, file_name) # Connect the file paths (base and file name)</span>
<span class="line">  </span>
<span class="line">  if (file.exists(full_path)) {</span>
<span class="line">    demo_data_list[[i + 1]] &lt;- read.csv(full_path, header = FALSE, col.names = demo_colnames) # Read in each separate csv </span>
<span class="line">  } else {</span>
<span class="line">    warning(paste(&quot;File&quot;, full_path, &quot;does not exist.&quot;)) # Print a warning if file does not exist </span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"># Combine all the separate data files into one </span>
<span class="line">demo_combined_data &lt;- do.call(rbind, demo_data_list) %&gt;% </span>
<span class="line">  select(-c(tasks, variants))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">demo_cleaned_data &lt;- demo_combined_data %&gt;%</span>
<span class="line">  mutate(classes_current = str_remove_all(classes_current, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(classes_all = str_remove_all(classes_all, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(districts_current = str_remove_all(districts_current, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(districts_all = str_remove_all(districts_all, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(schools_current = str_remove_all(schools_current, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(schools_all = str_remove_all(schools_all, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(families_current = str_remove_all(families_current, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(families_all = str_remove_all(families_all, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(groups_current = str_remove_all(groups_current, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(groups_all = str_remove_all(groups_all, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(race = str_remove_all(race, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;)) %&gt;% </span>
<span class="line">  mutate(home_language = str_remove_all(home_language, &quot;[\\\\[\\\\]\\\\\\&quot;\\\\\\\\]&quot;))</span>
<span class="line"></span>
<span class="line">demo_cleaned_data &lt;- demo_cleaned_data %&gt;% </span>
<span class="line">  mutate_if(is.character, list(~na_if(.,&quot;&quot;)))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">write.csv(demo_cleaned_data, &quot;~/Documents/ROAR Primary Demographics Data/demographics_2025-07-07.csv&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Only want to keep student demographic data </span>
<span class="line">demo &lt;- demo_cleaned_data %&gt;% </span>
<span class="line">  filter(user_type==&quot;student&quot;)</span>
<span class="line"># [1] &quot;student&quot; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform grades </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(grade = ifelse(grade %in% c(&quot;K&quot;, &quot;Kindergarten&quot;, &quot;k&quot;), &quot;Kindergarten&quot;, </span>
<span class="line">                        ifelse(grade %in% c(&quot;5&quot;, &quot;5th&quot;), &quot;5&quot;, </span>
<span class="line">                               ifelse(grade %in% c(&quot;TK&quot;, &quot;TransitionalKindergarten&quot;), </span>
<span class="line">                                      &quot;Transitional Kindergarten&quot;, </span>
<span class="line">                                      ifelse(grade %in% c(&quot;PK&quot;, &quot;PreKindergarten&quot;, &quot;Prek&quot;), </span>
<span class="line">                                             &quot;Pre-Kindergarten&quot;, </span>
<span class="line">                                             ifelse(grade %in% c(&quot;\`12&quot;, &quot;12&quot;), &quot;12&quot;, </span>
<span class="line">                                                    ifelse(grade %in%</span>
<span class="line">                                                             c(&quot;Invalid&quot;, </span>
<span class="line">                                                               &quot;99&quot;, &quot;24&quot;, &quot;26&quot;, </span>
<span class="line">                                                               &quot;25&quot;, &quot;13&quot;, &quot;22&quot;, </span>
<span class="line">                                                               &quot;23&quot;, &quot;21&quot;, </span>
<span class="line">                                                               &quot;Other&quot;, &quot;Ungraded&quot;), </span>
<span class="line">                                                           &quot;Other&quot;, grade)))))))</span>
<span class="line">#  [1] &quot;3&quot;                         &quot;Kindergarten&quot;             </span>
<span class="line">#  [3] &quot;1&quot;                         &quot;6&quot;                        </span>
<span class="line">#  [5] &quot;7&quot;                         &quot;11&quot;                       </span>
<span class="line">#  [7] &quot;4&quot;                         &quot;12&quot;                       </span>
<span class="line">#  [9] &quot;2&quot;                         &quot;10&quot;                       </span>
<span class="line"># [11] &quot;Other&quot;                     &quot;5&quot;                        </span>
<span class="line"># [13] &quot;8&quot;                         &quot;9&quot;                        </span>
<span class="line"># [15] &quot;Transitional Kindergarten&quot; &quot;Pre-Kindergarten&quot;         </span>
<span class="line"># [17] NA     </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform gender</span>
<span class="line">demo &lt;- demo %&gt;%</span>
<span class="line">  mutate(gender = ifelse(gender %in% c(&quot;M&quot;, &quot;Male&quot;, &quot;male&quot;, &quot;m&quot;), &quot;Male&quot;, </span>
<span class="line">                         ifelse(gender %in% c(&quot;F&quot;, &quot;female&quot;, &quot;f&quot;, &quot;Female&quot;), </span>
<span class="line">                                &quot;Female&quot;, </span>
<span class="line">                                ifelse(gender %in% c(&quot;X&quot;, &quot;N&quot;, &quot;NB&quot;, </span>
<span class="line">                                                     &quot;Non-Binary&quot;, </span>
<span class="line">                                                     &quot;Genderfluid/Gender Non-Conforming&quot;, </span>
<span class="line">                                                     &quot;dns&quot;, &quot;Other&quot;), &quot;Other&quot;, </span>
<span class="line">                                       ifelse(gender %in% c(NA, &quot;na&quot;), NA, </span>
<span class="line">                                              gender)))))</span>
<span class="line"># [1] &quot;Male&quot;   NA       &quot;Female&quot; &quot;Other&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform ell_status </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(ell_status = ifelse(ell_status %in% c(&quot;N&quot;, &quot;No&quot;, &quot;false&quot;, &quot;no&quot;), 0, </span>
<span class="line">                             ifelse(ell_status %in% c(&quot;Yes&quot;, &quot;yes&quot;, &quot;Y&quot;), 1, </span>
<span class="line">                                    ell_status)))</span>
<span class="line"></span>
<span class="line"># [1] NA  &quot;0&quot; &quot;1&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">## Free lunch binary variable </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(free_lunch = ifelse(frl_status %in% c(&quot;Free&quot;, &quot;free&quot;), 1, 0)) </span>
<span class="line"></span>
<span class="line">## Reduced lunch binary variable </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(reduced_lunch = ifelse(frl_status %in% c(&quot;Reduced&quot;, &quot;reduced&quot;), 1, 0))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform frl_status</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(frl_status = ifelse(frl_status %in% c(&quot;Free&quot;, &quot;yes&quot;, &quot;YES&quot;, &quot;Reduced&quot;, </span>
<span class="line">                                               &quot;Yes&quot;, &quot;free&quot;, &quot;Y&quot;, &quot;reduced&quot;), 1, </span>
<span class="line">                             ifelse(frl_status %in% c(NA, &quot;N/A&quot;), NA, </span>
<span class="line">                                    ifelse(frl_status %in% c(&quot;false&quot;, &quot;No&quot;, &quot;no&quot;, </span>
<span class="line">                                                             &quot;N&quot;, &quot;NO&quot;, &quot;Paid&quot;), 0, </span>
<span class="line">                                           frl_status))))</span>
<span class="line"># [1] NA  &quot;1&quot; &quot;0&quot;</span>
<span class="line"></span>
<span class="line">## Change values to NA for frl binary variables </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(free_lunch = ifelse(is.na(frl_status), NA, </span>
<span class="line">                           free_lunch))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(reduced_lunch = ifelse(is.na(frl_status), NA, </span>
<span class="line">                           reduced_lunch))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform iep_status </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(iep_status = ifelse(iep_status %in% c(&quot;Y&quot;, &quot;Yes&quot;, &quot;yes&quot;, &quot;YES&quot;), 1, </span>
<span class="line">                             ifelse(iep_status %in% c(&quot;false&quot;, &quot;No&quot;, &quot;no&quot;, &quot;NO&quot;, </span>
<span class="line">                                                      &quot;N&quot;), 0, iep_status)))</span>
<span class="line"># [1] NA  &quot;1&quot; &quot;0&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform hispanic ethnicity </span>
<span class="line">demo &lt;- demo %&gt;% mutate(hispanic_ethnicity = </span>
<span class="line">                          ifelse(hispanic_ethnicity %in% c(&quot;no&quot;, &quot;No&quot;, &quot;false&quot;, &quot;n&quot;, &quot;N&quot;), 0, </span>
<span class="line">                               ifelse(hispanic_ethnicity %in% c(&quot;Y&quot;, &quot;Yes&quot;, &quot;yes&quot;), 1, </span>
<span class="line">                                      ifelse(hispanic_ethnicity %in% c(NA, &quot;Not reported&quot;), </span>
<span class="line">                                             NA, hispanic_ethnicity))))</span>
<span class="line"># [1] &quot;0&quot; NA  &quot;1&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">## Black/African American binary variable </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(black_aa = ifelse(race %in% </span>
<span class="line">                              c(&quot;Black&quot;, &quot;African-American/Black&quot;, </span>
<span class="line">                                &quot;Black/AA&quot;, &quot;BLACK&quot;, &quot;black&quot;, </span>
<span class="line">                                &quot;Black or African American&quot;, </span>
<span class="line">                                &quot;African-American&quot;, </span>
<span class="line">                                &quot;Black/Non Hispanic&quot;, &quot;B&quot;, </span>
<span class="line">                                &quot;African American/Black&quot;, </span>
<span class="line">                                &quot;African American&quot;, </span>
<span class="line">                                &quot;black or african American&quot;, </span>
<span class="line">                                &quot;Black,African American&quot;, </span>
<span class="line">                                &quot;African American,Eritrea&quot;, </span>
<span class="line">                                &quot;Black/African American&quot;, </span>
<span class="line">                                &quot;Black,African America&quot;, </span>
<span class="line">                                &quot;African American,Ethiopian&quot;, </span>
<span class="line">                                &quot;Black, Hispanic&quot;, </span>
<span class="line">                                &quot;multiracial,african american&quot;, </span>
<span class="line">                                &quot;Black or African American, Latinx&quot;, </span>
<span class="line">                                &quot;African-American/Black/White&quot;, </span>
<span class="line">                                &quot;black,white&quot;, </span>
<span class="line">                                &quot;african american,white&quot;, </span>
<span class="line">                                &quot;Asian,Black,African American,White&quot;, </span>
<span class="line">                                &quot;multiracial, african american&quot;), 1, 0))</span>
<span class="line"></span>
<span class="line">## White </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(white = ifelse(race %in%</span>
<span class="line">                           c(&quot;White&quot;, &quot;WHITE&quot;, &quot;white&quot;, &quot;White/Non Hispanic&quot;, </span>
<span class="line">                             &quot;Caucasian&quot;, &quot;Caucasian/White&quot;, &quot;W&quot;, &quot;white &quot;, </span>
<span class="line">                            &quot;White,NA,NA,NA&quot;, &quot;caucasian&quot;,  &quot;Moroccan&quot;, </span>
<span class="line">                            &quot;Portuguese&quot;, &quot;White,Hipanic,Filipino&quot;, </span>
<span class="line">                            &quot;Asian,White&quot;, </span>
<span class="line">                            &quot;middle eastern,white,api&quot;, </span>
<span class="line">                            &quot;white,api,middle eastern&quot;,</span>
<span class="line">                            &quot;Asian, White&quot;, &quot;MR&quot;, &quot;Asian, white&quot;, </span>
<span class="line">                            &quot;Asian,White,Hispanic,Latino&quot;, </span>
<span class="line">                            &quot;African-American/Black/White&quot;, </span>
<span class="line">                            &quot;native hawaiian or other pacific islander,hispanic or latino,white&quot;, </span>
<span class="line">                            &quot;african american,white&quot;, </span>
<span class="line">                            &quot;Asian,Black,African American,White&quot;, </span>
<span class="line">                            &quot;black,white&quot;, </span>
<span class="line">                            &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                            &quot;Native Hawaiian or Pacific Islander, Caucasian&quot;, </span>
<span class="line">                            &quot;Asian, White,NA,NA,NA&quot;, </span>
<span class="line">                            &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                            &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                            &quot;Native Hawaiian or Pacific Islander,Caucasian&quot;,</span>
<span class="line">                            &quot;White,Hipanic,Latino&quot;), 1, 0))</span>
<span class="line"></span>
<span class="line">## Asian </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(asian = ifelse(race %in% </span>
<span class="line">                           c(&quot;Asian&quot;, &quot;ASIAN&quot;, &quot;AS&quot;, &quot;asian&quot;, &quot;Asian,Afghan&quot;, </span>
<span class="line">                             &quot;Asian,Burmese&quot;,&quot;Asian,Rohingya&quot;, &quot;Filipino&quot;, </span>
<span class="line">                             &quot;Asian,Nepali&quot;, &quot;Mongolian&quot;, &quot;Cambodian&quot;, </span>
<span class="line">                             &quot;Asian,White&quot;, &quot;Asian, White,NA,NA,NA&quot;, </span>
<span class="line">                             &quot;Asian, White&quot;, &quot;Asian, white&quot;, </span>
<span class="line">                             &quot;Asian,White,Hispanic,Latino&quot;, </span>
<span class="line">                             &quot;Asian,Black,African American,White&quot;, </span>
<span class="line">                             &quot;middle eastern,white,api&quot;, </span>
<span class="line">                             &quot;white,api,middle eastern&quot;, </span>
<span class="line">                             &quot;White,Hispanic,Filipino&quot;, </span>
<span class="line">                             &quot;White,Hipanic,Latino&quot;), 1, 0)) </span>
<span class="line"></span>
<span class="line">## Native Hawaiian/Other Pacific Islander </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(native_hawaiian_pacific_island = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Hawaiian or Other Pacific Islander&quot;, </span>
<span class="line">                                          &quot;Pacific Islander&quot;, </span>
<span class="line">                                          &quot;Native Hawaiian or Other Pacific Islander&quot;, </span>
<span class="line">                                          &quot;Native Hawiian/Other Pac Islander&quot;, </span>
<span class="line">                                          &quot;Native Hawaiian or Pacific Islander, Caucasian&quot;, </span>
<span class="line">                                          &quot;native hawaiian or other pacific islander,hispanic or latino,white&quot;), </span>
<span class="line">                                      1, 0))</span>
<span class="line"></span>
<span class="line">## American Indian/Alaska Native </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(american_indian_alaska = ifelse(race %in% </span>
<span class="line">                                           c(&quot;American Indian&quot;, </span>
<span class="line">                                             &quot;Native American&quot;, </span>
<span class="line">                                             &quot;American Indian/Alaska Native&quot;, </span>
<span class="line">                                             &quot;American Indian or Alaska Native&quot;, </span>
<span class="line">                                             &quot;American Indian/Alaskan Native&quot;, </span>
<span class="line">                                             &quot;American Indian,Alaska Native,Hispanic,Latino&quot;, </span>
<span class="line">                                             &quot;American Indian, Hispanic or Latino&quot;), </span>
<span class="line">                                         1, 0)) </span>
<span class="line"></span>
<span class="line">## Hispanic/Latinx </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(hispanic_latinx = ifelse(race %in% </span>
<span class="line">                                    c(&quot;Hispanic&quot;, &quot;Hispanic/Latino&quot;, </span>
<span class="line">                                     &quot;Hispanic/latino&quot;, </span>
<span class="line">                                     &quot;Hispanic or Latino&quot;, </span>
<span class="line">                                     &quot;Hispanic, Latino&quot;, &quot;Latinx&quot;, </span>
<span class="line">                                     &quot;hispanic&quot;, &quot;hispanic/Latino&quot;, </span>
<span class="line">                                     &quot;Hispanic,Latino&quot;, </span>
<span class="line">                                     &quot;Hispanic,Latino,NA,NA&quot;, </span>
<span class="line">                                     &quot;Hispanic Latino&quot;, &quot;H&quot;, </span>
<span class="line">                                     &quot;Latino or Hispanic&quot;, </span>
<span class="line">                                     &quot;White,Hispanic,Filipino&quot;, </span>
<span class="line">                                     &quot;Black, Hispanic&quot;, </span>
<span class="line">                                     &quot;American Indian,Alaska Native,Hispanic,Latino&quot;, </span>
<span class="line">                                     &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                                     &quot;Black or African American, Latinx&quot;, </span>
<span class="line">                                     &quot;Asian,White,Hispanic,Latino&quot;, </span>
<span class="line">                                     &quot;White,Hipanic,Latino&quot;, </span>
<span class="line">                                     &quot;native hawaiian or other pacific islander,hispanic or latino,white&quot;, </span>
<span class="line">                                     &quot;American Indian, Hispanic or Latino&quot;, </span>
<span class="line">                                     &quot;White,Hipanic,Latino&quot;), </span>
<span class="line">                                  1, 0)) </span>
<span class="line"></span>
<span class="line">## Middle Eastern/North African</span>
<span class="line">demo &lt;- demo %&gt;% mutate(middle_east_north_african = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Arabic&quot;), 1, 0))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Create uniform race </span>
<span class="line">## Black/African American </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Black&quot;, &quot;African-American/Black&quot;, </span>
<span class="line">                                          &quot;Black/AA&quot;, &quot;BLACK&quot;, &quot;black&quot;, </span>
<span class="line">                                          &quot;Black or African American&quot;, </span>
<span class="line">                                          &quot;African-American&quot;, </span>
<span class="line">                                          &quot;Black/Non Hispanic&quot;, &quot;B&quot;, </span>
<span class="line">                                          &quot;African American/Black&quot;, </span>
<span class="line">                                          &quot;African American&quot;, </span>
<span class="line">                                          &quot;black or african American&quot;, </span>
<span class="line">                                          &quot;Black,African American&quot;, </span>
<span class="line">                                          &quot;African American,Eritrea&quot;, </span>
<span class="line">                                          &quot;Black/African American&quot;, </span>
<span class="line">                                          &quot;Black,African America&quot;, </span>
<span class="line">                                          &quot;African American,Ethiopian&quot;), </span>
<span class="line">                                      &quot;Black/African American&quot;, race))</span>
<span class="line"></span>
<span class="line">## White</span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;White&quot;, &quot;WHITE&quot;, &quot;white&quot;, </span>
<span class="line">                                          &quot;White/Non Hispanic&quot;, &quot;Caucasian&quot;, </span>
<span class="line">                                          &quot;Caucasian/White&quot;, &quot;W&quot;, &quot;white &quot;, </span>
<span class="line">                                          &quot;White,NA,NA,NA&quot;, &quot;caucasian&quot;, </span>
<span class="line">                                          &quot;Moroccan&quot;, &quot;Portuguese&quot;), &quot;White&quot;, </span>
<span class="line">                                      race))</span>
<span class="line"></span>
<span class="line">## Asian </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Asian&quot;, &quot;ASIAN&quot;, &quot;AS&quot;, &quot;asian&quot;, </span>
<span class="line">                                          &quot;Asian,Afghan&quot;, &quot;Asian,Burmese&quot;, </span>
<span class="line">                                          &quot;Asian,Rohingya&quot;, &quot;Filipino&quot;, </span>
<span class="line">                                          &quot;Asian,Nepali&quot;, &quot;Mongolian&quot;, </span>
<span class="line">                                          &quot;Cambodian&quot;), &quot;Asian&quot;, </span>
<span class="line">                                      race))</span>
<span class="line"></span>
<span class="line">## Native Hawaiian/Other Pacific Islander </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Hawaiian or Other Pacific Islander&quot;, </span>
<span class="line">                                          &quot;Pacific Islander&quot;, </span>
<span class="line">                                          &quot;Native Hawaiian or Other Pacific Islander&quot;, </span>
<span class="line">                                          &quot;Native Hawiian/Other Pac Islander&quot;), </span>
<span class="line">                                      &quot;Native Hawaiian/Other Pacific Islander&quot;, </span>
<span class="line">                                      race))</span>
<span class="line"></span>
<span class="line">## Multiracial </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Two or More Races&quot;, </span>
<span class="line">                                          &quot;White,Hipanic,Filipino&quot;, </span>
<span class="line">                                          &quot;Multi&quot;, &quot;Two or more races&quot;, </span>
<span class="line">                                          &quot;Multiracial&quot;, </span>
<span class="line">                                          &quot;Multiple Categories Reported&quot;, </span>
<span class="line">                                          &quot;Asian,White&quot;, &quot;MultiEthinic&quot;, </span>
<span class="line">                                          &quot;mixed&quot;, &quot;multiracial, african american&quot;, </span>
<span class="line">                                          &quot;MultiEthnic&quot;, </span>
<span class="line">                                          &quot;middle eastern,white,api&quot;, </span>
<span class="line">                                          &quot;white,api,middle eastern&quot;, </span>
<span class="line">                                          &quot;Asian, White&quot;, &quot;MR&quot;, &quot;Asian, white&quot;, </span>
<span class="line">                                          &quot;Asian,White,Hispanic,Latino&quot;, </span>
<span class="line">                                          &quot;Multi Racial&quot;, </span>
<span class="line">                                          &quot;African-American/Black/White&quot;, </span>
<span class="line">                                          &quot;multiracial&quot;, </span>
<span class="line">                                          &quot;native hawaiian or other pacific islander,hispanic or latino,white&quot;, </span>
<span class="line">                                          &quot;african american,white&quot;, </span>
<span class="line">                                          &quot;Asian,Black,African American,White&quot;, </span>
<span class="line">                                          &quot;multiracial,african american&quot;, </span>
<span class="line">                                          &quot;black,white&quot;, </span>
<span class="line">                                          &quot;American Indian, Hispanic or Latino&quot;, </span>
<span class="line">                                          &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                                          &quot;Native Hawaiian or Pacific Islander, Caucasian&quot;, </span>
<span class="line">                                          &quot;Black or African American, Latinx&quot;, </span>
<span class="line">                                          &quot;Asian, White,NA,NA,NA&quot;, </span>
<span class="line">                                          &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                                          &quot;American Indian,Alaska Native,Hispanic,Latino&quot;, </span>
<span class="line">                                          &quot;Black, Hispanic&quot;, </span>
<span class="line">                                          &quot;White,Hispanic,Latino&quot;, </span>
<span class="line">                                          &quot;African American,Ethiopian&quot;, </span>
<span class="line">                                          &quot;Black or African American, Latinx&quot;, </span>
<span class="line">                                          &quot;Native Hawaiian or Pacific Islander,Caucasian&quot;, </span>
<span class="line">                                          &quot;American Indian, Hispanic or Latino&quot;,</span>
<span class="line">                                          &quot;White,Hipanic,Latino&quot;), </span>
<span class="line">                                      &quot;Multiracial&quot;, race))</span>
<span class="line"></span>
<span class="line">## NA </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(NA, &quot;Unknown&quot;, &quot;other&quot;, </span>
<span class="line">                                          &quot;Unspecified&quot;, &quot;Not reported&quot;, </span>
<span class="line">                                          &quot;Other&quot;, &quot;unspecified&quot;, </span>
<span class="line">                                          &quot;Decline to respond,NA,NA,NA&quot;, </span>
<span class="line">                                          &quot;Race not listed&quot;, </span>
<span class="line">                                          &quot;Race unsure/not reported&quot;, </span>
<span class="line">                                          &quot;NA&quot;, &quot;P&quot;, &quot;A&quot;, </span>
<span class="line">                                          &quot;Brazillian&quot;, &quot;T&quot;), NA, race))</span>
<span class="line">## Change values to NA for race binary variables </span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(black_aa = ifelse(is.na(race), NA, </span>
<span class="line">                           black_aa))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(white = ifelse(is.na(race), NA, </span>
<span class="line">                           white))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(asian = ifelse(is.na(race), NA, </span>
<span class="line">                           asian))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(native_hawaiian_pacific_island = ifelse(is.na(race), NA, </span>
<span class="line">                           native_hawaiian_pacific_island))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(hispanic_latinx = ifelse(is.na(race), NA, </span>
<span class="line">                           hispanic_latinx))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(middle_east_north_african = ifelse(is.na(race), NA, </span>
<span class="line">                           middle_east_north_african))</span>
<span class="line">demo &lt;- demo %&gt;% </span>
<span class="line">  mutate(american_indian_alaska = ifelse(is.na(race), NA, </span>
<span class="line">                           american_indian_alaska))</span>
<span class="line"></span>
<span class="line">## American Indian/Alaska Native </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;American Indian&quot;, </span>
<span class="line">                                          &quot;Native American&quot;, </span>
<span class="line">                                          &quot;American Indian/Alaska Native&quot;, </span>
<span class="line">                                          &quot;American Indian or Alaska Native&quot;, </span>
<span class="line">                                          &quot;American Indian/Alaskan Native&quot;), </span>
<span class="line">                                      &quot;American Indian/Alaska Native&quot;, race))</span>
<span class="line"></span>
<span class="line">## Hispanic/Latinx </span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Hispanic&quot;, &quot;Hispanic/Latino&quot;, </span>
<span class="line">                                          &quot;Hispanic/latino&quot;, </span>
<span class="line">                                          &quot;Hispanic or Latino&quot;, </span>
<span class="line">                                          &quot;Hispanic, Latino&quot;, &quot;Latinx&quot;, </span>
<span class="line">                                          &quot;hispanic&quot;, &quot;hispanic/Latino&quot;, </span>
<span class="line">                                          &quot;Hispanic,Latino&quot;, </span>
<span class="line">                                          &quot;Hispanic,Latino,NA,NA&quot;, </span>
<span class="line">                                          &quot;Hispanic Latino&quot;, &quot;H&quot;, </span>
<span class="line">                                          &quot;Latino or Hispanic&quot;), &quot;Hispanic/Latinx&quot;, </span>
<span class="line">                                      race))</span>
<span class="line"></span>
<span class="line">## Middle Eastern/North African</span>
<span class="line">demo &lt;- demo %&gt;% mutate(race = ifelse(race %in% </span>
<span class="line">                                        c(&quot;Arabic&quot;), </span>
<span class="line">                                      &quot;Middle Eastern/North African&quot;, race))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># 1 option for identifying duplicate asessment pid rows that need to be removed and how to pick which one to keep </span>
<span class="line"># Identify pids that are duplicated </span>
<span class="line">duplicated_pids_list &lt;- demo$assessment_pid[duplicated(demo$assessment_pid)]</span>
<span class="line">duplicated_pids_df &lt;- demo %&gt;%</span>
<span class="line">  filter(assessment_pid %in% duplicated_pids_list) #961</span>
<span class="line"></span>
<span class="line"># Create a binary variable to determine who to remove (duplicates) -- lines who are not duplicated we keep, lines who are duplicated and have the word &quot;roar&quot; in it are also kept because this is the project that holds the most data  </span>
<span class="line">demo_unique &lt;- demo %&gt;% mutate(remove = ifelse((!assessment_pid %in% duplicated_pids_list), 0, </span>
<span class="line">                                        ifelse(grepl(&quot;roar&quot;, document_name), 0, 1)))</span>
<span class="line"></span>
<span class="line"># Filter out those who needed to be removed -- lines who are duplicated and do not have &quot;roar&quot; in the document_name</span>
<span class="line">demo_unique &lt;- demo_unique %&gt;% </span>
<span class="line">  filter(remove==0)</span>
<span class="line"></span>
<span class="line"># Determine if there are any duplicates left </span>
<span class="line">duplicated_pids_list_2 &lt;- demo_unique$assessment_pid[duplicated(demo_unique$assessment_pid)]</span>
<span class="line">duplicated_pids_df_2 &lt;- demo_unique %&gt;%</span>
<span class="line">  filter(assessment_pid %in% duplicated_pids_list_2) #47 </span>
<span class="line"></span>
<span class="line"># Now we know that the remaining duplicates just have different roar_uid and everything else is the same, so we can just keep one row of the duplicated </span>
<span class="line">demo_unique &lt;- demo_unique %&gt;% </span>
<span class="line">  distinct(assessment_pid, .keep_all = TRUE) </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">write.csv(demo, &quot;~/Documents/ROAR Primary Demographics Data/cleaned_demographics_2025-07-07.csv&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,46)]))}const d=n(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/researcher/data-organization/","title":"Data Organization","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"BigQuery - a tool to help researchers pull ROAR data in an efficient way","slug":"bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way","link":"#bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way","children":[]},{"level":2,"title":"Guidelines to organizing pulled ROAR assessment data","slug":"guidelines-to-organizing-pulled-roar-assessment-data","link":"#guidelines-to-organizing-pulled-roar-assessment-data","children":[{"level":3,"title":"Pulling All Runs of a Single Assessment using BigQuery","slug":"pulling-all-runs-of-a-single-assessment-using-bigquery","link":"#pulling-all-runs-of-a-single-assessment-using-bigquery","children":[]},{"level":3,"title":"Pulling All Trials of a Single Assessment using BigQuery","slug":"pulling-all-trials-of-a-single-assessment-using-bigquery","link":"#pulling-all-trials-of-a-single-assessment-using-bigquery","children":[]},{"level":3,"title":"Pulling All Runs of a Single Assessment by Data and Schools using BigQuery","slug":"pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery","link":"#pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery","children":[]},{"level":3,"title":"Pulling All Runs for the 25-26 School Year to Determine the Student Count for Specific Runs","slug":"pulling-all-runs-for-the-25-26-school-year-to-determine-the-student-count-for-specific-runs","link":"#pulling-all-runs-for-the-25-26-school-year-to-determine-the-student-count-for-specific-runs","children":[]}]},{"level":2,"title":"ROAR Demographics Data","slug":"roar-demographics-data","link":"#roar-demographics-data","children":[{"level":3,"title":"Where to find ROAR demographics data","slug":"where-to-find-roar-demographics-data","link":"#where-to-find-roar-demographics-data","children":[]},{"level":3,"title":"How to clean ROAR demographics data","slug":"how-to-clean-roar-demographics-data","link":"#how-to-clean-roar-demographics-data","children":[]}]}],"git":{"updatedTime":1759254451000,"contributors":[{"name":"Kelly Wentzlof","username":"Kelly Wentzlof","email":"159967652+kellywentz@users.noreply.github.com","commits":2,"url":"https://github.com/Kelly Wentzlof"},{"name":"kellywentz","username":"kellywentz","email":"159967652+kellywentz@users.noreply.github.com","commits":6,"url":"https://github.com/kellywentz"},{"name":"Elijah Kelly","username":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1,"url":"https://github.com/Elijah Kelly"}]},"filePathRelative":"researcher/data-organization/README.md"}');export{d as comp,r as data};
