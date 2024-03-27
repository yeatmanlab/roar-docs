import{_ as s,o as n,c as a,e as t}from"./app-C3BrbeUu.js";const e={},p=t(`<h1 id="assessment-database" tabindex="-1"><a class="header-anchor" href="#assessment-database"><span>Assessment Database</span></a></h1><p>The assessment database is a NoSQL database hosted by Google&#39;s Cloud Firestore. This database keeps each user&#39;s assignment responses, organized into trial-level data and run-level data. This database also stores information about each task and its variants. The database is organized into collections of documents. Each document is able to have a subcollection, which itself is a collection of documents. Below is a schema for the structure of the database, as well as expected fields in each document. A &#39;?&#39; appended to the field name denotes an optional field.</p><h2 id="information-stored" tabindex="-1"><a class="header-anchor" href="#information-stored"><span>Information stored</span></a></h2><ul><li>Classes</li><li>Districts</li><li>Families</li><li>Groups</li><li>Guests</li><li>Schools</li><li>Tasks</li><li>User metadata <ul><li>User run information</li><li>User claims information</li><li>Deleted users</li></ul></li></ul><h2 id="database-schema" tabindex="-1"><a class="header-anchor" href="#database-schema"><span>Database Schema</span></a></h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes"><span>/classes/</span></a></h3><h3 id="demo-data" tabindex="-1"><a class="header-anchor" href="#demo-data"><span>Demo Data</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/classes/<span class="token punctuation">{</span>classId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;demoData&quot;</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token property">&quot;districtId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;grade&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;schoolId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;schoolLevel&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;testData&quot;</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="districts" tabindex="-1"><a class="header-anchor" href="#districts"><span>/districts/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/districts/<span class="token punctuation">{</span>districtId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;abbreviation&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;addressComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//object for each addess component, e.g. route, street number</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;long_name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;long_name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;long_name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;short_name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;formattedAddress&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;googleMapsUrl&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;googlePlacesId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;schools&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="families" tabindex="-1"><a class="header-anchor" href="#families"><span>/families/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/families/<span class="token punctuation">{</span>familyId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;lastUpdated&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;testData&quot;</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>/groups/</span></a></h3><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>Data</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/groups/<span class="token punctuation">{</span>groupId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;familyId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;parentOrgId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;parentOrgType&quot;</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="guests" tabindex="-1"><a class="header-anchor" href="#guests"><span>/guests/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/guests/<span class="token punctuation">{</span>guestId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ageMonths&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;assessmentPid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;assessmentUid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;birthMonth&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;birthYear&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;districtId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;lastUpdated&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userType&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;variants&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="guests-guestid-runs" tabindex="-1"><a class="header-anchor" href="#guests-guestid-runs"><span>/guests/{guestId}/runs</span></a></h4></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/guests/<span class="token punctuation">{</span>guestId<span class="token punctuation">}</span>/runs/<span class="token punctuation">{</span>runId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;assigningOrgs&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;assignmentId&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;newField&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;scores&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;computed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;raw&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;practice&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;numAttempted&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
                <span class="token property">&quot;numCorrect&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
                <span class="token property">&quot;numIncorrect&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
                <span class="token property">&quot;thetaEstimate&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">&quot;thetaSE&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;numAttempted&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
                <span class="token property">&quot;numCorrect&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
                <span class="token property">&quot;numIncorrect&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
                <span class="token property">&quot;thetaEstimate&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
                <span class="token property">&quot;thetaSE&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;taskId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;timeFinished&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeStarted&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;variantId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="guests-guestid-runs-runid-trials" tabindex="-1"><a class="header-anchor" href="#guests-guestid-runs-runid-trials"><span>/guests/{guestId}/runs/{runId}/trials</span></a></h5></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/guests/<span class="token punctuation">{</span>guestId<span class="token punctuation">}</span>/runs/<span class="token punctuation">{</span>runId<span class="token punctuation">}</span>/trials/<span class="token punctuation">{</span>trialId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;answerWord&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;assessment_stage&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;block&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;correct&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;correctSide&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;internal_node_id&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;itemSource&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;itemType&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;numAFC&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;2&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;3&quot;</span><span class="token operator">:</span> string
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;replay&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;rt&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;save_trial&quot;</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token property">&quot;serverTimestamp&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;start_time_unix&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;stimulus&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;stimulusRule&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;targetWord&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;time_elapsed&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;trialNumBlock&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;trialNumTotal&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;trial_index&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;trial_type&quot;</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schools" tabindex="-1"><a class="header-anchor" href="#schools"><span>/schools/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/schools/<span class="token punctuation">{</span>schoolId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;abbreviation&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;classes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;districtId&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tasks" tabindex="-1"><a class="header-anchor" href="#tasks"><span>/tasks/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/tasks/<span class="token punctuation">{</span>taskName<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;lastUpdated&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;registered&quot;</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="task-taskname-variants" tabindex="-1"><a class="header-anchor" href="#task-taskname-variants"><span>/task/{taskName}/variants</span></a></h4></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/task/<span class="token punctuation">{</span>taskName<span class="token punctuation">}</span>/variants/<span class="token punctuation">{</span>variantId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;lastUpdated&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//each variant will have different params</span>
    <span class="token property">&quot;audioFeedback&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;buttonLayout&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;consent&quot;</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token property">&quot;numberOfTrials&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token property">&quot;practiceCorpus&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;recruitment&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;sequentialOrder&quot;</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token property">&quot;skipInstructions&quot;</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token property">&quot;stimulusCorpus&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token property">&quot;userMode&quot;</span><span class="token operator">:</span> string
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="userclaims" tabindex="-1"><a class="header-anchor" href="#userclaims"><span>/userClaims/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;claims&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;adminOrgs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;adminUid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token property">&quot;assessmentUid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minimalAdminOrgs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;roarUid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastUpdated&quot;</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="users-and-deleted-users" tabindex="-1"><a class="header-anchor" href="#users-and-deleted-users"><span>/users/ and /deleted-users/</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>/users/<span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;assessmentPid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;assessmentUid&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;birthMonth&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;birthYear&quot;</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token property">&quot;classes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
  <span class="token property">&quot;districts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;[districtId]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;families&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grade&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;schools&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;all&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;[schoolId]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;schoolLevel&quot;</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token property">&quot;userType&quot;</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[p];function l(i,u){return n(),a("div",null,o)}const r=s(e,[["render",l],["__file","assessment.html.vue"]]),d=JSON.parse('{"path":"/databases/assessment.html","title":"Assessment Database","lang":"en-US","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"Information stored","slug":"information-stored","link":"#information-stored","children":[]},{"level":2,"title":"Database Schema","slug":"database-schema","link":"#database-schema","children":[{"level":3,"title":"/classes/","slug":"classes","link":"#classes","children":[]},{"level":3,"title":"Demo Data","slug":"demo-data","link":"#demo-data","children":[]},{"level":3,"title":"/districts/","slug":"districts","link":"#districts","children":[]},{"level":3,"title":"/families/","slug":"families","link":"#families","children":[]},{"level":3,"title":"/groups/","slug":"groups","link":"#groups","children":[]},{"level":3,"title":"Data","slug":"data","link":"#data","children":[]},{"level":3,"title":"/guests/","slug":"guests","link":"#guests","children":[]},{"level":3,"title":"/schools/","slug":"schools","link":"#schools","children":[]},{"level":3,"title":"/tasks/","slug":"tasks","link":"#tasks","children":[]},{"level":3,"title":"/userClaims/","slug":"userclaims","link":"#userclaims","children":[]},{"level":3,"title":"/users/ and /deleted-users/","slug":"users-and-deleted-users","link":"#users-and-deleted-users","children":[]}]}],"git":{"updatedTime":1711582164000,"contributors":[{"name":"Elijah Kelly","email":"kellyel@stanford.edu","commits":1},{"name":"Emily Arteaga","email":"62304493+Emily-ejag@users.noreply.github.com","commits":1}]},"filePathRelative":"databases/assessment.md"}');export{r as comp,d as data};
