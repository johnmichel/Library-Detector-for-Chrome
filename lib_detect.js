/**
    file: lib_detect.js

    description: Injected into document by inject.js to create a meta element with 
                 any recognized JS libraries.
 
    license: Library Detector is freely distributable under the MIT License 
             http://www.opensource.org/licenses/mit-license.php
 
    copyright: Copyright (c) 2010 Andrew Bredow <bredow@gmail.com>. All rights reserved.
 
    author: Andrew Bredow http://andrewbredow.com
 
    inspiration: Library detect class inspired by Paul Bakaus' Library Detector for
                 Firefox  http://paulbakaus.com/
**/

(function() {
    var libraryDetectorDetectLibrary = function() {
        for (var i in LibraryDetectorTests) {
            var result = LibraryDetectorTests[i].test(window);
            if (result !== false) {
                result.icon = LibraryDetectorTests[i].icon;
                result.name = i;
                return result;
            }
        }
        return false;
    };
    
    var LibraryDetectorTests = {
	
    	'jQuery': {
    		icon: 'jquery',
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
    		icon: 'dojo',
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
    		test: function(win) {
    			if(win.Processing) {
    				return { version: '( version not detectable)' };
    			} else {
    				return false;
    			}
    		}
    	}
    	
    };

    if (window === top) {
        var lib = libraryDetectorDetectLibrary();
        if (lib) {
            var data = [lib.name, lib.version, lib.icon];
            document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect').content = data.join('&');
        }
    }
})();
