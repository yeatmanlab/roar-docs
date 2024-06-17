import{_ as n,o as s,c as a,e}from"./app-CiunZUYm.js";const t={},p=e(`<h1 id="preparing-the-app-for-packaging-and-deployment" tabindex="-1"><a class="header-anchor" href="#preparing-the-app-for-packaging-and-deployment"><span>Preparing the App for Packaging and Deployment</span></a></h1><h2 id="researcher" tabindex="-1"><a class="header-anchor" href="#researcher"><span>Researcher</span></a></h2><ul><li>Ensure the app code is structured appropriately.</li></ul><h2 id="developer" tabindex="-1"><a class="header-anchor" href="#developer"><span>Developer</span></a></h2><p>Working within the app repository:</p><ul><li><p>If the web app bundles external html, scripts, or strings:</p><ul><li><code>npm install @rollup/plugin-html, rollup-plugin-string</code></li></ul></li><li><p>Verify <code>package.json</code> is configured correctly, especially the &quot;name&quot; field.</p><ul><li>ex.<code> &quot;name&quot;: &quot;@bdelab/package-name&quot;</code></li></ul></li><li><p>Check both Webpack and Rollup configurations, changing any relevant fields including page title and app name where applicable.</p></li><li><h3 id="sample-webpack-config-cjs-from-roar-swr" tabindex="-1"><a class="header-anchor" href="#sample-webpack-config-cjs-from-roar-swr"><span>Sample <code>webpack.config.cjs</code> from roar-swr:</span></a></h3></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// eslint-disable-next-line import/no-extraneous-dependencies</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// eslint-disable-next-line import/no-extraneous-dependencies</span>
    <span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> sentryWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sentry/webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dotenv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;dotenv&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> commonConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">moduleIds</span><span class="token operator">:</span> <span class="token string">&#39;deterministic&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
              <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// get the name. E.g. node_modules/packageName/not/this/part.js</span>
                <span class="token comment">// or node_modules/packageName</span>
                <span class="token keyword">const</span> packageName <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/](.*?)([\\\\/]|$)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
                <span class="token comment">// npm package names are URL-safe, but some servers don&#39;t like @ symbols</span>
                <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">npm.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>packageName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;path-browserify&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.m?js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">fullySpecified</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif|webp)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;img/[name][ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.mp3$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[path][name].[ext]&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;audio&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.mp4$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name].[ext]&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;video&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.csv$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;csv-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">dynamicTyping</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">skipEmptyLines</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">experiments</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">topLevelAwait</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> webConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>commonConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;serve.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].bundle.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">keep</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.git</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Rapid Online Assessment of Reading - SWR&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">sentryWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">org</span><span class="token operator">:</span> <span class="token string">&#39;roar-89588e380&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">project</span><span class="token operator">:</span> <span class="token string">&#39;swr&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">authToken</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SENTRY_AUTH_TOKEN</span><span class="token punctuation">,</span>
          <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">errorHandler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> productionConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>webConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> developmentConfig <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>webConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span>
        <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> roarDB <span class="token operator">=</span> env<span class="token punctuation">.</span>dbmode <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">;</span>
    
      <span class="token keyword">const</span> envDependentConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ids<span class="token punctuation">.</span>HashedModuleIdsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// so that file hashes don&#39;t change unexpectedly</span>
          <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token constant">ROAR_DB</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>roarDB<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">process</span><span class="token operator">:</span> <span class="token string">&#39;process/browser&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;development&#39;</span><span class="token operator">:</span>
          <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>developmentConfig<span class="token punctuation">,</span> envDependentConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;production&#39;</span><span class="token operator">:</span>
          <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>productionConfig<span class="token punctuation">,</span> envDependentConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;No matching configuration was found!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sample-rollup-config-js-from-roar-swr" tabindex="-1"><a class="header-anchor" href="#sample-rollup-config-js-from-roar-swr"><span>Sample <code>rollup.config.js</code> from roar-swr:</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>    <span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-commonjs&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> postcss <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-postcss&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> dsv <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-dsv&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> terser <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-terser&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> sentryRollupPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@sentry/rollup-plugin&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token string">&#39;dotenv/config&#39;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;src/index.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">postcss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token string">&#39;resources/roar-swr.css&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">dsv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">preferBuiltins</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">terser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">sentryRollupPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">org</span><span class="token operator">:</span> <span class="token string">&#39;roar-89588e380&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">project</span><span class="token operator">:</span> <span class="token string">&#39;swr&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">authToken</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SENTRY_AUTH_TOKEN</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;lib&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;@bdelab/roar-swr&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[name].[hash].js&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&#39;[name].[hash].js&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-staging-and-production-hosting-targets-on-gse-roar-assessment-project" tabindex="-1"><a class="header-anchor" href="#create-staging-and-production-hosting-targets-on-gse-roar-assessment-project"><span>Create Staging and Production Hosting Targets on gse-roar-assessment Project</span></a></h3><p>From the <code>gse-roar-assessment</code> Firebase project, navigate to &quot;Hosting&quot; on the left hand side.</p><ol><li>Click &quot;add another site&quot; in the top right corner</li><li>Name the hosting targets with the following convention: <ul><li><em>[roar][roam][roav]-app-name</em></li><li><em>[roar][roam][roav]-app-name-staging</em></li></ul></li><li>For example, an app named &quot;roar-word&quot; would have the following hosting targets: <ul><li>https://roar-word.web.app</li><li>https://roar-word-staging.web.app</li></ul></li></ol><h3 id="ensure-firebaseconfig-js-points-to-the-correct-firebase-configs" tabindex="-1"><a class="header-anchor" href="#ensure-firebaseconfig-js-points-to-the-correct-firebase-configs"><span>Ensure firebaseConfig.js Points to the Correct Firebase Configs</span></a></h3><p><code>serve/firebaseConfig.js</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable import/prefer-default-export */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/experiment/config/logger&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/* eslint-disable import/prefer-default-export */</span>
<span class="token keyword">const</span> devFirebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;AIzaSyCX9WR-j9yv1giYeFsMpbjj2G3p7jNHxIU&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authDomain</span><span class="token operator">:</span> <span class="token string">&#39;gse-yeatmanlab.firebaseapp.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">&#39;gse-yeatmanlab&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storageBucket</span><span class="token operator">:</span> <span class="token string">&#39;gse-yeatmanlab.appspot.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messagingSenderId</span><span class="token operator">:</span> <span class="token string">&#39;292331000426&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;1:292331000426:web:91a04220991e3405737013&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">measurementId</span><span class="token operator">:</span> <span class="token string">&#39;G-0TBTMDS993&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> productionFirebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;AIzaSyDw0TnTXbvRyoVo5_oa_muhXk9q7783k_g&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authDomain</span><span class="token operator">:</span> <span class="token string">&#39;gse-roar-assessment.firebaseapp.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">&#39;gse-roar-assessment&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storageBucket</span><span class="token operator">:</span> <span class="token string">&#39;gse-roar-assessment.appspot.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messagingSenderId</span><span class="token operator">:</span> <span class="token string">&#39;757277423033&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;1:757277423033:web:d6e204ee2dd1047cb77268&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> firebaseConfig <span class="token operator">=</span>
  <span class="token comment">// eslint-disable-next-line no-undef</span>
  <span class="token constant">ROAR_DB</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> productionFirebaseConfig <span class="token operator">:</span> devFirebaseConfig<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> roarConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  firebaseConfig<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// eslint-disable-next-line operator-linebreak</span>
<span class="token keyword">const</span> logMessage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">This ROAR app will write data to the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>roarConfig<span class="token punctuation">.</span>firebaseConfig<span class="token punctuation">.</span>projectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> firestore database</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>logMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modify-firebaserc-to-deploy-to-the-designated-targets" tabindex="-1"><a class="header-anchor" href="#modify-firebaserc-to-deploy-to-the-designated-targets"><span>Modify .firebaserc to deploy to the designated targets.</span></a></h3><p><code>.firebaserc</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;projects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gse-roar-assessment&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;gse-roar-assessment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;hosting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;production&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;[name of production target in gse-roar-assessment hosting]&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;staging&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;[name of staging target in gse-roar-assessment hosting]&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-the-deployment-targets-using-gcloud-cli" tabindex="-1"><a class="header-anchor" href="#set-the-deployment-targets-using-gcloud-cli"><span>Set the Deployment Targets Using gcloud CLI:</span></a></h3><ol><li><p>Install the Firebase CLI:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> firebase-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Add a default Firebase project:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firebase use <span class="token parameter variable">--add</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select the project <code>gse-roar-assessment</code></p></li><li><p>Set the deployment targets:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firebase target:apply hosting production <span class="token punctuation">[</span>name of production target <span class="token keyword">in</span> gse-roar-assessment hosting<span class="token punctuation">]</span>
firebase target:apply hosting staging <span class="token punctuation">[</span>name of staging target <span class="token keyword">in</span> gse-roar-assessment hosting<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ensure that firebase.json targets are set to &quot;production&quot; and &quot;staging&quot;</p></li></ol><p><code>firebase.json</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;hosting&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;firebase.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/index.html&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**/*&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Feature-Policy&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;autoplay=*&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;public&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;staging&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;firebase.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;rewrites&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;destination&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/index.html&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;**/*&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Feature-Policy&quot;</span><span class="token punctuation">,</span>
              <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;autoplay=*&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-account-key-for-firebase-deployment" tabindex="-1"><a class="header-anchor" href="#service-account-key-for-firebase-deployment"><span>Service Account Key for Firebase Deployment</span></a></h3><p>Each app will need a Firebase service account .json file to deploy to Firebase. The Firebase service account authorizes the app to access Firebase services using a set of credentials. The service account key is a JSON file that contains the necessary credentials to authenticate the app with Firebase services. This file should be stored in the GitHub repository action secrets.</p><p><strong>To create a service account key:</strong></p><ol><li>Navigate to the Firebase console and select the &quot;gse-roar-assessment&quot; project.</li><li>Click on the gear icon in the top left corner and select &quot;Project settings&quot;.</li><li>Navigate to the &quot;Service accounts&quot; tab.</li><li>Click on &quot;Generate new private key&quot;.</li><li>Save the JSON file to the local machine (you may need it for additional Firebase actions).</li><li>Copy/paste the entire JSON file to the GitHub repository secrets as <code>FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT</code>.</li></ol><h3 id="setup-automated-workflows" tabindex="-1"><a class="header-anchor" href="#setup-automated-workflows"><span>Setup Automated Workflows</span></a></h3><p>GitHub actions ensure a consistent deployment environment where automated testing and monitoring are able to catch any new or regressive bugs that might have occurred in development.</p><ol><li>Create a new directory at the root of the project to hold the workflow files <ul><li><code>~/.github/workflows</code></li></ul></li><li>Add the pull request template into the <code>.github/</code> directory <ul><li><code>PULL_REQUEST_TEMPLATE.md</code>: <ul><li><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>  <span class="token title important"><span class="token punctuation">##</span> Proposed changes</span>

 <span class="token comment">&lt;!--
 Describe your changes here. Why are they necessary?

 If it fixes a bug or resolves a feature request, be sure to link to that issue.

 If appropriate, include images of the expected behavior or user experience.
 You can drag and drop images into this text box.
 --&gt;</span>

 <span class="token title important"><span class="token punctuation">##</span> Types of changes</span>

 What types of changes does this pull request introduce?

 <span class="token comment">&lt;!-- Put an \`x\` in the boxes that apply --&gt;</span>

 <span class="token list punctuation">-</span> [ ] Bugfix (non-breaking change which fixes an issue)
   <span class="token list punctuation">-</span> [ ] New feature (non-breaking change which adds functionality)
   <span class="token list punctuation">-</span> [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
   <span class="token list punctuation">-</span> [ ] Refactoring (non-breaking change that does not add functionality but makes code cleaner or more efficient)
   <span class="token list punctuation">-</span> [ ] Documentation Update
   <span class="token list punctuation">-</span> [ ] Tests (new or updated tests)
   <span class="token list punctuation">-</span> [ ] Style (changes to code styling)
   <span class="token list punctuation">-</span> [ ] CI (continuous integration changes)
   <span class="token list punctuation">-</span> [ ] Repository Maintenance
   <span class="token list punctuation">-</span> [ ] Other (please describe below)

 <span class="token title important"><span class="token punctuation">##</span> Checklist</span>

 <span class="token comment">&lt;!--
 Put an \`x\` in the boxes that apply. You can also fill these out after creating
 the PR. If you&#39;re unsure about any of them, don&#39;t hesitate to ask.  We&#39;re here
 to help! This is simply a reminder of what we are going to look for before
 merging your code.
 --&gt;</span>

 <span class="token list punctuation">-</span> [ ] I have read the <span class="token url">[<span class="token content">guidelines for contributing</span>](<span class="token url">https://github.com/yeatmanlab/roar-dashboard/blob/main/.github/CONTRIBUTING.md</span>)</span>.
   <span class="token list punctuation">-</span> [ ] The changes in this PR are as small as they can be. They represent one and only one fix or enhancement.
   <span class="token list punctuation">-</span> [ ] Linting checks pass with my changes.
   <span class="token list punctuation">-</span> [ ] Any existing unit tests pass with my changes.
   <span class="token list punctuation">-</span> [ ] Any existing end-to-end tests pass with my changes.
   <span class="token list punctuation">-</span> [ ] I have added tests that prove my fix is effective or that my feature works.
   <span class="token list punctuation">-</span> [ ] If this PR fixes an existing issue, I have added a unit or end-to-end test that will detect if this issue reoccurs.
   <span class="token list punctuation">-</span> [ ] I have added JSDoc comments as appropriate.
   <span class="token list punctuation">-</span> [ ] I have added the necessary documentation to the <span class="token url">[<span class="token content">roar-docs repository</span>](<span class="token url">https://github.com/yeatmanlab/roar-docs</span>)</span>.
   <span class="token list punctuation">-</span> [ ] I have shared this PR on the roar-pr-reviews channel (if I have access)
   <span class="token list punctuation">-</span> [ ] I have linked relevant issues (if any)

 <span class="token title important"><span class="token punctuation">##</span> Justification of missing checklist items</span>

 <span class="token comment">&lt;!--
 If you feel that a checklist item above is not applicable to this PR, please
 provide your justification here. Otherwise, delete this section.
 --&gt;</span>

 <span class="token title important"><span class="token punctuation">##</span> Further comments</span>

 <span class="token comment">&lt;!--
 If this is a relatively large or complex change, kick off the discussion by
 explaining why you chose the solution you did and what alternatives you
 considered, etc...
 --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li>Copy the following GitHub workflow files into the workflows folder (we will create and add the necessary secrets to the GitHub repo in a later step) <ul><li><p><code>firebase-hosting-merge.yml</code>:</p><ul><li><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>   <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Staging Firebase Hosting on Merge
   <span class="token key atrule">&#39;on&#39;</span><span class="token punctuation">:</span>
     <span class="token key atrule">push</span><span class="token punctuation">:</span>
       <span class="token key atrule">branches</span><span class="token punctuation">:</span>
         <span class="token punctuation">-</span> main
       <span class="token key atrule">tags-ignore</span><span class="token punctuation">:</span>
         <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+&#39;</span>
         <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+-alpha.[0-9]+&#39;</span>
         <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+-beta.[0-9]+&#39;</span>
   <span class="token key atrule">jobs</span><span class="token punctuation">:</span>
     <span class="token key atrule">build_and_deploy</span><span class="token punctuation">:</span>
       <span class="token key atrule">if</span><span class="token punctuation">:</span> <span class="token string">&quot;!contains(github.event.head_commit.message, &#39;[skip ci]&#39;)&quot;</span>
       <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
       <span class="token key atrule">steps</span><span class="token punctuation">:</span>
         <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
         <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&#39;npm ci &amp;&amp; npm run build:prod&#39;</span>
         <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0
           <span class="token key atrule">with</span><span class="token punctuation">:</span>
             <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.GITHUB_TOKEN }}&#39;</span>
             <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT }}&#39;</span>
             <span class="token key atrule">channelId</span><span class="token punctuation">:</span> live
             <span class="token key atrule">projectId</span><span class="token punctuation">:</span> gse<span class="token punctuation">-</span>roar<span class="token punctuation">-</span>assessment
             <span class="token key atrule">target</span><span class="token punctuation">:</span> staging
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>deploy-firebase-test-cypress.yml</code>:</p><ul><li><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>  <span class="token key atrule">name</span><span class="token punctuation">:</span> Firebase Deploy to Staging and Cypress e2e Tests
  <span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
      <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> reopened<span class="token punctuation">,</span> synchronize<span class="token punctuation">]</span>

  <span class="token key atrule">concurrency</span><span class="token punctuation">:</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> ci<span class="token punctuation">-</span>preview<span class="token punctuation">-</span>tests<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token key atrule">cancel-in-progress</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token key atrule">jobs</span><span class="token punctuation">:</span>
    <span class="token key atrule">build_and_preview</span><span class="token punctuation">:</span>
      <span class="token key atrule">if</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ github.event.pull_request.head.repo.full_name == github.repository }}&#39;</span>
      <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
      <span class="token key atrule">steps</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4
          <span class="token key atrule">with</span><span class="token punctuation">:</span>
            <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;lts/*&#39;</span>
        <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci <span class="token important">&amp;&amp;</span> npm run build<span class="token punctuation">:</span>dev
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Firebase Hosting Channel
          <span class="token key atrule">id</span><span class="token punctuation">:</span> firebase<span class="token punctuation">-</span>deploy
          <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0
          <span class="token key atrule">with</span><span class="token punctuation">:</span>
            <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.GITHUB_TOKEN }}&#39;</span>
            <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT }}&#39;</span>
            <span class="token key atrule">projectId</span><span class="token punctuation">:</span> gse<span class="token punctuation">-</span>roar<span class="token punctuation">-</span>assessment
            <span class="token key atrule">target</span><span class="token punctuation">:</span> staging
        <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> echo $<span class="token punctuation">{</span><span class="token punctuation">{</span> fromJson(steps.firebase<span class="token punctuation">-</span>deploy.outputs.urls)<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">outputs</span><span class="token punctuation">:</span>
        <span class="token key atrule">deployUrl</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> fromJson(steps.firebase<span class="token punctuation">-</span>deploy.outputs.urls)<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token key atrule">cypress_run</span><span class="token punctuation">:</span>
      <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>build_and_preview<span class="token punctuation">]</span>
      <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
      <span class="token key atrule">timeout-minutes</span><span class="token punctuation">:</span> <span class="token number">60</span>
      <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
        <span class="token key atrule">fail-fast</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
          <span class="token key atrule">browser</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>chromium<span class="token punctuation">,</span> edge<span class="token punctuation">]</span>
          <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token key atrule">CYPRESS_BASE_URL</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> needs.build_and_preview.outputs.deployUrl <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">CYPRESS_RECORD_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.CYPRESS_RECORD_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">COMMIT_INFO_MESSAGE</span><span class="token punctuation">:</span> Tests for PR $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.number <span class="token punctuation">}</span><span class="token punctuation">}</span> &quot;$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.title <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot; from commit &quot;$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.head.sha <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;
        <span class="token key atrule">COMMIT_INFO_SHA</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.head.sha <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">steps</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
          <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cypress run
          <span class="token key atrule">uses</span><span class="token punctuation">:</span> cypress<span class="token punctuation">-</span>io/github<span class="token punctuation">-</span>action@v6
          <span class="token key atrule">with</span><span class="token punctuation">:</span>
            <span class="token key atrule">browser</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.browser <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token key atrule">headed</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">build</span><span class="token punctuation">:</span> echo &quot;Build step already completed&quot;
            <span class="token key atrule">start</span><span class="token punctuation">:</span> echo &quot;App already deployed to Firebase&quot;
            <span class="token key atrule">wait-on</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> env.CYPRESS_BASE_URL <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token key atrule">wait-on-timeout</span><span class="token punctuation">:</span> <span class="token number">60</span>
            <span class="token key atrule">record</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">parallel</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
            <span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token string">&#39;cypress/e2e/**/*&#39;</span>
            <span class="token key atrule">ci-build-id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.run_id <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.browser <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>publish-to-npm-create-new-release.yml</code>:</p><ul><li><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish<span class="token punctuation">,</span> Release<span class="token punctuation">,</span> and Deploy
 <span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
   <span class="token key atrule">tags</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+-alpha.[0-9]+&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;v[0-9]+.[0-9]+.[0-9]+-beta.[0-9]+&#39;</span>
 
 <span class="token key atrule">jobs</span><span class="token punctuation">:</span>
   <span class="token key atrule">build</span><span class="token punctuation">:</span>
     <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
     <span class="token key atrule">steps</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout 🛎️
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">ref</span><span class="token punctuation">:</span> main
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js environment
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;lts/*&#39;</span>
           <span class="token key atrule">registry-url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://registry.npmjs.org&#39;</span>
           <span class="token key atrule">node-version-file</span><span class="token punctuation">:</span> <span class="token string">&#39;.nvmrc&#39;</span>
           <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">&#39;npm&#39;</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm
           <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
             \${{ runner.os }}-node-</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build 🔧
         <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
           npm ci
           npm run package</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check for uncommitted changes
         <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
           git config --local user.email &quot;action@github.com&quot;
           git config --local user.name &quot;GitHub Action&quot;
           git commit -am &quot;Commit uncommitted changes [skip ci]&quot;</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push tag
         <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
           git push origin main --follow-tags</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish 🚀
         <span class="token key atrule">run</span><span class="token punctuation">:</span> npm publish <span class="token punctuation">-</span><span class="token punctuation">-</span>access public
         <span class="token key atrule">env</span><span class="token punctuation">:</span>
           <span class="token key atrule">NODE_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.NPM_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create GitHub Release
         <span class="token key atrule">id</span><span class="token punctuation">:</span> create_release
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/create<span class="token punctuation">-</span>release@v1
         <span class="token key atrule">env</span><span class="token punctuation">:</span>
           <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">tag_name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">release_name</span><span class="token punctuation">:</span> Release $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">draft</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
           <span class="token key atrule">prerelease</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Sentry release and upload source maps
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> getsentry/action<span class="token punctuation">-</span>release@v1.7.0
         <span class="token key atrule">env</span><span class="token punctuation">:</span>
           <span class="token key atrule">SENTRY_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SENTRY_AUTH_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">SENTRY_ORG</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SENTRY_ORG <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">SENTRY_PROJECT</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SENTRY_PROJECT <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
           <span class="token key atrule">sourcemap</span><span class="token punctuation">:</span> ./lib/<span class="token important">*.js.map</span>
           <span class="token key atrule">version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
     
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Notify on failure
         <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/github<span class="token punctuation">-</span>script@v5
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
             const issue = {
               owner: context.repo.owner,
               repo: context.repo.repo,
               title: &quot;Combined workflow failed&quot;,
               body: \`The workflow failed on [\${context.sha.substring(0, 7)}](\${context.payload.repository.html_url}/commit/\${context.sha}). Please check it.\`,
             };
             github.rest.issues.create(issue);</span>
        
   <span class="token key atrule">deploy_to_production</span><span class="token punctuation">:</span>
     <span class="token key atrule">needs</span><span class="token punctuation">:</span> build
     <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
     <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token string">&#39;npm ci &amp;&amp; npm run build:prod&#39;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.GITHUB_TOKEN }}&#39;</span>
           <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">&#39;\${{ secrets.FIREBASE_SERVICE_ACCOUNT_GSE_ROAR_ASSESSMENT }}&#39;</span>
           <span class="token key atrule">channelId</span><span class="token punctuation">:</span> live
           <span class="token key atrule">projectId</span><span class="token punctuation">:</span> gse<span class="token punctuation">-</span>roar<span class="token punctuation">-</span>assessment
           <span class="token key atrule">target</span><span class="token punctuation">:</span> production
                     
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Notify on Failure
        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/github<span class="token punctuation">-</span>script@v5
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
         <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
           const issue = {
           owner: context.repo.owner,
           repo: context.repo.repo,
           title: &quot;Combined workflow failed&quot;,
           body: \`The workflow failed on [\${context.sha.substring(0, 7)}](\${context.payload.repository.html_url}/commit/\${context.sha}). Please check it.\`,
           };
           github.rest.issues.create(issue);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><code>submit-dashboard-pr.yml</code>:</p><ul><li><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code> <span class="token key atrule">name</span><span class="token punctuation">:</span> Update dependency version in ROAR<span class="token punctuation">-</span>dashboard
 
 <span class="token key atrule">on</span><span class="token punctuation">:</span>
   <span class="token key atrule">workflow_run</span><span class="token punctuation">:</span>
     <span class="token key atrule">workflows</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Publish, Release, and Deploy&#39;</span><span class="token punctuation">]</span>
     <span class="token key atrule">types</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> completed
 
 <span class="token key atrule">jobs</span><span class="token punctuation">:</span>
   <span class="token key atrule">update-version</span><span class="token punctuation">:</span>
     <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
 
     <span class="token key atrule">if</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.workflow_run.conclusion == &#39;success&#39; <span class="token punctuation">}</span><span class="token punctuation">}</span>
 
     <span class="token key atrule">steps</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout the repository
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
 
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get the new version
         <span class="token key atrule">id</span><span class="token punctuation">:</span> get_new_version
         <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
           VERSION=$(jq -r &#39;.version&#39; package.json)
           echo &quot;NEW_VERSION=$VERSION&quot; &gt;&gt; $GITHUB_OUTPUT</span>
 
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout the target repository
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">repository</span><span class="token punctuation">:</span> yeatmanlab/roar<span class="token punctuation">-</span>dashboard
           <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DASHBOARD_REPO_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">path</span><span class="token punctuation">:</span> dashboard<span class="token punctuation">-</span>repo
 
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Update version in package.json
         <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
           cd dashboard-repo
           NEW_VERSION=\${{ steps.get_new_version.outputs.NEW_VERSION }}
           jq --arg ver &quot;$NEW_VERSION&quot; &#39;.dependencies[&quot;@bdelab/roar-swr&quot;] = $ver&#39; package.json &gt; temp.json &amp;&amp; mv temp.json package.json
           npm i</span>
 
       <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Pull Request
         <span class="token key atrule">uses</span><span class="token punctuation">:</span> peter<span class="token punctuation">-</span>evans/create<span class="token punctuation">-</span>pull<span class="token punctuation">-</span>request@v4
         <span class="token key atrule">with</span><span class="token punctuation">:</span>
           <span class="token key atrule">path</span><span class="token punctuation">:</span> dashboard<span class="token punctuation">-</span>repo
           <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DASHBOARD_REPO_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">commit-message</span><span class="token punctuation">:</span> Update SWR version to $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.get_new_version.outputs.NEW_VERSION <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">branch</span><span class="token punctuation">:</span> dep/update<span class="token punctuation">-</span>swr<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.get_new_version.outputs.NEW_VERSION <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">base</span><span class="token punctuation">:</span> main
           <span class="token key atrule">title</span><span class="token punctuation">:</span> Update SWR version to $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.get_new_version.outputs.NEW_VERSION <span class="token punctuation">}</span><span class="token punctuation">}</span>
           <span class="token key atrule">body</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
             This PR updates the version of \`@bdelab/roar-swr\` to \${{ steps.get_new_version.outputs.NEW_VERSION }}.</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li></ol>`,29),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","preparing-the-app.html.vue"]]),k=JSON.parse('{"path":"/integrating-new-apps/preparing-the-app.html","title":"Preparing the App for Packaging and Deployment","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Researcher","slug":"researcher","link":"#researcher","children":[]},{"level":2,"title":"Developer","slug":"developer","link":"#developer","children":[{"level":3,"title":"Sample rollup.config.js from roar-swr:","slug":"sample-rollup-config-js-from-roar-swr","link":"#sample-rollup-config-js-from-roar-swr","children":[]},{"level":3,"title":"Create Staging and Production Hosting Targets on gse-roar-assessment Project","slug":"create-staging-and-production-hosting-targets-on-gse-roar-assessment-project","link":"#create-staging-and-production-hosting-targets-on-gse-roar-assessment-project","children":[]},{"level":3,"title":"Ensure firebaseConfig.js Points to the Correct Firebase Configs","slug":"ensure-firebaseconfig-js-points-to-the-correct-firebase-configs","link":"#ensure-firebaseconfig-js-points-to-the-correct-firebase-configs","children":[]},{"level":3,"title":"Modify .firebaserc to deploy to the designated targets.","slug":"modify-firebaserc-to-deploy-to-the-designated-targets","link":"#modify-firebaserc-to-deploy-to-the-designated-targets","children":[]},{"level":3,"title":"Set the Deployment Targets Using gcloud CLI:","slug":"set-the-deployment-targets-using-gcloud-cli","link":"#set-the-deployment-targets-using-gcloud-cli","children":[]},{"level":3,"title":"Service Account Key for Firebase Deployment","slug":"service-account-key-for-firebase-deployment","link":"#service-account-key-for-firebase-deployment","children":[]},{"level":3,"title":"Setup Automated Workflows","slug":"setup-automated-workflows","link":"#setup-automated-workflows","children":[]}]}],"git":{"updatedTime":1718317390000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":2}]},"filePathRelative":"integrating-new-apps/preparing-the-app.md"}');export{r as comp,k as data};
