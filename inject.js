// injects detector script

if (window === top) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.extension.getURL('lib_detect.js');
    document.getElementsByTagName('head')[0].appendChild(script);
}