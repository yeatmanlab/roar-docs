import{_ as i,r as n,o as a,c as s,a as e,b as o,d as r,e as l}from"./app-B1l0_fsE.js";const d={},c=e("h1",{id:"appendtoadminclaims",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#appendtoadminclaims"},[e("span",null,"appendToAdminClaims()")])],-1),h={id:"appendtoadminclaims-1",tabindex:"-1"},p={class:"header-anchor",href:"#appendtoadminclaims-1"},u={href:"https://github.com/yeatmanlab/roar-firebase-functions/blob/main/gse-roar-admin/functions/src/index.ts#L120",target:"_blank",rel:"noopener noreferrer"},m=l('<h3 id="function-name" tabindex="-1"><a class="header-anchor" href="#function-name"><span>Function Name</span></a></h3><p><code>appendtoadminclaims</code></p><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>Trigger</span></a></h3><p>This Cloud Function is triggered by a direct call (onCall). It expects to be invoked typically through a client-side request.</p><h3 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs"><span>Inputs</span></a></h3><p>The function expects a JSON payload with the following structure:</p><ul><li><strong>requesterUid</strong>: The UID of the user making the request. Extracted from <code>request.auth.uid</code>, indicating this function is protected and can only be called by authenticated users.</li><li><strong>targetUid</strong>: The UID of the user whose admin claims are being updated.</li><li><strong>districtId</strong>: The ID of the district to append to the user&#39;s claims.</li><li><strong>schoolId</strong>: The ID of the school to append to the user&#39;s claims.</li><li><strong>classId</strong>: The ID of the class to append to the user&#39;s claims.</li><li><strong>familyId</strong>: The ID of the family to append to the user&#39;s claims.</li><li><strong>groupId</strong>: The ID of the group to append to the user&#39;s claims.</li></ul><p>The input also contains an <strong>action</strong> key, which is statically set to <code>&quot;append&quot;</code>. This function is designed to add organizational affiliations to a user&#39;s administrative permissions.</p><h3 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs"><span>Outputs</span></a></h3><p>The function outputs the result of the <code>appendOrRemoveAdminOrgs</code> function, which is a method handling the database update logic.</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h3><p>The <code>appendtoadminclaims</code> function is responsible for appending organization-specific claims to a specified user&#39;s administrative profile. This operation facilitates the dynamic management of user access within various organizational structures like schools, classes, and groups. By modifying admin claims, the system can control access to certain resources or administrative functionalities.</p><h3 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling"><span>Error Handling</span></a></h3><p>While explicit error handling is not shown in the snippet, it should be implemented within the <code>appendOrRemoveAdminOrgs</code> function or be part of a higher-level error management strategy. Errors might include unauthorized access attempts, invalid UID entries, or failures in database operations. These should be logged and, where appropriate, returned to the caller in a format that aids in debugging but does not expose sensitive system details.</p><h3 id="security-considerations" tabindex="-1"><a class="header-anchor" href="#security-considerations"><span>Security Considerations</span></a></h3><ul><li><strong>Authentication</strong>: The function checks that the request is made by an authenticated user (<code>request.auth.uid</code> must exist).</li><li><strong>Authorization</strong>: It should be verified that the requester has the appropriate rights to modify admin claims, especially if targeting another user’s claims. This might involve additional checks against <code>userClaims</code> to confirm administrative privileges.</li><li><strong>Data Validation</strong>: The function should validate the input data to ensure that all IDs are in a proper format and refer to existing entities in the system. This prevents injection of invalid data into the system.</li></ul><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h3><p>This function is deployed automatically using GitHub actions, whenever changes are merged into the <code>main</code> branch.</p>',18);function g(f,y){const t=n("ExternalLinkIcon");return a(),s("div",null,[c,e("h4",h,[e("a",p,[e("span",null,[e("a",u,[o("appendToAdminClaims"),r(t)])])])]),m])}const v=i(d,[["render",g],["__file","append-to-admin-claims.html.vue"]]),T=JSON.parse('{"path":"/cloud-functions/gse-roar-admin/append-to-admin-claims.html","title":"appendToAdminClaims()","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Function Name","slug":"function-name","link":"#function-name","children":[]},{"level":3,"title":"Trigger","slug":"trigger","link":"#trigger","children":[]},{"level":3,"title":"Inputs","slug":"inputs","link":"#inputs","children":[]},{"level":3,"title":"Outputs","slug":"outputs","link":"#outputs","children":[]},{"level":3,"title":"Description","slug":"description","link":"#description","children":[]},{"level":3,"title":"Error Handling","slug":"error-handling","link":"#error-handling","children":[]},{"level":3,"title":"Security Considerations","slug":"security-considerations","link":"#security-considerations","children":[]},{"level":3,"title":"Deployment","slug":"deployment","link":"#deployment","children":[]}],"git":{"updatedTime":1714409340000,"contributors":[{"name":"Kyle Montville","email":"kmontvil@stanford.edu","commits":2},{"name":"Kyle","email":"ksmontville@gmail.com","commits":1}]},"filePathRelative":"cloud-functions/gse-roar-admin/append-to-admin-claims.md"}');export{v as comp,T as data};
