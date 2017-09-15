
// Methods | © 2017 Nick Freear.

var D = window.document;

module.exports = {

  extend: extend,

  addDays: function (dateOb, days) {
    return dateOb.getTime() + (days * 24 * 60 * 60 * 1000); // Milliseconds.
  },

  setWeekdayLocal: function (CFG) {
    var weekdays = CFG.texts[ CFG.lang ].weekdays;

    CFG.day = weekdays[ CFG.date.getDay() ];
    return CFG;
  },

  setHTML: function (CFG) {
    var elem = D.getElementById(CFG.id);

    elem.lang = CFG.lang;
    elem.dir = CFG.dir;
    elem.setAttribute('role', 'alert');
    elem.className = 'isad-widget-js' + (CFG.point_bsa ? ' bsa' : '');
    elem.innerHTML = CFG.message;
  },

  addStylesheet: function (CFG) {
    var styleEl = D.createElement('link');
    styleEl.rel = 'stylesheet';
    styleEl.type = 'text/css';
    styleEl.href = decideStyleUrl(CFG);

    D.head.appendChild(styleEl);
  }

};

// JuhQ (16 July 2015): https://gist.github.com/pbojinov/8f3765b672efec122f66#gistcomment-1493930
function extend () {
  var extended = {};
  var key;
  var prop;

  for (key in arguments) {
    var argument = arguments[ key ];
    for (prop in argument) {
      if (Object.prototype.hasOwnProperty.call(argument, prop)) {
        extended[ prop ] = argument[ prop ];
      }
    }
  }
  return extended;
}

function decideStyleUrl (CFG) {
  var scriptEl = D.querySelector(CFG.script_select);

  CFG.script_url = scriptEl.src;

  // Support for 'unpkg' CDN short URL.
  if (/@\d\.\d\.\d(-[\w.]+)(#|_.js|$)/.test(CFG.script_url)) {
    console.warn('ISAD: npm @version found');

    CFG.style_url = CFG.style_url.replace('/../..', '');
    CFG.script_url = CFG.script_url.replace(/(#.*|_\.js)/, '');
  }
  return CFG.script_url + CFG.style_url;
}
