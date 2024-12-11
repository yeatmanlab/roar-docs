import{_ as t,c as n,d as o,o as s}from"./app-BMq2XO4d.js";const i={};function r(a,e){return s(),n("div",null,e[0]||(e[0]=[o('<h1 id="softdeleteuserassignment" tabindex="-1"><a class="header-anchor" href="#softdeleteuserassignment"><span>softDeleteUserAssignment()</span></a></h1><h4 id="softdeleteuserassignment-createsoftdeletecloudfunction" tabindex="-1"><a class="header-anchor" href="#softdeleteuserassignment-createsoftdeletecloudfunction"><span><a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1070" target="_blank" rel="noopener noreferrer">softDeleteUserAssignment</a>, <a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/soft-delete.ts#L55" target="_blank" rel="noopener noreferrer">createSoftDeleteCloudFunction</a></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>softDeleteUserAssignment</code></p><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h4><p>The <code>softDeleteUserAssignment</code> function is designed to handle deletions within the nested <code>users</code> and <code>assignments</code> collections by preserving deleted documents in a corresponding &quot;deleted&quot; collection. This function is generated using the <code>createSoftDeleteCloudFunction</code>, which configures it to respond to document deletions in a path that encompasses both user and assignment identifiers.</p><h4 id="trigger-configuration" tabindex="-1"><a class="header-anchor" href="#trigger-configuration"><span>Trigger Configuration</span></a></h4><ul><li><strong>Path</strong>: <code>users/{doc0}/assignments/{doc1}</code><ul><li>This path is dynamically constructed to listen for deletion events within the nested structure where assignments are sub-documents under specific users.</li></ul></li><li><strong>Trigger Collections</strong>: <code>[&quot;users&quot;, &quot;assignments&quot;]</code><ul><li>Indicates that the function will monitor deletions from the <code>assignments</code> sub-collection under the <code>users</code> collection.</li></ul></li></ul><h4 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h4><ul><li>Upon detecting a deletion event in the specified path, the function: <ul><li>Retrieves the deleted document&#39;s data.</li><li>Constructs source and target document references using the provided collection and document IDs.</li><li>Copies the deleted document data from the source to the target location, which is in the corresponding &quot;deleted&quot; collections (e.g., <code>deleted-users/deleted-assignments</code>).</li></ul></li></ul><h3 id="utility-functions-used" tabindex="-1"><a class="header-anchor" href="#utility-functions-used"><span>Utility Functions Used</span></a></h3><h4 id="_1-constructtrigger" tabindex="-1"><a class="header-anchor" href="#_1-constructtrigger"><span>1. <strong>constructTrigger</strong></span></a></h4><ul><li>Constructs the trigger for Firestore document deletion events by creating a Firestore path that listens for deletions within specified collections.</li><li><strong>Example Output for <code>softDeleteUserAssignment</code></strong>: <ul><li><strong>Path</strong>: <code>users/{doc0}/assignments/{doc1}</code></li><li><strong>Collections</strong>: <code>[&quot;users&quot;, &quot;assignments&quot;]</code></li><li><strong>ParamKeys</strong>: <code>[&quot;doc0&quot;, &quot;doc1&quot;]</code></li></ul></li></ul><h4 id="_2-softdeletecollectionid" tabindex="-1"><a class="header-anchor" href="#_2-softdeletecollectionid"><span>2. <strong>softDeleteCollectionId</strong></span></a></h4><ul><li>Modifies collection IDs to refer to their corresponding &quot;deleted&quot; collections.</li><li><strong>Example for <code>softDeleteUserAssignment</code></strong>: <ul><li>Converts &quot;users&quot; to &quot;deleted-users&quot; and &quot;assignments&quot; to &quot;deleted-assignments&quot;.</li></ul></li></ul><h4 id="_3-createdocrefs" tabindex="-1"><a class="header-anchor" href="#_3-createdocrefs"><span>3. <strong>createDocRefs</strong></span></a></h4><ul><li>Generates Firestore document references for both the source document being deleted and the target document in the &quot;deleted&quot; collection.</li><li><strong>Operation for <code>softDeleteUserAssignment</code></strong>: <ul><li>Uses path information from the deletion event to create references to both the original and the &quot;deleted&quot; versions of the document.</li></ul></li></ul><h3 id="error-handling-and-security-considerations" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security-considerations"><span>Error Handling and Security Considerations</span></a></h3><ul><li><strong>Error Handling</strong>: <ul><li>Ensures robust error management for read/write operations to Firestore, handling potential failures gracefully.</li><li>Includes checks for null or undefined document data, which could indicate issues in the deletion trigger execution.</li></ul></li><li><strong>Security</strong>: <ul><li>The function ensures operations are conducted within the scope of authorized access, preventing unauthorized data copying or exposure.</li><li>Validation steps confirm the integrity and existence of data before proceeding with the copying process.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',21)]))}const d=t(i,[["render",r],["__file","soft-delete-user-assignment.html.vue"]]),c=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/soft-delete-user-assignment.html","title":"softDeleteUserAssignment()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Utility Functions Used","slug":"utility-functions-used","link":"#utility-functions-used","children":[]},{"level":3,"title":"Error Handling and Security Considerations","slug":"error-handling-and-security-considerations","link":"#error-handling-and-security-considerations","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1714409897000,"contributors":[{"name":"Kyle Montville","username":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1,"url":"https://github.com/Kyle Montville"},{"name":"Adam Richie-Halford","username":"Adam Richie-Halford","email":"richford@users.noreply.github.com","commits":1,"url":"https://github.com/Adam Richie-Halford"},{"name":"Kyle","username":"Kyle","email":"ksmontville@gmail.com","commits":2,"url":"https://github.com/Kyle"},{"name":"Elijah Kelly","username":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1,"url":"https://github.com/Elijah Kelly"}]},"filePathRelative":"cloud-functions/gse-roar-admin/soft-delete-user-assignment.md"}');export{d as comp,c as data};
