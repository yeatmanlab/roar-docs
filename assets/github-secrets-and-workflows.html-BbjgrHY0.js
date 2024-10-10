import{_ as n,c as s,o as a,e}from"./app-BJVVi57W.js";const t={},p=e(`<h1 id="github-secrets-and-workflows" tabindex="-1"><a class="header-anchor" href="#github-secrets-and-workflows"><span>GitHub Secrets and Workflows</span></a></h1><p>Running the Firebase Emulator requires the use of GitHub Workflows and Secrets. This section will explain how to set up the GitHub Workflows and Secrets for the ROAR app.</p><h2 id="secrets" tabindex="-1"><a class="header-anchor" href="#secrets"><span>Secrets</span></a></h2><p>The following secrets are required to run the Firebase Emulator in the GitHub Workflow:</p><h3 id="firebase-secrets" tabindex="-1"><a class="header-anchor" href="#firebase-secrets"><span>Firebase Secrets</span></a></h3><ul><li>APPCHECK_DEBUG_TOKEN</li><li>FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT</li><li>FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT_DEV</li></ul><h3 id="testing-secrets" tabindex="-1"><a class="header-anchor" href="#testing-secrets"><span>Testing Secrets</span></a></h3><ul><li>CYPRESS_BASE_URL</li><li>CYPRESS_RECORD_KEY</li><li>SUPER_ADMIN_USERNAME</li><li>SUPER_ADMIN_PASSWORD</li><li>SUPER_ADMIN_EMAIL</li><li>SUPER_ADMIN_ID</li></ul><h3 id="sentry-secrets" tabindex="-1"><a class="header-anchor" href="#sentry-secrets"><span>Sentry Secrets</span></a></h3><ul><li>SENTRY_AUTH_TOKEN</li><li>SENTRY_ORG</li><li>SENTRY_PROJECT</li></ul><h3 id="other-secrets" tabindex="-1"><a class="header-anchor" href="#other-secrets"><span>Other Secrets</span></a></h3><ul><li>DASHBOARD_REPO_TOKEN</li><li>NPM_TOKEN</li></ul><h2 id="workflows" tabindex="-1"><a class="header-anchor" href="#workflows"><span>Workflows</span></a></h2><p>The following GitHub Workflows are used to run the Firebase Emulator:</p><h3 id="firebase-emulation-tests-yml" tabindex="-1"><a class="header-anchor" href="#firebase-emulation-tests-yml"><span>firebase-emulation-tests.yml</span></a></h3><p>This workflow runs the Firebase Emulator and executes the tests using the Cypress testing framework. The workflow is triggered on push and pull request events.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Firebase Emulation Tests</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> reopened<span class="token punctuation">,</span> synchronize<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">concurrency</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">group</span><span class="token punctuation">:</span> $ <span class="token punctuation">{</span><span class="token punctuation">{</span> env.CYPRESS_PARALLEL_GROUP <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token key atrule">cancel-in-progress</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">firebase_emulate_and_cypress_run</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">timeout-minutes</span><span class="token punctuation">:</span> <span class="token number">120</span></span>
<span class="line">    <span class="token key atrule">strategy</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">fail-fast</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">      <span class="token key atrule">matrix</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">browser</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>chromium<span class="token punctuation">,</span> edge<span class="token punctuation">]</span></span>
<span class="line">        <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">CYPRESS_BASE_URL</span><span class="token punctuation">:</span> <span class="token string">&#39;http://localhost:8000&#39;</span></span>
<span class="line">      <span class="token key atrule">CYPRESS_RECORD_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.CYPRESS_RECORD_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">CYPRESS_PARALLEL_GROUP</span><span class="token punctuation">:</span> ci<span class="token punctuation">-</span>preview<span class="token punctuation">-</span>tests<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.run_id <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">COMMIT_INFO_MESSAGE</span><span class="token punctuation">:</span> E2E Tests for PR $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.number <span class="token punctuation">}</span><span class="token punctuation">}</span> &quot;$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.title <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot; from commit &quot;$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.head.sha <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;</span>
<span class="line">      <span class="token key atrule">COMMIT_INFO_SHA</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.head.sha <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">SUPER_ADMIN_USERNAME</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SUPER_ADMIN_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">SUPER_ADMIN_PASSWORD</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SUPER_ADMIN_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">SUPER_ADMIN_EMAIL</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SUPER_ADMIN_EMAIL <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">SUPER_ADMIN_ID</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SUPER_ADMIN_ID <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">APPCHECK_DEBUG_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.APPCHECK_DEBUG_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">EXPORT_BUCKET</span><span class="token punctuation">:</span> gs<span class="token punctuation">:</span>//roar<span class="token punctuation">-</span>assessment<span class="token punctuation">-</span>dev<span class="token punctuation">-</span>export</span>
<span class="line">      <span class="token key atrule">EXPORT_DIR</span><span class="token punctuation">:</span> emulator<span class="token punctuation">-</span>exports<span class="token punctuation">-</span>ci<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.browser <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.containers <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.run_id <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.job <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Clean npm cache</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm cache clean <span class="token punctuation">-</span><span class="token punctuation">-</span>force</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Authenticate with Google Cloud SDK</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> google<span class="token punctuation">-</span>github<span class="token punctuation">-</span>actions/auth@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">credentials_json</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT_DEV <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Google Cloud SDK with Firebase Service Account</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> google<span class="token punctuation">-</span>github<span class="token punctuation">-</span>actions/setup<span class="token punctuation">-</span>gcloud@v2</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">project_id</span><span class="token punctuation">:</span> gse<span class="token punctuation">-</span>roar<span class="token punctuation">-</span>assessment<span class="token punctuation">-</span>dev</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Export Firestore Data</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          gcloud firestore export $EXPORT_BUCKET/$EXPORT_DIR --collection-ids=tasks,variants</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download Firestore Data</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          gsutil -m cp -r $EXPORT_BUCKET/$EXPORT_DIR .</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start Firestore Emulator and Import Data</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npx firebase emulators:start --project=gse-roar-assessment-dev --import=./$EXPORT_DIR &amp;</span>
<span class="line">          npx wait-on tcp:4000 --timeout 60000</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build the App</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run emulate<span class="token punctuation">:</span>build</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Serve the App</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npm run emulate:serve-ci &amp; </span>
<span class="line">          npx wait-on http://127.0.0.1:8000 --timeout 60000;</span>
<span class="line">          echo &quot;Server started and is accessible at http://127.0.0.1:8000&quot;</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Generate Variant Tests</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> cypress<span class="token punctuation">-</span>io/github<span class="token punctuation">-</span>action@v6</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">browser</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.browser <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">headed</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token key atrule">record</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">parallel</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">          <span class="token key atrule">wait-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> env.CYPRESS_BASE_URL <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token string">&#39;cypress/e2e/generateVariantTests.cy.js&#39;</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cypress Default Tests</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> cypress<span class="token punctuation">-</span>io/github<span class="token punctuation">-</span>action@v6</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">browser</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.browser <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">headed</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">record</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">parallel</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">wait-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> env.CYPRESS_BASE_URL <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token string">&#39;cypress/e2e/default-tests/**/*&#39;</span></span>
<span class="line">          <span class="token key atrule">wait-on-timeout</span><span class="token punctuation">:</span> <span class="token number">300</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Clean up Firestore Exports</span>
<span class="line">        <span class="token key atrule">if</span><span class="token punctuation">:</span> always()</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          gsutil -m -q rm -rf $EXPORT_BUCKET/$EXPORT_DIR || true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[p];function c(i,u){return a(),s("div",null,l)}const r=n(t,[["render",c],["__file","github-secrets-and-workflows.html.vue"]]),k=JSON.parse('{"path":"/emulation/emulator-configuration-guide/github-secrets-and-workflows.html","title":"GitHub Secrets and Workflows","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Secrets","slug":"secrets","link":"#secrets","children":[{"level":3,"title":"Firebase Secrets","slug":"firebase-secrets","link":"#firebase-secrets","children":[]},{"level":3,"title":"Testing Secrets","slug":"testing-secrets","link":"#testing-secrets","children":[]},{"level":3,"title":"Sentry Secrets","slug":"sentry-secrets","link":"#sentry-secrets","children":[]},{"level":3,"title":"Other Secrets","slug":"other-secrets","link":"#other-secrets","children":[]}]},{"level":2,"title":"Workflows","slug":"workflows","link":"#workflows","children":[{"level":3,"title":"firebase-emulation-tests.yml","slug":"firebase-emulation-tests-yml","link":"#firebase-emulation-tests-yml","children":[]}]}],"git":{"updatedTime":1727815968000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":4}]},"filePathRelative":"emulation/emulator-configuration-guide/github-secrets-and-workflows.md"}');export{r as comp,k as data};
