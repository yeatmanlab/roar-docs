# ROAR Sentence
## Translation Guide for ROAR Sentence

#### 1. Introduction
Welcome to the ROAR-Sentence Translation Guide — your comprehensive companion for making ROAR-Sentence accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app.

**What This Guide Covers:**
- **Folder Structure:** Learn how to organize word corpora and translation files within the app's directory.

- **Internationalization Setup:** Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.

- **Asset Management:** Collaborate with partners to ensure all required assets from both `assets.json` and `webpAssets.json` are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.

- **Collaboration:** Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

- **Testing and Deployment:** Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.

#### 2. Folder Structure

##### 2.1. Corpus
Create a new folder under `src/experiment/corpus` for each language, using the initials of the language. Inside each language folder, include at least two files: `practice.csv` and `test.csv`. Collaborate with partners to obtain the necessary content for these files.

Example:
```
src/
├─ experiment/
|   ├─ corpus/
|       ├─ en/          // English
|           ├─ practice.csv
|           ├─ test.csv
|       ├─ es/          // Spanish (Add more languages as needed)
|           ├─ practice.csv
|           ├─ test.csv
├─ ...
```

##### 2.2. Translation Items
Create a new folder under `src/locales` for each language, using the initials of the language. Inside each language folder, include a file named `translation.json`. Ensure that all languages follow the same structure in their translation files. Collaborate with partners to obtain and maintain translation content.

Example:
```
src/
├─ locales/
|   ├─ en/          // English
|       ├─ translation.json
|   ├─ es/          // Spanish (Add more languages as needed)
|       ├─ translation.json
├─ ...
```


#### 3. Internationalization Setup

#### 3.1. File `src/experiment/i18n.js`

On `i18n.js`, import all the files from the **corpus** and **translation items**. For example `import enTranslations from '../locales/en/translation.json';`
Inside the file you will find the initialization of i18next and language detection. 
You must include all `corpus` items on `sentenceList` to manage different language corpora.

The following code represents the `i18n.js` file with comments on where to add files and define other languages:

```javascript
// Import the necessary modules and functions
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all your corpus files

// Define the sentenceList object for managing the corpus
export const sentenceList = {
  en: {
    corpusPractice: enCorpusPractice,
    corpusLab: enCorpusLab,
    corpusTOSREC: enCorpusTOSREC,
    corpusAI: enCorpusAI,
    corpusAIV1P1: enCorpusAIV1P1,
    corpusAIV1P2: enCorpusAIV1P2,
    corpusAIV2Testset: enCorpusAIV2Testset,
  },
  es: {
    corpusPractice: esCorpusPractice,
    corpusTest: esCorpusTest,
  },
  it: {
    corpusPractice: '',
    corpusLab: '',
    corpusTOSREC: '',
    corpusAI: '',
  },
  // add additional languages
};

// Set up i18next
i18next
  .use(LanguageDetector)
  .on('languageChanged', processCSV)
  .init({
    debug: false,
    load: 'languageOnly',
    fallbackLng: 'en',
    detection: {
      order: ['defaultToEnglish', 'querystring'],
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
      it: {
        translation: itTranslations,
      },
      // add additional language
    },
  });


```

#### 3.2. File `src/experiment/trials/loadCorpus.js`

The following code represents how to load the corpus for the specified language:

```javascript
// define the csv corpus files that will be loaded
if (i18next.language === 'es') {
    csvAssets = {
        practice: sentenceList[i18next.language].corpusPractice,
        test: sentenceList[i18next.language].corpusTest,
  };
} // add additional language 
else {
  // Default to English
    csvAssets = {
        practice: sentenceList[i18next.language].corpusPractice,
        lab: sentenceList[i18next.language].corpusLab,
        ai: sentenceList[i18next.language].corpusAI,
        aiV1P1: sentenceList[i18next.language].corpusAIV1P1,
        aiV1P2: sentenceList[i18next.language].corpusAIV1P2,
        aiV2Testset: sentenceList[i18next.language].corpusAIV2Testset,
        tosrec: [],
  };
}
```

After loading the corpus the csv files will be transformed to test and practice files. Follow the Spanish example below to transform the csv files:

```javascript
const generateLanguageSpecificCorpus = (csvAssets) => {

  const language = i18next.language;

  if (language === 'es') {
    const testCorpus = transformCSVespTest(csvAssets.test);
    const trueSentences = shuffle(testCorpus.filter((row) => row.answer === true));
    const falseSentences = shuffle(testCorpus.filter((row) => row.answer === false));
    return {
      practice: transformCSVp(csvAssets.practice),
      test1: shuffle([... trueSentences.slice(0, 35), ... falseSentences.slice(0, 35)]),
      test2: shuffle([... trueSentences.slice(35, 70), ... falseSentences.slice(35, 70)]),
    }
  } // add more languages, default to english
    return {
      practice: transformCSVp(csvAssets.practice),
      lab: transformCSVlab(csvAssets.lab),
      ai: shuffle(transformCSVlab(csvAssets.ai)).slice(0, 130),
      aiV1P1: transformCSVlab(csvAssets.aiV1P1),
      aiV1P2: transformCSVlab(csvAssets.aiV1P2),
      aiV2: formParallelTestForm(transformCSVtestset(csvAssets.aiV2Testset), 50, 5),
      tosrec1: transformCSVt(csvAssets.tosrec1),
      tosrec2: transformCSVt(csvAssets.tosrec2),
      tosrec3: transformCSVt(csvAssets.tosrec3),
      tosrec4: transformCSVt(csvAssets.tosrec4),
      tosrec5: transformCSVt(csvAssets.tosrec5),
      tosrec6: transformCSVt(csvAssets.tosrec6),
      tosrec7: transformCSVt(csvAssets.tosrec7),
      tosrec8: transformCSVt(csvAssets.tosrec8),
    };

};
```
Make sure to integrate these code snippets into your app's structure, adapting them as needed for any additional languages or specific requirements.

#### 3.3. File `src/experiment/trials/characterSelect.js`

In this file we will need to specify the names and activities for all animals in different languages:

```javascript
const dataValues = {
  1: {
    character: 'dog',
    characterName: {
      en:'Amy', //example of name in English
      es: 'Silvia', // example of name in Spanish
      // add additional languages
    },
    characterActivity: {
      en: 'go to track practice', // example of activity in English
      es: 'ir a leer mi libro favorito', // example of activity in Spanish
      // add additional languages
    },
  },
  2: {
    character: 'cat',
    characterName:{
      en: 'name in English',
      es: 'name in Spanish',
      // add additional languages
    },
    characterActivity: {
      en: 'activity in English',
      es: 'activity in Spanish',
      // add additional languages
    },
  },
  3: {
    character: 'bird',
    characterName:{
      en: 'name in English',
      es: 'name in Spanish',
      // add additional languages
    },
    characterActivity: {
      en: 'activity in English',
      es: 'activity in Spanish',
      // add additional languages
    },
  },
  4: {
    character: 'deer',
    characterName:{
      en: 'name in English',
      es: 'name in Spanish',
      // add additional languages
    },
    characterActivity: {
      en: 'activity in English',
      es: 'activity in Spanish',
      // add additional languages
    },
  },
};
```

#### 3.4. File `src/experiment/trials/getUserData.js`

On this file we will have to specify the grades in the specific language

```javascript
const translations = {
  en:  ['1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade or higher'],
  es: ['1er Grado', '2do Grado', '3er Grado', '4to Grado', '5to Grado', '6to Grado', '7mo Grado', '8vo Grado o superior'],
  // add additional languages
};

```

#### 3.5. File `src/experiment/trials/introduction.js`

On this file we will have to specify the reminder text in the specific language

```javascript	
const reminderTexts = {
  en: 'Remember!',
  es: '¡Recuerda!',
  // add additional languages
};

```


#### 3.5. File `src/experiment/trials/getUserData.js`

On this file we will have to specify the feedback text in the specific language

```javascript	
const feedbackTranslations = {
  en: {
    correct: 'Correct!',
    incorrect: "That's not quite right.",
  },
  es: {
    correct: '¡Correcto!',
    incorrect: 'En este caso no es correcto.',
  },
};

```

#### 4. Asset Management

##### 4.1. `assets.json` and `webpAssets.json`
- Collaborate with partners to ensure all required assets from both  both `assets.json` and `webpAssets.json` are provided.
- Add the provided assets to google buckets.

##### 4.2. Google Buckets
- Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is `roar-sre`

#### 5. Collaboration
Clearly state the expectations from partners regarding the provision of corpus files, translation files, and assets.

#### 6. Testing
For testing an specific language we will have to include `/?lng=language`. For example for English, we will use `/?lng=en`.

Roar-sentence has an specific consent form only for english, when adding a new language, we must specify: `consent=false`.

To access the differnt languages, we will have to include the parameters to the link, For example for English no story should be `https://link-testing-or-localhost/?lng=en&consent=false`.

Additionally, Roar-sentence is adapted to three different devices with have to be tested: **Desktop** and **Tablet**.
