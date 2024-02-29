<template><div><h1 id="creating-an-assignment" tabindex="-1"><a class="header-anchor" href="#creating-an-assignment"><span>Creating an Assignment</span></a></h1>
<p>The first step in this process is using the admin view form 'Create Assignment'. This will prompt the user for all the necessary information, including the name of the administration, open and close dates, organzations to be assigned the administration, and the tasks and variants to be assigned to the users.</p>
<p>This information is then sent to a firekit function, <code v-pre>createAdministration</code>.</p>
<h2 id="firekit-function" tabindex="-1"><a class="header-anchor" href="#firekit-function"><span>Firekit Function</span></a></h2>
<p>The firekit function <code v-pre>createAdministration</code> an object with the following keys:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>name: the name of the administration
assessments: Array of organization IDs to be assigned this adminsistration. //TODO add format for assignments
dateOpen: The date the administration becomes available to users
dateClose: The date the administration closes to users
sequential: Whether or not user is forced to play the tasks in order
orgs: List of organizations to be added to this administration // TODO double check format of organizations
tags: Array of metadata tags for this administration
administrationId: Optional ID of an existing administration. If provided, this function will update an existing administration.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This function will create a new administration document in the <code v-pre>/administrations/</code> collection in the <a href="/databases/admin">Admin Database</a>. The fields <code v-pre>createdBy</code> and <code v-pre>dateCreated</code> will be populated automatically with the calling user's roarUid and the current date respectively. Other feilds will be filled in with the given values from the function's input.</p>
<p>When the <code v-pre>administrationId</code> is provided, this function will update an existing administration document matching the id.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>An administration that is already in progress is unable to be edited.</p>
</div>
<h2 id="assignment-to-participants" tabindex="-1"><a class="header-anchor" href="#assignment-to-participants"><span>Assignment to Participants</span></a></h2>
<p>Assignments are assigned to users via organizations. When an administration is created, it will be assigned to all users in the organizations that are specified. They are assigned exaustively. For example, if a student belongs to a school with a parent district, administrations assigned to that parent district will also be assigned to that student.</p>
<p>Administration: A master copy of an administration. This stores information about administration specifics such as parameters for variants, assigned organizations, group level statistics, et cetera.
Assignment: A local copy of an adminstration, specific to each user. Assignments are stored in individual user's subcollection <code v-pre>/user/{userId}/assignments/{administrationId}</code>. Refers to information about the individual student's progress, runIds, et cetera.</p>
<p>This assignment is handled automatically by the firekit functions <code v-pre>syncAssignmentsOnAdministrationUpdate</code>, <code v-pre>syncAssignmentsOnUserUpdate</code>, and <code v-pre>syncAssignmentsCreated</code>.</p>
</div></template>


