/**
    description: Responds to notification from the Content Script and displays the icon
**/

var setLibrary = function(library, tabId) {
    library = library.split('&'); //name, version, icon
    chrome.pageAction.setIcon({
        tabId: tabId,
        path: 'icons/'+library[2]+'.png'
    });
    chrome.pageAction.setTitle({
        tabId: tabId,
        title: library[0] + ' ' + library[1]
    });
    chrome.pageAction.show(tabId);
};

chrome.extension.onRequest.addListener(function(library, sender, sendResponse) {
    setLibrary(library, sender.tab.id);
});
