export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[\"/\",\"/databases/\",\"/workflow/\",\"/cloud-functions/\"],\"sidebar\":[{\"text\":\"Databases\",\"link\":\"/databases/\",\"collapsable\":false,\"children\":[\"/databases/README.md\",\"/databases/admin.md\",\"/databases/assessment.md\"]},{\"text\":\"Workflows\",\"link\":\"/workflow/\",\"collapsable\":false,\"children\":[\"/workflow/README.md\",\"/workflow/assignment-creation.md\",\"/workflow/authentication.md\",\"/workflow/creating-users.md\"]},{\"text\":\"Cloud Functions\",\"link\":\"/cloud-functions/\",\"collapsable\":false,\"children\":[\"/cloud-functions/README.md\",\"/cloud-functions/append-to-admin-claims.md\",\"/cloud-functions/associate-assessment-uid.md\",\"/cloud-functions/create-administrator-account.md\",\"/cloud-functions/create-guest-docs-for-google-users.md\",\"/cloud-functions/create-new-family.md\",\"/cloud-functions/create-student-account.md\",\"/cloud-functions/mirror-orgs.md\",\"/cloud-functions/remove-from-admin-claims.md\",\"/cloud-functions/select-best-run.md\",\"/cloud-functions/set-uid-custom-claims.md\",\"/cloud-functions/soft-delete-user-assignment.md\",\"/cloud-functions/soft-delete-user-external-data.md\",\"/cloud-functions/soft-delete-user.md\",\"/cloud-functions/sync-assignment-created.md\",\"/cloud-functions/sync-assignment-deleted.md\",\"/cloud-functions/sync-assignments-on-administration-update.md\",\"/cloud-functions/sync-assignments-on-user-update.md\",\"/cloud-functions/sync-clever-orgs.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
