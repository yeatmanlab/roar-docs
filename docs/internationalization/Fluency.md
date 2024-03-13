# ROAM Fluency

## Translation Guide for ROAM Fluecy

#### 1. Introduction
Welcome to the ROAM-Fluency Translation Guide — your comprehensive companion for making ROAM-Fluency accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app. ROAM-Fluency includes two tasks:

1. ROAM Fluency-ARF or ROAM Single-Digit
2. ROAM FLuency-CalF or ROAM Multi-Digit

**What This Guide Covers:**
- **Folder Structure:** Learn how to organize word corpora and translation files within the app's directory.

- **Internationalization Setup:** Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.

- **Asset Management:** Collaborate with partners to ensure all required assets from `assets.json` are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.

- **Collaboration:** Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

- **Testing and Deployment:** Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.


#### 2. Folder Structure

##### 2.1. Stimuli
Stimuli are assumed to be language invariant. The stimuli can be found within the Google Bucket `roam-fluency` under the respective task folders.

```
roam-fluency/
├─ shared/          // Shared files
|   ├─ corpora/         
|       ├─ arf
|           ├─ items-all.csv
|           ├─ items-order.csv
|           ├─ items-practice.csv
|       ├─ calf
|           ├─ items-all.csv
|           ├─ items-order.csv
|           ├─ items-practice.csv
```

 Each task consists of three files:
 * items-all.csv: Consists of all possible items of four operations. Each item is binned to a specific difficulty level.
 * items-order.csv: Specifies the order in which items are presented based on a preset item difficulty.
 * items-practice.csv: Specifies practice items.



##### 2.2. Translation Items
Create a new folder under `src/i18n/locales` for each language, using the initials of the language. Inside each language folder, include a file named `translation.json`. Ensure that all languages follow the same structure in their translation files. Collaborate with partners to obtain and maintain translation content.

Example:
```
src/
├─ i18n/
|   ├─ locales/
|       ├─ en/          // English
|           ├─ translation.json
|       ├─ es/          // Spanish (Add more languages as needed)
|           ├─ translation.json
├─ ...
```


#### 3. Internationalization Setup

#### 3.1. File `src/experiment/i18n.js`

On `i18n.js`, import all the files from the **corpus** and **translation items**. For example `import enTranslations from '../locales/en/translation.json';`
Inside the file you will find the initialization of i18next and language detection. 
You must include all `stimuli` items on `letters` to manage different language corpora.

The following code represents the `i18n.js` file with comments on where to add files and define other languages:

```javascript
// Import the necessary modules and functions
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all your corpus files

// Define the wordlist object for managing URLs
export const letters = {
  en: {
    letterNameLower: enLetterNameLower,
    letterNameUpper: enLetterNameUpper,
    letterNamePractice: enLetterNamePractice,
    letterPhoneme: enLetterPhoneme,
    letterPhonemePractice: enLetterPhonemePractice,
    letterTextSoundPseudo: enLetterTextSoundPseudo,
    storyLion: enStoryLion,
    storyPhonics: enStoryPhonics,
    practicePhonics: enPracticePhonics,
  },
  es: {
    letterNameLower: esLetterNameLower,
    letterNameUpper: esLetterNameUpper,
    letterNamePractice: esLetterNamePractice,
    letterPhoneme: esLetterPhoneme,
    letterPhonemePractice: esLetterPhonemePractice,
    storyLion: esStoryLion,
  },
  it: {
    letterNameLower: '',
    letterNameUpper: '',
    letterNamePractice: '',
    letterPhoneme: '',
    letterPhonemePractice: '',
    storyLion: '',
    storyTextSoundPseudo: '',
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

#### 3.2. File `src/experiment/experimentSetup.js`

In this file, the assets will be loaded accordingly to the files in each language

```javascript
// define the csv corpus files that will be loaded for adding assets
function getFiles(){
  let files = [];
  if (i18next.language === 'es') {
    files = [
      esLetterNameLower,
      esLetterNamePractice,
      esLetterNameUpper, 
      esLetterPhoneme, 
      esLetterPhonemePractice,
      esStoryLion,
    ];
  } // add additional languages
  else {
    files = [enLetterNameLower,
      enLetterNamePractice,
      enLetterNameUpper, 
      enLetterPhoneme, 
      enLetterPhonemePractice,
      enLetterTextSoundPseudo,
      enStoryLion,
      enStoryPhonics,
      enPracticePhonics
    ];
  }
  return files;
}
```

Make sure to integrate these code snippets into your app's structure, adapting them as needed for any additional languages or specific requirements.
