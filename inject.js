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

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('lib_detect.js');
var meta = document.createElement('meta');
meta.name = 'd41d8cd98f00b204e9800998ecf8427e_lib_detect';
meta.id = 'd41d8cd98f00b204e9800998ecf8427e_lib_detect';
head.appendChild(meta);
head.appendChild(script);