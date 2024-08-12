import{_ as a,c as e,o as n,e as s}from"./app-CUQyeWdA.js";const t={},i=s(`<h1 id="createnewfamily" tabindex="-1"><a class="header-anchor" href="#createnewfamily"><span>createnewfamily()</span></a></h1><h4 id="createnewfamily-1" tabindex="-1"><a class="header-anchor" href="#createnewfamily-1"><span><a href="https://github.com/yeatmanlab/roar-firebase-functions/blob/e784650492722d24069aa9b0704d1873ea5dafee/gse-roar-admin/functions/src/index.ts#L171" target="_blank" rel="noopener noreferrer">createnewfamily</a></span></a></h4><h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>createnewfamily</code></p><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>Trigger</span></a></h3><p>This Cloud Function is triggered by an <code>onCall</code> event, meaning it is invoked directly by client applications through a specific API call.</p><h3 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs"><span>Inputs</span></a></h3><p>The function accepts a JSON payload with several parameters necessary to create a new family account:</p><ul><li><strong>caretakerEmail</strong> (string): The email address of the caretaker, which will be used as a primary identifier and for communications.</li><li><strong>caretakerPassword</strong> (string): The password for the caretaker&#39;s account. It is crucial that this data is handled securely through the function.</li><li><strong>caretakerUserData</strong> (object): A set of additional user data related to the caretaker, such as name, contact info, and any relevant preferences or settings.</li><li><strong>children</strong> (array): A list of objects, each containing data about a child within the family. This could include names, ages, and other specific information relevant to the application.</li><li><strong>isTestData</strong> (boolean, optional): A flag indicating whether this account is being created for testing purposes. Defaults to <code>false</code> if not provided.</li></ul><p>Example JSON input:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;caretakerEmail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;caretaker@example.com&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;caretakerPassword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;securepassword123&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;caretakerUserData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;contactInfo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jane Doe&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">7</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Doe Junior&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;isTestData&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs"><span>Outputs</span></a></h3><p>The function returns the result from the <code>createFamily</code> operation, which typically would be:</p><ul><li>A success message or object indicating that the family account has been successfully created.</li><li>An error message or object if the operation fails, detailing the reason for the failure such as invalid input data, database errors, or authentication issues.</li></ul><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h3><p>The <code>createnewfamily</code> function is responsible for setting up new family profiles in the system. It orchestrates the creation of user accounts for a caretaker and registers associated children under this new family entity. This function ensures that all necessary data is collected, validated, and securely stored in the system’s database.</p><p>It also creates <code>subGroups</code> for each family to associate the families children with other ROAR organizations. These orgs are identified as &quot;parent&quot; orgs (not to be confused with the caretaker). For example, a child might be associated with the new family and also the default &quot;ROAR families&quot; group. This child would then also be added to a new group, whose <code>familyId</code> is set to this new family and whose <code>parentOrgType</code> is &quot;group&quot; and <code>parentOrgId</code> is that of the default &quot;ROAR families&quot; group.</p><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h3><p>The function should include robust error handling to address potential issues such as:</p><ul><li>Invalid email formats or password strength.</li><li>Database write failures or connectivity issues.</li><li>Handling missing or incomplete data in the <code>caretakerUserData</code> or <code>children</code> fields.</li><li>Security concerns related to data handling and password management.</li></ul><p>Errors should be logged to a secure logging service, providing sufficient detail for debugging while ensuring user data privacy.</p><h3 id="security-considerations" tabindex="-1"><a class="header-anchor" href="#security-considerations"><span>Security Considerations</span></a></h3><ul><li><strong>Authentication and Authorization</strong>: Ensure that the function can only be accessed by authenticated users who have permission to create new family profiles.</li><li><strong>Data Validation</strong>: Thoroughly validate all inputs to prevent injection attacks and ensure data integrity.</li><li><strong>Secure Data Handling</strong>: Use secure practices for handling passwords and personal information, possibly involving hashing passwords before storage and ensuring secure transmission of sensitive data.</li></ul><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>`,25),o=[i];function r(l,c){return n(),e("div",null,o)}const d=a(t,[["render",r],["__file","create-new-family.html.vue"]]),u=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/create-new-family.html","title":"createnewfamily()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Trigger","slug":"trigger","link":"#trigger","children":[]},{"level":3,"title":"Inputs","slug":"inputs","link":"#inputs","children":[]},{"level":3,"title":"Outputs","slug":"outputs","link":"#outputs","children":[]},{"level":3,"title":"Description","slug":"description","link":"#description","children":[]},{"level":3,"title":"Error Handling","slug":"error-handling","link":"#error-handling","children":[]},{"level":3,"title":"Security Considerations","slug":"security-considerations","link":"#security-considerations","children":[]},{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]}],"git":{"updatedTime":1714409693000,"contributors":[{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":2},{"name":"Kyle","email":"ksmontville@gmail.com","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-admin/create-new-family.md"}');export{d as comp,u as data};
