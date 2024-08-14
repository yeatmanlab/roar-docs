import{_ as o,r,c as d,a as e,b as t,d as i,w as s,e as a,o as l}from"./app-B8namuNu.js";const c={},m=a(`<h1 id="creating-an-assignment" tabindex="-1"><a class="header-anchor" href="#creating-an-assignment"><span>Creating an Assignment</span></a></h1><p>The first step in this process is using the admin view form &#39;Create Assignment&#39;. This will prompt the user for all the necessary information, including the name of the administration, open and close dates, organzations to be assigned the administration, and the tasks and variants to be assigned to the users.</p><p>This information is then sent to a firekit function, <code>createAdministration</code>.</p><h2 id="firekit-function" tabindex="-1"><a class="header-anchor" href="#firekit-function"><span>Firekit Function</span></a></h2><p>The firekit function <code>createAdministration</code> an object with the following keys:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">name: the name of the administration</span>
<span class="line">assessments: Array of organization IDs to be assigned this adminsistration. //TODO add format for assignments</span>
<span class="line">dateOpen: The date the administration becomes available to users</span>
<span class="line">dateClose: The date the administration closes to users</span>
<span class="line">sequential: Whether or not user is forced to play the tasks in order</span>
<span class="line">orgs: List of organizations to be added to this administration // TODO double check format of organizations</span>
<span class="line">tags: Array of metadata tags for this administration</span>
<span class="line">administrationId: Optional ID of an existing administration. If provided, this function will update an existing administration.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h=e("code",null,"/administrations/",-1),u=e("code",null,"createdBy",-1),p=e("code",null,"dateCreated",-1),g=a('<p>When the <code>administrationId</code> is provided, this function will update an existing administration document matching the id.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>An administration that is already in progress is unable to be edited.</p></div><h2 id="assignment-to-participants" tabindex="-1"><a class="header-anchor" href="#assignment-to-participants"><span>Assignment to Participants</span></a></h2><p>Assignments are assigned to users via organizations. When an administration is created, it will be assigned to all users in the organizations that are specified. They are assigned exaustively. For example, if a student belongs to a school with a parent district, administrations assigned to that parent district will also be assigned to that student.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In this context, an <strong>administration</strong> is a master copy of an administration. This stores information about administration specifics such as parameters for variants, assigned organizations, group level statistics, et cetera. An <strong>assignment</strong> is a local copy of an adminstration, specific to each user. Assignments are stored in individual user&#39;s subcollection <code>/user/{userId}/assignments/{administrationId}</code>. Refers to information about the individual student&#39;s progress, runIds, et cetera.</p></div>',5),f=e("code",null,"syncAssignmentsOnAdministrationUpdate",-1),v=e("code",null,"/administrations/{administrationId}",-1),b=e("code",null,"syncAssignmentCreated",-1),_=e("code",null,"assignedAssignments",-1),w=e("code",null,"/users/{userId}",-1);function y(k,A){const n=r("RouteLink");return l(),d("div",null,[m,e("p",null,[t("This function will create a new administration document in the "),h,t(" collection in the "),i(n,{to:"/databases/admin.html"},{default:s(()=>[t("Admin Database")]),_:1}),t(". The fields "),u,t(" and "),p,t(" will be populated automatically with the calling user's roarUid and the current date respectively. Other feilds will be filled in with the given values from the function's input.")]),g,e("p",null,[t("Once the firekit function has run and the administration document is created, the cloud function "),i(n,{to:"/sync-assignments-on-administration-update.html"},{default:s(()=>[f]),_:1}),t(" will fire. This cloud function triggers anytime a document in the "),v,t(" collection is written to. The function will sync user's assignments with the updated administration. If the assignment is being updated, every user assignment document will be updated with the new information. If it is a new administration, it will create a new document in the user's assignments subcollection.")]),e("p",null,[t("If the assignment document had to be created, the "),i(n,{to:"/cloud-functions/gse-roar-admin/sync-assignment-created.html"},{default:s(()=>[b]),_:1}),t(" function will fire. This will update the administration's stats collection, as well as syncing the user's "),_,t(" object in the "),w,t(" document.")])])}const T=o(c,[["render",y],["__file","assignment-creation.html.vue"]]),I=JSON.parse('{"path":"/workflows/assignment-creation.html","title":"Creating an Assignment","lang":"en-US","frontmatter":{"sidebarDepth":1},"headers":[{"level":2,"title":"Firekit Function","slug":"firekit-function","link":"#firekit-function","children":[]},{"level":2,"title":"Assignment to Participants","slug":"assignment-to-participants","link":"#assignment-to-participants","children":[]}],"git":{"updatedTime":1713301487000,"contributors":[{"name":"Elijah Kelly","email":"kellyel@stanford.edu","commits":2},{"name":"Kyle","email":"ksmontville@gmail.com","commits":1}]},"filePathRelative":"workflows/assignment-creation.md"}');export{T as comp,I as data};