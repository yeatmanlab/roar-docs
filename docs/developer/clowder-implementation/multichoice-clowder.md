# Multichoice - Clowder

> 📝 **NOTE:** Multichoice will use the URL param `adaptive=true` to switch between adaptive and non-adaptive modes.

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
store.session.set('previousItem', null);
store.session.set('previousAnswer', null);
```

- Select the corpus in advance

``` js
const config = {
    adaptive: adaptive ?? false,
    practiceCorpus:
      task === "cva"
        ? adaptive
          ? "cva-practice-cat"
          : practiceCorpus || "cva-assessment-practice-items"
        : adaptive
        ? "morphology-practice-cat"
        : practiceCorpus || "morphology-surveyPractice-11-17-2023",

    stimulusCorpus:
      task === "cva"
        ? adaptive
          ? "cva-stimulus-cat"
          : stimulusCorpus || "cva-assessment-stimulus-items-all-2024-09-25"
        : adaptive
        ? "morphology-group-cat"
        : stimulusCorpus || "morphology-items-2024-10-03",
};
```

- Initialize Clowder before returning the session:

```js
initializeClowder();
```

---

### 3. **Create CATs and Clowder (`experiment/experimentSetup.js`)**
- Implement the `initializeClowder` function to set up Clowder instances for different phoneme-related trials.
- Define `catsConfig` for each Clowder instance, specifying `method`, `itemSelect`, `minTheta`, `maxTheta`, and `randomSeed`.
- Initialize Clowder’s corpus using `prepareClowderCorpus`.
- Select the next stimulus using the Clowder function `updateCatAndGetNextItem`.

```js
import { Cat, Clowder, prepareClowderCorpus } from '@bdelab/jscat';

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
    total: {
      method: "EAP", // MLE
      itemSelect: store.session("itemSelect"),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: "seed-cat",
    },
    core: {
      method: "EAP", // MLE
      itemSelect: store.session("itemSelect"),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: "seed-cat",
    },
    new: {
      method: "EAP", // MLE
      itemSelect: store.session("itemSelect"),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: "seed-cat",
    },
    spare: {
      method: "EAP", // MLE
      itemSelect: store.session("itemSelect"),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: "seed-cat",
    },
  };

  // if (store.session.get('config').earlyStopping) {

  // USE EXAMPLE IN CASE OF EARLY STOPPING

  // let earlyStoppingCats = null;

  // earlyStoppingCats = new StopAfterNItems({
  //   requiredItems: {
  //     letterNameLower: store.session.get('config').nItems ?? 5,
  //     letterNameUpper: store.session.get('config').nItems ?? 5,
  //     letterPhoneme: store.session.get('config').nItems ?? 15,
  //   },
  //   logicalOperation: store.session.get('config').logicalOperation ?? 'only',
  // });

  // USE IN CASE OF SEPARATE CATS

  // const corpusLetterNameLower = encorpusLetterNameLower.map((row) => ({
  //   stimulus: row.target,
  //   zetas: [
  //     {
  //       cats: ['letterNameLower'],
  //       zeta: {
  //         a: row.a,
  //         b: row.b,
  //         c: row.c,
  //         d: row.d,
  //       },
  //     },
  //   ],
  //   ..._omit(row, ['a', 'b', 'c', 'd']),
  // }));

  const corpus = store.session.get("corpora");

  const clowderCorpus = prepareClowderCorpus(
    corpus.stimulus,
    ["total", "core", "new", "spare"],
    ".",
  );

  clowder = new Clowder({
    cats: catsConfig, // [spare, new, core, total] cats
    corpus: clowderCorpus,
    randomSeed: store.session.get("config").randomSeed ?? "random-seed",
    // earlyStopping: earlyStoppingCats,
  });
};

export const setNextStimulus = () => {
  const itemGroupCounter = store.session.get("itemGroupCounter");
  const coreRemaining = store.session.get("coreRemaining");
  const newRemaining = store.session.get("newRemaining");
  const spareRemaining = store.session.get("spareRemaining");

  // Concise selection logic
  const catToSelect =
    coreRemaining > 0 && itemGroupCounter % 4 !== 0
      ? "new"
      : newRemaining > 0
      ? "core"
      : spareRemaining > 0
      ? "spare"
      : undefined;

  if (catToSelect) {
    if (catToSelect === "core") {
      store.session.set("coreRemaining", coreRemaining - 1);
    } else if (catToSelect === "new") {
      store.session.set("newRemaining", newRemaining - 1);
      store.session.set("itemGroupCounter", 0);
    } else if (catToSelect === "spare") {
      store.session.set("spareRemaining", spareRemaining - 1);
    }
    // Update remaining items and reset counters
    store.session.set("itemGroupCounter", itemGroupCounter + 1);
  }

  store.session.set("catName", catToSelect);

  const previousItem = store.session.get("previousItem");
  const previousAnswer = store.session.get("previousAnswer");

  const nextStimulus = clowder.updateCatAndGetNextItem({
    catToSelect,
    catsToUpdate: catToSelect ? [catToSelect] : [],
    items: previousItem ?? undefined,
    answers: previousAnswer ?? undefined,
    randomlySelectUnvalidated: false,
  });

  if (nextStimulus === undefined) {
    store.session.remove("nextStimulus");
  } else {
    store.session.set("nextStimulus", nextStimulus);
  }
};

// USE THIS IN CASE OF MULTIPLE BLOCKS

// export const moveToNextBlock = () => {
//   const catIndex = (store.session.get('currentCatIndex') ?? -1) + 1;
//   store.session.set('subTaskName', catToSubTaskMap[catOrderMap[catIndex]]);
//   store.session.set('currentCatIndex', catIndex);
//   store.session.set('correctItems', []);
//   store.session.set('incorrectItems', []);
//   store.session.set('trialNumSubtask', 0); // counter for trials in subtask
// };
```

---

### 4. **Stimulus Control (`experiment/trials/setup.js`) **

- import `setNextStimulus` from `experiment/experimentHelpers` and `store` from `store2`

```js
import { setNextStimulus } from '../experimentHelpers';
import store from 'store2';
```

- Call `setNextStimulus` on  setSurveyData when adaptive is true

```js
const setupSurveyData = [
  {
    onFinish: () => {
      store.session.get("config").adaptive
        ? setNextStimulus("practice")
        : getStimulus("practice");
    },
  },
  {
    onFinish: () => {
      store.session.get("config").adaptive
        ? setNextStimulus("stimulus")
        : getStimulus("stimulus");
    },
  },
];
```

---

### 5. **setNextStimulus and saving responses (`experiment/trials/stimulus.js`)**

- store the `previousAnswer` and `previousItem`

```js
if (data.correct === 1) {
        if (!isPractice(subTaskName)) {
          store.session.set("previousItem", store.session.get("nextStimulus"));
          store.session.set("previousAnswer", data.correct);
          store.session.transact("totalCorrect", (oldVal) => oldVal + 1);
        }
      } else {
        store.session.set("previousItem", store.session.get("nextStimulus"));
        store.session.set("previousAnswer", 0);
        addItemToSortedStoreList("incorrectItems", store.session("target"));
      }
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
    if (store.session.get("config").adaptive) {
      ["total", "core", "new", "spare"].forEach((op) => {
        ["a", "b", "c", "d"].forEach((suffix) => {
          const key = `${op}.${suffix}`;
          newRow[key] = row[key];
        });
      });
    }
    accum.push(newRow);
    return accum;
  }, []);
```
> 📝 **NOTE:** Multichoice has two transformCSV functions one for Morphology and the other for CVA. So remember to add these to both functions.

---