import{_ as t,c as n,d as a,o as i}from"./app-BMq2XO4d.js";const o={};function r(s,e){return i(),n("div",null,e[0]||(e[0]=[a('<h1 id="createguestdocsforgoogleusers" tabindex="-1"><a class="header-anchor" href="#createguestdocsforgoogleusers"><span>createGuestDocsForGoogleUsers()</span></a></h1><h4 id="createguestdocsforgoogleusers-1" tabindex="-1"><a class="header-anchor" href="#createguestdocsforgoogleusers-1"><span><a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L1058" target="_blank" rel="noopener noreferrer">createGuestDocsForGoogleUsers</a></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>createGuestDocsForGoogleUsers</code></p><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>Trigger</span></a></h3><p>This Cloud Function is triggered by the <code>beforeUserCreated</code> event. This trigger allows the function to execute just before a new user record is created in Firebase Authentication.</p><h3 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs"><span>Inputs</span></a></h3><p>The function does not require any direct input from a caller because it operates based on the event data provided by Firebase when a new user account is being created.</p><h3 id="event-data" tabindex="-1"><a class="header-anchor" href="#event-data"><span>Event Data</span></a></h3><ul><li><strong>user</strong> (object): The user object contains details about the user being created.</li><li><strong>providers</strong> (array of strings): Extracted from <code>user.providerData</code>, this array contains identifiers for each authentication provider associated with the user. For instance, <code>&quot;google.com&quot;</code> for users signing in through Google.</li></ul><h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior"><span>Behavior</span></a></h3><p>The function checks if the new user is signing up using Google as an authentication provider. If the user&#39;s provider data includes <code>&quot;google.com&quot;</code>, it proceeds to execute a helper function named <code>createGuestDocs</code>:</p><ul><li><strong>createGuestDocs</strong>: This helper function is tasked with creating necessary guest documents for the new user. These documents might include initial settings, permissions, or other introductory data necessary for guest users in the system.</li></ul><h3 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs"><span>Outputs</span></a></h3><p>This function does not return any data but completes the creation of guest documents if the conditions are met.</p><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h3><p>Effective error handling should be implemented to manage potential issues, such as:</p><ul><li>Problems with accessing <code>user.providerData</code>.</li><li>Failures within the <code>createGuestDocs</code> function, such as database write errors.</li><li>Handling unexpected data structures or missing data.</li></ul><p>Errors should be logged appropriately, providing enough detail for troubleshooting while ensuring that sensitive user data is not exposed.</p><h3 id="security-considerations" tabindex="-1"><a class="header-anchor" href="#security-considerations"><span>Security Considerations</span></a></h3><ul><li><strong>Authentication</strong>: The function inherently relies on the authentication process handled by Firebase; thus, it operates under the assumption that the user data is valid and authenticated.</li><li><strong>Validation</strong>: Check the consistency and validity of the <code>providerData</code> to ensure the function operates only for users authenticated through Google.</li><li><strong>Data Handling</strong>: Secure handling and logging of user data to prevent any leaks or unauthorized access.</li></ul><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p><h3 id="maintenance-and-monitoring" tabindex="-1"><a class="header-anchor" href="#maintenance-and-monitoring"><span>Maintenance and Monitoring</span></a></h3><ul><li><strong>Monitoring</strong>: Set up monitoring on this function to track its execution and any errors that occur. Firebase provides integrated monitoring tools that can be utilized.</li><li><strong>Updates</strong>: As authentication flows or provider information changes (e.g., changes in provider IDs or authentication methods), this function may require updates to ensure compatibility.</li></ul>',25)]))}const c=t(o,[["render",r],["__file","create-guest-docs-for-google-users.html.vue"]]),d=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/create-guest-docs-for-google-users.html","title":"createGuestDocsForGoogleUsers()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Trigger","slug":"trigger","link":"#trigger","children":[]},{"level":3,"title":"Inputs","slug":"inputs","link":"#inputs","children":[]},{"level":3,"title":"Event Data","slug":"event-data","link":"#event-data","children":[]},{"level":3,"title":"Behavior","slug":"behavior","link":"#behavior","children":[]},{"level":3,"title":"Outputs","slug":"outputs","link":"#outputs","children":[]},{"level":3,"title":"Error Handling","slug":"error-handling","link":"#error-handling","children":[]},{"level":3,"title":"Security Considerations","slug":"security-considerations","link":"#security-considerations","children":[]},{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]},{"level":3,"title":"Maintenance and Monitoring","slug":"maintenance-and-monitoring","link":"#maintenance-and-monitoring","children":[]}],"git":{"updatedTime":1714409721000,"contributors":[{"name":"Kyle Montville","username":"Kyle Montville","email":"kmontvil@stanford.edu","commits":1,"url":"https://github.com/Kyle Montville"},{"name":"Adam Richie-Halford","username":"Adam Richie-Halford","email":"richford@users.noreply.github.com","commits":1,"url":"https://github.com/Adam Richie-Halford"},{"name":"Kyle","username":"Kyle","email":"ksmontville@gmail.com","commits":2,"url":"https://github.com/Kyle"},{"name":"Elijah Kelly","username":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1,"url":"https://github.com/Elijah Kelly"}]},"filePathRelative":"cloud-functions/gse-roar-admin/create-guest-docs-for-google-users.md"}');export{c as comp,d as data};
