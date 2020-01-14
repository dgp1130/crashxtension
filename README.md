# Crashxtension

Crashes [Google Photos](https://photos.google.com/).

## Instructions

1. Clone the repository.
1. Install the extension.
    1. Open [chrome://extensions]().
    1. Enable "Developer mode" in the top right.
    1. Click "Load unpacked" in the top left.
    1. Select the directory this repository was cloned to.
    1. Find "Crashxtension" in the list.
    1. Click "Details".
    1. Enable "Allow in incognito".
1. Run Chrome.
    1. Run `chrome --enable-logging=stderr --v=1 --incognito --user-data-dir=${HOME}/chrome_profile/ 2>&1 | tee ~/chrome.log`
1. Verify Google Photos
    1. Visit [photos.google.com]() and log in.
    1. Observe page is working and does not crash.
1. Crash the page.
    1. Right click > Inspect element to open Chrome DevTools.
    1. Click on "DevTools Panel" tab.
    1. Observe blank "DevTools Panel".
    1. Refresh Google Photos.
    1. Observe Chrome tab crashing within a few seconds.
