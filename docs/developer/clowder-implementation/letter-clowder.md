# Letter - Clowder

### 1. **Parameter Extraction from URL (`serve/serve.js`)**
- Extract Clowder-specific parameters such as `earlyStopping`, `tolerance`, and `logicalOperation`.
- **DO NOT USE** `userMode` as it is no longer required for Clowder-based logic.
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
store.session.set('currentCatIndex', -1); // Ensures the session starts with the first category if the page is refreshed
```

- Initialize Clowder before returning the session:

```js
initializeClowder();
```

---

### 3. **Create CATs and Clowder (`experiment/experimentSetup.js`)**
- Implement the `initializeClowder` function to set up Clowder instances for different letter-related trials.
- Define `catsConfig` for each Clowder instance, specifying `method`, `itemSelect`, `minTheta`, `maxTheta`, and `randomSeed`.
- Initialize Clowder’s corpus using `prepareClowderCorpus`.
- Select the next stimulus using the Clowder function `updateCatAndGetNextItem`.

```js
import { Cat, Clowder, StopAfterNItems, prepareClowderCorpus } from '@bdelab/jscat';

// English
import enLetterCatCorpus from '../stimuli/en/letterCatCorpus.csv';

const catOrderMap = { // This order map corresponds to the order we want to give for the timeline and the selection of the cats
  0: 'letterNamePractice',
  1: 'letterNameLower',
  2: 'letterNameUpper',
  3: 'letterPhonemePractice',
  4: 'letterPhoneme',
};

const catToSubTaskMap = { // This map is the match the name of the cats with the subtasks on this app
  letterNamePractice: 'LetterPractice',
  letterNameLower: 'LowercaseNames',
  letterNameUpper: 'UppercaseNames',
  letterPhonemePractice: 'PhonemePractice',
  letterPhoneme: 'Phonemes',
};

export let clowder;

export const initializeClowder = () => {
  // Define the `cats` configuration
  const catsConfig = {
    letterNamePractice: {
      method: 'EAP', // MLE or other offered clowder algorithm
      itemSelect: store.session('itemSelect'),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: 'seed-lower-practice',
    },
    letterNameLower: {
      method: 'EAP',
      itemSelect: store.session('itemSelect'),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: 'seed-lower',
    },
    letterNameUpper: {
      method: 'EAP',
      itemSelect: store.session('itemSelect'),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: 'seed-upper',
    },
    letterPhonemePractice: {
      method: 'EAP',
      itemSelect: store.session('itemSelect'),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: 'seed-phoneme-practice',
    },
    letterPhoneme: {
      method: 'EAP',
      itemSelect: store.session('itemSelect'),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: 'seed-phoneme',
    },
    total: {
      method: 'EAP',
      itemSelect: store.session('itemSelect'),
      minTheta: -8,
      maxTheta: 8,
      randomSeed: 'seed-lower-practice',
    },
  };

  let earlyStoppingCats = null;

  // store.session.get('config').earlyStopping) // if any
  earlyStoppingCats = new StopAfterNItems({ // Clowder method to early stop at specific number of items
    requiredItems: {
      letterNameLower: store.session.get('config').nItems ?? 5,
      letterNameUpper: store.session.get('config').nItems ?? 5,
      letterPhoneme: store.session.get('config').nItems ?? 15,
    },
    logicalOperation: store.session.get('config').logicalOperation ?? 'only',
  });

  const clowderCorpus = prepareClowderCorpus( // function to grab cat names and irt parameters from a given csv file
    enLetterCatCorpus, //corpus
    ['letterNamePractice', 'letterNameLower', 'letterNameUpper', 'letterPhonemePractice', 'letterPhoneme', 'total'], // cat names
    '.', // separator
  );

  clowder = new Clowder({ // new instance of Clowder
    cats: catsConfig,
    corpus: clowderCorpus,
    randomSeed: store.session.get('config').randomSeed ?? 'random-seed',
    earlyStopping: earlyStoppingCats,
  });
};

export const setNextStimulus = () => { // function on letter to get the next stimulus
  let catIndex = store.session.get('currentCatIndex');
  // eslint-disable-next-line eqeqeq
  if (catIndex == undefined) {
    store.session.set('currentCatIndex', 0);
    catIndex = 0;
  }

  const catName = catOrderMap[catIndex];
  const previousItem = store.session.get('previousItem');
  const previousAnswer = store.session.get('previousAnswer');

  const nextStimulus = clowder.updateCatAndGetNextItem({ // clowder function to select the next stimulus
    catToSelect: catName,
    catsToUpdate: ['total', 'letterNameLower', 'letterNameUpper', 'letterPhoneme'], // notice here that we did not add all the created cats, only the ones we want to updatw
    items: previousItem ?? undefined,
    answers: previousAnswer ?? undefined,
    randomlySelectUnvalidated: false,
  });

  if (nextStimulus === undefined) { // returning undefined from clowder.updateCatAndGetNextItem would indicate early stopping and moving to next block
    store.session.remove('nextStimulus');
  } else {
    store.session.set('nextStimulus', nextStimulus);
  }
};

export const moveToNextBlock = () => { // move to next cat - timeline for the task
  const catIndex = (store.session.get('currentCatIndex') ?? -1) + 1;
  store.session.set('subTaskName', catToSubTaskMap[catOrderMap[catIndex]]);
  store.session.set('currentCatIndex', catIndex);
  store.session.set('correctItems', []);
  store.session.set('incorrectItems', []);
  store.session.set('trialNumSubtask', 0); // counter for trials in subtask
};
```

---

### 4. **Stimulus Control (`experiment/trials/stimulus.js`)**
- Define `buildBlock`, which organizes the letter-based timeline using Clowder.

```js
import store from 'store2';
import { ifLetterNameTest, ifRealTrialResponse } from './stimulusLetterName'; // story breaks during stimulus
import { ifPracticeCorrect, ifPracticeIncorrect } from './practice'; // story breaks during practice
import { setNextStimulus, moveToNextBlock } from '../experimentSetup';

export const buildBlock = (preInstructions) => {
  const stimulusLoop = {
    timeline: [ifLetterNameTest, ifPracticeCorrect, ifPracticeIncorrect, ifRealTrialResponse],
    loop_function: () => {
      setNextStimulus();
      return store.session.get('nextStimulus') !== undefined;
    },
  };

  return {
    timeline: [preInstructions, stimulusLoop],
    on_timeline_start: () => {
      moveToNextBlock();
      setNextStimulus();
    },
  };
};
```

---

### 5. **Experiment Execution Updates (`experiment/experiment.js`)**
- Incorporate `buildBlock`, ensuring Clowder-managed stimulus presentation.

```js 
import { buildBlock } from './trials/stimulus';
```

- Define the timeline for transitions:

```js
timeline.push(buildBlock(letterIntroAndInstructions));
timeline.push(buildBlock(letterPracticeDone));
timeline.push(buildBlock(letterTransition));
timeline.push(buildBlock(soundIntroAndInstructions));
timeline.push(buildBlock(soundPracticeDone));
```

---

### 6. **Scoring and Progress Tracking Updates (`experiment/scores.js`)**
- Compute Clowder-based scores.

```js
import { clowder } from './experimentSetup';

const subTaskToCatMap = {
  LetterPractice: 'letterNamePractice',
  LowercaseNames: 'letterNameLower',
  UppercaseNames: 'letterNameUpper',
  PhonemePractice: 'letterPhonemePractice',
  Phonemes: 'letterPhoneme',
};

export const computedScoreCallback = (rawScores) => {
  return {
    // otrher scores
    thetaEstimate: clowder.theta[subTaskToCatMap[store.session.get('subTaskName')]], // check names
    thetaSE: clowder.seMeasurement[subTaskToCatMap[store.session.get('subTaskName')]], // check names
    thetaEstimateTotal: clowder.theta.total,
    thetaSETotal: clowder.seMeasurement.total,
  };
};
```