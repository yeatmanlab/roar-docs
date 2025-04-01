# Organization Score Reports

Technical Summary provided by GitHub Copilot using ScoreReports.vue for context and edited for clarity.

https://github.com/yeatmanlab/roar-dashboard
https://github.com/yeatmanlab/roar-dashboard/blob/main/src/pages/ScoreReport.vue

The ScoreReport.vue a Vue.js component that is used to display a score report for an administration. It uses several other components and functions to achieve this.

1. **Props**: The component receives three props: `administrationId`, `orgType`, and `orgId`. These are used to fetch the relevant data for the score report.

2. **Components**: The component uses several other components such as `AdministratorSidebar`, `PvPanel`, `RoarDataTable`, and `SubscoreTable`. These are used to display the sidebar, the main panel, the data table for scores, and the subscore tables respectively.

3. **Data Fetching**: The component uses the `useQuery` function from `@tanstack/vue-query` to fetch data. It fetches data for user claims, administration info, organization info, scores, and schools (if the organization type is a district). The data is fetched when the component is mounted and can be refreshed by the user.

4. **Computed Properties**: The component uses several computed properties to process the fetched data and prepare it for display. These include `claimsLoaded`, `isSuperAdmin`, `adminOrgs`, `scoresQueryEnabled`, `allTasks`, `columns`, and `tableData`.

5. **Methods**: The component defines several methods such as `onPage`, `onSort`, `exportSelected`, `exportAll`, `getScoreKeys`, `getSupportLevel`, and `refresh`. These are used to handle pagination, sorting, exporting of data, getting score keys, getting support level, and refreshing the data respectively.

6. **Styling**: The component uses scoped CSS for styling. The styles are applied to various elements in the component such as the report title, task headers, task cards, loading container, toggle container, legend container, and others.

7. **Lifecycle Hooks**: The component uses the onMounted lonMounted ok to refresh the data when the component is mounted. It also subscribes to changes in the authStore refresh the data when the roarfirekit value changes.

## Main Functions

### Populate Table Data

The tableData computed property in the ScoreReport.vue constant is used to process the fetched scores data and prepare it for display in the data table.

This property checks if the `scoresDataQuery` value is undefined. If it is, it returns an empty array to prevent errors when trying to map over `scoresDataQuery` if it's undefined.

If `scoresDataQuery` is not undefined, it maps over the `scoresDataQuery` value. For each item in `scoresDataQuery`, it creates a new object that includes the user data, assignment data, and processed scores data. The scores data is processed by looping over the assessments in the assignment and calculating the percentile, standard, and raw scores for each assessment. It also determines the support level and color for each score.

If the `orgType` prop is 'district', it adds the name of the school to the user data. This is done by finding the school in the `schoolsInfo` value that matches the first school in the user's current schools list.

Finally, it returns the processed data for the current item in `scoresDataQuery`. This computed property is used to transform the raw scores data into a format that can be easily displayed in the data table.

## Usage of @tanstack/vue-query

The ScoreReport.vue several functions from the @tanstack/vue-query fetch and manage data. Here's a brief technical summary of these functions:

1. **useQuery**: This function is used to fetch data from a server. It returns an object that contains the status of the query (loading, error, success), the data, and functions to refetch or invalidate the data. In this component, `useQuery` is used to fetch data for user claims, administration info, organization info, scores, and schools (if the organization type is a district). The data is fetched when the component is mounted and can be refreshed by the user.

2. **storeToRefs**: This function is used to convert a Pinia store to reactive references. It's used in this component to convert the `authStore` to reactive references, which are then used in the `useQuery` functions to fetch data based on the user's authentication status and claims.

3. **keepPreviousData**: This option in `useQuery` is used to keep the previous data when a new query is being fetched. This can be useful to prevent UI from flashing or changing suddenly when new data is being loaded.

4. **enabled**: This option in `useQuery` is used to enable or disable a query. In this component, it's used to control when the data fetching queries should run. For example, the scores data query is only enabled when the component is initialized and the user claims data has been loaded.

5. **staleTime**: This option in `useQuery` is used to specify how long the data fetched by a query is considered fresh. When the data is stale, `useQuery` will automatically refetch it when it's used. In this component, the stale time for all queries is set to 5 minutes.

6. **queryKey**: This option in `useQuery` is used to uniquely identify a query. The same query key will return the same data, and changing the query key will refetch the data. In this component, the query keys are based on the type of data being fetched and the relevant IDs.

7. **queryFn**: This option in `useQuery` is used to specify the function that fetches the data. In this component, it's used to call various helper functions that fetch data from Firestore.

These functions from @tanstack/vue-query fetch and manage data in a declarative and reactive way, which fits well with the Vue.js programming model.

## Methods

The ScoreReport.vue defines several methods to handle various functionalities. Here are the methods used:

1. `onPage(event)`: This method is used to handle pagination of the data table. It updates the current page and the number of rows per page based on the event received from the `RoarDataTable` component.

2. `onSort(event)`: This method is used to handle sorting of the data table. It updates the order of the data based on the event received from the `RoarDataTable` component.

3. `exportSelected(selectedRows)`: This method is used to handle the exporting of selected rows from the data table. It processes the selected rows and exports them as a CSV file.

4. `exportAll()`: This method is used to handle the exporting of all rows from the data table. It fetches all the data and exports it as a CSV file.

5. `getScoreKeys(row, grade)`: This method is used to get the keys for the scores based on the assessment and the grade of the student. It returns an object with the keys for percentile score, raw score, and standard score.

6. `getPercentileScores({ assessment, percentileScoreKey, percentileScoreDisplayKey })`: This method is used to get the percentile scores from the assessment data. It returns an object with the percentile score and the percentile score string.

7. `getSupportLevel(percentile)`: This method is used to get the support level based on the percentile score. It returns an object with the support level and the tag color.

8. `refresh()`: This method is used to refresh the data. It sets the `refreshing` state to `true`, unsubscribes from the `authStore` if it was previously subscribed, and then sets the `initialized` state to `true` to trigger the data fetching.

These methods are used to handle specific aspects of the data manipulation and interaction in the `ScoreReport.vue`ScoreReport.vue

## Computed Properties

The ScoreReport.vue defines several computed properties to process the fetched data and prepare it for display. Here are the computed properties used:

1. `claimsLoaded`: This property checks if the user claims data has been loaded. It returns a boolean value.

2. `isSuperAdmin`: This property checks if the current user is a super admin. It returns a boolean value.

3. `adminOrgs`: This property retrieves the organizations that the current user is an admin of.

4. `scoresQueryEnabled`: This property checks if the scores data can be fetched. It returns a boolean value.

5. `allTasks`: This property retrieves all the tasks from the table data.

6. `columns`: This property generates the columns for the data table based on the current view mode and the tasks in the data.

7. `tableData`: This property processes the fetched scores data and prepares it for display in the data table.

8. `spinIcon`: This property determines the class for the refresh icon based on whether the data is currently being refreshed.

Each of these computed properties is used to handle specific aspects of the data processing and display in the ScoreReport.vue
