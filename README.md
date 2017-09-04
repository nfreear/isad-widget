[![Build status — Travis-CI][travis-icon]][travis]
[![js-semistandard-style][semi-icon]][semi]
[![ISAD-widget on Npmjs][npm-icon]][npm]
[![License][license-icon]][mit]

# isad-widget

Display a banner-link to promote [International Stuttering Awareness Day (ISAD)][isad]
— 22nd October each year.

> October 22 was designated International Stuttering Awareness Day (ISAD) in 1998.[1]
> The day is intended to raise public awareness of the millions of people
> – one percent of the world's population[2][3] –
> who have the speech disorder of stuttering, also known as stammering. _([Wikipedia][wiki-isad])_

[![International Stuttering Awareness Day (ISAD)][isad-2017-img]][isad]

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

<script src="https://unpkg.com/isad-widget@1.0.1-beta#._.js"></script>
```

## Credits

* The themed posters (e.g. 2017 '_A world that understands stuttering_') are copyright the [ISA][],
* The [ISAD-ribbon][] is available under a Creative Commons `CC-BY-3.0` license,
* The [Teal-ribbon][] is available under a Creative Commons `CC-BY-SA-3.0` license.

## License

License: [MIT][].

Twitter: [@nfreear][].


[ISAD]: http://www.isastutter.org/what-we-do/isad
[ISA]: http://www.isastutter.org/ "© 1998-2017 - International Stuttering Association"
[isad-conf]: http://isad.isastutter.org/isad/
[isad-2017-img]: http://isad.isastutter.org/wp-content/uploads/2017/06/ISAD2017.gif
   "International Stuttering Awareness Day (ISAD) — 2017 campaign poster"
[bsa-isad]: http://www.stammering.org/isad
[bsa-isad-2]: http://www.stammering.org/isad.html
[bsa-r]: https://stammering.org/get-involved/help-us-raise-awareness/international-stammering-awareness-day-22nd-october
[bsa-i3]: https://stammering.org/get-involved/help-raise-awareness-and-campaign/using-isad-talk-about-stammering
[wiki-isad]: https://en.wikipedia.org/wiki/International_Stuttering_Awareness_Day
[isad-ribbon]: https://commons.wikimedia.org/wiki/File:Isad_ribbon.gif "License: CC-BY-3.0"
[isad-image]: https://upload.wikimedia.org/wikipedia/commons/b/b9/Isad_ribbon.gif
   "International Stuttering Awareness Day (ISAD) — ribbon"
[Teal-ribbon]: https://commons.wikimedia.org/wiki/File:Teal_ribbon.svg "License: CC-BY-SA-3.0"

[@nfreear]: https://twitter.com/nfreear "Twitter: @nfreear"
[gh]: https://github.com/nfreear/isad-widget
[gh-gaad]: https://github.com/nfreear/gaad-widget

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

[End]: //.
