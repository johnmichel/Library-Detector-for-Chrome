/**
    description: Runs whenever the popup is created in a tab
**/

var addLibrary = function(library) {
    var container = document.createElement('div');
    var link = document.createElement('a');

    link.href = library.url;
    link.innerHTML = library.name;
    link.setAttribute('style', "background: transparent url('../icons/" + library.icon + ".png') no-repeat left center; background-size: contain;");
    link.target = '_blank';

    container.appendChild(link);

    if (library.version) {
        var version = document.createElement('span');

        version.innerHTML = ' ' + library.version;
        container.appendChild(version);
    }

    document.getElementById('libraries').appendChild(container);
};

(async () => {
    const response = await chrome.runtime.sendMessage({type: 'popup-request-libs'});
    for (const lib of Array.from(response.libs)) {
        addLibrary(lib);
    }
})();
