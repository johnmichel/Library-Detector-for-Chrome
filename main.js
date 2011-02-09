/**
    description: Responds to notification from the Content Script and displays the icon
**/

var libraries, library, tabId;

function run(libs, tab) {
	tabId = tab;
	libraries = JSON.parse(libs); //name, version, icon, url
	console.log(libraries);
    library = libraries[0];
	console.log(library);
	getIcon(library.icon, libraries.length);
};

function dispatch(pixelData) {
	chrome.pageAction.setIcon({
        tabId: tabId,
        imageData: pixelData
    });

    chrome.pageAction.setTitle({
        tabId: tabId,
        title: library.name + ' ' + library.version
    });
    
    chrome.pageAction.setPopup({
        'tabId': tabId,
        'popup': 'popup.html'
    });
    
    localStorage.setItem('libraries_' + tabId, JSON.stringify(libraries));
    
    chrome.pageAction.show(tabId);
};

function getIcon(iconName, count) {
	console.log(iconName);
	var image = document.createElement('canvas');
	image.width = 16;
	image.height = 16;
	
	var context = image.getContext('2d');
	
	var icon = new Image;
	icon.src = 'icons/'+iconName+'.png';
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
};

chrome.extension.onRequest.addListener(function(library, sender, sendResponse) {
    run(library, sender.tab.id);
});
