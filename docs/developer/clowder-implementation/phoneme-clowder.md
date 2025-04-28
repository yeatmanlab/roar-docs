# Phoneme - Clowder

> 📝 **NOTE:** Phoneme will use the URL param `adaptive=true` to switch between adaptive and non-adaptive modes.

### 1. **Parameter Extraction from URL (`serve/serve.js`)**
- Extract Clowder-specific parameters such as `earlyStopping`, `tolerance`, and `logicalOperation`.
- Add these parameters to the `gameParams` array.

```js
// Parameters for Clowder

const earlyStopping = urlParams.get('earlyStopping')?.toLowerCase() ?? null;
const tolerance = urlParams.get('tolerance') ?? null;
const logicalOperation = urlParams.get('logicalOperation')?.toLowerCase() ?? null;

// Other useful parameters

const threshold = urlParams.get('threshold') ?? null;
const patience = urlParams.get('patience') ?? null;
const nItems = urlParams.get('nItems') ? parseInt(urlParams.get('nItems'), 10) : null;
const randomSeed = urlParams.get('random') ?? null;
const catsToUpdate = urlParams.get('catsToUpdate')?.split(',') ?? [];

// Add more parameters for Clowder if needed
```

---

### 2. **Initialize Clowder in the Store Session (`experiment/config/config.js`)**
- Inside the `initStore` function, set the following:

```js
store.session.set('itemSelect', 'mfi'); // Maximum Fisher Information algorithm (modifiable if needed)
store.session.set('adaptive', config.adaptive);
store.session.set('previousItem', null);
store.session.set('previousAnswer', null);
store.session.set('currentCatIndex', null);
```

- Initialize Clowder before returning the session:

```js
initializeClowder();
```

---

### 3. **Create CATs and Clowder (`experiment/experimentHelpers.js`)**
- Implement the `initializeClowder` function to set up Clowder instances for different phoneme-related trials.
- Define `catsConfig` for each Clowder instance, specifying `method`, `itemSelect`, `minTheta`, `maxTheta`, and `randomSeed`.
- Initialize Clowder’s corpus using `prepareClowderCorpus`.
- Select the next stimulus using the Clowder function `updateCatAndGetNextItem`.

```js
import { Cat, Clowder, StopAfterNItems, prepareClowderCorpus } from '@bdelab/jscat';

const catOrderMap = {
  0: 'practiceFSM',
  1: 'fsm',
  2: 'practiceLSM',
  3: 'lsm',
  4: 'practiceDEL',
  5: 'del',
};

// eslint-disable-next-line import/no-mutable-exports
export let clowder;

// TODO: Update values accordingly

export const initializeClowder = () => {
  // Define the `cats` configuration
  const catsConfig = {
    practiceFSM: {
      method: 'MLE',
      itemSelect: store.session('itemSelect'),
      minTheta: -3,
      maxTheta: 3,
      randomSeed: 'seed-fsm-practice',
    },
    fsm: {
      method: 'MLE',
      itemSelect: store.session('itemSelect'),
      minTheta: -3,
      maxTheta: 3,
      randomSeed: 'seed-fsm',
    },
    practiceLSM: {
      method: 'MLE',
      itemSelect: store.session('itemSelect'),
      minTheta: -3,
      maxTheta: 3,
      randomSeed: 'seed-lsm-practice',
    },
    lsm: {
      method: 'MLE',
      itemSelect: store.session('itemSelect'),
      minTheta: -3,
      maxTheta: 3,
      randomSeed: 'seed-lsm',
    },
    practiceDEL: {
      method: 'MLE',
      itemSelect: store.session('itemSelect'),
      minTheta: -3,
      maxTheta: 3,
      randomSeed: 'seed-del-practice',
    },
    del: {
      method: 'MLE',
      itemSelect: store.session('itemSelect'),
      minTheta: -3,
      maxTheta: 3,
      randomSeed: 'seed-del',
    },
  };

  // IF EARLY STOPPING IS REQUIRED

  // let earlyStoppingCats = null;

  // if (store.session.get('config').earlyStopping) {
  // const earlyStoppingCats = new StopAfterNItems({
  //   requiredItems: {
  //     fsm: 2,
  //     lsm: 2,
  //     del: 2,
  //   },
  //   logicalOperation: store.session.get('config').logicalOperation ?? 'only',
  // });
  // }

  ```

  > 📝 **NOTE:** all columns must be defined in the corpus. if there is an `undefined` column, it will consider this stimulus as not-new and the `previousItem` will not properly be saved.

  ```js
  const combinedCorpus = [
    ...corpus.practice_DEL,
    ...corpus.practice_FSM,
    ...corpus.practice_LSM,
    ...corpus.test_DEL,
    ...corpus.test_FSM,
    ...corpus.test_LSM,
  ];

  const clowderCorpus = prepareClowderCorpus(
    combinedCorpus,
    ['practiceFSM', 'practiceLSM', 'practiceDEL', 'fsm', 'lsm', 'del', 'total'],
    '.',
  );

  store.session.set('corpusClowder', clowderCorpus);

  clowder = new Clowder({
    cats: catsConfig,
    corpus: clowderCorpus,
    randomSeed: store.session.get('config').randomSeed,
    // earlyStopping: earlyStoppingCats,
  });
};

export const moveToNextBlock = () => {
  const catIndex = (store.session.get('currentCatIndex') ?? -1) + 1;
  store.session.set('currentCatIndex', catIndex);
};

export const setNextStimulus = () => {
  let catIndex = store.session.get('currentCatIndex');
  // eslint-disable-next-line eqeqeq
  if (catIndex == undefined) {
    store.session.set('currentCatIndex', 0);
    catIndex = 0;
  }

  const catName = catOrderMap[catIndex];
  const previousItem = store.session.get('previousItem');
  const previousAnswer = store.session.get('previousAnswer');

  const nextStimulus = clowder.updateCatAndGetNextItem({
    catToSelect: catName,
    catsToUpdate: store.session.get('config').catsToUpdate ?? [
      'practiceFSM',
      'fsm',
      'practiceLSM',
      'lsm',
      'practiceDEL',
      'del',
      'total',
    ],
    items: previousItem ?? undefined,
    answers: previousAnswer ?? undefined,
    randomlySelectUnvalidated: false,
  });

  if (nextStimulus === undefined) {
    store.session.remove('currentStimulus');
    moveToNextBlock();
  } else {
    store.session.set('currentStimulus', nextStimulus);
  }
};

```
- On saveTrialData, don't forget to add the responses.

```js
if (response === store.session('currentStimulus').goal) {
store.session.set('previousAnswer', 1);
store.session.set('previousItem', store.session.get('currentStimulus'));
} else {
store.session.set('previousAnswer', 0);
store.session.set('previousItem', store.session('currentStimulus'));
}
```

---

### 4. **Stimulus Control (`experiment/trials/{fsm, lsm, del}/{instructions, ready, test}.js`) **

- import `setNextStimulus` from `experiment/experimentHelpers`

```js
import { setNextStimulus } from '../experimentHelpers';
```

- Call `setNextStimulus` every time the `currentStimulus` is set

```js
if (store.session('config').adaptive) {
  store.session.set('currentStimulus', setNextStimulus());
} else {
  store.session.set('currentStimulus', corpus.practice_DEL[store.session('currentCorpusIndex')]);
}
```

---

### 5. **setNextStimulus and saving responses (`experiment/trials/test.js`)**

- import `setNextStimulus` from `experiment/experimentHelpers`

```js
import { setNextStimulus } from '../experimentHelpers';
```

- Call `setNextStimulus` for the switch mode

```js
switch (mode) {
    case 'practice':
        if (store.session.get('previousAnswer') !== 0 && store.session.get('config').adaptive) setNextStimulus();
        return mediaAssets.audio[camelize(store.session('currentStimulus').instr)];
    case 'del':
        if (store.session.get('config').adaptive) setNextStimulus();
        return mediaAssets.audio[camelize(store.session('currentStimulus').quest)];
    default:
        if (store.session.get('config').adaptive) setNextStimulus();
        return mediaAssets.audio[camelize(store.session('currentStimulus').stimulus)];
}
```

- on_finish, don't forget to add the responses.

```js
on_finish: () => {
  if (store.session.get('config').adaptive) store.session.set('previousAnswer', store.session('response'));
  if (store.session.get('config').adaptive) store.session.set('previousItem', store.session('currentStimulus'));
},
```

---

### 6. **Fetch and Parse Corpus for Clowder (`config/corpus.js`)**
- Add the needed rows to the corpus handler

``` js
const csvAssets = {
    test: store.session.get('config')?.adaptive
      ? corpusTranslations[i18next.language].testCat
      : corpusTranslations[i18next.language].test,
    practice: store.session.get('config')?.adaptive
      ? corpusTranslations[i18next.language].practiceCat
      : corpusTranslations[i18next.language].practice,
  };
// Add CAT corpus-specific columns if in CAT mode
const transformCSV = (csvInput) => {
    if (store.session.get('config')?.adaptive) {
        ['practiceFSM', 'practiceLSM', 'practiceDEL', 'fsm', 'lsm', 'del', 'total'].forEach((op) => {
          ['a', 'b', 'c', 'd'].forEach((suffix) => {
            const key = `${op}.${suffix}`;
            newRow[key] = row[key]; // Assign the value from csvInput
          });
        });
      }
    accum.push(newRow);
    return accum;
  }, []);
```

---

### 7. **Adding new corpus(`experiment/i18n.js`)**

- Add the new corpus files

``` js
import enCorpusPracticeCat from './config/corpus/en/practice-cat.csv';
import enCorpusTestCat from './config/corpus/en/test-cat.csv';

en: {
    test: enCorpusTest,
    practice: enCorpusPractice,
    practiceCat: enCorpusPracticeCat, //cat corpus
    testCat: enCorpusTestCat, //cat corpus
  },

```

