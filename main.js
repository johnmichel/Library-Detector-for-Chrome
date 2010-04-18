/**
    file: main.js

    description: Responds to notification from the Content Script and displays the icon
 
    license: Library Detector is freely distributable under the MIT License 
             http://www.opensource.org/licenses/mit-license.php
 
    copyright: Copyright (c) 2010 Andrew Bredow <bredow@gmail.com>. All rights reserved.
 
    author: Andrew Bredow http://andrewbredow.com
 
    inspiration: Library detect class inspired by Paul Bakaus' Library Detector for
                 Firefox  http://paulbakaus.com/
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
