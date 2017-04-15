# nanomount [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Mount a DOM tree on a target node.

## Usage
```js
var nanomount = require('nanomount')
var html = require('bel')

var tree = html`
  <body>
    <h1>hello planet</h1>
  </body>
`

nanomount(document.body, tree)
```

## API
### `nanomount(targetNode, newNode)`
Mount a DOM tree on target node.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanomount.svg?style=flat-square
[3]: https://npmjs.org/package/nanomount
[4]: https://img.shields.io/travis/yoshuawuyts/nanomount/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanomount
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanomount/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanomount
[8]: http://img.shields.io/npm/dm/nanomount.svg?style=flat-square
[9]: https://npmjs.org/package/nanomount
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
