# nanohistory [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Small browser history library. Although you might as well just use the native
DOM API (read the source and decide for yourself).

## Usage
```js
var nanohistory = require('nanohistory')
nanohistory(function (location) {
  console.log('new location is', location)
})

// Trigger the history API a couple of times
window.history.pushState({}, null, '/foo')
window.history.pushState({}, null, '/bar')
```

## API
### `nanohistory(callback(location))`
Register a new history API listener. This will fire whenever the history API is
triggered.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanohistory.svg?style=flat-square
[3]: https://npmjs.org/package/nanohistory
[4]: https://img.shields.io/travis/yoshuawuyts/nanohistory/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanohistory
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanohistory/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanohistory
[8]: http://img.shields.io/npm/dm/nanohistory.svg?style=flat-square
[9]: https://npmjs.org/package/nanohistory
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
