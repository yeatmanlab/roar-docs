import{_ as n,r as s,c as o,a as t,b as e,d as r,w as l,e as a,o as h}from"./app-BWpuP9iV.js";const d={},c=a(`<h1 id="auth" tabindex="-1"><a class="header-anchor" href="#auth"><span>Auth</span></a></h1><p>Authentication and authorization for access to the ROAR Dashboard is handled by Firebase and Google Cloud Identity Platform.</p><h2 id="integration" tabindex="-1"><a class="header-anchor" href="#integration"><span>Integration</span></a></h2><p>The ROAR projects implement the <a href="https://github.com/yeatmanlab/roar-firekit/" target="_blank" rel="noopener noreferrer"><code>roar-firekit</code></a> package to handle authentication and authorization, as well as a number of other operations. This SDK effectively serves as an abstraction layer and wrapper around the Firebase SDK, providing a simple interface for interacting with the Firebase services.</p><p>The <code>roar-firekit</code> SDK is published on npm and can be installed via the following command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> i @bdelab/roar-firekit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h2>`,7),u=t("code",null,"roar-firekit",-1),m=t("code",null,"RoarConfig",-1),p=t("a",{href:"https://github.com/yeatmanlab/roar-dashboard/blob/main/src/config/firebaseRoar.js",target:"_blank",rel:"noopener noreferrer"},"example",-1),g=a('<h2 id="session-management" tabindex="-1"><a class="header-anchor" href="#session-management"><span>Session Management</span></a></h2><p>As this application is designed to be used by children on shared devices, it was assumed that users might not always log out of the application when completing assessments. To address this, the ROAR Dashboard leverages <code>sessionStorage</code> to persist auth state.</p><h2 id="session-timeout" tabindex="-1"><a class="header-anchor" href="#session-timeout"><span>Session Timeout</span></a></h2><p>The ROAR Dashboard implements a session timeout feature to automatically log out users after a period of inactivity. By default, the idle threshold is set to 15 minutes, after which the user gets an additional 60 seconds to interact with the timeout dialog before being logged out.</p><p>Due to the nature of the project and auth service, the session timeout feature was implemented on the frontend and can be configured by modifying the following two environment variables:</p><ul><li><p><code>VITE_AUTH_SESSION_TIMEOUT_IDLE_THRESHOLD</code><br> The time in milliseconds after which the user is considered idle.<br></p></li><li><p><code>VITE_AUTH_SESSION_TIMEOUT_COUNTDOWN_DURATION</code><br> The time in milliseconds the user has to interact with the timeout dialog before being logged out. <br></p></li></ul>',6);function b(f,_){const i=s("RouteLink");return h(),o("div",null,[c,t("p",null,[e("As we rely on "),r(i,{to:"/databases/"},{default:l(()=>[e("two distinct databases")]),_:1}),e(", the "),u,e(" package allows us to authenticate with both the admin and the assessment databases by providing the corresponding "),m,e(" object during SDK initialization ("),p,e(").")]),g])}const T=n(d,[["render",b],["__file","auth.html.vue"]]),w=JSON.parse('{"path":"/application/auth.html","title":"Auth","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Integration","slug":"integration","link":"#integration","children":[]},{"level":2,"title":"Authentication","slug":"authentication","link":"#authentication","children":[]},{"level":2,"title":"Session Management","slug":"session-management","link":"#session-management","children":[]},{"level":2,"title":"Session Timeout","slug":"session-timeout","link":"#session-timeout","children":[]}],"git":{"updatedTime":1723651105000,"contributors":[{"name":"Maximilian Oertel","email":"maximilian@beyond-consulting.xyz","commits":3}]},"filePathRelative":"application/auth.md"}');export{T as comp,w as data};
