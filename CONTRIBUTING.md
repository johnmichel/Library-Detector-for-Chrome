# Contributing

* In order to have a library added to the extension, please ensure that the `test` portion of the block of code for the library includes more than just `window.LIBRARY_HERE` as part of the `if` statement for the existence of a library.  In the example below, note that in addition to `win.d3`, `win.d3.select` (one of the API methods) is also being tested for:
```JavaScript
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
```