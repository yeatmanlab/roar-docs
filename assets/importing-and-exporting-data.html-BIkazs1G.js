import{_ as t,c as a,d as o,o as r}from"./app-BMq2XO4d.js";const s={};function n(i,e){return r(),a("div",null,e[0]||(e[0]=[o(`<h1 id="importing-and-exporting-data" tabindex="-1"><a class="header-anchor" href="#importing-and-exporting-data"><span>Importing and Exporting Data</span></a></h1><p>We can use Firebase CLI tools to import data from the <code>gse-roar-assessment-dev</code> Firestore database to the local Firestore emulator.</p><h2 id="exporting-data-from-firestore" tabindex="-1"><a class="header-anchor" href="#exporting-data-from-firestore"><span>Exporting Data from Firestore</span></a></h2><p>To export data from the Firestore database, use the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gcloud config <span class="token builtin class-name">set</span> project gse-roar-assessment-dev</span>
<span class="line">gsutil <span class="token parameter variable">-m</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> gs://roar-assessment-dev-export/emulator-exports</span>
<span class="line">gcloud firestore <span class="token builtin class-name">export</span> gs://roar-assessment-dev-export/emulator-exports --collection-ids<span class="token operator">=</span>tasks,variants</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These commands set the project to <code>gse-roar-assessment-dev</code>, remove the existing export of the <code>task</code> and <code>variants</code> collection, export <code>task</code> and <code>variants</code> collections to a Cloud Storage bucket named <code>roar-assessment-dev-export</code>.<br> The export metadata will be stored in the folder <code>emulator-exports</code>, which will be created in the bucket.<br> We can export other collections by changing the <code>--collection-ids</code> parameter, but for now, we are only exporting the <code>tasks</code> and <code>variants</code> collection. <br><br><strong>Note</strong>: You may need to install the <code>gcloud</code> CLI and authenticate with your Google Cloud account to run these commands.<br><br><strong>Note</strong>: Instead of overwriting the existing export, you can instead set the export path to a new folder in the bucket if you wish.<br><br><strong>Note</strong>: You may need specific IAM permissions in order to read and write to the Cloud Storage bucket in the <code>gse-roar-assessment-dev</code> project.**<br><br></p><h2 id="importing-data-into-the-firestore-emulator" tabindex="-1"><a class="header-anchor" href="#importing-data-into-the-firestore-emulator"><span>Importing Data into the Firestore Emulator</span></a></h2><p>We need to import the exported data into the local Firestore emulator. To do this, we need to download the exported data from the Cloud Storage bucket and then import it into the emulator.</p><h3 id="downloading-the-exported-data" tabindex="-1"><a class="header-anchor" href="#downloading-the-exported-data"><span>Downloading the Exported Data</span></a></h3><p>To download the exported data from the Cloud Storage bucket, use the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">gsutil <span class="token parameter variable">-m</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> gs://roar-assessment-dev-export/emulator-exports <span class="token builtin class-name">.</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This command downloads the exported data from the <code>roar-assessment-dev-export</code> bucket to the current directory. The metadata will be stored in the <code>emulator-exports</code> folder. Firebase uses this metadata to import the data into the Firestore emulator.</p><p><strong>Note</strong>: If you wrote the export to a different folder in the bucket, you will need to change the path in the <code>gsutil cp</code> command accordingly.</p><h3 id="importing-the-data-into-the-firestore-emulator" tabindex="-1"><a class="header-anchor" href="#importing-the-data-into-the-firestore-emulator"><span>Importing the Data into the Firestore Emulator</span></a></h3><p>To import the downloaded data into the Firestore emulator, use the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">npx firebase emulators:start <span class="token parameter variable">--project</span><span class="token operator">=</span>gse-roar-assessment-dev <span class="token parameter variable">--import</span><span class="token operator">=</span>./emulator-exports --export-on-exit<span class="token operator">=</span>./emulator-exports</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note</strong>: If you wrote the export to a different folder in the bucket, you will need to change the path in the <code>--import</code> and <code>--export-on-exit</code> parameters accordingly.<br><br><strong>Note</strong>: You may need to install the <code>firebase-tools</code> package globally to use the <code>firebase</code> command.</p><p>This command starts the Firestore emulator for the <code>gse-roar-assessment-dev</code> project, imports the data from the <code>emulator-exports</code> folder, and exports any changes back to the <code>emulator-exports</code> folder when the emulator is stopped. This allows us to persist any changes made during testing.</p>`,18)]))}const l=t(s,[["render",n],["__file","importing-and-exporting-data.html.vue"]]),p=JSON.parse('{"path":"/emulation/emulator-configuration-guide/importing-and-exporting-data.html","title":"Importing and Exporting Data","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Exporting Data from Firestore","slug":"exporting-data-from-firestore","link":"#exporting-data-from-firestore","children":[]},{"level":2,"title":"Importing Data into the Firestore Emulator","slug":"importing-data-into-the-firestore-emulator","link":"#importing-data-into-the-firestore-emulator","children":[{"level":3,"title":"Downloading the Exported Data","slug":"downloading-the-exported-data","link":"#downloading-the-exported-data","children":[]},{"level":3,"title":"Importing the Data into the Firestore Emulator","slug":"importing-the-data-into-the-firestore-emulator","link":"#importing-the-data-into-the-firestore-emulator","children":[]}]}],"git":{"updatedTime":1727815968000,"contributors":[{"name":"Kyle","username":"Kyle","email":"ksmontville@gmail.com","commits":3,"url":"https://github.com/Kyle"}]},"filePathRelative":"emulation/emulator-configuration-guide/importing-and-exporting-data.md"}');export{l as comp,p as data};