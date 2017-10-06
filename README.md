[![Build status — Travis-CI][travis-icon]][travis]
[![js-semistandard-style][semi-icon]][semi]
[![ISAD-widget on Npmjs][npm-icon]][npm]
[![License][license-icon]][mit]
[![Total downloads ~ NPMJS.com][downl-icon]][npm]
<!--[![Size of Javascript][size-icon]][build]-->
<!--[![vulnerabilities][snyk-icon]][snyk]-->

# isad-widget

Display a banner-link to promote [International Stuttering Awareness Day (ISAD)][isad]
— 22nd October each year. The banner appears for a configurable number of days before and after.

> October 22 was designated International Stuttering Awareness Day (ISAD) in 1998.[1]
> The day is intended to raise public awareness of the millions of people
> – one percent of the world's population[2][3] –
> who have the speech disorder of stuttering, also known as stammering. _([Wikipedia][wiki-isad])_

[![International Stuttering Awareness Day (ISAD)][widget-img]][isad]

[![International Stuttering Awareness Day (ISAD)][isad-2017-sm]][isad]

[![International Stuttering Awareness Day (ISAD)][isad-image]][isad]

_Note ~ this is not an official widget!_

## Install and test

```sh
npm i isad-widget
npm run build
npm test
```

## Usage

```html
<div id="isad-widget"></div>

<script src="dist/isad-widget.js"></script>
```

Via [unpkg][] — production CDN:

```html
<div id="isad-widget"></div>

<script src="https://unpkg.com/isad-widget@1.1.2#._.js"></script>
```

Link to the [BSA][bsa-isad], instead of [ISA][isad] (_the default_):

```html
<div id="isad-widget" data-isad-widget='{ "point_bsa": true }'></div>

<script src="dist/isad-widget.js"></script>
```

Configure the banner to appear for _28 days before ISAD_, instead of the default:

```html
<div id="isad-widget" data-isad-widget='{ "days_before": 28 }'></div>

<script src="dist/isad-widget.js"></script>
```

## Credits

* The themed posters (e.g. 2017 '_A world that understands stuttering_') are copyright the [ISA][],
* The [ISAD-ribbon][] is available under a Creative Commons `CC-BY-3.0` license,
* The [Teal-ribbon][] is available under a Creative Commons `CC-BY-SA-3.0` license.

_See the related [gaad-widget][]._

## License

License: [MIT][].

Twitter: [@nfreear][].


[ISAD]: http://isastutter.org/what-we-do/isad?utm_source=github&utm_campaign=isad-widget
[ISA]: http://www.isastutter.org/ "© 1998-2017 - International Stuttering Association"
[isad-conf]: http://isad.isastutter.org/isad/
[isad-2017-img]: http://isad.isastutter.org/wp-content/uploads/2017/06/ISAD2017.gif
[isad-2017-sm]: https://raw.githubusercontent.com/nfreear/isad-widget/master/style/ISAD2017-sm.gif
   "International Stuttering Awareness Day (ISAD) — 2017 campaign poster"
[bsa-isad]: http://www.stammering.org/isad "British Stammering Association (BSA)"
[bsa-isad-2]: http://www.stammering.org/isad.html
[bsa-r]: https://stammering.org/get-involved/help-us-raise-awareness/international-stammering-awareness-day-22nd-october
[bsa-i3]: https://stammering.org/get-involved/help-raise-awareness-and-campaign/using-isad-talk-about-stammering
[wiki-isad]: https://en.wikipedia.org/wiki/International_Stuttering_Awareness_Day
[isad-ribbon]: https://commons.wikimedia.org/wiki/File:Isad_ribbon.gif "License: CC-BY-3.0"
[isad-image]: https://upload.wikimedia.org/wikipedia/commons/b/b9/Isad_ribbon.gif
   "International Stuttering Awareness Day (ISAD) — ribbon"
[Teal-ribbon]: https://commons.wikimedia.org/wiki/File:Teal_ribbon.svg "License: CC-BY-SA-3.0"

[widget-img]: https://raw.githubusercontent.com/nfreear/isad-widget/master/style/isad-widget.jpg
    "International Stuttering Awareness Day (ISAD) — widget"
[@nfreear]: https://twitter.com/nfreear "Twitter: @nfreear"
[gh]: https://github.com/nfreear/isad-widget

[unpkg]: https://unpkg.com/ "unpkg is a fast content delivery network for everything on npm"
[MIT]: https://nfreear.mit-license.org/2017#!-isad-widget
    "MIT License (code) | © Nick Freear, 2017-07-21, 2017-09-01"
[travis]: https://travis-ci.org/nfreear/isad-widget
[travis-icon]: https://api.travis-ci.org/nfreear/isad-widget.svg
    "Build status – Travis-CI (NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://img.shields.io/badge/code_style-semistandard-brightgreen.svg?style=flat-square
    "Javascript coding style — 'semistandard'"
[npm]: https://npmjs.com/package/isad-widget
[npm-icon]: https://img.shields.io/npm/v/isad-widget.svg
[license-icon]: https://img.shields.io/npm/l/isad-widget.svg

[downl-icon]: https://img.shields.io/npm/dt/isad-widget.svg "Count of total downloads ~NPM"
[size-icon]: https://img.shields.io/github/size/nfreear/isad-widget/dist/isad-widget.js.svg
    "Size of built Javascript, kilo-bytes (kB) ~ on GitHub"
[built-icon]: https://img.shields.io/badge/built_with-browserify-blue.svg
    "Built with Browserify"
[build]: https://github.com/nfreear/isad-widget/tree/3.x/dist
[Browserify]: http://browserify.org/
    "Browserify lets you require('modules') in the browser by bundling your dependencies."
[snyk]: https://snyk.io/test/npm/isad-widget "Vulnerability count ~ via Snyk"
[snyk-icon]: https://snyk.io/test/npm/isad-widget/badge.svg

[gaad-widget]: https://github.com/nfreear/gaad-widget
    "banner-link for Global Accessibility Awareness Day (GAAD)"

[End]: //.
