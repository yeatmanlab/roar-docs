import{_ as e,c as l,d,o as i}from"./app-BMq2XO4d.js";const s={};function a(n,t){return i(),l("div",null,t[0]||(t[0]=[d('<h1 id="bigquery-schema-districts" tabindex="-1"><a class="header-anchor" href="#bigquery-schema-districts"><span>BigQuery schema: districts</span></a></h1><p>The BigQuery table <code>gse-roar-assessment:assessment.districts</code> conforms to the following schema.</p><table><thead><tr><th style="text-align:left;">Field name</th><th style="text-align:left;">Data type</th><th style="text-align:center;">Key type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">district_id</td><td style="text-align:left;">STRING</td><td style="text-align:center;">PK</td><td style="text-align:left;">The unique district ID in the ROAR system</td></tr><tr><td style="text-align:left;">document_name</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">The database document path</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">A timestamp indicating when the database document was last modified</td></tr><tr><td style="text-align:left;">abbreviation</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">A human-readable abbreviation for this district</td></tr><tr><td style="text-align:left;">archived</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;"></td><td style="text-align:left;">Whether this district has been archived or unenrolled</td></tr><tr><td style="text-align:left;">clever_launch_date</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date this this district launched in Clever</td></tr><tr><td style="text-align:left;">clever_roster_created</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date this district created its Clever roster</td></tr><tr><td style="text-align:left;">clever_roster_last_modified</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date this district&#39;s roster was last modified in Clever</td></tr><tr><td style="text-align:left;">clever_roster_pause_start</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">Indicates when the district&#39;s data gets paused to reflect last year&#39;s data in Clever</td></tr><tr><td style="text-align:left;">clever_roster_pause_end</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">Indicates when the district data is unpaused to reflect data for the new school year</td></tr><tr><td style="text-align:left;">current_activation_code</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">The district&#39;s current parent sign-up activation code</td></tr><tr><td style="text-align:left;">is_classlink</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;"></td><td style="text-align:left;">Indicates whether this district is a ClassLink district</td></tr><tr><td style="text-align:left;">is_clever</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;"></td><td style="text-align:left;">Indicates whether this district is a Clever district</td></tr><tr><td style="text-align:left;">is_demo_data</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;"></td><td style="text-align:left;">Indicates whether this district is a demo district</td></tr><tr><td style="text-align:left;">is_test_data</td><td style="text-align:left;">BOOLEAN</td><td style="text-align:center;"></td><td style="text-align:left;">Indicates whether this district is a test district</td></tr><tr><td style="text-align:left;">location_address</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The district address</td></tr><tr><td style="text-align:left;">location_city</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The district city</td></tr><tr><td style="text-align:left;">location_state</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The district state</td></tr><tr><td style="text-align:left;">location_zip</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The district zip code</td></tr><tr><td style="text-align:left;">last_roar_sync</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date and time when this district&#39;s data was last synced between Clever and ROAR</td></tr><tr><td style="text-align:left;">last_updated</td><td style="text-align:left;">TIMESTAMP</td><td style="text-align:center;"></td><td style="text-align:left;">The date and time this district was last updated in ROAR</td></tr><tr><td style="text-align:left;">mdr_number</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">The district&#39;s MDR number</td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The district name</td></tr><tr><td style="text-align:left;">nces_id</td><td style="text-align:left;">STRING</td><td style="text-align:center;">UK</td><td style="text-align:left;">The district&#39;s NCES ID</td></tr><tr><td style="text-align:left;">public_name</td><td style="text-align:left;">STRING</td><td style="text-align:center;"></td><td style="text-align:left;">The district&#39;s public facing name</td></tr><tr><td style="text-align:left;">schools</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of IDs for the district&#39;s current schools</td></tr><tr><td style="text-align:left;">schools_archived</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">FK</td><td style="text-align:left;">An array of IDs for the district&#39;s archived (i.e., unenrolled) schools</td></tr><tr><td style="text-align:left;">tags</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;"></td><td style="text-align:left;">An array of metadata tags for this district</td></tr><tr><td style="text-align:left;">valid_activation_codes</td><td style="text-align:left;">ARRAY&lt;STRING&gt;</td><td style="text-align:center;">UK</td><td style="text-align:left;">An array of valid activation codes for this district</td></tr></tbody></table>',3)]))}const c=e(s,[["render",a],["__file","districts.html.vue"]]),g=JSON.parse('{"path":"/bigquery/districts.html","title":"BigQuery schema: districts","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1733855517000,"contributors":[{"name":"Adam Richie-Halford","username":"Adam Richie-Halford","email":"richiehalford@gmail.com","commits":1,"url":"https://github.com/Adam Richie-Halford"}]},"filePathRelative":"bigquery/districts.md"}');export{c as comp,g as data};
