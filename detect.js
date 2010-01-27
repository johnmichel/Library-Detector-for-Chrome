
var Tests = {
	
	'jQuery': {
		icon: 'jquery.png',
		test: function(win) {
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery) {
				return { version: jq.fn.jquery };
			} else {
				return false;
			}
		}
	},
	
	'jQuery UI': {
		icon: 'jquery_ui.png',
		//phonehome: 'http://jqueryui.com/phone_home',
		test: function(win) {
			
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery && jq.ui) {

				var plugins = 'accordion,datepicker,dialog,draggable,droppable,progressbar,resizable,selectable,slider,menu,grid,tabs'.split(','), concat = [];
				for (var i=0; i < plugins.length; i++) { if(jq.ui[plugins[i]]) concat.push(plugins[i].substr(0,1).toUpperCase() + plugins[i].substr(1)); };
			
				return { version: jq.ui.version, details: concat.length ? 'Plugins used: '+concat.join(',') : '' };
			} else {
				return false;
			}
			
		}
	},
	
	'Dojo': {
		icon: 'dojo.png',
		test: function(win) {
			if(win.dojo) {
				return { version: win.dojo.version.toString(), details: 'Details: '+(win.dijit ? 'Uses Dijit' : 'none') };
			} else {
				return false;
			}
		}
	},
	
	'Prototype': {
		icon: 'prototype.png',
		test: function(win) {
			if(win.Prototype && win.Prototype.Version) {
				return { version: win.Prototype.Version };
			} else {
				return false;
			}
		}
	},
	
	'Scriptaculous': {
		icon: 'scriptaculous.png',
		test: function(win) {
			if(win.Scriptaculous && win.Scriptaculous.Version) {
				return { version: win.Scriptaculous.Version };
			} else {
				return false;
			}
		}
	},
	
	'MooTools': {
		icon: 'mootools.png',
		test: function(win) {
			if(win.MooTools && win.MooTools.version) {
				return { version: win.MooTools.version };
			} else {
				return false;
			}
		}
	},
	
	'Spry': {
		icon: 'spry.png',
		test: function(win) {
			if(win.Spry) {
				return { version: '(not detectable)' };
			} else {
				return false;
			}
		}
	},
	
	'YUI': {
		icon: 'yui.png',
		test: function(win) {
			if(win.YAHOO && win.YAHOO.VERSION) {
				return { version: win.YAHOO.VERSION };
			} else {
				return false;
			}
		}
	},
	
	'Qooxdoo': {
		icon: 'qooxdoo.png',
		test: function(win) {
			if(win.qx && win.qx.Bootstrap) {
				return { version: '(not detectable)' };
			} else {
				return false;
			}
		}
	},
	
	'Ext JS': {
		icon: 'extjs.png',
		test: function(win) {
			if(win.Ext && win.Ext.version) {
				return { version: win.Ext.version };
			} else {
				return false;
			}
		}
	},
	
	'base2': {
		icon: 'base2.png',
		test: function(win) {
			if(win.base2 && win.base2.version) {
				return { version: win.base2.version };
			} else {
				return false;
			}
		}
	}
	
};

var detectJs = function(tabId, tab) { 
    var found = false;
    for (var i in chrome) {
        alert(i);
    }
    for (var i in Tests) {
        if (Tests[i].test(window)) {
            chrome.pageAction.setIcon({
                tabId: tabId,
                path: 'icons/'+Tests[i].icon
            });
            found = true;
            break;
        }
    }
    alert(found);
    if (found === false) {
        chrome.pageAction.hide(tabId);
    }
    else {
        chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        detectJs(tabId, tab);
    }
}); 