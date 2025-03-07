/**
    description: Content script that runs after DOM loaded, to setup running the Library Detector.
**/

(function() {
    async function detect() {
        var tests = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;
        var libs = [];
        for (var i in tests) {
            try {
                var result = await tests[i].test(window);
                if (result === false) continue;
                libs.push({
                    name: i,
                    version: result.version
                });
            } catch(e) {
                console.log('Library Detector test for ' + i + ' failed:', e);
            }
        }
    
        // In case someone is depending on the meta element, keep adding it to the page.
        var meta = document.createElement('meta');
        meta.name = 'd41d8cd98f00b204e9800998ecf8427e_lib_detect';
        meta.id = 'd41d8cd98f00b204e9800998ecf8427e_lib_detect';
        meta.content = encodeLibraries(libs);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(meta);

        return libs;
    }
    
    function encodeLibraries(libs) {
        var encoded = [];
        for (var i = 0; i < libs.length; i++) {
            encoded.push(libs[i].name + ':' + (libs[i].version || ''));
        }
        return encoded.join(',');
    };

    window.d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests_detect = detect;
})();
