var d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests = {

	'jQuery': {
		icon: 'jquery',
		url: 'http://jquery.com',
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
		icon: 'jquery_ui',
		url: 'http://jqueryui.com',
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
		icon: 'dojo',
		url: 'http://dojotoolkit.org',
		test: function(win) {
			if(win.dojo) {
				return { version: win.dojo.version.toString(), details: 'Details: '+(win.dijit ? 'Uses Dijit' : 'none') };
			} else {
				return false;
			}
		}
	},

	'Prototype': {
		icon: 'prototype',
		url: 'http://prototypejs.org',
		test: function(win) {
			if(win.Prototype && win.Prototype.Version) {
				return { version: win.Prototype.Version };
			} else {
				return false;
			}
		}
	},

	'Scriptaculous': {
		icon: 'scriptaculous',
		url: 'http://script.aculo.us',
		test: function(win) {
			if(win.Scriptaculous && win.Scriptaculous.Version) {
				return { version: win.Scriptaculous.Version };
			} else {
				return false;
			}
		}
	},

	'MooTools': {
		icon: 'mootools',
		url: 'http://mootools.net',
		test: function(win) {
			if(win.MooTools && win.MooTools.version) {
				return { version: win.MooTools.version };
			} else {
				return false;
			}
		}
	},

	'Spry': {
		icon: 'spry',
		url: 'http://labs.adobe.com/technologies/spry',
		test: function(win) {
			if(win.Spry) {
				return { version: '(not detectable)' };
			} else {
				return false;
			}
		}
	},

	'YUI': {
		icon: 'yui',
		url: 'http://developer.yahoo.com/yui',
		test: function(win) {
			if(win.YAHOO && win.YAHOO.VERSION) {
				return { version: win.YAHOO.VERSION };
			} else {
				return false;
			}
		}
	},

	'Qooxdoo': {
		icon: 'qooxdoo',
		url: 'http://qooxdoo.org',
		test: function(win) {
			if(win.qx && win.qx.Bootstrap) {
				return { version: '(not detectable)' };
			} else {
				return false;
			}
		}
	},

	'Ext JS': {
		icon: 'extjs',
		url: 'http://www.sencha.com/products/extjs',
		test: function(win) {
			if(win.Ext && win.Ext.version) {
				return { version: win.Ext.version };
			} else {
				return false;
			}
		}
	},

	'base2': {
		icon: 'base2',
		url: 'http://code.google.com/p/base2',
		test: function(win) {
			if(win.base2 && win.base2.version) {
				return { version: win.base2.version };
			} else {
				return false;
			}
		}
	},

	'Closure': {
		icon: 'closure',
		url: 'http://code.google.com/closure',
		test: function(win) {
			if(win.goog) {
				return { version: '2.0' };
			} else {
				return false;
			}
		}
	},
	
    'Raphael': {
		icon: 'raphael',
		url: 'http://raphaeljs.com',
		test: function(win) {
			if(win.Raphael) {
				return { version: win.Raphael.version };
			} else {
				return false;
			}
		}
	},

	'Modernizr': {
		icon: 'modernizr',
		url: 'http://www.modernizr.com',
		test: function(win) {
			if(win.Modernizr) {
				return { version: Modernizr._version };
			} else {
				return false;
			}
		}
	},

	'Processing.js': {
		icon: 'processingjs',
		url: 'http://processingjs.org',
		test: function(win) {
			if(win.Processing) {
				return { version: '(version not detectable)' };
			} else {
				return false;
			}
		}
	}
	
};