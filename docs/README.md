---
home: true
title: ROAR Documentation
heroImage: /assets/roar-logo.svg
tagline: Select your role to get started
---

<div class="role-cards">
<a class="role-card" href="developer/">
  <h2>Developer</h2>
  <p>Build, deploy, and maintain ROAR apps and services.</p>
</a>
<a class="role-card" href="researcher/">
  <h2>Researcher</h2>
  <p>Access, analyze, and request ROAR data.</p>
</a>
<a class="role-card" href="partnerships/">
  <h2>Partnerships</h2>
  <p>Resources and guidance for collaborators and institutional partners.</p>
</a>
<a class="role-card" href="process/">
  <h2>Process</h2>
  <p>Shared workflows, standards, and definitions of done for all teams.</p>
</a>
</div>

<style>
.role-cards{
  display:flex;
  flex-wrap:wrap;
  gap:2rem;
  justify-content:center;
  margin-top:2rem;
}
.role-card{
  flex:1 1 220px;
  max-width:260px;
  padding:2rem 1.75rem;
  border:1px solid var(--c-brand-light, #e0e0e0);
  border-radius:10px;
  text-align:center;
  text-decoration:none;
  color:var(--c-text);
  transition:box-shadow .2s,transform .2s;
  text-decoration:none !important;
}
.role-card:hover{
  box-shadow:0 4px 20px rgba(0,0,0,.1);
  transform:translateY(-4px);
}
.role-card h2{
  margin:0 0 .75rem;
  font-size:1.35rem;
}
.role-card *{
  text-decoration:none;
}
</style>
