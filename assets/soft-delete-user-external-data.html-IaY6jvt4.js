import{_ as a,r,o as i,c as s,a as e,b as t,d as o,e as l}from"./app-B1l0_fsE.js";const d={},c=e("h1",{id:"softdeleteuserexternaldata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#softdeleteuserexternaldata"},[e("span",null,"softDeleteUserExternalData")])],-1),u={id:"softdeleteuserexternaldata-createsoftdeletecloudfunction",tabindex:"-1"},h={class:"header-anchor",href:"#softdeleteuserexternaldata-createsoftdeletecloudfunction"},f={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1074",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/soft-delete.ts#L55",target:"_blank",rel:"noopener noreferrer"},p=l('<h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>softDeleteUserExternalData</code></p><h3 id="cloud-function-softdeleteuserexternaldata" tabindex="-1"><a class="header-anchor" href="#cloud-function-softdeleteuserexternaldata"><span>Cloud Function: softDeleteUserExternalData</span></a></h3><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h4><p>The <code>softDeleteUserExternalData</code> function is crafted to archive documents deleted from the <code>externalData</code> sub-collection under the <code>users</code> collection. It ensures that any deleted external data linked to users is moved to a mirrored &quot;deleted&quot; collection for archival reasons.</p><h4 id="trigger-configuration" tabindex="-1"><a class="header-anchor" href="#trigger-configuration"><span>Trigger Configuration</span></a></h4><ul><li><strong>Path</strong>: <code>users/{doc0}/externalData/{doc1}</code><ul><li>This path is dynamically constructed to listen for deletion events specifically within the external data documents stored under individual users.</li></ul></li><li><strong>Trigger Collections</strong>: <code>[&quot;users&quot;, &quot;externalData&quot;]</code><ul><li>The function is configured to monitor the <code>externalData</code> nested within the <code>users</code> collection for any deletions.</li></ul></li></ul><h4 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h4><ul><li>Upon a deletion event in the specified path, the function: <ul><li>Captures the deleted document&#39;s data.</li><li>Constructs source and target document references using the provided collection and document IDs.</li><li>Copies the deleted document data from the original location to a newly constructed location within the &quot;deleted&quot; collections (e.g., <code>deleted-users/deleted-externalData</code>).</li></ul></li></ul><h3 id="utility-functions-used" tabindex="-1"><a class="header-anchor" href="#utility-functions-used"><span>Utility Functions Used</span></a></h3><h4 id="_1-constructtrigger" tabindex="-1"><a class="header-anchor" href="#_1-constructtrigger"><span>1. <strong>constructTrigger</strong></span></a></h4><ul><li>Constructs the trigger for Firestore document deletion events by creating a Firestore path that responds to deletions within specific collections.</li><li><strong>Output for <code>softDeleteUserExternalData</code></strong>: <ul><li><strong>Path</strong>: <code>users/{doc0}/externalData/{doc1}</code></li><li><strong>Collections</strong>: <code>[&quot;users&quot;, &quot;externalData&quot;]</code></li><li><strong>ParamKeys</strong>: <code>[&quot;doc0&quot;, &quot;doc1&quot;]</code></li></ul></li></ul><h4 id="_2-softdeletecollectionid" tabindex="-1"><a class="header-anchor" href="#_2-softdeletecollectionid"><span>2. <strong>softDeleteCollectionId</strong></span></a></h4><ul><li>Adapts collection IDs to refer to corresponding &quot;deleted&quot; collections, facilitating archival operations.</li><li><strong>Example for <code>softDeleteUserExternalData</code></strong>: <ul><li>Transforms &quot;users&quot; to &quot;deleted-users&quot; and &quot;externalData&quot; to &quot;deleted-externalData&quot;.</li></ul></li></ul><h4 id="_3-createdocrefs" tabindex="-1"><a class="header-anchor" href="#_3-createdocrefs"><span>3. <strong>createDocRefs</strong></span></a></h4><ul><li>Generates Firestore document references for both the source document being deleted and the target document in the corresponding &quot;deleted&quot; collection.</li><li><strong>Operation for <code>softDeleteUserExternalData</code></strong>: <ul><li>Uses path information from the deletion event to create references to both the original and the &quot;deleted&quot; versions of the document.</li></ul></li></ul><h3 id="error-handling-and-security-considerations" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security-considerations"><span>Error Handling and Security Considerations</span></a></h3><ul><li><strong>Error Handling</strong>: <ul><li>Manages potential read/write operation failures in Firestore robustly, handling errors and ensuring the archival process does not lead to data loss.</li><li>Checks for null or undefined document data to avoid errors in the archival process.</li></ul></li><li><strong>Security</strong>: <ul><li>Validates authorized access for deletion and archival processes, ensuring that operations are secure and comply with data handling policies.</li><li>Confirms the integrity and existence of data before proceeding, ensuring only valid and authorized operations are executed.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',20);function m(x,D){const n=r("ExternalLinkIcon");return i(),s("div",null,[c,e("h4",u,[e("a",h,[e("span",null,[e("a",f,[t("softDeleteUserExternalData"),o(n)]),t(", "),e("a",g,[t("createSoftDeleteCloudFunction"),o(n)])])])]),p])}const y=a(d,[["render",m],["__file","soft-delete-user-external-data.html.vue"]]),_=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/soft-delete-user-external-data.html","title":"softDeleteUserExternalData","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Cloud Function: softDeleteUserExternalData","slug":"cloud-function-softdeleteuserexternaldata","link":"#cloud-function-softdeleteuserexternaldata","children":[]},{"level":3,"title":"Utility Functions Used","slug":"utility-functions-used","link":"#utility-functions-used","children":[]},{"level":3,"title":"Error Handling and Security Considerations","slug":"error-handling-and-security-considerations","link":"#error-handling-and-security-considerations","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1714409897000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":1},{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-admin/soft-delete-user-external-data.md"}');export{y as comp,_ as data};
