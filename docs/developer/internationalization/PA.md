# ROAR Phoneme

## Translation Guide for ROAR Phoneme

#### 1. Introduction
Welcome to the ROAR-phoneme Translation Guide — your comprehensive companion for making ROAR-phoneme accessible to a global audience. As we strive to break language barriers and reach learners worldwide, this guide outlines the steps to seamlessly integrate translations into the app.

**What This Guide Covers:**
- **Folder Structure:** Learn how to organize word corpora and translation files within the app's directory.

- **Internationalization Setup:** Dive into the setup of internationalization using i18next. Discover the process of adding new translations as the app evolves, fostering continuous improvement and expansion into diverse linguistic landscapes.

- **Asset Management:** Collaborate with partners to ensure all required assets from `WebAssets.json` are provided. Add the provided assets to Google Buckets. This section also details the importance of proper asset naming and organization.

- **Collaboration:** Clearly state the expectations from partners regarding the provision of wordlist corpus files, translation files, and assets.

- **Testing and Deployment:** Ensure the effectiveness of your translations by following testing procedures and deploying language updates seamlessly.

#### 2. Folder Structure

##### 2.1. Corpus
Create a new folder under `src/corpus` for each language, using the initials of the language. Inside each language folder, include all the files specified for phoneme (everything but phoenics). Collaborate with partners to obtain the necessary content for these files.

Example:
```
src/
├─ corpus/
|   ├─ en/          // English
|       ├─ practice.csv
|       ├─ test.csv
|   ├─ es/          // Spanish (Add more languages as needed)
|       ├─ practice.csv
|       ├─ test.csv

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

#### 3.1. File `src/experiment/experiment.js`

In this file, we need to control if we want to show lsm, fsm, and deletion. For example, for Spanish we will show lsm and fsm, but not deletion. 

```javascript
if(i18next.language !== 'es'){ // add additional languages
      if (config.story) {
        timeline.push(delIntroductionTrials);
      } else {
        timeline.push(delIntroductionTrialsNS);
      }
      timeline.push(delPracticeTrials);
      timeline.push(delTestingSeries);
    }
```

#### 4. Asset Management

##### 4.1. `WebAssets.json`
- Collaborate with partners to ensure all required assets from `WebAssets.json` are provided.
- Add the provided assets to google buckets.

##### 4.2. Google Buckets
- Follow the English folder setup in the Google bucket to load the provided assets for each language. The bucket name is `roar-pa`

#### 5. Collaboration
Clearly state the expectations from partners regarding the provision of corpus files, translation files, and assets.

#### 6. Testing
For testing an specific language we will have to include `/?lng=language`. For example for English, we will use `/?lng=en`.

To access the different languages, we will have to include the parameters to the link, For example for English no story should be `https://link-testing-or-localhost/?lng=en`.

Additionally, Roar-phoneme is adapted to two different devices with have to be tested: **Desktop** and **Tablet**.
