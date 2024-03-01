import{_ as n,o as s,c as a,e as t}from"./app-C-rWbi4S.js";const e={},p=t(`<h1 id="admin-database" tabindex="-1"><a class="header-anchor" href="#admin-database"><span>Admin Database</span></a></h1><p>The admin database is a NoSQL database hosted by Google&#39;s Cloud Firestore. This database keeps information regarding administrations, organizations, and identifiable information for all users. The database is organized into collections of documents. Each document is able to have a subcollection, which itself is a collection of documents. Below is a schema for the structure of the database, as well as expected fields in each document. A &#39;?&#39; appended to the field name denotes an optional field.</p><h2 id="information-stored" tabindex="-1"><a class="header-anchor" href="#information-stored"><span>Information stored</span></a></h2><ul><li>Administration metadata</li><li>Organization metadata <ul><li>Districts</li><li>Schools</li><li>Classes</li><li>Groups</li><li>Families</li></ul></li><li>Legal document versions</li><li>User metadata <ul><li>User demographic information</li><li>User run information</li><li>User claims information</li></ul></li></ul><h2 id="database-schema" tabindex="-1"><a class="header-anchor" href="#database-schema"><span>Database Schema</span></a></h2><h3 id="administrations" tabindex="-1"><a class="header-anchor" href="#administrations"><span>/administrations/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/administrations/<span class="token punctuation">{</span>administrationId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> string<span class="token punctuation">,</span>
  createdBy<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// UserId of administration author</span>
  sequential<span class="token operator">:</span> boolean<span class="token punctuation">,</span> <span class="token comment">// Whether tasks should be played in order</span>
  assessments<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      taskId<span class="token operator">:</span> string<span class="token punctuation">,</span>
      params<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>x<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  districts<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  schools<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  classes<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  groups<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  families<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  readOrgs<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// ReadOrgs is a list of organizations used to determine who can read from this document</span>
    districts<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    schools<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    classes<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    groups<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    families<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  dateCreated<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  dateOpened<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  dateClosed<span class="token operator">:</span> Date<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/administrations/<span class="token punctuation">{</span>administrationId<span class="token punctuation">}</span>/stats/completion
<span class="token punctuation">{</span>
  total<span class="token operator">:</span> <span class="token punctuation">{</span>
    assignment<span class="token operator">:</span> <span class="token punctuation">{</span>
      assigned<span class="token operator">:</span> number<span class="token punctuation">,</span>
      started<span class="token operator">:</span> number<span class="token punctuation">,</span>
      completed?<span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>taskId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Each task has its own object to track task specific progress</span>
      assigned<span class="token operator">:</span> number<span class="token punctuation">,</span>
      started<span class="token operator">:</span> number<span class="token punctuation">,</span>
      completed?<span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>organizationId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Each organization has its own object to track org specific progress</span>
      assignment<span class="token operator">:</span> <span class="token punctuation">{</span>
        assigned<span class="token operator">:</span> number<span class="token punctuation">,</span>
        started<span class="token operator">:</span> number<span class="token punctuation">,</span>
        completed?<span class="token operator">:</span> number<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>taskId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Each task has its own object to track task / org specific progress</span>
        assigned<span class="token operator">:</span> number<span class="token punctuation">,</span>
        started<span class="token operator">:</span> number<span class="token punctuation">,</span>
        completed?<span class="token operator">:</span> number<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="districts" tabindex="-1"><a class="header-anchor" href="#districts"><span>/districts/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/districts/<span class="token punctuation">{</span>districtId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> string
  schools<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  abbreviation?<span class="token operator">:</span> string
  id?<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// Matches the document ID.</span>
  <span class="token comment">// The following fields are optional and primarily used in districts from Clever.</span>
  clever?<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  districtContact?<span class="token operator">:</span> <span class="token punctuation">{</span>
    district<span class="token operator">:</span> string
    email<span class="token operator">:</span> string<span class="token punctuation">,</span>
    id<span class="token operator">:</span> string<span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token punctuation">{</span>
      first<span class="token operator">:</span> string<span class="token punctuation">,</span>
      last<span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  lastSync?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  launchDate?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  loginMethods?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  portalUrl?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  sisType?<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schools" tabindex="-1"><a class="header-anchor" href="#schools"><span>/schools/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/schools/<span class="token punctuation">{</span>schoolId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> string
  abbreviation<span class="token operator">:</span> string<span class="token punctuation">,</span>
  districtId<span class="token operator">:</span> string<span class="token punctuation">,</span>
  classes<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  location?<span class="token operator">:</span> <span class="token punctuation">{</span>
    address<span class="token operator">:</span> string<span class="token punctuation">,</span>
    city?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    state?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    zip?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  lowGrade?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  highGrade?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  mdrNumber?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  ncesId?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  phone?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  principal?<span class="token operator">:</span> <span class="token punctuation">{</span>
    email?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    name?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  schoolNumber?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  stateId?<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes"><span>/classes/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/classes/<span class="token punctuation">{</span>classId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> string<span class="token punctuation">,</span>
  districtId<span class="token operator">:</span> string<span class="token punctuation">,</span>
  grade<span class="token operator">:</span> string<span class="token punctuation">,</span>
  schoolId<span class="token operator">:</span> string<span class="token punctuation">,</span>
  schoolLevel<span class="token operator">:</span> string<span class="token punctuation">,</span>
  created?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  lastModified?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  subject?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  tags?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  clever?<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  sectionId?<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>/groups/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/groups/<span class="token punctuation">{</span>groupId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> string<span class="token punctuation">,</span>
  abbreviation?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token comment">// The following fields are optional, but indicate that the group is a sub-group.</span>
  parentOrgType?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  parentOrgId?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  familyId?<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="families" tabindex="-1"><a class="header-anchor" href="#families"><span>/families/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/families/<span class="token punctuation">{</span>familyId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  name<span class="token operator">:</span> string
  createdAt?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  lastUpdated?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="legal" tabindex="-1"><a class="header-anchor" href="#legal"><span>/legal/</span></a></h3><p>The legal collection keeps track of which versions of the legal documents are current. For each form (assent, consent, terms of service), we store information to access the github document of the corresponding version.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/legal/<span class="token punctuation">[</span><span class="token punctuation">{</span>assent<span class="token punctuation">,</span> consent<span class="token punctuation">,</span> tos<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">{</span>
  currentCommit<span class="token operator">:</span> string<span class="token punctuation">,</span>
  fileName<span class="token operator">:</span> string<span class="token punctuation">,</span>
  gitHubOrg<span class="token operator">:</span> string<span class="token punctuation">,</span>
  gitHubRepository<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/legal/<span class="token punctuation">[</span><span class="token punctuation">{</span>assent<span class="token punctuation">,</span> consent<span class="token punctuation">,</span> tos<span class="token punctuation">}</span><span class="token punctuation">]</span>/versions/<span class="token punctuation">{</span>versionId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  validFrom<span class="token operator">:</span> Date<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="users" tabindex="-1"><a class="header-anchor" href="#users"><span>/users/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/users/<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  assessmentPid<span class="token operator">:</span> string<span class="token punctuation">,</span>
  assessmentUid<span class="token operator">:</span> string<span class="token punctuation">,</span>
  assignments?<span class="token operator">:</span> <span class="token punctuation">{</span>
    assigned?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    completed?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    started?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  assignmentsAsssigned?<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// A map of assignment ids, where the key is the assignmentId, and the value is the date assigned to the user.</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>assignmentId<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token operator">:</span> Date<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  assignmentsCompleted?<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// A map of assignment ids, where the key is the assignmentId, and the value is the date assigned to the user.</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>assignmentId<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token operator">:</span> Date<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  assignmentsStarted?<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// A map of assignment ids, where the key is the assignmentId, and the value is the date assigned to the user.</span>
    <span class="token punctuation">[</span><span class="token punctuation">{</span>assignmentId<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token operator">:</span> Date<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  districts<span class="token operator">:</span> <span class="token punctuation">{</span>
    all<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    current<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    dates<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token punctuation">{</span>districtId<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        to<span class="token operator">:</span> Date<span class="token punctuation">,</span>
        from<span class="token operator">:</span> Date<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  schools<span class="token operator">:</span> <span class="token punctuation">{</span>
    all<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    current<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    dates<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token punctuation">{</span>schoolId<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        to<span class="token operator">:</span> Date<span class="token punctuation">,</span>
        from<span class="token operator">:</span> Date<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  classes<span class="token operator">:</span> <span class="token punctuation">{</span>
    all<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    current<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    dates<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token punctuation">{</span>classId<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        to<span class="token operator">:</span> Date<span class="token punctuation">,</span>
        from<span class="token operator">:</span> Date<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  legal<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>assent<span class="token punctuation">,</span> consent<span class="token punctuation">,</span> tos<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">{</span>formVersion<span class="token punctuation">}</span><span class="token operator">:</span> Date<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  name?<span class="token operator">:</span> <span class="token punctuation">{</span>
    first<span class="token operator">:</span> string<span class="token punctuation">,</span>
    middle<span class="token operator">:</span> string<span class="token punctuation">,</span>
    last<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  studentData<span class="token operator">:</span> <span class="token punctuation">{</span>
    dob<span class="token operator">:</span> Date<span class="token punctuation">,</span>
    gender?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    grade<span class="token operator">:</span> string<span class="token punctuation">,</span>
    hispanic_ethnicity?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    race?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    schoolLevel<span class="token operator">:</span> string<span class="token punctuation">,</span>
    state_id?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  userType<span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/users/<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>/assignments/<span class="token punctuation">{</span>assignmentId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  assessments<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// For each assignment, taskId will always be present. If the task has not be started yet, taskId will be the only key present.</span>
      taskId<span class="token operator">:</span> string<span class="token punctuation">,</span>
      allRunIds?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
      completedOn<span class="token operator">:</span> Date<span class="token punctuation">,</span>
      runId?<span class="token operator">:</span> string<span class="token punctuation">,</span>
      startedOn?<span class="token operator">:</span> Date<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  assigningOrgs<span class="token operator">:</span> <span class="token punctuation">{</span>
    distrcits<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    schools<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    classes<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    groups<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    families<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  completed<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  dateAssigned<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  dateOpened<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  dateClosed<span class="token operator">:</span> Date<span class="token punctuation">,</span>
  id<span class="token operator">:</span> string<span class="token punctuation">,</span>
  readOrgs<span class="token operator">:</span> <span class="token punctuation">{</span>
    distrcits<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    schools<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    classes<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    groups<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    families<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  started<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token comment">// We keep a copy of the user&#39;s data in this subcollection in order to perform composite queries on user data and assignment data.</span>
  userData<span class="token operator">:</span> <span class="token punctuation">{</span>
    assessmentPid?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    assessmentUid?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    dob<span class="token operator">:</span> Date<span class="token punctuation">,</span>
    email?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    gender?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    grade<span class="token operator">:</span> string<span class="token punctuation">,</span>
    hispanic_ethnicity?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    name?<span class="token operator">:</span> <span class="token punctuation">{</span>
      first<span class="token operator">:</span> string<span class="token punctuation">,</span>
      middle<span class="token operator">:</span> string<span class="token punctuation">,</span>
      last<span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    race?<span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    schoolLevel<span class="token operator">:</span> string<span class="token punctuation">,</span>
    state_id?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    username?<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/users/<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>/externalData/clever
<span class="token punctuation">{</span>
  created<span class="token operator">:</span> string<span class="token punctuation">,</span>
  district<span class="token operator">:</span> string<span class="token punctuation">,</span>
  email<span class="token operator">:</span> string<span class="token punctuation">,</span>
  id<span class="token operator">:</span> string<span class="token punctuation">,</span>
  last_modified<span class="token operator">:</span> string<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token punctuation">{</span>
    first<span class="token operator">:</span> string<span class="token punctuation">,</span>
    middle?<span class="token operator">:</span> string<span class="token punctuation">,</span>
    last<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  roles<span class="token operator">:</span> <span class="token punctuation">{</span>
    student<span class="token operator">:</span> <span class="token punctuation">{</span>
      dob<span class="token operator">:</span> string<span class="token punctuation">,</span>
      gender<span class="token operator">:</span> string<span class="token punctuation">,</span>
      grade<span class="token operator">:</span> string<span class="token punctuation">,</span>
      hispanic_ethnicity<span class="token operator">:</span> string<span class="token punctuation">,</span>
      state_id<span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="userclaims" tabindex="-1"><a class="header-anchor" href="#userclaims"><span>/userClaims/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/userClaims/<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  claims<span class="token operator">:</span> <span class="token punctuation">{</span>
    adminOrgs?<span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    adminUid<span class="token operator">:</span> string<span class="token punctuation">,</span>
    assessmentUid<span class="token operator">:</span> string<span class="token punctuation">,</span>
    roarUid<span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  lastUpdated<span class="token operator">:</span> Date<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deleted-users" tabindex="-1"><a class="header-anchor" href="#deleted-users"><span>/deleted-users/</span></a></h3><p>The deleted users collection is a collection of users documents that have been deleted. The schema of this collection matches that of /users/ collection, with the sole exception that the <code>/users/{userId}/assignments subcollection</code> is changed to <code>/deleted-users/{userId}/deleted-assignments</code>.</p>`,30),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(e,[["render",o],["__file","admin.html.vue"]]),d=JSON.parse('{"path":"/databases/admin.html","title":"Admin Database","lang":"en-US","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"Information stored","slug":"information-stored","link":"#information-stored","children":[]},{"level":2,"title":"Database Schema","slug":"database-schema","link":"#database-schema","children":[{"level":3,"title":"/administrations/","slug":"administrations","link":"#administrations","children":[]},{"level":3,"title":"/districts/","slug":"districts","link":"#districts","children":[]},{"level":3,"title":"/schools/","slug":"schools","link":"#schools","children":[]},{"level":3,"title":"/classes/","slug":"classes","link":"#classes","children":[]},{"level":3,"title":"/groups/","slug":"groups","link":"#groups","children":[]},{"level":3,"title":"/families/","slug":"families","link":"#families","children":[]},{"level":3,"title":"/legal/","slug":"legal","link":"#legal","children":[]},{"level":3,"title":"/users/","slug":"users","link":"#users","children":[]},{"level":3,"title":"/userClaims/","slug":"userclaims","link":"#userclaims","children":[]},{"level":3,"title":"/deleted-users/","slug":"deleted-users","link":"#deleted-users","children":[]}]}],"git":{"updatedTime":1709236441000,"contributors":[{"name":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1}]},"filePathRelative":"databases/admin.md"}');export{r as comp,d as data};
