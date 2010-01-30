/**
    file: inject.js

    description: Content script that runs before scripts are parsed to inject
                 the lib_detect.js script into the document
 
    license: Library Detector is freely distributable under the MIT License 
             http://www.opensource.org/licenses/mit-license.php
 
    copyright: Copyright (c) 2010 Andrew Bredow <bredow@gmail.com>. All rights reserved.
 
    author: Andrew Bredow http://andrewbredow.com
 
    inspiration: Library detect class inspired by Paul Bakaus' Library Detector for
                 Firefox  http://paulbakaus.com/
**/

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('lib_detect.js');
document.getElementsByTagName('head')[0].appendChild(script);
