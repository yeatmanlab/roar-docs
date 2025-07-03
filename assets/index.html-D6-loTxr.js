import{_ as e,c as a,d as n,o as i}from"./app-mpVIenb5.js";const l={};function t(r,s){return i(),a("div",null,s[0]||(s[0]=[n(`<h1 id="data-organization" tabindex="-1"><a class="header-anchor" href="#data-organization"><span>Data Organization</span></a></h1><h2 id="bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way" tabindex="-1"><a class="header-anchor" href="#bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way"><span>BigQuery - a tool to help researchers pull ROAR data in an efficient way</span></a></h2><ul><li>Please read Adam’s documentation and introduction to <a href="https://yeatmanlab.github.io/roar-docs/bigquery/" target="_blank" rel="noopener noreferrer">BigQuery</a>. <ol><li><a href="https://yeatmanlab.github.io/roar-docs/bigquery/#installation-and-initialization" target="_blank" rel="noopener noreferrer">Installing BigQuery</a></li><li><a href="https://yeatmanlab.github.io/roar-docs/bigquery/#querying-data" target="_blank" rel="noopener noreferrer">Learning SQL to query data</a></li><li><a href="https://yeatmanlab.github.io/roar-docs/bigquery/#exporting-large-queries-to-a-google-cloud-bucket" target="_blank" rel="noopener noreferrer">Exporting data to a google cloud bucket</a></li><li>Learn more about ROAR data through the BigQuery Schemas</li></ol></li></ul><h2 id="guidelines-to-organizing-pulled-data" tabindex="-1"><a class="header-anchor" href="#guidelines-to-organizing-pulled-data"><span>Guidelines to organizing pulled data</span></a></h2><ol><li>Store outputted csv’s on your own system (you can delete after you have compiled if they take up too much storage)</li><li>Do not store individual outputted csv’s from BigQuery on Lab Google Drives (it will become too messy)</li><li>If you are working on an existing project, store the data in the corresponding folder in the ROAR Research Data Drive</li><li>If you are starting a new project, create a new folder in the ROAR Research Data Drive</li><li><strong>DO NOT make any new folders on the ROAR Primary Research Data Drive!</strong></li></ol><h2 id="pulling-all-runs-of-a-single-assessment-using-bigquery" tabindex="-1"><a class="header-anchor" href="#pulling-all-runs-of-a-single-assessment-using-bigquery"><span>Pulling All Runs of a Single Assessment using BigQuery</span></a></h2><ol><li>Make a copy of this page into your own drive or folder.</li><li>Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation)</li><li>Copy and paste the edited code into your terminal to pull all runs of a single assessment.</li><li>Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data.</li><li>In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_all_runs_###############.csv.</li><li>Select all of the ones you would like to download. Google bucket will create code for you to download to your system.</li><li>Create a singular folder with all downloaded csv’s.</li><li>Direct yourself to the GitHub Repository “<a href="https://github.com/yeatmanlab/Clean-ROAR-Data" target="_blank" rel="noopener noreferrer">Clean-ROAR-Data</a>”.</li><li>Clone the repository by clicking the “&lt;&gt; Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”.</li><li>Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology runs, direct yourself to Clean_ROARComp_Runs.Rmd).</li><li>Find the code chunks that match the assessment of the data you have pulled.</li><li>Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull.</li></ol><p><strong>Note</strong>: The extra code dealing with “assigning_” unpacks the JSON strings associated with those variables. Other variables such as “scores” are handled post pull.</p><p><strong>Note</strong>: Remove --comments before running query.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">bq query <span class="token comment">--nouse_legacy_sql \\</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pulling-all-trials-of-a-single-assessment-using-bigquery" tabindex="-1"><a class="header-anchor" href="#pulling-all-trials-of-a-single-assessment-using-bigquery"><span>Pulling All Trials of a Single Assessment using BigQuery</span></a></h2><ol><li>Make a copy of this page into your own drive or folder.</li><li>Input the correct text for each of the empty variables (e.g., google_bucket_name, year-month-day, assessment_abbreviation)</li><li>Copy and paste the edited code into your terminal to pull all trials of a single assessment.</li><li>Once you run this code in your terminal, you should direct yourself to the google bucket where you saved the data.</li><li>In the google bucket, you will find a large set of csv’s which should be labeled with year-month-day_assessment_abbreviation_alltrials_###############.csv.</li><li>Select all of the ones you would like to download. Google bucket will create code for you to download to your system.</li><li>Create a singular folder with all downloaded csv’s.</li><li>Direct yourself to the GitHub Repository “<a href="https://github.com/yeatmanlab/Clean-ROAR-Data" target="_blank" rel="noopener noreferrer">Clean-ROAR-Data</a>”.</li><li>Clone the repository by clicking the “&lt;&gt; Code” button → “Open with GitHub Desktop” OR “Clone using the web URL”.</li><li>Find the Rmd file that matches the assessment suite of the data you have pulled. (e.g., if you pull Morphology trials, direct yourself to Clean_ROARComp_Trials.Rmd).</li><li>Find the code chunks that match the assessment of the data you have pulled.</li><li>Run the necessary chunks for your data. NOTE: Play close attention to any changes in data file names that may change based off of your pull.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">bq query <span class="token comment">--nouse_legacy_sql \\</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery" tabindex="-1"><a class="header-anchor" href="#pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery"><span>Pulling All Runs of a Single Assessment by Data and Schools using BigQuery</span></a></h2><p><strong>Note</strong>: The current output will go to your home directory saved as &quot;output.csv&quot;. You can change the starting settings to save to a Google Bucket using the same format as above.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">bq query <span class="token comment">--nouse_legacy_sql --format=csv \\</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const u=e(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/researcher/data-organization/","title":"Data Organization","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"BigQuery - a tool to help researchers pull ROAR data in an efficient way","slug":"bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way","link":"#bigquery-a-tool-to-help-researchers-pull-roar-data-in-an-efficient-way","children":[]},{"level":2,"title":"Guidelines to organizing pulled data","slug":"guidelines-to-organizing-pulled-data","link":"#guidelines-to-organizing-pulled-data","children":[]},{"level":2,"title":"Pulling All Runs of a Single Assessment using BigQuery","slug":"pulling-all-runs-of-a-single-assessment-using-bigquery","link":"#pulling-all-runs-of-a-single-assessment-using-bigquery","children":[]},{"level":2,"title":"Pulling All Trials of a Single Assessment using BigQuery","slug":"pulling-all-trials-of-a-single-assessment-using-bigquery","link":"#pulling-all-trials-of-a-single-assessment-using-bigquery","children":[]},{"level":2,"title":"Pulling All Runs of a Single Assessment by Data and Schools using BigQuery","slug":"pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery","link":"#pulling-all-runs-of-a-single-assessment-by-data-and-schools-using-bigquery","children":[]}],"git":{"updatedTime":1751498883000,"contributors":[{"name":"kellywentz","username":"kellywentz","email":"159967652+kellywentz@users.noreply.github.com","commits":4,"url":"https://github.com/kellywentz"},{"name":"Elijah Kelly","username":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1,"url":"https://github.com/Elijah Kelly"}]},"filePathRelative":"researcher/data-organization/README.md"}');export{u as comp,d as data};
