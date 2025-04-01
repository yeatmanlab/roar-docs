# Audio Optimization Guide

## Required Packages

### Install gsutil

1. Go to the [gsutil installation page](https://cloud.google.com/storage/docs/gsutil_install).
2. Select the operating system and platform that matches your computer and download the appropriate file.
3. Open your terminal and navigate to the directory where you downloaded the uncompressed file. For example:
    ```bash
    cd Downloads
    ```
4. Run the installation script:
    ```bash
    ./google-cloud-sdk/install.sh
    ```
    - Say `yes` to any prompts during installation.

### Install Homebrew

1. Open your terminal and run the following command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2. After the installation completes, install `wget` by running:
    ```bash
    brew install wget
    ```

## Copying Files from the Bucket

1. Create a folder on your computer where you want to store the assets. In your terminal, use:
    ```bash
    mkdir New-Assets
    ```
    Replace `New-Assets` with your desired folder name.
2. In your browser, navigate to the bucket containing the assets you want to download.
3. Select the assets you want to download and click the `DOWNLOAD` button. It should look something like this:
    ```bash
    gsutil -m cp \
        "gs://roar-swr/es/shared/ROAR-Palabra Instructional Video.mp4" \
        "gs://roar-swr/es/shared/arrow_left_p2.mp3" \
        "gs://roar-swr/es/shared/arrow_left_p2.mp3" \
        "gs://roar-swr/es/shared/arrow_p3.mp3" \
        "gs://roar-swr/es/shared/arrow_p3.mp3" \
        "gs://roar-swr/es/shared/arrow_right_p2.mp3" \
        "gs://roar-swr/es/shared/arrow_right_p2.mp3" \
    .
    ```

4. Copy the provided command for downloading the assets.

5. In your terminal, navigate to the folder you just created:
    ```bash
    cd New-Assets
    ```
6. Paste the copied command into your terminal and press Enter.

## Optimize Audios

1. In the same folder where the assets were created, create a new folder for the desired output bitrate. For example, for 32 kbps:
    ```bash
    mkdir output-32
    ```
2. Use the following command to convert the MP3 files to the specified bitrate and store them in the new folder:
    ```bash
    for fn in *.mp3; do ffmpeg -i $fn -map 0:a:0 -b:a 32k ./output-32/$fn; done
    ```

### Note

Repeat the optimization steps for different bitrates (e.g., 64, 96, 128 kbps) by creating separate output folders and adjusting the bitrate in the `ffmpeg` command. For example, for 64 kbps:
```bash
mkdir output-64
for fn in *.mp3; do ffmpeg -i $fn -map 0:a:0 -b:a 64k ./output-64/$fn; done
```

### Suggested Recommendations

**We recommend using 32k for audio instructions, and at least 96k for stimuli**