var d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests = {

	'Highcharts': {
		icon: 'highcharts',
		url: 'http://www.highcharts.com',
		test: function(win) {
			if(win.Highcharts && win.Highcharts.version) {
				return { version: win.Highcharts.version };
			}
			return false;
		}
	},
	
	'InfoVis': {
		icon: 'jit',
		url: 'http://philogb.github.com/jit/',
		test: function(win) {
			if(win.$jit && win.$jit.version) {
				return { version: win.$jit.version };
			}
			return false;
		}
	},
	
	'FlotCharts': {
		icon: 'icon_48',
		url: 'http://www.flotcharts.org/',
		test: function(win) {
			if(win.$ && win.$.plot && win.$.plot.version) {
				return { version: win.$.plot.version };
			}
			return false;
		}
	},
	
	'Blackbird': {
		icon: 'blackbird',
		url: 'http://www.gscottolson.com/blackbirdjs/',
		test: function(win) {
			if(win.log && win.log.warn) {
				return { version: "N/A"}; // no version info
			}
			return false;
		}
	},
	
	'CreateJS': {
		icon: 'createjs',
		url: 'http://createjs.com/#!/CreateJS',
		test: function(win) {
			if(win.Stage || win.Shape || win.Container) {
				return { version: "N/A"}; // no version info available
			}
			return false;
		}
	},
	
	'Google Maps': {
		icon: 'gmaps',
		url: 'https://developers.google.com/maps/',
			test: function(win) {
				if(win.google && win.google.maps && win.google.maps.version) {
					return { version: win.google.maps.version};
				}
				return false;
			}
	},
	
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
				return { version: '' };
			}
			return false;
		}
	},

	'YUI 2': {
		icon: 'yui',
		url: 'http://developer.yahoo.com/yui/2/',
		test: function(win) {
			if (win.YAHOO && win.YAHOO.VERSION) {
				return { version: win.YAHOO.VERSION };
			}
			return false;
		}
	},
	
	'YUI 3': {
		icon: 'yui3',
		url: 'http://yuilibrary.com/',
		test: function(win) {
			if (win.YUI && win.YUI.Env && win.YUI.version) {
                return { version: win.YUI.version };
            }
			return false;
		}
	},

	'Qooxdoo': {
		icon: 'qooxdoo',
		url: 'http://qooxdoo.org',
		test: function(win) {
			if(win.qx && win.qx.Bootstrap) {
				return { version: '' };
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
            else if (win.Ext && window.Ext.versions) {
                return { version: window.Ext.versions.core.version };
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

	'Closure Library': {
		icon: 'closure',
		url: 'https://developers.google.com/closure/library',
		test: function(win) {
			if(win.goog && win.goog.provide) {
				return { version: '' };
			}
			return false;
		}
	},
	
    'Rapha&euml;l': {
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
	
	'Backbone': {
		icon: 'backbone',
		url: 'http://documentcloud.github.com/backbone',
		test: function(win) {
			if (win.Backbone && win.Backbone.Model.extend) {
				return {version: win.Backbone.VERSION};
			}
			return false;
		}
	},
	
	'Underscore': {
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
	
	'Sammy': {
		icon: 'sammy',
		url: 'http://sammyjs.org',
		test: function(win) {
			if (win.Sammy && win.Sammy.VERSION && win.Sammy.Application.curry) {
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
			if (win.MochiKit && win.MochiKit.Base.module) {
				return {version: MochiKit.VERSION};	
			}
			return false;
		}
	},
	
	'gRapha&euml;l': {
		icon: 'graphael',
		url: 'http://g.raphaeljs.com',
		test: function(win) {
			if (win.Raphael && win.Raphael.fn.g) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'Glow': {
		icon: 'glow',
		url: 'http://www.bbc.co.uk/glow',
		test: function(win) {
			if (win.gloader) {
				return {version: ''};
			}
			else if (win.glow && win.glow.dom) {
				return {version: win.glow.VERSION};
			}
			else if (win.Glow) {
				return {version: win.Glow.version};
			}
			return false;
		}		
	},
	
	'Socket.IO': {
		icon: 'socketio', // currently has no icon
		url: 'http://socket.io',
		test: function(win) {
            if (win.io && win.io.sockets && win.io.version) {
                return {version: win.io.version};
			}
			return false;
		}
	},
	
	'Mustache': {
		icon: 'mustache',
		url: 'http://mustache.github.com',
		test: function(win) {
			if (win.Mustache && win.Mustache.to_html) {
				return {version: win.Mustache.version};
			}
			return false;
		}
	},
	
	'Fabric.js': {
		icon: 'icon_48', // currently has no icon
		url: 'http://fabricjs.com/',
		test: function(win) {
			if (win.fabric && win.fabric.util) {
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
	
	'Tween.js': {
		icon: 'icon_48', // currently has no icon
		url: 'https://github.com/sole/tween.js',
		test: function(win) {
			if (win.TWEEN) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'SproutCore': {
	   icon: 'sproutcore',
	   url: 'http://www.sproutcore.com',
	   test: function(win) {
	       if (win.SC && win.SC.Application) {
	           return {version: ''};
	       }
	       return false;
	   }
	},
	
	'Zepto.js': {
	   icon: 'zepto',
	   url: 'http://zeptojs.com',
	   test: function(win) {
	       if (win.Zepto && win.Zepto.fn) {
	           return {version: ''};
	       }
	       return false;
	   }
	},
	
	'three.js': {
	   icon: 'icon_48', // currently has no icon
	   url: 'https://github.com/mrdoob/three.js',
	   test: function(win) {
	       if (win.THREE && win.THREE.REVISION) {
	           return {version: 'r' + win.THREE.REVISION};
	       }
	       else if (win.THREE) {
    	       return {version: ''};
	       }
	       return false;
	   }
	},
	
	'PhiloGL': {
	   icon: 'philogl',
	   url: 'http://www.senchalabs.org/philogl/',
	   test: function(win) {
	       if (win.PhiloGL) {
	           return {version: win.PhiloGL.version};
	       }
	       return false;
	   }
	},
	
	'CamanJS': {
		icon: 'camanjs',
		url: 'http://camanjs.com/',
		test: function(win) {
			if (win.Caman) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'yepnope': {
		icon: 'yepnope',
		url: 'http://yepnopejs.com/',
		test: function(win) {
			if (win.yepnope) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'LABjs': {
		icon: 'icon_48',
		url: 'http://labjs.com/',
		test: function(win) {
			if (win.$LAB) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'Head JS': {
		icon: 'headjs',
		url: 'http://headjs.com/',
		test: function(win) {
			if (win.head &&  win.head.js) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'ControlJS': {
		icon: 'icon_48',
		url: 'http://stevesouders.com/controljs/',
		test: function(win) {
			if (win.CJS) {
				return {version: ''};
			}
			return false;
		}
	},
	
	'RequireJS': {
		icon: 'requirejs',
		url: 'http://requirejs.org/',
		test: function(win) {
			if ((win.require && win.require.load) || (win.requirejs && win.requirejs.load)) {
				return {version: win.require.version || win.requirejs.version};
			}
			return false;
		}
	},
	
	'RightJS': {
		icon: 'rightjs',
		url: 'http://rightjs.org/',
		test: function(win) {
			if (win.RightJS && win.RightJS.isNode) {
				return {version: win.RightJS.version};
			}
			return false;
		}
	},	

	'jQuery Tools': {
	   icon: 'jquerytools',
	   url: 'http://flowplayer.org/tools/',
	   test: function(win) {
            var jq = win.jQuery || win.$;
            if(jq && jq.tools) {
	           return { version: jq.tools.version };
	       }
	       return false;
	   }
    },	
    
    'Pusher': {
	   icon: 'pusher',
	   url: 'http://pusher.com/docs/pusher_js/',
	   test: function(win) {
            if(win.Pusher && win.Pusher.Channel) {
	           return { version: win.Pusher.VERSION };
	       }
	       return false;
	   }
    },	
    
    'Paper.js': {
	   icon: 'paperjs',
	   url: 'http://paperjs.org/',
	   test: function(win) {
            if(win.paper && win.paper.Point) {
	           return { version: win.paper.version };
	       }
	       return false;
	   }
    },
    
    'Swiffy': {
	   icon: 'icon_48',
	   url: 'http://www.google.com/doubleclick/studio/swiffy/',
	   test: function(win) {
            if(win.swiffy) {
	           return { version: '' };
	       }
	       return false;
	   }
    },
    
    'Move': {
	   icon: 'move',
	   url: 'http://movelang.org/',
	   test: function(win) {
            if(win.move && win.move.compile) {
	           return { version: win.move.version() };
	       }
	       return false;
	   }
    },
    
    'AmplifyJS': {
	   icon: 'amplifyjs',
	   url: 'http://amplifyjs.com/',
	   test: function(win) {
            if(win.amplify && win.amplify.publish) {
	           return { version: '' };
	       }
	       return false;
	   }
    },
    
    'Popcorn.js': {
	   icon: 'popcornjs',
	   url: 'http://mozillapopcorn.org/popcornjs/',
	   test: function(win) {
            if(win.Popcorn && win.Popcorn.Events) {
	           return { version: win.Popcorn.version };
	       }
	       return false;
	   }
    },
    
    'D3': {
	    icon: 'd3',
	    url: 'http://d3js.org',
	    test: function(win) {
            if(win.d3 && win.d3.select) {
                return { version: win.d3.version };
	        }
	        return false;
	    }
    },
    
    'Handlebars': {
	    icon: 'handlebars',
	    url: 'http://handlebarsjs.com/',
	    test: function(win) {
            if(win.Handlebars && win.Handlebars.compile) {
                return { version: win.Handlebars.VERSION };
	        }
	        return false;
	    }
    },
    
    'Spine': {
        icon: 'icon_48',
        url: 'http://spinejs.com/',
        test: function(win) {
            if (win.Spine && win.Spine.Controller) {
                return {version: win.Spine.version};
            }
            return false;
        }
    },
    
    'jQuery Mobile': {
        icon: 'jquery_mobile',
        url: 'http://jquerymobile.com/',
        test: function(win) {
            var jq = win.jQuery || win.$ || win.$jq || win.$j;
            if(jq && jq.fn && jq.fn.jquery && jq.mobile) {
                return { version: jq.mobile.version || '' };
            }
            return false;
        }
    },
    
    'WebFont Loader': {
    	icon: 'icon_48',
    	url: 'https://github.com/typekit/webfontloader',
    	test: function(win) {
    		if(win.WebFont) {
    			return { version: "N/A" };
    		}
    		return false;
    	}
    }
    
};