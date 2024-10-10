import{_ as e,c as a,o as t,e as n}from"./app-BJVVi57W.js";const s={},r=n(`<h1 id="commands" tabindex="-1"><a class="header-anchor" href="#commands"><span>Commands</span></a></h1><p>This section assumes that the Firebase CLI and other supporting tools have already been installed and configured. If this has not been done for the ROAR app, see the <a href="#configuration">Configuration</a> section below. The following commands are used to run the Firebase Emulator for the ROAR app. These commands are used to start, stop, and interact with the emulator and the app.</p><h3 id="start-a-clean-instance-of-the-emulator" tabindex="-1"><a class="header-anchor" href="#start-a-clean-instance-of-the-emulator"><span>Start a Clean Instance of the Emulator</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> run emulate:start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This will initialize an empty Firestore instance. The emulator interface can be access at <code>http://localhost:4000</code>, where you can browse data, requests, authentication, and more.</p><h3 id="start-the-emulator-and-import-data" tabindex="-1"><a class="header-anchor" href="#start-the-emulator-and-import-data"><span>Start the Emulator and Import Data</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> run emulate:import</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This command tells the Firebase emulator to start and import data from the source directory listed in the command script.</p><h3 id="serve-the-app-with-the-emulator" tabindex="-1"><a class="header-anchor" href="#serve-the-app-with-the-emulator"><span>Serve the App with the Emulator</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> run emulate:serve</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This serves the app on <code>localhost:8000</code>, where it will read and write data to the emulator instance.</p><h3 id="run-a-cypress-instance" tabindex="-1"><a class="header-anchor" href="#run-a-cypress-instance"><span>Run a Cypress Instance</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> run cypress:open</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This will initialize the Cypress interface where you can choose to browse and/or execute end-to-end tests locally.</p><h3 id="stop-the-emulator" tabindex="-1"><a class="header-anchor" href="#stop-the-emulator"><span>Stop the Emulator</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> run emulate:stop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This kills all ports that the emulator is currently running on and will not export and new data to the source directory.</p><h3 id="stop-the-emulator-and-export-data" tabindex="-1"><a class="header-anchor" href="#stop-the-emulator-and-export-data"><span>Stop the Emulator and Export Data</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ctrl + c</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This exports all new data to the source directory, where it will be imported on initialization with the import command the next time the script is run.</p><p><strong>Note</strong>: You may need to install the <code>firebase-tools</code> package globally to use the <code>firebase</code> command.</p>`,21),i=[r];function l(o,d){return t(),a("div",null,i)}const c=e(s,[["render",l],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/emulation/running-the-emulator/","title":"Commands","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Start a Clean Instance of the Emulator","slug":"start-a-clean-instance-of-the-emulator","link":"#start-a-clean-instance-of-the-emulator","children":[]},{"level":3,"title":"Start the Emulator and Import Data","slug":"start-the-emulator-and-import-data","link":"#start-the-emulator-and-import-data","children":[]},{"level":3,"title":"Serve the App with the Emulator","slug":"serve-the-app-with-the-emulator","link":"#serve-the-app-with-the-emulator","children":[]},{"level":3,"title":"Run a Cypress Instance","slug":"run-a-cypress-instance","link":"#run-a-cypress-instance","children":[]},{"level":3,"title":"Stop the Emulator","slug":"stop-the-emulator","link":"#stop-the-emulator","children":[]},{"level":3,"title":"Stop the Emulator and Export Data","slug":"stop-the-emulator-and-export-data","link":"#stop-the-emulator-and-export-data","children":[]}],"git":{"updatedTime":1727390301000,"contributors":[{"name":"Kyle","email":"ksmontville@gmail.com","commits":1}]},"filePathRelative":"emulation/running-the-emulator/README.md"}');export{c as comp,p as data};
