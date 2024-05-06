# Dashboard Integration

## Preliminary Checklist:

- Publish the package to the @bdelab npm repository and install it in the project.
- Verify the Rollup configuration in the app code.
- Create a task component in the Dashboard.
- Implement a route importing the task component, along with necessary props.
- Add the route to the navbar blacklist in App.vue.
- Manually chunk the app in vite.config.

## Dashboard files

1. Create a new component under `src/components/tasks/`
    - For this step you can reference on the other app files (You can follow SWR as reference)

2. Add routes to this new file to `src/router/index.js` , `firebase/admin/firestore.indexes.json`, and `src/App.vue`
3. Write the description of the app under `src/helpers/reports.js`
4. Add the vite configuration under `vite.config.js`
5. Include the corresponding npm package to `package.json`

**Once you have all this files, run `npm install`**

**Add and commit your changes**



