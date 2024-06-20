import{_ as i,r as s,o,c as r,a as e,b as n,d as t,e as l}from"./app-BoCofPYZ.js";const d={},c=e("h1",{id:"syncassignmentsonuserupdate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#syncassignmentsonuserupdate"},[e("span",null,"syncAssignmentsOnUserUpdate()")])],-1),u={id:"syncassignmentsonuserupdate-syncadministrationsassignments",tabindex:"-1"},g={class:"header-anchor",href:"#syncassignmentsonuserupdate-syncadministrationsassignments"},h={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L287",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/main/gse-roar-admin/functions/src/sync-administrations-assignments.ts",target:"_blank",rel:"noopener noreferrer"},m=l('<h4 id="todo-document-helper-functions-within-this-cloud-function" tabindex="-1"><a class="header-anchor" href="#todo-document-helper-functions-within-this-cloud-function"><span><strong>#TODO: Document helper functions within this cloud function.</strong></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>syncAssignmentsOnUserUpdate</code></p><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>Trigger</span></a></h3><p>This Cloud Function is triggered by any write event (creation, update, or potentially deletion) on documents within the Firestore path <code>users/{roarUid}</code>.</p><h3 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h3><p>Upon detecting a change to a user document, the function evaluates changes in organizational affiliations and updates assignments accordingly:</p><ol><li><p><strong>Data Retrieval</strong>:</p><ul><li>Extracts previous and current data from the user document to identify changes in organizational affiliations.</li></ul></li><li><p><strong>Organizational Affiliation Processing</strong>:</p><ul><li>Determines the organizational units (<code>orgs</code>) that the user is currently affiliated with and any changes that have occurred since the last update.</li><li>Specifically handles organizational data structured with <code>all</code>, <code>current</code>, and <code>dates</code> fields, focusing on the <code>current</code> affiliations.</li></ul></li><li><p><strong>Change Detection and Processing</strong>:</p><ul><li>Identifies and processes any added or removed organizational affiliations.</li><li>Calls specific processing functions (<code>processUserRemovedOrgs</code> and <code>processUserAddedOrgs</code>) to handle these changes appropriately.</li></ul></li></ol><h3 id="detailed-workflow" tabindex="-1"><a class="header-anchor" href="#detailed-workflow"><span>Detailed Workflow</span></a></h3><ul><li><p><strong>Event Detection</strong>: Captures any creation, update, or modification to a user&#39;s document.</p></li><li><p><strong>Change Analysis</strong>:</p><ul><li>Uses utility functions like <code>_pick</code>, <code>_fromPairs</code>, and <code>_difference</code> to extract and compare organizational affiliations from previous and current document states.</li><li>Logs changes for debugging and tracking purposes.</li></ul></li><li><p><strong>Conditional Processing Based on User Type</strong>:</p><ul><li>Ensures that the function only processes changes for users identified as &quot;students&quot;, who are the primary subjects of organizational affiliation management.</li></ul></li><li><p><strong>Organizational Changes Handling</strong>:</p><ul><li><strong>Removed Organizations</strong>: If any organizations are removed from the user&#39;s current affiliations, the related tasks and assignments are processed to reflect this change.</li><li><strong>Added Organizations</strong>: Similarly, if new organizations are added to the user&#39;s affiliations, related assignments and tasks are updated or added.</li></ul></li></ul><h3 id="error-handling-and-security-considerations" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security-considerations"><span>Error Handling and Security Considerations</span></a></h3><ul><li><p><strong>Error Handling</strong>:</p><ul><li>Robust error handling during data extraction and processing to manage partial updates or incomplete data scenarios.</li><li>Transactional updates ensure consistency across related database operations.</li></ul></li><li><p><strong>Security</strong>:</p><ul><li>Validates that operations are performed based on authenticated and authorized changes to prevent unauthorized data manipulation.</li><li>Ensures that sensitive operations related to user data handling comply with privacy regulations and organizational policies.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',14);function f(y,b){const a=s("ExternalLinkIcon");return o(),r("div",null,[c,e("h4",u,[e("a",g,[e("span",null,[e("a",h,[n("syncAssignmentsOnUserUpdate"),t(a)]),n(", "),e("a",p,[n("syncAdministrationsAssignments"),t(a)])])])]),m])}const v=i(d,[["render",f],["__file","sync-assignments-on-user-update.html.vue"]]),k=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/sync-assignments-on-user-update.html","title":"syncAssignmentsOnUserUpdate()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Trigger","slug":"trigger","link":"#trigger","children":[]},{"level":3,"title":"Operation","slug":"operation","link":"#operation","children":[]},{"level":3,"title":"Detailed Workflow","slug":"detailed-workflow","link":"#detailed-workflow","children":[]},{"level":3,"title":"Error Handling and Security Considerations","slug":"error-handling-and-security-considerations","link":"#error-handling-and-security-considerations","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1714409347000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":1},{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-admin/sync-assignments-on-user-update.md"}');export{v as comp,k as data};