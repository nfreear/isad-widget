/*!
  isad-widget.js | ©2017 Nick Freear | License: MIT | NOT an official widget!

  https://github.com/nfreear/isad-widget
*/

var YEAR = new Date().getFullYear();

// International stuttering awareness day (ISAD) occurs each year on 22nd October.
var ISAD_DATE = new Date(YEAR, (10 - 1), 22, 0, 0, 0, 0);
// TEST: var ISAD_DATE = new Date(YEAR, (9 - 1), 22, 0, 0, 0, 0);

var methods = require('./src/methods');

require('./src/widget-src')(ISAD_DATE, methods);

// End.
