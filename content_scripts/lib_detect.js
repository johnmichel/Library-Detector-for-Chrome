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


          if(window.Prototype) {
              var _Object_toJSON = Object.prototype.toJSON;
              var _Array_toJSON = Array.prototype.toJSON;
              var _String_toJSON = String.prototype.toJSON;
              // Hash is a object only defined by prottype
              // var _Hash_toJSON = Hash.prototype.toJSON;

              delete Object.prototype.toJSON;
              delete Array.prototype.toJSON;
              delete String.prototype.toJSON;
              // delete Hash.prototype.toJSON;

              var res = JSON.stringify(libraries);

              Object.prototype.toJSON = _Object_toJSON;
              Array.prototype.toJSON = _Array_toJSON;
              String.prototype.toJSON = _String_toJSON;
              // Hash.prototype.toJSON = _Hash_toJSON;

              return res;
          }
          return JSON.stringify(libraries);
        };

        var detectLibraries = function() {
            var tests = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;
            var libraries = [];
            for (var i in tests) {
                var result = tests[i].test(window);
                if (result === false) continue;
                libraries.push({
        			name: i,
        			version: result.version
        		});
            }
            return libraries;
        };

        if (window === top) {
            var libs = detectLibraries();
            if (libs.length > 0) {
                document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect').content = encodeLibraries(libs);
            }
        }
    }

    window.setTimeout(function() {
        wait();
    },2000);

})();
