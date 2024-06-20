import{_ as n,o as s,c as a,e}from"./app-BoCofPYZ.js";const t={},o=e(`<h1 id="roam-fluency" tabindex="-1"><a class="header-anchor" href="#roam-fluency"><span>ROAM Fluency</span></a></h1><h2 id="translation-guide-for-roam-fluecy" tabindex="-1"><a class="header-anchor" href="#translation-guide-for-roam-fluecy"><span>Translation Guide for ROAM Fluecy</span></a></h2><h4 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction"><span>1. Introduction</span></a></h4><p>Welcome to the ROAM-Fluency Translation Guide — your comprehensive companion for making ROAM-Fluency accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app. ROAM-Fluency includes two tasks:</p><ol><li>ROAM Fluency-ARF or ROAM Single-Digit</li><li>ROAM Fluency-CalF or ROAM Multi-Digit</li></ol><p><strong>What This Guide Covers:</strong></p><ul><li><p><strong>Folder Structure:</strong> Learn how to organize the translation files within the app&#39;s directory.</p></li><li><p><strong>Internationalization Setup:</strong> Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.</p></li><li><p><strong>Asset Management:</strong> Collaborate with partners to ensure all required assets from <code>assets.json</code> are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.</p></li><li><p><strong>Collaboration:</strong> Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.</p></li><li><p><strong>Testing and Deployment:</strong> Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.</p></li></ul><h4 id="_2-folder-structure" tabindex="-1"><a class="header-anchor" href="#_2-folder-structure"><span>2. Folder Structure</span></a></h4><p>Create a new folder under <code>src/i18n/locales</code> for each language, using the initials of the language. Inside each language folder, include a file named <code>translation.json</code>. Ensure that all languages follow the same structure in their translation files. Collaborate with partners to obtain and maintain translation content.</p><p>Example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>src/
├─ i18n/
|   ├─ locales/
|       ├─ en/          // English
|           ├─ translation.json
|       ├─ es/          // Spanish (Add more languages as needed)
|           ├─ translation.json
├─ ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-internationalization-setup" tabindex="-1"><a class="header-anchor" href="#_3-internationalization-setup"><span>3. Internationalization Setup</span></a></h4><p>On <code>i18n.js</code>, import all the files from the <strong>translation items</strong>. For example <code>import enTranslations from &#39;../locales/en/translation.json&#39;;</code> Inside the file you will find the initialization of i18next and language detection.</p><p>The following code represents the <code>i18n.js</code> file with comments on where to add files and define other languages:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Import the necessary modules and functions</span>
<span class="token keyword">import</span> i18next <span class="token keyword">from</span> <span class="token string">&#39;i18next&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LanguageDetector <span class="token keyword">from</span> <span class="token string">&#39;i18next-browser-languagedetector&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> enTranslations <span class="token keyword">from</span> <span class="token string">&quot;./locales/en/translation.json&quot;</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> esTranslations <span class="token keyword">from</span> <span class="token string">&quot;./locales/es/translation.json&quot;</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> itTranslations <span class="token keyword">from</span> <span class="token string">&quot;./locales/it/translation.json&quot;</span><span class="token punctuation">;</span> 
<span class="token comment">// add additional language</span>

<span class="token comment">// Set up i18next</span>
i18next
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LanguageDetector<span class="token punctuation">)</span>
  <span class="token comment">// .on(&#39;initialized&#39;, handleLanguageDetection)</span>
  <span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// which langauage codes to use. Ex. if &#39;en-US&#39; detected, will use &#39;en&#39;</span>
    <span class="token literal-property property">load</span><span class="token operator">:</span> <span class="token string">&quot;languageOnly&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fallbackLng</span><span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detection</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;defaultToEnglish&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;querystring&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resources</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">translation</span><span class="token operator">:</span> enTranslations<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">es</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">translation</span><span class="token operator">:</span> esTranslations<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">it</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">translation</span><span class="token operator">:</span> itTranslations<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// add additional language</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-asset-management" tabindex="-1"><a class="header-anchor" href="#_4-asset-management"><span>4. Asset Management</span></a></h3><h5 id="_4-1-tasks-fluency-assets-json" tabindex="-1"><a class="header-anchor" href="#_4-1-tasks-fluency-assets-json"><span>4.1. <code>tasks/fluency/assets.json</code></span></a></h5><ul><li>Collaborate with partners to ensure all required assets from <code>assets.json</code> are provided.</li><li>Add the provided assets to google buckets.</li><li>Only the assets listed under <code>languageSpecific</code> within <code>assets.json</code> need to be generated.</li></ul><h5 id="_4-2-google-buckets" tabindex="-1"><a class="header-anchor" href="#_4-2-google-buckets"><span>4.2. Google Buckets</span></a></h5><ul><li>Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is <code>roam-fluency</code>.</li><li>Note that this bucket contains assets and corpora for multiple math tasks, so refer to the respective <code>assets.json</code> for uploading the required files.</li></ul><h4 id="_5-collaboration" tabindex="-1"><a class="header-anchor" href="#_5-collaboration"><span>5. Collaboration</span></a></h4><p>Clearly state the expectations from partners regarding the provision of corpus files, translation files, and assets.</p><h4 id="_6-testing" tabindex="-1"><a class="header-anchor" href="#_6-testing"><span>6. Testing</span></a></h4><p>For testing a specific language we will have to include <code>/?lng=language</code>. For example for English, we will use <code>/?lng=en</code>.</p><p>Roam-fluency has a specific consent form only for english, when adding a new language, we must specify: <code>consent=false</code>.</p><p>Roam-fluency asks for participant ID only in english if recruitment is not equal to &#39;school&#39; and a PID is not provided. To prevent this when adding a new language we must specify a PID as <code>pid=xxx</code> or recruitment as <code>recruitment=school</code>.</p><p>To access the different languages, we will have to include the parameters to the link, For example for English it would be:<br><code>https://link-testing-or-localhost/?lng=en&amp;consent=false&amp;recruitment=school</code>.</p><p>Additionally, Roam-fluency is adapted only to <strong>Desktop</strong> devices.</p>`,28),i=[o];function l(r,p){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","Fluency.html.vue"]]),u=JSON.parse('{"path":"/internationalization/Fluency.html","title":"ROAM Fluency","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Translation Guide for ROAM Fluecy","slug":"translation-guide-for-roam-fluecy","link":"#translation-guide-for-roam-fluecy","children":[{"level":3,"title":"4. Asset Management","slug":"_4-asset-management","link":"#_4-asset-management","children":[]}]}],"git":{"updatedTime":1710802896000,"contributors":[{"name":"Kruttika Bhat","email":"gkb15997@gmail.com","commits":3},{"name":"Emily Arteaga","email":"62304493+Emily-ejag@users.noreply.github.com","commits":1}]},"filePathRelative":"internationalization/Fluency.md"}');export{d as comp,u as data};