
// ISAD widget main function | © 2017 Nick Freear.

var L = window.location;

module.exports = function (ISAD_DATE, methods) {
  'use strict';

  var TODAY = new Date();
  var defaults = {
    id: 'isad-widget',
    script: '/isad-widget',
    lang: 'en',
    dir: 'ltr',
    date: ISAD_DATE,
    texts: {
      en: {
        p1: '<i class="i-p1">The 22nd October is <a href="http://isastutter.org/what-we-do/isad">International Stuttering Awareness Day (ISAD)</a>.</i>',
        theme: '<em class="i-theme">2017 theme: <q>a world that understands stuttering.</q></em>'
      }
    },
    url: 'http://isastutter.org/what-we-do/isad',
    style_url: '/../../style/isad-widget.css',
    days_before: 22,
    days_after: 7,
    force: /[?&]isad.?widget=f(orce)?/i.test(L.search)
  };

  // TODO: get configuration ...
  var isad = defaults;

  isad.show_date = methods.addDays(ISAD_DATE, -isad.days_before);
  isad.hide_date = methods.addDays(ISAD_DATE, isad.days_after);

  isad.diff_show = TODAY - isad.show_date;
  isad.diff_hide = TODAY - isad.hide_date;

  isad.should_show = (isad.diff_show >= 0 && isad.diff_hide < 0);

  if (!isad.should_show && !isad.force) {
    return console.warn('ISAD: no-show', isad);
  }

  var lang = isad.texts[ isad.lang ] ? isad.lang : 'en';
  var texts = isad.texts[ lang ];

  isad.message = texts.p1 + texts.theme;

  methods.addStylesheet(isad);
  methods.setHTML(isad);

  console.warn('isad-widget:', isad);
};
