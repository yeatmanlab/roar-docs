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

2. Add routes to this new file to 
- `src/router/index.js`:

``` javascript
{
    path: '/game/[app-name]',
    name: '[app name for routing]',
    component: () => import('../components/tasks/[Component created in 1].vue'),
    props: { taskId: '[app-name]', language: 'en' },
    meta: { pageTitle: '[app-name page title]' },
},
```

 - `firebase/admin/firestore.indexes.json`

``` javascript
{
      "collectionGroup": "assignments",
      "queryScope": "COLLECTION_GROUP",
      "fields": [
        {
          "fieldPath": "readOrgs.groups",
          "arrayConfig": "CONTAINS"
        },
        {
          "fieldPath": "id",
          "order": "ASCENDING"
        },
        {
          "fieldPath": "progress.[app-name]",
          "order": "ASCENDING"
        }
      ]
    },

```

``` javascript
{
    "collectionGroup": "assignments",
    "queryScope": "COLLECTION_GROUP",
    "fields": [
    {
        "fieldPath": "readOrgs.schools",
        "arrayConfig": "CONTAINS"
    },
    {
        "fieldPath": "id",
        "order": "ASCENDING"
    },
    {
        "fieldPath": "progress.[app-name]",
        "order": "ASCENDING"
    }
    ]
},

```

 - `src/App.vue`
 Under the `navbarBlacklist` constant add the `[app name for routing]`

3. Write the description of the app under `src/helpers/reports.js`

``` javascript
[app-name]: {
    name: '[app-name page title]',
    extendedTitle: '[ROAR][ROAM][ROAV] - [app-name]',
    extendedName: '[app-extended-name]',
    order: [app-order],
},
```

- Under the `extendedDescriptions` constant add:

``` javascript
[app-name]: '[app-description]',
```

4. Add the vite configuration under `vite.config.js`
Under defineConfig add:

``` javascript
[app-name]: ['@bdelab/[roar][roam][roav]-[app-name]'],
```

5. Include the corresponding npm package to `package.json`

``` javascript
"@bdelab/[roar][roam][roav]-[app-name]": "^[version-number-from-npm]",
```

**Once you have all this files, run `npm install`**

**Add and commit your changes**



