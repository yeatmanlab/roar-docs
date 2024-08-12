import{_ as e,c as t,o as n,e as o}from"./app-CUQyeWdA.js";const a={},i=o('<h1 id="softdeleteguesttrial" tabindex="-1"><a class="header-anchor" href="#softdeleteguesttrial"><span>softDeleteGuestTrial()</span></a></h1><h4 id="softdeleteguesttrial-createsoftdeletecloudfunction" tabindex="-1"><a class="header-anchor" href="#softdeleteguesttrial-createsoftdeletecloudfunction"><span><a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L49" target="_blank" rel="noopener noreferrer">softDeleteGuestTrial</a>, <a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/soft-delete.ts#L55" target="_blank" rel="noopener noreferrer">createSoftDeleteCloudFunction</a></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>softDeleteGuestTrial</code></p><h4 id="_1-createsoftdeletecloudfunction" tabindex="-1"><a class="header-anchor" href="#_1-createsoftdeletecloudfunction"><span>1. <strong>createSoftDeleteCloudFunction</strong></span></a></h4><p>This utility function dynamically generates Cloud Functions designed to handle the soft deletion of documents by moving them to corresponding &quot;deleted&quot; collections when they are deleted from their primary collection. It provides a framework for creating functions that manage data retention effectively across various collection structures.</p><h5 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h5><ul><li><strong>Trigger Configuration</strong>: Uses the <code>constructTrigger</code> function to create a Firestore trigger based on specified collections.</li><li><strong>Soft Deletion Mechanism</strong>: On document deletion, the generated function moves the document to a new path within a &quot;deleted&quot; collection, preserving its data.</li></ul><h4 id="_2-softdeleteguesttrial" tabindex="-1"><a class="header-anchor" href="#_2-softdeleteguesttrial"><span>2. <strong>softDeleteGuestTrial</strong></span></a></h4><p>A specific Cloud Function generated by <code>createSoftDeleteCloudFunction</code>, tailored to handle deletions within the nested <code>guests</code>, <code>runs</code>, and <code>trials</code> collections. This function ensures that even deeply nested documents are preserved after deletion.</p><h3 id="detailed-workflow-and-implementation" tabindex="-1"><a class="header-anchor" href="#detailed-workflow-and-implementation"><span>Detailed Workflow and Implementation</span></a></h3><ul><li><p><strong>Trigger Construction</strong> (<code>constructTrigger</code>):</p><ul><li>Configures a Firestore document path that listens for deletion events across specified collections. For <code>softDeleteGuestTrial</code>, it constructs a path like <code>guests/{doc0}/runs/{doc1}/trials/{doc2}</code>.</li><li>Dynamically creates path variables (<code>doc0</code>, <code>doc1</code>, <code>doc2</code>) corresponding to each collection level.</li></ul></li><li><p><strong>Document References Creation</strong> (<code>createDocRefs</code>):</p><ul><li>Generates Firestore document references for both the source and target locations based on the structured document path created by the trigger.</li><li>Maps documents from their original location in active collections to new locations in corresponding &quot;deleted&quot; collections.</li></ul></li><li><p><strong>Soft Deletion Handling</strong>:</p><ul><li>Upon detecting a document&#39;s deletion, retrieves the document&#39;s data from the source reference.</li><li>Moves the document data to the target path within the &quot;deleted&quot; collection, ensuring data retention and archival.</li></ul></li></ul><h3 id="error-handling-and-security-considerations" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security-considerations"><span>Error Handling and Security Considerations</span></a></h3><ul><li><p><strong>Error Handling</strong>:</p><ul><li>Implements error handling during the document transfer process to manage and log failures, ensuring robust operation.</li><li>Handles cases where document data might be null or missing, preventing failures and ensuring the function exits gracefully under such conditions.</li></ul></li><li><p><strong>Security</strong>:</p><ul><li>Enforces security rules to ensure that only authorized deletions trigger the soft deletion process, protecting against unauthorized data manipulation.</li><li>Validates document paths and ensures that document operations conform to predefined security policies.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',16),r=[i];function s(l,d){return n(),t("div",null,r)}const u=e(a,[["render",s],["__file","soft-delete-guest-trial.html.vue"]]),h=JSON.parse('{"path":"/cloud-functions/gse-roar-assessment/soft-delete-guest-trial.html","title":"softDeleteGuestTrial()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Detailed Workflow and Implementation","slug":"detailed-workflow-and-implementation","link":"#detailed-workflow-and-implementation","children":[]},{"level":3,"title":"Error Handling and Security Considerations","slug":"error-handling-and-security-considerations","link":"#error-handling-and-security-considerations","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1714409897000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":1},{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-assessment/soft-delete-guest-trial.md"}');export{u as comp,h as data};
