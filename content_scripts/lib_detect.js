/**
    description: Injected into document by inject.js to create a meta element with
                 any recognized JS libraries.
**/
(function() {

    /**
     * Returns library, version pairs in format:
     * libraryName:version,libraryName:version...
     */
     async function wait() {
        var encodeLibraries = function(libraries) {
            var encoded = [];
            for (var i = 0; i < libraries.length; i++) {
                encoded.push(libraries[i].name + ':' + (libraries[i].version || ''));
            }
            return encoded.join(',');
        };

        var detectLibraries = async function () {
            var tests = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;
            var libraries = [];
            for (var i in tests) {
                try {
                    var result = await tests[i].test(window);
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

        if (window === top) {
            var libs = await detectLibraries();
            if (libs.length > 0) {
                document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect').content = encodeLibraries(libs);
            }
        }
    }

    window.setTimeout(async function() {
        await wait();
    }, 2000);

})();
