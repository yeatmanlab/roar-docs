# ROAM Fluency

## Translation Guide for ROAM Fluecy

#### 1. Introduction
Welcome to the ROAM-Fluency Translation Guide — your comprehensive companion for making ROAM-Fluency accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app. ROAM-Fluency includes two tasks:

1. ROAM Fluency-ARF or ROAM Single-Digit
2. ROAM Fluency-CalF or ROAM Multi-Digit

**What This Guide Covers:**
- **Folder Structure:** Learn how to organize the translation files within the app's directory.

- **Internationalization Setup:** Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.

- **Asset Management:** Collaborate with partners to ensure all required assets from `assets.json` are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.

- **Collaboration:** Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

- **Testing and Deployment:** Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.


#### 2. Folder Structure

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

On `i18n.js`, import all the files from the **translation items**. For example `import enTranslations from '../locales/en/translation.json';`
Inside the file you will find the initialization of i18next and language detection. 

The following code represents the `i18n.js` file with comments on where to add files and define other languages:

```javascript
// Import the necessary modules and functions
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from "./locales/en/translation.json"; 
import esTranslations from "./locales/es/translation.json"; 
import itTranslations from "./locales/it/translation.json"; 
// add additional language

// Set up i18next
i18next
  .use(LanguageDetector)
  // .on('initialized', handleLanguageDetection)
  .init({
    debug: false,
    // which langauage codes to use. Ex. if 'en-US' detected, will use 'en'
    load: "languageOnly",
    fallbackLng: "en",
    detection: {
      order: ["defaultToEnglish", "querystring"],
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

### 4. Asset Management

##### 4.1. `tasks/fluency/assets.json`
- Collaborate with partners to ensure all required assets from `assets.json` are provided.
- Add the provided assets to google buckets.
- Only the assets listed under `languageSpecific` within `assets.json` need to be generated.

##### 4.2. Google Buckets
- Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is `roam-fluency`.
- Note that this bucket contains assets and corpora for multiple math tasks, so refer to the respective `assets.json` for uploading the required files.

#### 5. Collaboration
Clearly state the expectations from partners regarding the provision of corpus files, translation files, and assets.

#### 6. Testing
For testing a specific language we will have to include `/?lng=language`. For example for English, we will use `/?lng=en`.

Roam-fluency has a specific consent form only for english, when adding a new language, we must specify: `consent=false`.

Roam-fluency asks for participant ID only in english if recruitment is not equal to 'school' and a PID is not provided. To prevent this when adding a new language we must specify a PID as `pid=xxx` or recruitment as `recruitment=school`.

To access the different languages, we will have to include the parameters to the link, For example for English it would be:  
`https://link-testing-or-localhost/?lng=en&consent=false&recruitment=school`.

Additionally, Roam-fluency is adapted only to **Desktop** devices.
