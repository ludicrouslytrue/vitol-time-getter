# Vitol Time Getter

A Chrome extension that extracts the target time for interactions from vitol's H5P interactive videos and copies the command to jump to that time.

## What it does

This extension extracts the timestamp of the next question/interaction in the interactive videos on vitol and copies a console command to your clipboard, allowing you to quickly jump to that point in the video.

## How to use

### 1. Install the extension

1. Download this extension as a zip, or clone this repo
2. If you downloaded the zip, extract it using 7zip, WinRAR or similar tools
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in the top right)
5. Click "Load unpacked"
6. Select this extension folder

### 2. Use the extension

1. **Navigate to a video in vitol, and play it**

   - Play the video by clicking on the youtube icon or similar.

2. **Click the extension icon** in your browser toolbar

   - The extension will extract the target time automatically

3. **Select the video element in DevTools**

   - Click the **Inspector** tool in DevTools (or press `Ctrl + Shift + C`, or `Command + Option + C`)
   - Click on the video player on the page
   - The video element should now be highlighted in the Elements panel

4. **Jump to the target time**

   - Click in the **Console** tab (or press `Command + Option + J` or `Ctrl + Shift + J`)
   - There, you should see:

     ```
     ok so this is the time where the question is: X seconds
     copy ts: $0.currentTime = X
     pls select video in DevTools inspector and paste in console, and enter thats it
     ```

   - Paste (`Ctrl + V` or `Command + V`) and press `Enter`
   - The video will jump to the target time!

## Tips

- The command `$0.currentTime = X` is automatically copied to your clipboard
- `$0` refers to the currently selected element in DevTools
- You must select the actual `<video>` element, not just the video player container, clicking on the center of the video player is good enough.

## Requirements

- Chrome browser (or Chromium-based browser)
- H5P interactive videos with the structure that includes `H5PIntegration` data (vitol has this)

## Files

- `manifest.json` - Extension configuration
- `background.js` - Handles extension icon clicks
- `jump.js` - Content script that receives the target time
- `injector.js` - Page context script that extracts time from H5PIntegration
- `README.md` - This file

## Troubleshooting

**No console output?**

- Make sure you're on a page with H5P interactive videos
- Check that the extension icon was clicked
- Verify the iframe URL contains `/h5p/embed.php`

**Command doesn't work?**

- Ensure you selected the `<video>` element (not a `<div>` or other container)
- The video element should show `tagName: "VIDEO"` in the Elements inspector

**Video doesn't jump?**

- Some videos may have additional security
- Try pausing/playing the video first, then run the command
