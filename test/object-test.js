const fs = require('fs');
const assert = require('assert');

const libDetectorSource = fs.readFileSync(__dirname + '/../library/libraries.js', 'utf8');

console.log('💻 Evaluating libraries.js...');
eval(libDetectorSource);

const libraryDetectorEntries = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;
assert.ok(libraryDetectorEntries);

console.log('🔍 Asserting entries look correct...');
const libIds = new Set();

for (const [libName, entry] of Object.entries(libraryDetectorEntries)) {
    assert.ok(libName, `Entry doesn't have a name. Impossible.`);

    /**
     * Validate no duplicate `id`s
     */
    if (libIds.has(entry.id)) {
        assert.fail(`[${libName}] \`id\` is a duplicate`);
    } else {
        libIds.add(entry.id);
    }

    /**
     * Validate each library has its required components
     */
    // id
    assert.equal(typeof entry.id, 'string', `[${libName}] \`id\` isn't a string`);
    assert.ok(entry.id.length, `[${libName}] \`id\` string isn't defined.`);

    // icon
    assert.equal(typeof entry.icon, 'string', `[${libName}] \`icon\` isn't a string`);
    assert.ok(entry.icon.length, `[${libName}] \`icon\` string isn't defined`);
    const iconFileExists = fs.existsSync(`${__dirname}/../icons/${entry.icon}.png`);
    assert.ok(iconFileExists, `[${libName}] \`icon\` file not found in ./icons`);

    const stat = fs.statSync(`${__dirname}/../icons/${entry.icon}.png`);
    assert.ok(stat.size, `[${libName}] \`icon\` file is empty`);

    // url
    assert.equal(typeof entry.url, 'string', `[${libName}] \`url\` isn't a string`);
    assert.ok(entry.url.startsWith('http'), `[${libName}] \`url\` doesn't look like a URL`);
    assert.ok(new URL(entry.url), `[${libName}] \`url\` is an invalid URL`);

    // npm
    // TODO: determine if `npm` is required or not
    if ('npm' in entry) {
        assert.ok(entry.npm === null || entry.npm.length, `[${libName}] \`npm\` should be either null or a string.`)
    }

    // test
    assert.equal(typeof entry.test, 'function', `[${libName}] \`test\` method is not a function`);
}

console.log('\n✅ Tests pass!\n');
