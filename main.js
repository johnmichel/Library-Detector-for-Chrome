
var setLibrary = function(library, tabId) {
    chrome.pageAction.setIcon({
        tabId: tabId,
        path: 'icons/'+library.icon+'.png'
    });
    chrome.pageAction.setTitle({
        tabId: tabId,
        title: library.name + ' ' + library.version
    });
    chrome.pageAction.show(tabId);
};

chrome.extension.onRequest.addListener(function(library, sender, sendResponse) {
    setLibrary(library, sender.tab.id);
    /*
    for (var i in sender.tab) {
        alert(i);
    }
    alert(sender.id);
    */
});
