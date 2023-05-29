# internal-addon
# Loading a Local Add-On in Chrome

This guide explains how to load a locally developed add-on or extension into Google Chrome for testing and development purposes.

## Prerequisites

- Google Chrome browser installed on your PC.

## Steps to Load the Add-On

1. Clone or download the add-on code from the repository to your local machine.

2. Open Google Chrome and enter the following URL in the address bar: `chrome://extensions`.

3. Enable **Developer mode** by toggling the switch located in the top-right corner of the Extensions page.

4. Click on the **Load unpacked** button. This will open a file selection dialog.

5. Navigate to the directory where you have the add-on code saved and select the main folder containing the manifest file and add-on resources.

6. Click the **Select Folder** (or **Open**) button to load the add-on.

7. Google Chrome will now load the add-on, and it will appear in the list of installed extensions on the Extensions page.

8. Ensure the toggle switch for the loaded add-on is enabled to activate it.

9. Test the add-on by navigating to the desired websites or performing the intended actions.

## Updating the Add-On

If you make changes to the add-on code, follow these steps to update the loaded add-on in Chrome:

1. Open the Extensions page by entering `chrome://extensions` in the address bar.

2. Locate the add-on in the list of installed extensions.

3. Click the **Reload** button or use the provided update option for the add-on.

4. Google Chrome will update the add-on with the latest changes, allowing you to test the updated version.

## Removing the Add-On

To remove the add-on from Google Chrome, follow these steps:

1. Open the Extensions page by entering `chrome://extensions` in the address bar.

2. Locate the add-on in the list of installed extensions.

3. Click the **Remove** button next to the add-on to uninstall it from Chrome.

## Notes

- Loading a local add-on in Chrome using the steps described here is intended for testing and development purposes. If you want to distribute your add-on to others, you'll need to package and publish it through the Chrome Web Store or follow the appropriate distribution methods.

- Ensure that your add-on adheres to the Chrome Extension Developer Program Policies to avoid any violations or rejection during distribution.

- Remember to disable or remove any locally loaded add-ons that you no longer need to keep your browser clean and avoid potential conflicts or performance issues.

- For further information or detailed documentation, refer to the official Chrome Extension Developer documentation available at https://developer.chrome.com/docs/extensions/.

Step 1: Set your preferred keybindings and output texts here

Define an array of keybindings, where each binding consists of keys to be pressed and the corresponding text to be inserted.

Example combination keybinding:

```javascript
const bindings = [
  { keys: ['Control', '.'], text: 'Hello, World!', type: 'combination' },
  // To add more combination keybindings:
  // { keys: ['ModifierKey1', 'ModifierKey2', 'Key'], text: 'Text to be inserted', type: 'combination' },
  // Modify the keys array with the desired key combination and add the associated text

  // Example sequence keybinding:
  { keys: ['Alt', '2', '2', '1'], text: '-', type: 'sequence' },
  // To add more sequence keybindings:
  // { keys: ['Key1', 'Key2', 'Key3'], text: 'Text to be inserted', type: 'sequence' },
  // Modify the keys array with the desired key sequence and add the associated text
];
