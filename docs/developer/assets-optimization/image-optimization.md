# Image Optimization Guide

## Required Packages

### Install gsutil

1. Go to the [gsutil installation page](https://cloud.google.com/storage/docs/gsutil_install).
2. Select the operating system and platform that matches your computer, then download the appropriate file.
3. Open your terminal and navigate to the directory where you downloaded the uncompressed file. For example:
    ```bash
    cd Downloads
    ```
4. Run the installation script:
    ```bash
    ./google-cloud-sdk/install.sh
    ```
    - Respond `yes` to any prompts during the installation.

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
3. Select the assets you want to download and click the `DOWNLOAD` button. The command should look something like this:
    ```bash
    gsutil -m cp \
        "gs://roar-swr/es/shared/ROAR-Palabra Instructional Video.mp4" \
        "gs://roar-swr/es/shared/arrow_left_p2.png" \
        "gs://roar-swr/es/shared/arrow_left_p2.webp" \
        "gs://roar-swr/es/shared/arrow_p3.png" \
        "gs://roar-swr/es/shared/arrow_p3.webp" \
        "gs://roar-swr/es/shared/arrow_right_p2.png" \
        "gs://roar-swr/es/shared/arrow_right_p2.webp" \
        .
    ```

4. Copy the provided command for downloading the assets.

5. In your terminal, navigate to the folder you just created:
    ```bash
    cd New-Assets
    ```
6. Paste the copied command into your terminal and press Enter.

## Optimize Images

### Static WebP Images
To optimize static WebP images, use the following command:
```bash
for fn in *.webp; do cwebp $fn -q 60 -m 6 -mt -o ${fn/.webp/.c.webp}; done 
```

### Animated WebP Images
To convert and optimize animated GIFs to WebP, use the following command:
```bash
for fn in *.gif; do gif2webp $fn -min_size -lossy -f 0 -m 6 -q 10 -mt -o ${fn/.gif/.c.webp}; done
```
Feel free to adjust the values of `-f` and `-q`:

- `-f 0`: Sets the filter strength to 0. Higher values can improve quality but increase file size. Setting it to 0 minimizes the file size.
- `-q 10`: Sets the quality factor to 10 (the range is 0 to 100). Lower values significantly reduce file size at the cost of image quality.

The new images will have a `.c.webp` extension, allowing you to verify the compression results before making further changes.

### Suggested Recommendations

We recommend using the default settings for converting GIF files. For more image conversion tips, refer to the [Google Developers guide](https://developers.google.com/speed/webp/docs/gif2webp).