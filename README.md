<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# pick

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return a partial object copy containing only specified keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-pick
```

</section>

<section class="usage">

## Usage

```javascript
var pick = require( '@stdlib/utils-pick' );
```

#### pick( obj, keys )

Returns a partial copy of an `object`. The returned `object` contains only specified `keys`.

```javascript
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = pick( obj1, 'b' );
// returns { 'b': 2 }

var obj3 = pick( obj1, [ 'b', 'c' ] );
// returns { 'b': 2, 'c': 3 }
```

If a key does not exist as an **own** property in a source `object`, the key is ignored.

```javascript
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = pick( obj1, 'd' );
// returns {}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns a **shallow** copy.
-   The function **only** copies **own** properties. Hence, the function never copies inherited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var pick = require( '@stdlib/utils-pick' );

var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
};

var obj2 = pick( obj1, [ 'b', 'c', 'e' ] );
// returns { 'b': 2, 'c': 3, 'e': 5 }
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-pick.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-pick

[test-image]: https://github.com/stdlib-js/utils-pick/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-pick/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-pick/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-pick?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-pick.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-pick/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-pick/main/LICENSE

</section>

<!-- /.links -->
