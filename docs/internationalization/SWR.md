# ROAR Word
## Translation Guide for ROAR Word

#### 1. Introduction
Welcome to the ROAR-Word Translation Guide — your comprehensive companion for making ROAR-Word accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app.

**What This Guide Covers:**
- **Folder Structure:** Learn how to organize word corpora and translation files within the app's directory.

- **Internationalization Setup:** Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.

- **Asset Management:** Collaborate with partners to ensure all required assets from both `assets.json` and `webpAssets.json` are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.

- **Collaboration:** Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

- **Testing and Deployment:** Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.

#### 2. Folder Structure

##### 2.1. Wordlist Corpus
Create a new folder under `src/wordlist` for each language, using the initials of the language. Inside each language folder, include at least two files: `practice.csv` and `itembank.csv`. Collaborate with partners to obtain the necessary content for these files.

Example:
```
src/
├─ wordlist/
|   ├─ en/          // English
|       ├─ practice.csv
|       ├─ itembank.csv
|   ├─ es/          // Spanish (Add more languages as needed)
|       ├─ practice.csv
|       ├─ itembank.csv
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

##### 3.1. File `src/experiment/i18n.js`

On `i18n.js`, import all the files from the **wordlist corpus** and **translation items**. For example `import enTranslations from '../locales/en/translation.json';`
Inside the file you will find the initialization of i18next and language detection. 
You must include all `wordlist` items to manage different language corpora.

The following code represents the `i18n.js` file with comments on where to add files and define other languages:

```javascript
// Import the necessary modules and functions
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all your wordlist files

// Define the wordlist object for managing corpus
export const wordlist = {
  en: {
    dataPracticeURL: enDataPracticeURL,
    dataValidatedURL: enDataValidatedURL,
    dataNewURL: enDataNewURL,
  },
  es: {
    dataPracticeURL: esDataPracticeURL,
    dataValidatedURL: esDataValidatedURL,
    dataNewURL: '',
  },
  it: {
    dataPracticeURL: itDataPracticeURL,
    dataValidatedURL: itDataValidatedURL,
    dataNewURL: '',
  },
  // add additional language
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

#### 3.2. File `src/experiment/trials/languageSelect.js`

The following code represents a trial for language selection within your app:

```javascript
// Define the language selection trial
const languageSelectTrial = {
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <div>
      <h1>Looks like we couldn't detect what your default browser language is.</h1>
      <h1>Please select the language you are most fluent in.</h1>
    </div>
  `,
  html: `
    <select id="languageSelect" name="language">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="it">Italian</option>
      // add additional language
    </select>
  `,
  button_label: 'Continue',
  on_load: () => {
    const formContainer = document.getElementById('jspsych-survey-html-form');
    formContainer.classList.add('languageForm');

    document.getElementById('languageSelect').style.fontSize = '2vh';
  },
  on_finish: async (data) => {
    // Change the language based on user selection
    await i18next.changeLanguage(`${data.response.language}`);
    store.session.set('language', i18next.language);
  },
};
```

This trial presents a form allowing users to select their preferred language. The selected language is then used to change the app's language through i18next.

Make sure to integrate these code snippets into your app's structure, adapting them as needed for any additional languages or specific requirements.

#### 3. Asset Management

##### 3.1. `assets.json` and `webpAssets.json`
- Collaborate with partners to ensure all required assets from both  both `assets.json` and `webpAssets.json` are provided.
- Add the provided assets to google buckets.

##### 3.2. Google Buckets
- Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is `roar-swr`

#### 4. Collaboration
Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

#### 5. Testing
For testing an specific language we will have to include `/?lng=language`. For example for English, we will use `/?lng=en`.

Roar-word has two principal modes of testing: `fullRandom&storyoption=false` and `fullRandom&storyoption=true`.

- `fullRandom&storyoption=false` tests the game picking the words from the wordlist randomly without showing a story. This mode is tipycally recommended for grades 1-6.

- `fullRandom&storyoption=true` tests the game picking the words from the wordlist randomly showing a story. This mode is tipycally recommended for grades 6 and above.

To access this modes, we will have to include the parameters to the link, For example for English no story should be `https://link-testing-or-localhost/?lng=en&mode=fullRandom&storyoption=false`.

Additionally, Roar-word is adapted to three different devices with have to be tested: **Desktop, Tablet and Mobile**.
