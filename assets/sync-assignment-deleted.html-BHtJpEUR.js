import{_ as e,o as t,c as s,e as n}from"./app-BRLZwsst.js";const a={},i=n('<h1 id="syncassignmentdeleted" tabindex="-1"><a class="header-anchor" href="#syncassignmentdeleted"><span>syncAssignmentDeleted</span></a></h1><p>Hosted on: Admin Firebase Project</p><p>Trigger: <code>document.deleted</code> on <code>/users/{userId}/assignments/{assignmentId}</code></p><p>This function will trigger when an assignment is deleted in a user&#39;s assignments subcollection. It serves to update all the places where the assignment is being listed and counted, namely the user&#39;s assignments object in the <code>/users/{userId}</code> document and the administration&#39;s stats document.</p><p>When an assignment is deleted, the function will update the user&#39;s <code>assignmentsAssigned</code> object to remove the assignment ID if found.</p><p>The function will also update the administration&#39;s stats document at <code>/administrations/{administrationId}/stats/completion</code> to no longer count this student. This document keeps track of the number of students who have have been assigned, started, and completed the assignment. This function will update both the total number of students assigned, as well as the number of students from the user&#39;s particular organization that have been assigned the administration.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The document IDs in the <code>/users/{userId}/assignments</code> collection will always match with the administration they refer to, so when a new file is created we can assume that it is a new assignment to the user.</p></div>',7),o=[i];function d(c,l){return t(),s("div",null,o)}const m=e(a,[["render",d],["__file","sync-assignment-deleted.html.vue"]]),h=JSON.parse('{"path":"/cloud-functions/sync-assignment-deleted.html","title":"syncAssignmentDeleted","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1709250200000,"contributors":[{"name":"Elijah Kelly","email":"kellyel@stanford.edu","commits":2}]},"filePathRelative":"cloud-functions/sync-assignment-deleted.md"}');export{m as comp,h as data};
