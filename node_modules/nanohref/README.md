# nanohref [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Tiny href click handler library.

## Usage
```js
var nanohref = require('nanohref')

nanohref(function (location) {
  console.log('new location is', location)
})

// Create DOM node
var el = document.createElement('a')
el.setAttribute('href', '/my-link')
el.innerText = 'Click me'
document.body.appendChild(el)
```

## API
### `nanohref(handler(location), [rootNode])`
Create a new anchor click handler. The second argument is for the root node,
which defaults to `window.document`. If the `data-no-routing` attribute is set,
Nanohref will not handle the link. This is useful to link to resources outside
the application.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanohref.svg?style=flat-square
[3]: https://npmjs.org/package/nanohref
[4]: https://img.shields.io/travis/yoshuawuyts/nanohref/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanohref
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanohref/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanohref
[8]: http://img.shields.io/npm/dm/nanohref.svg?style=flat-square
[9]: https://npmjs.org/package/nanohref
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
