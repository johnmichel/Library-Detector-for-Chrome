/**
    description: Content script that runs after DOM loaded to look for the Library
                 Detector meta element. If found, notifies the extension of the
                 script information
**/

function wait() {
    var meta = document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect');
    if (meta) {
        chrome.extension.sendMessage(meta.content);
    }
}

window.setTimeout(function() {
    wait();
},2000);