// When tab change url.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // If this is GitHub.
    if (tab.url.indexOf('https://github.com/') > -1) {
        // Show the page action.
        chrome.pageAction.show(tabId);
    }
});

var index = 0;
// When click on page action.
chrome.pageAction.onClicked.addListener(function(tab) {
    index++;
    chrome.tabs.executeScript(null, {file: "lib/jquery-2.1.0.min.js"});
    if(index % 2 === 0) {
        chrome.tabs.executeScript(null, {file: "content_script.js"});
    } else {
        chrome.tabs.executeScript(null, {file: "content_script_width.js"});
    }    
});

