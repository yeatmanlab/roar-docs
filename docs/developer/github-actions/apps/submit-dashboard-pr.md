# submit-dashboard-pr.yml
This GitHub Actions workflow submits a pull request to the ROAR-dashboard repository to update the version of the app package. The workflow is triggered when the `Publish, Release, and Deploy` workflow completes successfully.
This example uses `roar-sre` as the package to update, but the workflow can be modified to update any package in the dashboard repository.

```yaml
name: Update dependency version in ROAR-dashboard

on:
  workflow_run:
    workflows: ['Publish, Release, and Deploy']
    types:
      - completed

jobs:
  update-version:
    runs-on: ubuntu-latest

    if: ${{ github.event.workflow_run.conclusion == 'success' }}

    steps:
      - name: Checkout the repository
        uses: actions/checkout@v2

      - name: Get the new version
        id: get_new_version
        run: |
          VERSION=$(jq -r '.version' package.json)
          echo "NEW_VERSION=$VERSION" >> $GITHUB_OUTPUT

      - name: Checkout the target repository
        uses: actions/checkout@v2
        with:
          repository: yeatmanlab/roar-dashboard
          token: ${{ secrets.DASHBOARD_REPO_TOKEN }}
          path: dashboard-repo

      - name: Update version in package.json
        run: |
          cd dashboard-repo
          NEW_VERSION=${{ steps.get_new_version.outputs.NEW_VERSION }}
          jq --arg ver "$NEW_VERSION" '.dependencies["@bdelab/roar-sre"] = $ver' package.json > temp.json && mv temp.json package.json
          npm i

      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v4
        with:
          path: dashboard-repo
          token: ${{ secrets.DASHBOARD_REPO_TOKEN }}
          commit-message: Update SRE version to ${{ steps.get_new_version.outputs.NEW_VERSION }}
          branch: dep/update-sre-${{ steps.get_new_version.outputs.NEW_VERSION }}
          base: main
          title: Update SRE version to ${{ steps.get_new_version.outputs.NEW_VERSION }}
          body: |
            This PR updates the version of `@bdelab/roar-sre` to ${{ steps.get_new_version.outputs.NEW_VERSION }}.

```