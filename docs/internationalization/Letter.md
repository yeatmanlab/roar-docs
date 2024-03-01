# ROAR Letter

## Translation Guide for ROAR Letter

#### 1. Introduction
Welcome to the ROAR-letter Translation Guide — your comprehensive companion for making ROAR-letter accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app.

**What This Guide Covers:**
- **Folder Structure:** Learn how to organize word corpora and translation files within the app's directory.

- **Internationalization Setup:** Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.

- **Asset Management:** Collaborate with partners to ensure all required assets from both `assets.json` and `webpAssets.json` are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.

- **Collaboration:** Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

- **Testing and Deployment:** Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.

#### 2. Folder Structure

##### 2.1. Stimuli
Create a new folder under `src/stimuli` for each language, using the initials of the language. Inside each language folder, include all the files specified for letter (everything but phoenics). Collaborate with partners to obtain the necessary content for these files.

Example:
```
src/
├─ stimuli/
|   ├─ en/          // English
|       ├─ letterNameLower.csv
|       ├─ letterNameUpper.csv
|       ├─ letterNamePractice.csv
|       ├─ letterPhoneme.csv
|       ├─ letterPhonemePractice.csv
|       ├─ textSoundPseudo.csv
|       ├─ storyLion.csv
|       ├─ storyPhonics.csv
|       ├─ practicePhonics.csv
|   ├─ es/          // Spanish (Add more languages as needed)
|       ├─ letterNameLower.csv
|       ├─ letterNameUpper.csv
|       ├─ letterNamePractice.csv
|       ├─ letterPhoneme.csv
|       ├─ letterPhonemePractice.csv
|       ├─ storyLion.csv
|   ├─ it/
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

#### 4. Asset Management

##### 4.1. `assets.json` and `webpAssets.json`
- Collaborate with partners to ensure all required assets from both  both `assets.json` and `webpAssets.json` are provided.
- Add the provided assets to google buckets.

##### 4.2. Google Buckets
- Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is `roar-ak`

#### 5. Collaboration
Clearly state the expectations from partners regarding the provision of corpus files, translation files, and assets.

#### 6. Testing
For testing an specific language we will have to include `/?lng=language`. For example for English, we will use `/?lng=en`.

To access the different languages, we will have to include the parameters to the link, For example for English no story should be `https://link-testing-or-localhost/?lng=en`.

Additionally, Roar-letter is adapted to three different devices with have to be tested: **Desktop** and **Tablet**.
