# fisher-yates

[![TRAVIS](https://secure.travis-ci.org/dcousens/fisher-yates.png)](http://travis-ci.org/dcousens/fisher-yates)
[![NPM](http://img.shields.io/npm/v/fisher-yates.svg)](https://www.npmjs.org/package/fisher-yates)


## Example

``` javascript
var shuffle = require('fisher-yates')

console.log(shuffle([1, 2, 3]))
// => [3, 1, 2]

// supports custom rng returning [0, 1)
console.log(shuffle([1, 2, 3], Math.random))
// => [2, 3, 1]
```


## License

This library is free and open-source software released under the MIT license.
