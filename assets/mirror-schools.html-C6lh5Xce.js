import{_ as o,c as n,d as t,o as r}from"./app-BMq2XO4d.js";const i={};function a(l,e){return r(),n("div",null,e[0]||(e[0]=[t('<h1 id="mirrorschools" tabindex="-1"><a class="header-anchor" href="#mirrorschools"><span>mirrorSchools()</span></a></h1><h4 id="mirrorschools-generatemirrordocfunction" tabindex="-1"><a class="header-anchor" href="#mirrorschools-generatemirrordocfunction"><span><a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1109" target="_blank" rel="noopener noreferrer">mirrorSchools</a>, <a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1079" target="_blank" rel="noopener noreferrer">generateMirrorDocFunction</a></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>mirrorSchools</code></p><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>Trigger</span></a></h3><p>This Cloud Function is triggered by document write events (create, update, delete) on Firestore documents located at <code>schools/{documentId}</code>. The function is set up to handle changes to any document within the <code>schools</code> collection.</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><ul><li><strong>Document Path</strong>: <code>schools/{documentId}</code><ul><li>This specifies the path to the Firestore documents in the <code>schools</code> collection that will trigger the function when written to.</li></ul></li><li><strong>Timeout</strong>: 180 seconds <ul><li>The function has a longer execution timeout to handle potentially large or complex operations.</li></ul></li></ul><h3 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h3><p>The <code>mirrorSchools</code> function uses the <code>generateMirrorDocFunction</code> to create a specific instance tailored for the <code>schools</code> collection. Here’s how it functions:</p><ol><li><strong>Listening to Document Changes</strong>: The function listens for any write operations (including deletions) on the <code>schools</code> collection.</li><li><strong>Handling Changes</strong>: <ul><li>If a document in the <code>schools</code> collection is deleted (<code>snapshot.after.data()</code> is null), the corresponding document in the mirrored collection is also deleted.</li><li>If a document is created or updated, the new data from <code>snapshot.after.data()</code> is used to update or create the document in the mirrored collection using the same document ID.</li></ul></li></ol><h3 id="example-execution-flow" tabindex="-1"><a class="header-anchor" href="#example-execution-flow"><span>Example Execution Flow</span></a></h3><ul><li><strong>Document Created/Updated</strong>: When a school document is created or updated, the function ensures that its data is replicated in another specified collection for assessment or administrative purposes.</li><li><strong>Document Deleted</strong>: If a school document is deleted, the function also deletes the corresponding document in the mirrored collection to maintain data consistency.</li></ul><h3 id="helper-function-generatemirrordocfunction" tabindex="-1"><a class="header-anchor" href="#helper-function-generatemirrordocfunction"><span>Helper Function: generateMirrorDocFunction</span></a></h3><ul><li><strong>Purpose</strong>: Dynamically generates a function configured to handle document write events and mirror these changes to a specified collection.</li><li><strong>Usage in <code>mirrorSchools</code></strong>: <ul><li>The generated function from <code>generateMirrorDocFunction(&quot;schools&quot;)</code> specifically handles the mirroring of the <code>schools</code> collection documents.</li></ul></li></ul><h3 id="error-handling-and-security" tabindex="-1"><a class="header-anchor" href="#error-handling-and-security"><span>Error Handling and Security</span></a></h3><ul><li><strong>Error Handling</strong>: Implements checks for null data and handles database operations with try/catch blocks to manage exceptions gracefully.</li><li><strong>Security Considerations</strong>: <ul><li><strong>Permissions</strong>: Ensure that the function has appropriate Firestore permissions to perform read and write operations on the <code>schools</code> collection and its mirror.</li><li><strong>Data Validation</strong>: While primarily handled by Firebase rules, additional validation can be implemented within the function to prevent corrupt or invalid data mirroring.</li></ul></li></ul><h3 id="deployment-and-maintenance" tabindex="-1"><a class="header-anchor" href="#deployment-and-maintenance"><span>Deployment and Maintenance</span></a></h3><ul><li><strong>Deployment</strong>: This function should be deployed using Firebase CLI tools or through the Firebase Console, ensuring all configurations and dependencies are correctly set.</li><li><strong>Maintenance</strong>: Regular monitoring and logging are recommended to track function performance and to quickly address any issues with data mirroring or function execution.</li></ul>',19)]))}const s=o(i,[["render",a],["__file","mirror-schools.html.vue"]]),d=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/mirror-schools.html","title":"mirrorSchools()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Trigger","slug":"trigger","link":"#trigger","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Operation","slug":"operation","link":"#operation","children":[]},{"level":3,"title":"Example Execution Flow","slug":"example-execution-flow","link":"#example-execution-flow","children":[]},{"level":3,"title":"Helper Function: generateMirrorDocFunction","slug":"helper-function-generatemirrordocfunction","link":"#helper-function-generatemirrordocfunction","children":[]},{"level":3,"title":"Error Handling and Security","slug":"error-handling-and-security","link":"#error-handling-and-security","children":[]},{"level":3,"title":"Deployment and Maintenance","slug":"deployment-and-maintenance","link":"#deployment-and-maintenance","children":[]}],"git":{"updatedTime":1713301487000,"contributors":[{"name":"Kyle","username":"Kyle","email":"ksmontville@gmail.com","commits":2,"url":"https://github.com/Kyle"}]},"filePathRelative":"cloud-functions/gse-roar-admin/mirror-schools.md"}');export{s as comp,d as data};
