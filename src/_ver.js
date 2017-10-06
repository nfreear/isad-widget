#!/usr/bin/env node

/**
 * CLI. Implant `package.version` in README.md etc.
 *
 * @copyright © Nick Freear, 06-Oct-2017.
 * @license   MIT
 * @see       https://github.com/nfreear/isad-widget
 */

const replace = require('replace');
// const INDEX_JS = path('/../index.js');
const README = path('/../README.md');
const TEST_HTML = path('/../test/index.html');
const PKG = require('../package.json');
const VERSION_TAG = PKG.version;

console.warn('VERSION_TAG :', VERSION_TAG);

replace({
  paths: [ README, TEST_HTML ],
  regex: /\/isad-widget(\/|@)(\d\.\d\.\d(-[.\w]+)?)/g,
  replacement: version('/isad-widget$1%s'),
  count: true,
  recursive: false
});

function path (file) {
  return require('path').join(__dirname, file);
}

function version (str) {
  return str.replace('%s', VERSION_TAG);
}
