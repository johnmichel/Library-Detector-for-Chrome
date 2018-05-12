/**
    description: Injected into document by inject.js to create a meta element with
                 any recognized JS libraries.
**/
(function() {

    /**
     * Returns library, version pairs in format:
     * libraryName:version,libraryName:version...
     */
     function wait() {
        var encodeLibraries = function(libraries) {
            var encoded = [];
            for (var i = 0; i < libraries.length; i++) {
                encoded.push(libraries[i].name + ':' + libraries[i].version);
            }
            return encoded.join(',');
        };

        var detectedLibraries = function() {
            var tests = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;
            var libraries = [];
            for (var i in tests) {
                try {
                    var result = tests[i].test(window);
                    if (result === false) continue;
                    libraries.push({
                        name: i,
                        version: result.version
                    });
                } catch(e) {
                    console.log('Library Detector test for ' + i + ' failed:', e);
                }
            }
            return libraries;
        };

        var sortByName = function(libraries) {
            return libraries.sort(function(a, b) {
                var aName = a.name.toLowerCase(),
                    bName = b.name.toLowerCase();
                if (aName > bName) return 1;
                if (aName < bName) return -1;
                return 0;
            });
        };

        if (window === top) {
            var libs = sortByName(detectedLibraries());
            if (libs.length > 0) {
                document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect').content = encodeLibraries(libs);
            }
        }
    }

    window.setTimeout(function() {
        wait();
    }, 2000);

})();
