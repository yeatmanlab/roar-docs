import{_ as s,r as o,o as r,c as i,a as e,b as n,d as a,e as d}from"./app-B1l0_fsE.js";const l={},c=e("h1",{id:"synconrundocupdate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#synconrundocupdate"},[e("span",null,"syncOnRunDocUpdate()")])],-1),u={id:"synconrundocupdate-updatebestrunandcompletion",tabindex:"-1"},p={class:"header-anchor",href:"#synconrundocupdate-updatebestrunandcompletion"},h={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L67",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/run-update/update-best-run-and-completion.ts#L15",target:"_blank",rel:"noopener noreferrer"},g=d('<h3 id="function-overview" tabindex="-1"><a class="header-anchor" href="#function-overview"><span>Function Overview</span></a></h3><h4 id="_1-updatebestrunandcompletion" tabindex="-1"><a class="header-anchor" href="#_1-updatebestrunandcompletion"><span>1. <strong>updateBestRunAndCompletion</strong></span></a></h4><p>This function is a core component designed to select the best run for a given task and assignment, and subsequently update the completion status based on runs data.</p><h5 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h5><ul><li><strong>Input Parameters</strong>: <ul><li><strong>roarUid</strong>: The user identifier.</li><li><strong>assignmentId</strong>: The specific assignment identifier.</li><li><strong>taskId</strong>: The task identifier associated with the run.</li></ul></li><li><strong>Process</strong>: <ul><li>Retrieves all run documents for a specified task and assignment.</li><li>Determines the best run based on completion status, start times, and assessment scores.</li><li>Updates the best run and completion status in the assignment document.</li></ul></li></ul><h5 id="example-use" tabindex="-1"><a class="header-anchor" href="#example-use"><span>Example Use</span></a></h5><p>This function is typically called to ensure that after any update or deletion of run documents, the best run and the assignment&#39;s completion status are accurately represented in the system.</p><h4 id="_2-synconrundocupdate" tabindex="-1"><a class="header-anchor" href="#_2-synconrundocupdate"><span>2. <strong>syncOnRunDocUpdate</strong></span></a></h4><p>This function triggers whenever there is a write event on run documents under a user&#39;s profile. It ensures that any significant change in a run document triggers an update to the best run determination and the overall assignment completion status.</p><h5 id="triggers" tabindex="-1"><a class="header-anchor" href="#triggers"><span>Triggers</span></a></h5><ul><li><strong>Path</strong>: <code>users/{roarUid}/runs/{runId}</code><ul><li>Activated on creation, update, or deletion of run documents.</li></ul></li></ul><h5 id="process" tabindex="-1"><a class="header-anchor" href="#process"><span>Process</span></a></h5><ul><li><strong>Document Creation</strong>: Calls <code>updateBestRunAndCompletion</code> to potentially update the best run and completion status based on the new run data.</li><li><strong>Document Update</strong>: Re-evaluates the best run and completion if significant fields have changed, avoiding loops from timestamp updates.</li><li><strong>Document Deletion</strong>: Determines if the deleted document affects the current best run and updates accordingly.</li></ul><h3 id="detailed-workflow" tabindex="-1"><a class="header-anchor" href="#detailed-workflow"><span>Detailed Workflow</span></a></h3><ol><li><p><strong>Run Document Update</strong>:</p><ul><li>If a run document is updated (e.g., completion of a run or update in scores), <code>syncOnRunDocUpdate</code> triggers the <code>updateBestRunAndCompletion</code> function to reassess which run is the best for the specific task and to update the assignment&#39;s completion status.</li></ul></li><li><p><strong>Run Document Deletion</strong>:</p><ul><li>Deletion of a run document also triggers <code>updateBestRunAndCompletion</code> to ensure that the removal of a run doesn&#39;t leave the assignment with an outdated best run or incorrect completion status.</li></ul></li><li><p><strong>Run Document Creation</strong>:</p><ul><li>Upon creation of a new run, the function immediately evaluates whether this new run could potentially be the best run or change the completion status of the assignment.</li></ul></li></ol><h3 id="error-handling-and-security-considerations" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security-considerations"><span>Error Handling and Security Considerations</span></a></h3><ul><li><p><strong>Error Handling</strong>:</p><ul><li>Both functions include robust error handling for database operations, ensuring any failures in read/write operations are logged and managed appropriately.</li><li>Special considerations are made to handle cases where run documents are deleted or the necessary data for operation is missing or incomplete.</li></ul></li><li><p><strong>Security</strong>:</p><ul><li>Ensure that only authenticated users can trigger these functions in contexts that are appropriate for their roles, particularly for operations that modify run or assignment data.</li><li>Data validation is crucial to prevent erroneous data from affecting the system integrity, especially when determining the best run and updating completion statuses.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',19);function f(b,y){const t=o("ExternalLinkIcon");return r(),i("div",null,[c,e("h4",u,[e("a",p,[e("span",null,[e("a",h,[n("syncOnRunDocUpdate"),a(t)]),n(", "),e("a",m,[n("updateBestRunAndCompletion"),a(t)])])])]),g])}const _=s(l,[["render",f],["__file","sync-on-run-doc-update.html.vue"]]),w=JSON.parse('{"path":"/cloud-functions/gse-roar-assessment/sync-on-run-doc-update.html","title":"syncOnRunDocUpdate()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Overview","slug":"function-overview","link":"#function-overview","children":[]},{"level":3,"title":"Detailed Workflow","slug":"detailed-workflow","link":"#detailed-workflow","children":[]},{"level":3,"title":"Error Handling and Security Considerations","slug":"error-handling-and-security-considerations","link":"#error-handling-and-security-considerations","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1714409365000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":1},{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-assessment/sync-on-run-doc-update.md"}');export{_ as comp,w as data};
