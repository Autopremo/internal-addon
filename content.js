// Step 1: Set your preferred keybindings and output texts here
// Define an array of keybindings, where each binding consists of keys to be pressed and the corresponding text to be inserted

// Example combination keybinding:
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
  
  // Step 2: Initialize the keypress state by frame
  // This object will store the current key sequence and the last key time for each frame (window/iframe)
  const keypressStateByFrame = {};
  
  // Step 3: Define the insertText function
  // This function inserts the specified text at the current cursor position in the active element (text area or contenteditable element)
  function insertText(text) {
    const activeElement = document.activeElement;
    const isContentEditable = activeElement.isContentEditable;
  
    if (isContentEditable) {
      // If the active element is content editable, insert the text using the window.getSelection() API
      const selection = window.getSelection();
      if (!selection.rangeCount) return false;
      const range = selection.getRangeAt(0);
      const textNode = document.createTextNode(text);
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      // If the active element is a text area or input, insert the text at the current cursor position
      const start = activeElement.selectionStart;
      const end = activeElement.selectionEnd;
      const oldValue = activeElement.value;
      const newValue = oldValue.substring(0, start) + text + oldValue.substring(end);
      activeElement.value = newValue;
      activeElement.selectionStart = activeElement.selectionEnd = start + text.length;
    }
  }
  
  // Step 4: Define the handleKeyDown function
  // This function handles the keydown event and checks for key combinations or sequences defined in the bindings array
  function handleKeyDown(event) {
    const frameId = event.srcElement.ownerDocument.frameElement?.id;
    let currentSequence = keypressStateByFrame[frameId]?.currentSequence || [];
    let lastKeyTime = keypressStateByFrame[frameId]?.lastKeyTime || Date.now();
  
    const key = event.key === 'Alt' || event.key === 'Control' ? event.key : String(event.key);
  
    if (event.altKey || event.ctrlKey) {
      if (Date.now() - lastKeyTime > 500) {
        currentSequence = [];
      }
  
      currentSequence.push(key);
  
      for (const binding of bindings) {
        if (binding.type === 'combination') {
          const keyMatch = binding.keys.every(k =>
            (k === 'Control' && event.ctrlKey) ||
            (k === 'Alt' && event.altKey) ||
            k === event.key
          );
  
          if (keyMatch) {
            event.preventDefault();
            insertText(binding.text);
            return;
          }
        } else if (binding.type === 'sequence') {
          if (currentSequence.slice(0, binding.keys.length).join('') === binding.keys.join('')) {
            if (currentSequence.length === binding.keys.length) {
              event.preventDefault();
              insertText(binding.text);
              currentSequence = [];
            }
          }
        }
      }
    }
  
    lastKeyTime = Date.now();
    keypressStateByFrame[frameId] = {
      currentSequence,
      lastKeyTime
    };
  }
  
  // Step 5: Add the keydown event listener to the window
  // This listens for keydown events and triggers the handleKeyDown function
  window.addEventListener('keydown', handleKeyDown);  