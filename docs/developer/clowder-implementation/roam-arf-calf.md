# ARF & CALF - Clowder

> 📝 **NOTE:** ROAM apps will use the URL param `mode=cat` to switch between adaptive and non-adaptive modes.

### 1. **Fetch and Parse Corpus for Clowder (`tasks/fluency/helpers/fetchAndParseCorpus.js`)**
- Add the needed rows to the corpus handler

``` js
// Add CAT corpus-specific columns if in CAT mode
    if (store.session.get("config").userMode === "cat") {
      ["sum", "minus", "mult", "div", "total"].forEach((op) => {
        ["a", "b", "c", "d"].forEach((suffix) => {
          newRow[`${op}.${suffix}`] = row[`${op}.${suffix}`];
        });
      });
    }
```

- Select the corpus for clowder

``` js
if (store.session.get("config").userMode === "cat") {
    block0: `link to block 0 order`,	    
    corpusLocation = {
        fluencyArf: {
            order: {
            block0: `block 0 link for arf`,
            },
            stimulus: `link for items-all-cat.csv`,
            practice: `link for items-practice-cat.csv`,
        },	      
    // more locations
        };
    };
    // more apps location
};
```

- Initialize Clowder
``` js
if (store.session.get("config").userMode === "cat") {
    initializeClowder();
}

export const initializeClowder = () => {
// Define the `cats` configuration
const catsConfig = {
    sum: {
        method: "MLE", // EAP
        itemSelect: store.session("itemSelect"),
        minTheta: -8,
        maxTheta: 8,
        randomSeed: "seed-sum",
    },
    minus: {
        method: "MLE",
        itemSelect: store.session("itemSelect"),
        minTheta: -8,
        maxTheta: 8,
        randomSeed: "seed-minus",
    },
    mult: {
        method: "MLE",
        itemSelect: store.session("itemSelect"),
        minTheta: -8,
        maxTheta: 8,
        randomSeed: "seed-mult",
    },
    div: {
        method: "MLE",
        itemSelect: store.session("itemSelect"),
        minTheta: -8,
        maxTheta: 8,
        randomSeed: "seed-div",
    },
    total: {
        method: "MLE",
        itemSelect: store.session("itemSelect"),
        minTheta: -8,
        maxTheta: 8,
        randomSeed: "seed-total",
    },
};
```

- Prepare corpus and create a new instance of Clowder

``` js
// USE THIS EXAMPLE TO GET EARLY STOPPING CATS -- REMEMBER TO IMPORT FUNCTIONS FROM CLOWDER AS NEEDED

  // if (store.session.get('config').earlyStopping) {
  // earlyStoppingCats = new StopAfterNItems({
  //   requiredItems: {
  //     sum:  5,
  //     minus: 5,
  //     div: 15,
  //     mult: 15,
  //   },
  //   logicalOperation: 'only',
  // });

  const corpusClowder = store.session.get("corpusAll")["stimulus"]["block0"];

  const clowderCorpus = prepareClowderCorpus(
    corpusClowder,
    ["sum", "minus", "mult", "div", "total"],
    ".",
  );

  /* In the case of ROAM there are 2 separate stimulus files, 
    one for practice and the other one for stimuli test, we need to add the zetas
    in the corresponding block -- we are not using a cat for practice */

  const corpusWithClowder = store.session.get("corpusAll");

  corpusWithClowder.stimulus.block0 = clowderCorpus;

  store.session.set("corpusAll", corpusWithClowder);

  clowder = new Clowder({
    cats: catsConfig,
    corpus: corpusWithClowder.stimulus.block0,
    randomSeed: store.session.get("config").randomSeed ?? "random-seed",
    // earlyStopping: earlyStoppingCats, --- use this if early stopping is needed
  });
```
---

### 2. **Update the stimulus for Clowder (`tasks/shared/helpers/updateStimulus.js`)**


``` js
import { clowder } from "../../fluency/helpers/fetchAndParseCorpus";

const catOrderMap = {
  0: "sum",
  1: "minus",
  2: "mult",
  3: "div",
};

const getNextStimulus = (corpusName) => {
  let corpus, nextStimulus, remainingStimuli;

  // read the current version of the corpus
  corpus = store.session.get("currentCorpus");
  if (
    store.session.get("config").userMode === "cat" &&
    corpusName === "stimulus"
  ) {
    let catIndex = store.session.get("currentCatIndex");

    if (catIndex == undefined) {
      store.session.set("currentCatIndex", 0);
      catIndex = 0;
    }

    const catName = catOrderMap[catIndex];
    const previousItem = store.session.get("previousItem");
    const previousAnswer = store.session.get("previousAnswer");

    const nextStimulus = clowder.updateCatAndGetNextItem({
      catToSelect: catName,
      catsToUpdate: ["total", "sum", "minus", "mult", "div"],
      items: previousItem ?? undefined,
      answers: previousAnswer ?? undefined,
      randomlySelectUnvalidated: false,
    });

    if (nextStimulus === undefined) {
      store.session.remove("nextStimulus");
      const catIndex = (store.session.get("currentCatIndex") ?? -1) + 1;
      store.session.set("currentCatIndex", catIndex);
      if (catIndex < 4) {
        getNextStimulus(corpusName);
      }
    } else {
      store.session.set("nextStimulus", nextStimulus);
    }
  } else {
    nextStimulus = corpus[0];
    // get the remaining stimuli
    remainingStimuli = corpus.slice(1);
    // store the item for use in the trial
    store.session.set("nextStimulus", nextStimulus);
    // update the corpus with the remaining unused items
    corpus = remainingStimuli;
    store.session.set("currentCorpus", corpus);
  }
};

```

### 3. Save previous items and responses (`tasks/responseModalityStudy/trials/responseTimeBlock.js`)

- Since we are only updating from the stimulus corpus names, we need to save the previous seen items and answers from the stimulus block

``` js
if (corpusName === "stimulus") {
    store.session.set("previousItem", stimulus);
    store.session.set("previousAnswer", store.session.get("dataCorrect"));
}
```

