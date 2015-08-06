# fisher-yates

[![TRAVIS](https://secure.travis-ci.org/dcousens/fisher-yates.png)](http://travis-ci.org/dcousens/fisher-yates)
[![NPM](http://img.shields.io/npm/v/fisher-yates.svg)](https://www.npmjs.org/package/fisher-yates)

A compact module to randomly sort an Array.


## Example

``` javascript
var shuffle = require('fisher-yates')

console.log(shuffle([1, 2, 3]))
// => [3, 1, 2]

// supports custom rng returning [0, 1)
console.log(shuffle([1, 2, 3], Math.random))
// => [2, 3, 1]
```

To shuffle in-place:

``` javascript
var shuffleInplace = require('fisher-yates/mutable')
var array = [1, 2, 3]

shuffleInplace(array)
console.log(array)
// => [2, 1, 3]
```

## LICENSE [MIT](LICENSE)
