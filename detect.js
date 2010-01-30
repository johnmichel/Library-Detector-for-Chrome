/**
    file: detect.js

    description: Content script that runs after DOM loaded to look for the Library
                 Detector meta element. If found, notifies the extension of the
                 script information
 
    license: Library Detector is freely distributable under the MIT License 
             http://www.opensource.org/licenses/mit-license.php
 
    copyright: Copyright (c) 2010 Andrew Bredow <bredow@gmail.com>. All rights reserved.
 
    author: Andrew Bredow http://andrewbredow.com
 
    inspiration: Library detect class inspired by Paul Bakaus' Library Detector for
                 Firefox  http://paulbakaus.com/
**/

var meta = document.getElementById('lib_detect_meta');
if (meta) {
    chrome.extension.sendRequest(JSON.parse(meta.content));
}