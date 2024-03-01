import{_ as n,o as s,c as e,e as a}from"./app-C-rWbi4S.js";const t={},o=a(`<h1 id="roar-letter" tabindex="-1"><a class="header-anchor" href="#roar-letter"><span>ROAR Letter</span></a></h1><h2 id="translation-guide-for-roar-letter" tabindex="-1"><a class="header-anchor" href="#translation-guide-for-roar-letter"><span>Translation Guide for ROAR Letter</span></a></h2><h4 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction"><span>1. Introduction</span></a></h4><p>Welcome to the ROAR-letter Translation Guide — your comprehensive companion for making ROAR-letter accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app.</p><p><strong>What This Guide Covers:</strong></p><ul><li><p><strong>Folder Structure:</strong> Learn how to organize word corpora and translation files within the app&#39;s directory.</p></li><li><p><strong>Internationalization Setup:</strong> Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.</p></li><li><p><strong>Asset Management:</strong> Collaborate with partners to ensure all required assets from both <code>assets.json</code> and <code>webpAssets.json</code> are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.</p></li><li><p><strong>Collaboration:</strong> Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.</p></li><li><p><strong>Testing and Deployment:</strong> Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.</p></li></ul><h4 id="_2-folder-structure" tabindex="-1"><a class="header-anchor" href="#_2-folder-structure"><span>2. Folder Structure</span></a></h4><h5 id="_2-1-stimuli" tabindex="-1"><a class="header-anchor" href="#_2-1-stimuli"><span>2.1. Stimuli</span></a></h5><p>Create a new folder under <code>src/stimuli</code> for each language, using the initials of the language. Inside each language folder, include all the files specified for letter (everything but phoenics). Collaborate with partners to obtain the necessary content for these files.</p><p>Example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>src/
├─ stimuli/
|   ├─ en/          // English
|       ├─ letterNameLower.csv
|       ├─ letterNameUpper.csv
|       ├─ letterNamePractice.csv
|       ├─ letterPhoneme.csv
|       ├─ letterPhonemePractice.csv
|       ├─ textSoundPseudo.csv
|       ├─ storyLion.csv
|       ├─ storyPhonics.csv
|       ├─ practicePhonics.csv
|   ├─ es/          // Spanish (Add more languages as needed)
|       ├─ letterNameLower.csv
|       ├─ letterNameUpper.csv
|       ├─ letterNamePractice.csv
|       ├─ letterPhoneme.csv
|       ├─ letterPhonemePractice.csv
|       ├─ storyLion.csv
|   ├─ it/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-translation-items" tabindex="-1"><a class="header-anchor" href="#_2-2-translation-items"><span>2.2. Translation Items</span></a></h5><p>Create a new folder under <code>src/locales</code> for each language, using the initials of the language. Inside each language folder, include a file named <code>translation.json</code>. Ensure that all languages follow the same structure in their translation files. Collaborate with partners to obtain and maintain translation content.</p><p>Example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>src/
├─ locales/
|   ├─ en/          // English
|       ├─ translation.json
|   ├─ es/          // Spanish (Add more languages as needed)
|       ├─ translation.json
├─ ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-internationalization-setup" tabindex="-1"><a class="header-anchor" href="#_3-internationalization-setup"><span>3. Internationalization Setup</span></a></h4><h4 id="_3-1-file-src-experiment-i18n-js" tabindex="-1"><a class="header-anchor" href="#_3-1-file-src-experiment-i18n-js"><span>3.1. File <code>src/experiment/i18n.js</code></span></a></h4><p>On <code>i18n.js</code>, import all the files from the <strong>corpus</strong> and <strong>translation items</strong>. For example <code>import enTranslations from &#39;../locales/en/translation.json&#39;;</code> Inside the file you will find the initialization of i18next and language detection. You must include all <code>stimuli</code> items on <code>letters</code> to manage different language corpora.</p><p>The following code represents the <code>i18n.js</code> file with comments on where to add files and define other languages:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Import the necessary modules and functions</span>
<span class="token keyword">import</span> i18next <span class="token keyword">from</span> <span class="token string">&#39;i18next&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LanguageDetector <span class="token keyword">from</span> <span class="token string">&#39;i18next-browser-languagedetector&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Import all your corpus files</span>

<span class="token comment">// Define the wordlist object for managing URLs</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> letters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">letterNameLower</span><span class="token operator">:</span> enLetterNameLower<span class="token punctuation">,</span>
    <span class="token literal-property property">letterNameUpper</span><span class="token operator">:</span> enLetterNameUpper<span class="token punctuation">,</span>
    <span class="token literal-property property">letterNamePractice</span><span class="token operator">:</span> enLetterNamePractice<span class="token punctuation">,</span>
    <span class="token literal-property property">letterPhoneme</span><span class="token operator">:</span> enLetterPhoneme<span class="token punctuation">,</span>
    <span class="token literal-property property">letterPhonemePractice</span><span class="token operator">:</span> enLetterPhonemePractice<span class="token punctuation">,</span>
    <span class="token literal-property property">letterTextSoundPseudo</span><span class="token operator">:</span> enLetterTextSoundPseudo<span class="token punctuation">,</span>
    <span class="token literal-property property">storyLion</span><span class="token operator">:</span> enStoryLion<span class="token punctuation">,</span>
    <span class="token literal-property property">storyPhonics</span><span class="token operator">:</span> enStoryPhonics<span class="token punctuation">,</span>
    <span class="token literal-property property">practicePhonics</span><span class="token operator">:</span> enPracticePhonics<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">es</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">letterNameLower</span><span class="token operator">:</span> esLetterNameLower<span class="token punctuation">,</span>
    <span class="token literal-property property">letterNameUpper</span><span class="token operator">:</span> esLetterNameUpper<span class="token punctuation">,</span>
    <span class="token literal-property property">letterNamePractice</span><span class="token operator">:</span> esLetterNamePractice<span class="token punctuation">,</span>
    <span class="token literal-property property">letterPhoneme</span><span class="token operator">:</span> esLetterPhoneme<span class="token punctuation">,</span>
    <span class="token literal-property property">letterPhonemePractice</span><span class="token operator">:</span> esLetterPhonemePractice<span class="token punctuation">,</span>
    <span class="token literal-property property">storyLion</span><span class="token operator">:</span> esStoryLion<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">it</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">letterNameLower</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">letterNameUpper</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">letterNamePractice</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">letterPhoneme</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">letterPhonemePractice</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">storyLion</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">storyTextSoundPseudo</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// add additional languages</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Set up i18next</span>
i18next
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LanguageDetector<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;languageChanged&#39;</span><span class="token punctuation">,</span> processCSV<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">load</span><span class="token operator">:</span> <span class="token string">&#39;languageOnly&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fallbackLng</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detection</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;defaultToEnglish&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;querystring&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-file-src-experiment-experimentsetup-js" tabindex="-1"><a class="header-anchor" href="#_3-2-file-src-experiment-experimentsetup-js"><span>3.2. File <code>src/experiment/experimentSetup.js</code></span></a></h4><p>In this file, the assets will be loaded accordingly to the files in each language</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// define the csv corpus files that will be loaded for adding assets</span>
<span class="token keyword">function</span> <span class="token function">getFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i18next<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    files <span class="token operator">=</span> <span class="token punctuation">[</span>
      esLetterNameLower<span class="token punctuation">,</span>
      esLetterNamePractice<span class="token punctuation">,</span>
      esLetterNameUpper<span class="token punctuation">,</span> 
      esLetterPhoneme<span class="token punctuation">,</span> 
      esLetterPhonemePractice<span class="token punctuation">,</span>
      esStoryLion<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token comment">// add additional languages</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    files <span class="token operator">=</span> <span class="token punctuation">[</span>enLetterNameLower<span class="token punctuation">,</span>
      enLetterNamePractice<span class="token punctuation">,</span>
      enLetterNameUpper<span class="token punctuation">,</span> 
      enLetterPhoneme<span class="token punctuation">,</span> 
      enLetterPhonemePractice<span class="token punctuation">,</span>
      enLetterTextSoundPseudo<span class="token punctuation">,</span>
      enStoryLion<span class="token punctuation">,</span>
      enStoryPhonics<span class="token punctuation">,</span>
      enPracticePhonics
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> files<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Make sure to integrate these code snippets into your app&#39;s structure, adapting them as needed for any additional languages or specific requirements.</p><h4 id="_4-asset-management" tabindex="-1"><a class="header-anchor" href="#_4-asset-management"><span>4. Asset Management</span></a></h4><h5 id="_4-1-assets-json-and-webpassets-json" tabindex="-1"><a class="header-anchor" href="#_4-1-assets-json-and-webpassets-json"><span>4.1. <code>assets.json</code> and <code>webpAssets.json</code></span></a></h5><ul><li>Collaborate with partners to ensure all required assets from both both <code>assets.json</code> and <code>webpAssets.json</code> are provided.</li><li>Add the provided assets to google buckets.</li></ul><h5 id="_4-2-google-buckets" tabindex="-1"><a class="header-anchor" href="#_4-2-google-buckets"><span>4.2. Google Buckets</span></a></h5><ul><li>Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is <code>roar-ak</code></li></ul><h4 id="_5-collaboration" tabindex="-1"><a class="header-anchor" href="#_5-collaboration"><span>5. Collaboration</span></a></h4><p>Clearly state the expectations from partners regarding the provision of corpus files, translation files, and assets.</p><h4 id="_6-testing" tabindex="-1"><a class="header-anchor" href="#_6-testing"><span>6. Testing</span></a></h4><p>For testing an specific language we will have to include <code>/?lng=language</code>. For example for English, we will use <code>/?lng=en</code>.</p><p>To access the different languages, we will have to include the parameters to the link, For example for English no story should be <code>https://link-testing-or-localhost/?lng=en</code>.</p><p>Additionally, Roar-letter is adapted to two different devices with have to be tested: <strong>Desktop</strong> and <strong>Tablet</strong>.</p>`,35),i=[o];function p(l,r){return s(),e("div",null,i)}const d=n(t,[["render",p],["__file","Letter.html.vue"]]),u=JSON.parse('{"path":"/internationalization/Letter.html","title":"ROAR Letter","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Translation Guide for ROAR Letter","slug":"translation-guide-for-roar-letter","link":"#translation-guide-for-roar-letter","children":[]}],"git":{"updatedTime":1709252376000,"contributors":[{"name":"Emily Arteaga","email":"62304493+Emily-ejag@users.noreply.github.com","commits":3},{"name":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1}]},"filePathRelative":"internationalization/Letter.md"}');export{d as comp,u as data};
