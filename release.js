const fs = require('fs');
const path = require('path');
const newline = require('os').EOL;

const libDetectorSource = fs.readFileSync(path.resolve(__dirname + '/library/libraries.js'), 'utf8');
const package = require('./package.json');

const version = package.version.trim().split('.').map(n=>(n * 1))
// chrome name, id, url
const chrome = package.chrome;

console.log(`
🛒 regenerating from package.json + libraries.js
→ npm package ${ package.name }
→ version ${ version.join('.') } (⚠️  bump version number?)
→ Chrome extension "${ chrome.name }" ${ chrome.id }
→ at ${ chrome.url }
→ and ${ package.repository.url }

🚰
`);
eval(libDetectorSource);

const libraryDetectorEntries = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;

const libraries = Object.entries(libraryDetectorEntries)
.sort((lib1, lib2)=>{
	let a = lib1[0].toLowerCase(), b = lib2[0].toLowerCase();
	return a < b ? -1 : (a > b ? 1 : 0);
})
.map((it, i)=>{
	const [name, lib] = it;
	// like this: - [AMP](https://ampproject.org/)
	return `- [${name}](${lib.url})`;
})
;

const contributors = package.contributors.map((person, i)=>{
	return `- [${person.name}](${person.url || ''})${ person.comment ? (' '+person.comment):'' }`;
})

const README = `[Library Detector For Chrome](https://chrome.google.com/webstore/detail/library-detector/${ chrome.id }?hl=en)
===========================

[![](https://img.shields.io/chrome-web-store/v/${ chrome.id }.svg?style=flat-square)
![](https://img.shields.io/chrome-web-store/d/${ chrome.id }.svg?style=flat-square)
![](https://img.shields.io/chrome-web-store/stars/${ chrome.id }.svg?style=flat-square)
![](https://img.shields.io/chrome-web-store/rating-count/${ chrome.id }.svg?style=flat-square)](https://chrome.google.com/webstore/detail/library-detector/${ chrome.id }?hl=en)

[![](https://img.shields.io/npm/v/${ package.name }.svg?style=flat-square)](https://npm.im/${ package.name })

The Library Detector extension discovers which JavaScript libraries are being
utilized on webpages that you visit and displays their icons on the Chrome Menu. Currently
supports:

${ libraries.join(newline) }


### To run the development version of the plugin
1. Clone the Git repo from Github \`git clone git@github.com:johnmichel/Library-Detector-for-Chrome.git LibraryDetector\`
2. Navigate to \`chrome://extensions\` in Chrome
3. Expand the "Developer Mode" section
4. Click "Load unpacked extension..." and select the \`LibraryDetector\` folder

### Contributors
${ contributors.join(newline) }

### Inspiration
Library detection class inspired by [Paul Bakaus'](https://paulbakaus.com/) [Library Detector for Firefox](https://addons.mozilla.org/en-us/firefox/addon/library-detector/)
`;

fs.writeFileSync(path.resolve('./README.md'), README);

console.log(`
📄 README.md updated
→ consider also updating gh-pages package.json and library/libraries.js
→ for loading into https://johnmichel.github.io/Library-Detector-for-Chrome/

🍻 Cheers to all ${ contributors.length } contributors!
`);
