chrome.commands.onCommand.addListener(function (command) {
    if (command === "insertTextCommand") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
      });
    }
  });  