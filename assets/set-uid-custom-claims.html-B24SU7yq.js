import{_ as e,c as i,o as s,e as a}from"./app-B8namuNu.js";const n={},t=a('<h1 id="setuidcustomclaims" tabindex="-1"><a class="header-anchor" href="#setuidcustomclaims"><span>setuidcustomclaims()</span></a></h1><h4 id="setuidclaims-setuidclaims" tabindex="-1"><a class="header-anchor" href="#setuidclaims-setuidclaims"><span><a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/index.ts#L25" target="_blank" rel="noopener noreferrer">setuidclaims</a>, <a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-assessment/functions/src/set-custom-claims.ts#L42" target="_blank" rel="noopener noreferrer">setUidClaims</a></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>setuidclaims</code></p><h3 id="function-overview" tabindex="-1"><a class="header-anchor" href="#function-overview"><span>Function Overview</span></a></h3><h4 id="_1-setuidclaims" tabindex="-1"><a class="header-anchor" href="#_1-setuidclaims"><span>1. <strong>setUidClaims</strong></span></a></h4><p>This backend function is responsible for setting or updating custom claims related to user identifiers in Firebase Authentication and ensuring these identifiers are also stored or updated in Firestore under the corresponding user&#39;s document.</p><h5 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h5><ul><li><strong>Input Parameters</strong>: <ul><li><strong>roarUid</strong>: The ROAR platform-specific user identifier.</li><li><strong>adminUid</strong>: The user&#39;s unique identifier in the ROAR admin Firebase project.</li><li><strong>assessmentUid</strong>: The user&#39;s unique identifier in the ROAR assessment Firebase project.</li></ul></li><li><strong>Process</strong>: <ul><li>Retrieves the user&#39;s current custom claims from Firebase Authentication.</li><li>Updates Firestore with the <code>assessmentUid</code>.</li><li>Constructs new custom claims and checks if they exceed the storage size limit.</li><li>Sets new custom claims for the user in Firebase Authentication.</li><li>Updates or creates a document in the Firestore <code>userClaims</code> collection to store these claims.</li></ul></li></ul><h5 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h5><ul><li>Manages storage size limitations by checking the size of the stringified new claims.</li><li>Catches and logs errors related to Firebase operations, particularly when setting custom claims or interacting with Firestore.</li></ul><h4 id="_2-setuidclaims" tabindex="-1"><a class="header-anchor" href="#_2-setuidclaims"><span>2. <strong>setuidclaims</strong></span></a></h4><p>This is the Cloud Function that triggers <code>setUidClaims</code>. It is an <code>onCall</code> function, designed to be invoked by client applications needing to update or set UID claims for a user.</p><h5 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>Trigger</span></a></h5><ul><li>Triggered via an <code>onCall</code> request from authenticated clients, passing necessary UIDs as data parameters.</li></ul><h3 id="detailed-workflow" tabindex="-1"><a class="header-anchor" href="#detailed-workflow"><span>Detailed Workflow</span></a></h3><ol><li><p><strong>Initialization</strong>:</p><ul><li>An authenticated client makes a call to the <code>setuidclaims</code> Cloud Function, passing the necessary user identifiers (<code>roarUid</code>, <code>adminUid</code>, <code>assessmentUid</code>).</li></ul></li><li><p><strong>Execution of setUidClaims</strong>:</p><ul><li>Retrieves and updates current user claims.</li><li>Sets updated claims in Firebase Authentication.</li><li>Synchronizes these changes with Firestore to ensure consistency across the Firebase project and related services.</li></ul></li><li><p><strong>Response Handling</strong>:</p><ul><li>The function returns a success response with updated claims if all operations are successful.</li><li>If the claims exceed storage limits or if any Firebase operation fails, it returns an appropriate error response.</li></ul></li></ol><h3 id="error-handling-and-security-considerations" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security-considerations"><span>Error Handling and Security Considerations</span></a></h3><ul><li><p><strong>Error Handling</strong>:</p><ul><li>Robust handling of Firebase service errors, including Authentication and Firestore errors.</li><li>Specific checks to ensure custom claims do not exceed Firebase&#39;s storage size limits, with errors logged and exceptions thrown accordingly.</li></ul></li><li><p><strong>Security</strong>:</p><ul><li>Ensures that only authenticated requests can trigger these operations.</li><li>Validates that the incoming data for UIDs is properly formatted and authentic.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',21),r=[t];function o(l,c){return s(),i("div",null,r)}const u=e(n,[["render",o],["__file","set-uid-custom-claims.html.vue"]]),h=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/set-uid-custom-claims.html","title":"setuidcustomclaims()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Function Overview","slug":"function-overview","link":"#function-overview","children":[]},{"level":3,"title":"Detailed Workflow","slug":"detailed-workflow","link":"#detailed-workflow","children":[]},{"level":3,"title":"Error Handling and Security Considerations","slug":"error-handling-and-security-considerations","link":"#error-handling-and-security-considerations","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1714409897000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":1},{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-admin/set-uid-custom-claims.md"}');export{u as comp,h as data};