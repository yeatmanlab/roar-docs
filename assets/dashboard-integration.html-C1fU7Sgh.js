import{_ as n,o as s,c as a,e as t}from"./app-BzTbiUTn.js";const e={},p=t(`<h1 id="dashboard-integration" tabindex="-1"><a class="header-anchor" href="#dashboard-integration"><span>Dashboard Integration</span></a></h1><h2 id="preliminary-checklist" tabindex="-1"><a class="header-anchor" href="#preliminary-checklist"><span>Preliminary Checklist:</span></a></h2><ul><li>Publish the package to the @bdelab npm repository and install it in the project.</li><li>Verify the Rollup configuration in the app code.</li><li>Create a task component in the Dashboard.</li><li>Implement a route importing the task component, along with necessary props.</li><li>Add the route to the navbar blacklist in App.vue.</li><li>Manually chunk the app in vite.config.</li></ul><h2 id="dashboard-files" tabindex="-1"><a class="header-anchor" href="#dashboard-files"><span>Dashboard files</span></a></h2><ol><li><p>Create a new component under <code>src/components/tasks/</code></p><ul><li>For this step you can reference on the other app files (You can follow SWR as reference)</li></ul></li><li><p>Add routes to this new file to</p></li></ol><ul><li><code>src/router/index.js</code>:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/game/[app-name]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[app name for routing]&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/tasks/[Component created in 1].vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">taskId</span><span class="token operator">:</span> <span class="token string">&#39;[app-name]&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pageTitle</span><span class="token operator">:</span> <span class="token string">&#39;[app-name page title]&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>firebase/admin/firestore.indexes.json</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
      <span class="token string-property property">&quot;collectionGroup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assignments&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;queryScope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;COLLECTION_GROUP&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;fieldPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;readOrgs.groups&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;arrayConfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONTAINS&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;fieldPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ASCENDING&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;fieldPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;progress.[app-name]&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ASCENDING&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;collectionGroup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assignments&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;queryScope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;COLLECTION_GROUP&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;fieldPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;readOrgs.schools&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;arrayConfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONTAINS&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;fieldPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ASCENDING&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;fieldPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;progress.[app-name]&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ASCENDING&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>src/App.vue</code> Under the <code>navbarBlacklist</code> constant add the <code>[app name for routing]</code></li></ul><ol start="3"><li>Write the description of the app under <code>src/helpers/reports.js</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>app<span class="token operator">-</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[app-name page title]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extendedTitle</span><span class="token operator">:</span> <span class="token string">&#39;[ROAR][ROAM][ROAV] - [app-name]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extendedName</span><span class="token operator">:</span> <span class="token string">&#39;[app-extended-name]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span>app<span class="token operator">-</span>order<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Under the <code>extendedDescriptions</code> constant add:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>app<span class="token operator">-</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;[app-description]&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Add the vite configuration under <code>vite.config.js</code> Under defineConfig add:</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>app<span class="token operator">-</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@bdelab/[roar][roam][roav]-[app-name]&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>Include the corresponding npm package to <code>package.json</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;@bdelab/[roar][roam][roav]-[app-name]&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[version-number-from-npm]&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Once you have all this files, run <code>npm install</code></strong></p><p><strong>Add and commit your changes</strong></p>`,21),o=[p];function i(r,l){return s(),a("div",null,o)}const u=n(e,[["render",i],["__file","dashboard-integration.html.vue"]]),d=JSON.parse('{"path":"/integrate-new-apps/dashboard-integration.html","title":"Dashboard Integration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Preliminary Checklist:","slug":"preliminary-checklist","link":"#preliminary-checklist","children":[]},{"level":2,"title":"Dashboard files","slug":"dashboard-files","link":"#dashboard-files","children":[]}],"git":{"updatedTime":1715047047000,"contributors":[{"name":"emily-ejag","email":"emily.artegar@gmail.com","commits":2}]},"filePathRelative":"integrate-new-apps/dashboard-integration.md"}');export{u as comp,d as data};
