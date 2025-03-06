/**
    description: Responds to notification from the Content Script and displays the icon
**/

import '../library/libraries.js';

var libraries;
var Libraries = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;

async function runInPage(tabId) {
    const [{result}] = await chrome.scripting.executeScript({
        // this was defined in content_scripts/detect.js
        func: () => window.d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests_detect(),
        args: [],
        target: {
          tabId: tabId ??
            (await chrome.tabs.query({active: true, currentWindow: true}))[0].id
        },
        world: 'MAIN',
      });
    return result;
}

/**
 * Dispatch the program
 */
async function run(tabId) {
    const libs = await runInPage(tabId);
    libraries = libs;

    // Add in the static properties that go with the runtime library data
    for (const lib of libs) {
        lib.url = Libraries[lib.name].url;
        lib.icon = Libraries[lib.name].icon;
    }

    if (libs.length === 0) {
        return;
    }

    const lib = libs[0];
    getIcon(tabId, lib.icon, libs.length);
}

/**
 * Callback to finish rendering after canvases are done loading
 */
async function dispatch(tabId, pixelData) {
    const libs = libraries;
    const lib = libs[0];

    await chrome.action.setIcon({
        tabId: tabId,
        imageData: pixelData
    });

    await chrome.action.setTitle({
        tabId: tabId,
        title: libs.length > 1 ? libs.length + ' libraries detected' : lib.name + ' ' + lib.version
    });
    await chrome.action.setPopup({
        'tabId': tabId,
        'popup': '../popups/libraries.html'
    });
}

/**
 * Use a canvas to add an overlay to the icon, if necessary, return the pixel data
 */
async function getIcon(tabId, iconName, count) {
    var canvas = new OffscreenCanvas(19, 19);
    var context = canvas.getContext('2d');

    const blob = await fetch('../icons/'+iconName+'.png').then(r => r.blob());
    const img = await createImageBitmap(blob);

    context.drawImage(img, 0, 0, 19, 19);
    if (count > 1) {
        // overlay circle
        var x = 13;
        var y = 13;
        var radius = 5.5;
        var startAngle = 0;
        var endAngle = 2 * Math.PI;
        var counterClockwise = false;
        var lineWidth = 1;
        var lineColor = 'black';
        var fillColor = 'white';
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.closePath();
        context.lineWidth = lineWidth;
        context.strokeStyle = lineColor;
        context.stroke();
        context.fillStyle = fillColor;
        context.fill();
        // overlay number
        var txtX = 15.75;
        var txtY = 19;
        var txtFont = '10px Monospace';
        var txtColor = 'black';
        if (count >= 10) {
            txtX = 17.75;
        }
        context.font = txtFont;
        context.fillStyle = txtColor;
        context.textBaseline = 'bottom';
        context.textAlign = 'right';
        context.fillText(count, txtX, txtY);
    }
    dispatch(tabId, context.getImageData(0, 0, 19, 19));
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'run') {
        run(sender.tab.id);
    } else if (message.type === 'popup-request-libs') {
        sendResponse({libs: libraries});
    }
});
