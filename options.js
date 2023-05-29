document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display the current settings when the options page is opened
    chrome.storage.sync.get(['shortcut', 'text'], function(result) {
        document.getElementById('shortcut').value = result.shortcut || '';
        document.getElementById('text').value = result.text || '';
    });

    // Save the settings when the Save button is clicked
    document.getElementById('save').addEventListener('click', function() {
        const shortcut = document.getElementById('shortcut').value;
        const text = document.getElementById('text').value;

        chrome.storage.sync.set({ shortcut, text }, function() {
            alert('Settings saved');
        });
    });
});