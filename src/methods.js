
// Methods | © 2017 Nick Freear.

var D = window.document;

module.exports = {

  addDays: function (dateOb, days) {
    return dateOb.getTime() + (days * 24 * 60 * 60 * 1000); // Milliseconds.
  },

  setHTML: function (CFG) {
    var elem = D.getElementById(CFG.id);

    elem.lang = CFG.lang;
    elem.dir = CFG.dir;
    elem.setAttribute('role', 'alert');
    elem.className = 'isad-widget-js';
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

function decideStyleUrl (CFG) {
  var scriptEl = D.querySelector('script[ src *= "' + CFG.script + '" ]');

  CFG.script_url = scriptEl.src;

  // Support for 'unpkg' CDN short URL.
  if (/@\d\.\d\.\d(-[\w.]+)(#|_.js|$)/.test(CFG.script_url)) {
    CFG.log('ISAD: npm @version found');
    CFG.style_url = CFG.style_url.replace('/../..', '');
    CFG.script_url = CFG.script_url.replace(/(#.*|_\.js)/, '');
  }
  return CFG.script_url + CFG.style_url;
}
