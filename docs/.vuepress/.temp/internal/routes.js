export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/cloud-functions/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/index.html.js"), meta: {"title":"Cloud Functions"} }],
  ["/cloud-functions/append-to-admin-claims.html", { loader: () => import(/* webpackChunkName: "append-to-admin-claims.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/append-to-admin-claims.html.js"), meta: {"title":"appendToAdminClaims"} }],
  ["/cloud-functions/associate-assessment-uid.html", { loader: () => import(/* webpackChunkName: "associate-assessment-uid.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/associate-assessment-uid.html.js"), meta: {"title":"associateAssessmentUid"} }],
  ["/cloud-functions/create-administrator-account.html", { loader: () => import(/* webpackChunkName: "create-administrator-account.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/create-administrator-account.html.js"), meta: {"title":"createAdministratorAccount"} }],
  ["/cloud-functions/create-guest-docs-for-google-users.html", { loader: () => import(/* webpackChunkName: "create-guest-docs-for-google-users.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/create-guest-docs-for-google-users.html.js"), meta: {"title":"createGuestDocsForGoogleUsers"} }],
  ["/cloud-functions/create-new-family.html", { loader: () => import(/* webpackChunkName: "create-new-family.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/create-new-family.html.js"), meta: {"title":"createnewfamily"} }],
  ["/cloud-functions/create-student-account.html", { loader: () => import(/* webpackChunkName: "create-student-account.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/create-student-account.html.js"), meta: {"title":"createstudentaccount"} }],
  ["/cloud-functions/mirror-orgs.html", { loader: () => import(/* webpackChunkName: "mirror-orgs.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/mirror-orgs.html.js"), meta: {"title":"Mirroring Organizations"} }],
  ["/cloud-functions/remove-from-admin-claims.html", { loader: () => import(/* webpackChunkName: "remove-from-admin-claims.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/remove-from-admin-claims.html.js"), meta: {"title":"removeFromAdminClaims"} }],
  ["/cloud-functions/select-best-run.html", { loader: () => import(/* webpackChunkName: "select-best-run.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/select-best-run.html.js"), meta: {"title":"selectBestRun"} }],
  ["/cloud-functions/set-uid-custom-claims.html", { loader: () => import(/* webpackChunkName: "set-uid-custom-claims.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/set-uid-custom-claims.html.js"), meta: {"title":"setuidcustomclaims"} }],
  ["/cloud-functions/soft-delete-user-assignment.html", { loader: () => import(/* webpackChunkName: "soft-delete-user-assignment.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/soft-delete-user-assignment.html.js"), meta: {"title":"softDeleteUserAssignment"} }],
  ["/cloud-functions/soft-delete-user-external-data.html", { loader: () => import(/* webpackChunkName: "soft-delete-user-external-data.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/soft-delete-user-external-data.html.js"), meta: {"title":"softDeleteUserExternalData"} }],
  ["/cloud-functions/soft-delete-user.html", { loader: () => import(/* webpackChunkName: "soft-delete-user.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/soft-delete-user.html.js"), meta: {"title":"softDeleteUser"} }],
  ["/cloud-functions/sync-assignment-created.html", { loader: () => import(/* webpackChunkName: "sync-assignment-created.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/sync-assignment-created.html.js"), meta: {"title":"syncAssignmentsCreated"} }],
  ["/cloud-functions/sync-assignment-deleted.html", { loader: () => import(/* webpackChunkName: "sync-assignment-deleted.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/sync-assignment-deleted.html.js"), meta: {"title":"syncAssignmentDeleted"} }],
  ["/cloud-functions/sync-assignments-on-administration-update.html", { loader: () => import(/* webpackChunkName: "sync-assignments-on-administration-update.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/sync-assignments-on-administration-update.html.js"), meta: {"title":"syncAssignmentsOnAdministrationUpdate"} }],
  ["/cloud-functions/sync-assignments-on-user-update.html", { loader: () => import(/* webpackChunkName: "sync-assignments-on-user-update.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/sync-assignments-on-user-update.html.js"), meta: {"title":"syncAssignmentsOnUserUpdate"} }],
  ["/cloud-functions/sync-clever-orgs.html", { loader: () => import(/* webpackChunkName: "sync-clever-orgs.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/cloud-functions/sync-clever-orgs.html.js"), meta: {"title":"syncCleverOrgs"} }],
  ["/databases/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/databases/index.html.js"), meta: {"title":"Database Information"} }],
  ["/databases/admin.html", { loader: () => import(/* webpackChunkName: "admin.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/databases/admin.html.js"), meta: {"title":"Admin Database"} }],
  ["/databases/assessment.html", { loader: () => import(/* webpackChunkName: "assessment.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/databases/assessment.html.js"), meta: {"title":"Assessment Database"} }],
  ["/workflow/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/workflow/index.html.js"), meta: {"title":"Workflows"} }],
  ["/workflow/assignment-creation.html", { loader: () => import(/* webpackChunkName: "assignment-creation.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/workflow/assignment-creation.html.js"), meta: {"title":"Creating an Assignment"} }],
  ["/workflow/authentication.html", { loader: () => import(/* webpackChunkName: "authentication.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/workflow/authentication.html.js"), meta: {"title":"Authentication"} }],
  ["/workflow/creating-users.html", { loader: () => import(/* webpackChunkName: "creating-users.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/workflow/creating-users.html.js"), meta: {"title":"Creating new Users"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kellyel/git/new-roar-docs/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
