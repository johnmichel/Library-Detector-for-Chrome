/**
    description: Responds to notification from the Content Script and displays the icon
**/

var libraries, library, tabId;
var Libraries = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;

/**
 * Parse the data from the meta tag
 */
function parseLibraries(libs) {
	if (libs.length === 0) return [];
	var libkeys = [];
	libs = libs.split(',');
	for (var i=0; i<libs.length; i++) {
		var libdata = libs[i].split(':');
		libkeys.push({
			name: libdata[0],
			version: libdata[1]
		});
	}
	return libkeys;
}

/**
 * Add in the static properties that go with the runtime library data
 */
function getLibraries(libs) {  //name, version, icon, url
	libraries = parseLibraries(libs);
	for (var i=0; i<libraries.length; i++) {
		lib = libraries[i];
		lib.url = Libraries[lib.name].url;
		lib.icon = Libraries[lib.name].icon;
	}
	return libraries;
}

/**
 * Set no icon
 */
function setNoIcon() {
	chrome.pageAction.setIcon({
        tabId: tabId,
        path: '../icons/null.png'
    });
	chrome.pageAction.setTitle({
        tabId: tabId,
        title: ''
	});
	chrome.pageAction.setPopup({
        'tabId': tabId,
        'popup': ''
    });
	chrome.pageAction.show(tabId);
}

/**
 * Dispatch the program
 */
function run(libs, tab) {
	tabId = tab;
	libraries = getLibraries(libs);
	if (libraries.length === 0) {
		setNoIcon();
		return;
	}
    library = libraries[0];
	getIcon(library.icon, libraries.length);
}

/**
 * Callback to finish rendering after canvases are done loading
 */
function dispatch(pixelData) {
	
	chrome.pageAction.setIcon({
        tabId: tabId,
        imageData: pixelData
    });
    
	chrome.pageAction.setTitle({
        tabId: tabId,
        title: libraries.length > 1 ? libraries.length + ' libraries detected' : library.name + ' ' + library.version
    });
    chrome.pageAction.setPopup({
        'tabId': tabId,
        'popup': '../popups/libraries.html'
    });
    
    localStorage.setItem('libraries_' + tabId, JSON.stringify(libraries));
    
    chrome.pageAction.show(tabId);
}

/**
 * Use a canvas to add an overlay to the icon, if necessary, return the pixel data
 */
function getIcon(iconName, count) {
	var image = document.createElement('canvas');
	image.width = 16;
	image.height = 16;
	
	var context = image.getContext('2d');
	
	var icon = new Image;
	icon.src = '../icons/'+iconName+'.png';
	icon.addEventListener('load', function() {
		context.drawImage(icon, 0, 0, 16, 16);
		if (count > 1) {
			// overlay circle
			context.fillStyle = '#fff';
			context.beginPath();
			context.arc(12.5, 11, 5.5, 0, Math.PI*2, true);
			context.closePath();
			context.fill();
			
			// overlay number
			context.font = '10px Arial';
			context.fillStyle = '#ff0000';
			context.textBaseline = 'bottom';
			context.textAlign = 'right';
			context.fillText(count, 15.75, 16);
		}
		dispatch(context.getImageData(0, 0, 16, 16));
	}, false);
}

chrome.extension.onMessage.addListener(function(library, sender, sendResponse) {
    run(library, sender.tab.id);
});
