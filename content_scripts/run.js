/**
    description: Content script that runs after DOM loaded. Tells the background
    script to start the detection.
**/

(function() {
    async function wait() {
        chrome.runtime.sendMessage({type: 'run'});
    }

    setTimeout(wait, 2500);
})();
