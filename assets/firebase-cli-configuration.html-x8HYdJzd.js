import{_ as i,c as t,d as a,o as n}from"./app-BMq2XO4d.js";const s={};function r(l,e){return n(),t("div",null,e[0]||(e[0]=[a(`<h1 id="firebase-cli-configuration" tabindex="-1"><a class="header-anchor" href="#firebase-cli-configuration"><span>Firebase CLI Configuration</span></a></h1><p>We can use the Firebase CLI to configure the Firebase Emulator for the ROAR app. The Firebase CLI is a command-line tool that allows you to interact with Firebase services from the terminal.</p><h2 id="initializing-the-emulators" tabindex="-1"><a class="header-anchor" href="#initializing-the-emulators"><span>Initializing the Emulators</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">firebase init emulators</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>Select <strong>Authentication</strong>, <strong>Firestore</strong>, and <strong>Hosting</strong>, then press Enter to proceed.</li><li>Select the default ports for each service: <ul><li><strong>auth</strong>: 9099</li><li><strong>firestore</strong>: 8080</li><li><strong>hosting</strong>: 5000</li></ul></li><li>Select <code>y</code> to enable the Firestore UI.</li><li>Run the Firestore UI: <ul><li><strong>Firestore UI</strong>: 4000</li></ul></li><li>Download the emulators.</li></ol><p>You should now be able to run the Firebase emulators with:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">firebase emulators:start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can inspect the emulator UI at <code>http://localhost:4000</code>, though it will be empty until the app&#39;s Firebase config has been configured to connect to the emulator.</p>`,8)]))}const c=i(s,[["render",r],["__file","firebase-cli-configuration.html.vue"]]),u=JSON.parse('{"path":"/emulation/emulator-configuration-guide/firebase-cli-configuration.html","title":"Firebase CLI Configuration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Initializing the Emulators","slug":"initializing-the-emulators","link":"#initializing-the-emulators","children":[]}],"git":{"updatedTime":1727467849000,"contributors":[{"name":"Kyle","username":"Kyle","email":"ksmontville@gmail.com","commits":3,"url":"https://github.com/Kyle"}]},"filePathRelative":"emulation/emulator-configuration-guide/firebase-cli-configuration.md"}');export{c as comp,u as data};