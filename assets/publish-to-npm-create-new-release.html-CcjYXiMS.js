import{_ as s,c as a,f as e,o as p}from"./app-TdPntgIj.js";const l={};function t(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="publish-to-npm-create-new-release-yml" tabindex="-1"><a class="header-anchor" href="#publish-to-npm-create-new-release-yml"><span>publish-to-npm-create-new-release.yml</span></a></h1><p>This GitHub Actions workflow is used to publish a new release to npm and create a new release on GitHub. The workflow is triggered when a new tag is pushed to the repository. The workflow will build the project, publish the package to npm, create a new release on GitHub, and upload source maps to Sentry. If the workflow fails, a new issue will be created in the repository.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Publish<span class="token punctuation">,</span> Release<span class="token punctuation">,</span> and Deploy</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">tags</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+&#39;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+-alpha.[0-9]+&#39;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+-beta.[0-9]+&#39;</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout 🛎️</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">ref</span><span class="token punctuation">:</span> main</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js environment</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;lts/*&#39;</span></span>
<span class="line">          <span class="token key atrule">registry-url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://registry.npmjs.org&#39;</span></span>
<span class="line">          <span class="token key atrule">node-version-file</span><span class="token punctuation">:</span> <span class="token string">&#39;.nvmrc&#39;</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">&#39;npm&#39;</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm</span>
<span class="line">          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">            \${{ runner.os }}-node-</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build 🔧</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npm ci</span>
<span class="line">          npm run package</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check for uncommitted changes</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          git config --local user.email &quot;action@github.com&quot;</span>
<span class="line">          git config --local user.name &quot;GitHub Action&quot;</span>
<span class="line">          git commit -am &quot;Commit uncommitted changes [skip ci]&quot;</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push tag</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          git push origin main --follow-tags</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish 🚀</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm publish <span class="token punctuation">-</span><span class="token punctuation">-</span>access public</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">NODE_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.NPM_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create GitHub Release</span>
<span class="line">        <span class="token key atrule">id</span><span class="token punctuation">:</span> create_release</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/create<span class="token punctuation">-</span>release@v1</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">tag_name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">release_name</span><span class="token punctuation">:</span> Release $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">draft</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">          <span class="token key atrule">prerelease</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Sentry release and upload source maps</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> getsentry/action<span class="token punctuation">-</span>release@v1.7.0</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">SENTRY_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SENTRY_AUTH_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">SENTRY_ORG</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SENTRY_ORG <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">SENTRY_PROJECT</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SENTRY_PROJECT <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">environment</span><span class="token punctuation">:</span> production</span>
<span class="line">          <span class="token key atrule">sourcemap</span><span class="token punctuation">:</span> ./lib/<span class="token important">*.js.map</span></span>
<span class="line">          <span class="token key atrule">version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Notify on failure</span>
<span class="line">        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/github<span class="token punctuation">-</span>script@v5</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">            const issue = {</span>
<span class="line">              owner: context.repo.owner,</span>
<span class="line">              repo: context.repo.repo,</span>
<span class="line">              title: &quot;Combined workflow failed&quot;,</span>
<span class="line">              body: \`The workflow failed on [\${context.sha.substring(0, 7)}](\${context.payload.repository.html_url}/commit/\${context.sha}). Please check it.\`,</span>
<span class="line">            };</span>
<span class="line">            github.rest.issues.create(issue);</span></span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">deploy_to_production</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&#39;npm ci &amp;&amp; npm run build:prod&#39;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.GITHUB_TOKEN }}&#39;</span></span>
<span class="line">          <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT }}&#39;</span></span>
<span class="line">          <span class="token key atrule">channelId</span><span class="token punctuation">:</span> live</span>
<span class="line">          <span class="token key atrule">projectId</span><span class="token punctuation">:</span> gse<span class="token punctuation">-</span>roar<span class="token punctuation">-</span>assessment</span>
<span class="line">          <span class="token key atrule">target</span><span class="token punctuation">:</span> production</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Notify on failure</span>
<span class="line">        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/github<span class="token punctuation">-</span>script@v5</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">            const issue = {</span>
<span class="line">              owner: context.repo.owner,</span>
<span class="line">              repo: context.repo.repo,</span>
<span class="line">              title: &quot;Combined workflow failed&quot;,</span>
<span class="line">              body: \`The workflow failed on [\${context.sha.substring(0, 7)}](\${context.payload.repository.html_url}/commit/\${context.sha}). Please check it.\`,</span>
<span class="line">            };</span>
<span class="line">            github.rest.issues.create(issue);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const u=s(l,[["render",t],["__file","publish-to-npm-create-new-release.html.vue"]]),o=JSON.parse('{"path":"/developer/github-actions/apps/publish-to-npm-create-new-release.html","title":"publish-to-npm-create-new-release.yml","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1743546779000,"contributors":[{"name":"Elijah Kelly","username":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1,"url":"https://github.com/Elijah Kelly"},{"name":"Kyle","username":"Kyle","email":"ksmontville@gmail.com","commits":1,"url":"https://github.com/Kyle"}]},"filePathRelative":"developer/github-actions/apps/publish-to-npm-create-new-release.md"}');export{u as comp,o as data};
