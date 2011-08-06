var d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests = {

	'jQuery': {
		icon: 'jquery',
		url: 'http://jquery.com',
		test: function(win) {
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery) {
				return { version: jq.fn.jquery };
			}
			return false;
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
			}
			return false;
		}
	},

	'Dojo': {
		icon: 'dojo',
		url: 'http://dojotoolkit.org',
		test: function(win) {
			if(win.dojo) {
				return { version: win.dojo.version.toString(), details: 'Details: '+(win.dijit ? 'Uses Dijit' : 'none') };
			}
			return false;
		}
	},

	'Prototype': {
		icon: 'prototype',
		url: 'http://prototypejs.org',
		test: function(win) {
			if(win.Prototype && win.Prototype.Version) {
				return { version: win.Prototype.Version };
			}
			return false;
		}
	},

	'Scriptaculous': {
		icon: 'scriptaculous',
		url: 'http://script.aculo.us',
		test: function(win) {
			if(win.Scriptaculous && win.Scriptaculous.Version) {
				return { version: win.Scriptaculous.Version };
			}
			return false;
		}
	},

	'MooTools': {
		icon: 'mootools',
		url: 'http://mootools.net',
		test: function(win) {
			if(win.MooTools && win.MooTools.version) {
				return { version: win.MooTools.version };
			}
			return false;
		}
	},

	'Spry': {
		icon: 'spry',
		url: 'http://labs.adobe.com/technologies/spry',
		test: function(win) {
			if(win.Spry) {
				return { version: 'none' };
			}
			return false;
		}
	},

	'YUI': {
		icon: 'yui',
		url: 'http://developer.yahoo.com/yui',
		test: function(win) {
			if(win.YAHOO && win.YAHOO.VERSION) {
				return { version: win.YAHOO.VERSION };
			}
			return false;
		}
	},

	'Qooxdoo': {
		icon: 'qooxdoo',
		url: 'http://qooxdoo.org',
		test: function(win) {
			if(win.qx && win.qx.Bootstrap) {
				return { version: 'none' };
			}
			return false;
		}
	},

	'Ext JS': {
		icon: 'extjs',
		url: 'http://www.sencha.com/products/extjs',
		test: function(win) {
			if(win.Ext && win.Ext.version) {
				return { version: win.Ext.version };
			}
			return false;
		}
	},

	'base2': {
		icon: 'base2',
		url: 'http://code.google.com/p/base2',
		test: function(win) {
			if(win.base2 && win.base2.version) {
				return { version: win.base2.version };
			}
			return false;
		}
	},

	'Closure': {
		icon: 'closure',
		url: 'http://code.google.com/closure',
		test: function(win) {
			if(win.goog) {
				return { version: '2.0' };
			}
			return false;
		}
	},
	
    'Raphaël': {
		icon: 'raphael',
		url: 'http://raphaeljs.com',
		test: function(win) {
			if(win.Raphael) {
				return { version: win.Raphael.version };
			}
			return false;
		}
	},

	'Modernizr': {
		icon: 'modernizr',
		url: 'http://www.modernizr.com',
		test: function(win) {
			if(win.Modernizr) {
				return { version: Modernizr._version };
			}
			return false;
		}
	},

	'Processing.js': {
		icon: 'processingjs',
		url: 'http://processingjs.org',
		test: function(win) {
			if(win.Processing) {
				return { version: Processing.version };
			}
			return false;
		}
	},
	
	'Backbone.js': {
		icon: 'backbone',
		url: 'http://documentcloud.github.com/backbone',
		test: function(win) {
			if (win.Backbone) {
				return {version: win.Backbone.VERSION};
			}
			return false;
		}
	},
	
	'Underscore.js': {
		icon: 'underscore',
		url: 'http://documentcloud.github.com/underscore',
		test: function(win) {
			// *should* be safeish for sites that have assigned a generic "_" to something else
			if (win._ && win._.VERSION && typeof win._.tap === 'function') {
				return {version: win._.VERSION};
			}
			return false;
		}
	},
	
	'Sammy.js': {
		icon: 'sammy',
		url: 'http://sammyjs.org',
		test: function(win) {
			if (win.Sammy && win.Sammy.VERSION) {
				return {version: win.Sammy.VERSION};
			}
			return false;
		}
	},
	
	'Rico': {
		icon: 'rico',
		url: 'http://openrico.org',
		test:  function(win) {
			if (win.Rico && win.Rico.Version) {
				return {version: win.Rico.Version};
			}
			return false;
		}
	},
	
	'MochiKit': {
		icon: 'mochikit',
		url: 'http://www.mochikit.com',
		test: function(win) {
			if (win.MochiKit) {
				return {version: MochiKit.VERSION || MochiKit.Base.VERSION};	
			}
			return false;
		}
	},
	
	'gRaphaël': {
		icon: 'graphael',
		url: 'http://g.raphaeljs.com',
		test: function(win) {
			if (win.Raphael && win.Raphael.fn.g) {
				return {version: 'none'};
			}
			return false;
		}
	},
	
	'Glow': {
		icon: 'glow',
		url: 'http://www.bbc.co.uk/glow',
		test: function(win) {
			if (win.gloader) {
				return {version: 'none'};
			}
			else if (win.glow) {
				return {version: win.glow.VERSION};
			}
			else if (win.Glow) {
				return {version: win.Glow.version};
			}
			return false;
		}		
	},
	
	'Socket.IO': {
		icon: 'icon_48', // currently has no icon
		url: 'http://socket.io',
		test: function(win) {
			if (win.io && win.io.sockets && win.io.version) { // fix! e.g. Google Reader currently shows up as using socket.io, which they are not doing
				return {version: win.io.version};
			}
			return false;
		}
	},
	
	'Mustache.js': {
		icon: 'mustache',
		url: 'http://mustache.github.com',
		test: function(win) {
			if (win.Mustache) {
				return {version: win.Mustache.version};
			}
			return false;
		}
	},
	
	'Fabric.js': {
		icon: 'icon_48', // currently has no icon
		url: 'https://github.com/kangax/fabric.js',
		test: function(win) {
			if (win.fabric && win.fabric.version) {
				return {version: win.fabric.version};
			}
			return false;
		}
	},
	
	'FuseJS': {
		icon: 'fusejs',
		url: 'http://fusejs.com',
		test: function(win) {
			if (win.fuse && win.fuse.version) {
				return {version: win.fuse.version};
			}
			return false;
		}
	},
	
	'Tween.js': { // @todo wtf won't this one work?
		icon: 'icon_48', // currently has no icon
		url: 'https://github.com/sole/tween.js',
		test: function(win) {
			if (win.TWEEN) {
			    console.log(win.TWEEN);
				return {version: 'none'};
			}
			return false;
		}
	},
	
	'SproutCore': {
	   icon: 'sproutcore',
	   url: 'http://www.sproutcore.com',
	   test: function(win) {
	       if (win.SC && win.SC.bundleDidLoad) {
	           return {version: 'none'};
	       }
	       return false;
	   }
	},
	
	'Zepto.js': {
	   icon: 'zepto',
	   url: 'http://zeptojs.com',
	   test: function(win) {
	       if (win.Zepto && win.Zepto.fn) {
	           return {version: 'none'};
	       }
	       return false;
	   }
	},
	
	'three.js': {
	   icon: 'icon_48', // currently has no icon
	   url: 'https://github.com/mrdoob/three.js',
	   test: function(win) {
	       if (win.THREE && win.THREE) {
	           return {version: 'none'};
	       }
	       return false;
	   }
	}/*,
	

	'jQuery Tools': {
	   icon: 'jquerytools',
	   url: 'http://flowplayer.org/tools',
	   test: function(win) {
            var jq = win.jQuery || win.$ || win.$jq || win.$j;
            if(jq && jq.fn && jq.fn.jquery && win.$.tools) {
	   
	       //if ((win.$ || win.jQuery) && win.$.tools) {
	           return {version: $.tools.version};
	       }
	       return false;
	   }
    }
*/
};