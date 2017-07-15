/**
    description: Content script that runs before scripts are parsed to inject
                 the lib_detect.js script into the document
**/

var head = document.getElementsByTagName('head')[0];
var libScript = document.createElement('script');
var detectScript = document.createElement('script');
libScript.src = chrome.extension.getURL('../library/libraries.js');
detectScript.src = chrome.extension.getURL('content_scripts/lib_detect.js');
var meta = document.createElement('meta');
meta.name = 'd41d8cd98f00b204e9800998ecf8427e_lib_detect';
meta.id = 'd41d8cd98f00b204e9800998ecf8427e_lib_detect';
head.appendChild(meta);
head.appendChild(libScript);
head.appendChild(detectScript);