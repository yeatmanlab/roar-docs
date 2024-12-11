import{_ as e,c as l,d as s,o as d}from"./app-BMq2XO4d.js";const a={};function r(n,t){return d(),l("div",null,t[0]||(t[0]=[s('<h1 id="bigquery-schema-users" tabindex="-1"><a class="header-anchor" href="#bigquery-schema-users"><span>BigQuery schema: users</span></a></h1><p>The BigQuery table <code>gse-roar-assessment:assessment.users</code> conforms to the following schema.</p><table><thead><tr><th style="text-align:left;">Field name</th><th style="text-align:left;">Data type</th><th style="text-align:center;">Key type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">roar_uid</td><td style="text-align:left;">STRING</td><td style="text-align:center;">PK</td><td style="text-align:left;">The user&#39;s unique ID in the ROAR system</td></tr><tr><td style="text-align:left;">document_name</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">The database document path</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">A timestamp indicating when the database document was last modified</td></tr><tr><td style="text-align:left;">archived</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;"></td><td style="text-align:left;">Whether this user has been archived or unenrolled</td></tr><tr><td style="text-align:left;">assessment_pid</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">A human readable and unique &quot;participant ID&quot;</td></tr><tr><td style="text-align:left;">assessment_uid</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">The UID associated with this user&#39;s Firebase auth account in the gse-roar-assessment project</td></tr><tr><td style="text-align:left;">birth_month</td><td style="text-align:left;">INTEGER</td><td style="text-align:center;"></td><td style="text-align:left;">Birth month</td></tr><tr><td style="text-align:left;">birth_year</td><td style="text-align:left;">INTEGER</td><td style="text-align:center;"></td><td style="text-align:left;">Birth year</td></tr><tr><td style="text-align:left;">classes_all</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of all class IDs associated with this user</td></tr><tr><td style="text-align:left;">classes_current</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of currently enrolled class IDs associated with this user</td></tr><tr><td style="text-align:left;">districts_all</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of all district IDs associated with this user</td></tr><tr><td style="text-align:left;">districts_current</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of currently enrolled district IDs associated with this user</td></tr><tr><td style="text-align:left;">families_all</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of all family IDs associated with this user</td></tr><tr><td style="text-align:left;">families_current</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of currently enrolled family IDs associated with this user</td></tr><tr><td style="text-align:left;">grade</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The current grade of the user</td></tr><tr><td style="text-align:left;">groups_all</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of all group IDs associated with this user</td></tr><tr><td style="text-align:left;">groups_current</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of currently enrolled group IDs associated with this user</td></tr><tr><td style="text-align:left;">last_roar_sync</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date and time when this user&#39;s data was last synced between Clever and ROAR</td></tr><tr><td style="text-align:left;">last_updated</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date and time this user was last updated in ROAR</td></tr><tr><td style="text-align:left;">school_level</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The user&#39;s school level (e.g., elementary, middle, etc)</td></tr><tr><td style="text-align:left;">schools_all</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of all school IDs associated with this user</td></tr><tr><td style="text-align:left;">schools_current</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of currently enrolled school IDs associated with this user</td></tr><tr><td style="text-align:left;">sso_type</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The user&#39;s single sign-on (SSO) provider</td></tr><tr><td style="text-align:left;">user_type</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The user type (e.g., student, admin, educator)</td></tr><tr><td style="text-align:left;">username</td><td style="text-align:left;">STRING UK</td><td style="text-align:center;"></td><td style="text-align:left;">The user&#39;s username</td></tr><tr><td style="text-align:left;">email</td><td style="text-align:left;">STRING UK</td><td style="text-align:center;"></td><td style="text-align:left;">The user&#39;s email</td></tr><tr><td style="text-align:left;">tasks</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of task IDs that this user has attempted</td></tr><tr><td style="text-align:left;">variants</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of variant IDs that this user has attempted</td></tr></tbody></table>',3)]))}const y=e(a,[["render",r],["__file","users.html.vue"]]),g=JSON.parse('{"path":"/bigquery/users.html","title":"BigQuery schema: users","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1733855517000,"contributors":[{"name":"Adam Richie-Halford","username":"Adam Richie-Halford","email":"richiehalford@gmail.com","commits":1,"url":"https://github.com/Adam Richie-Halford"}]},"filePathRelative":"bigquery/users.md"}');export{y as comp,g as data};
