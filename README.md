# fisher-yates
[![NPM](http://img.shields.io/npm/v/fisher-yates.svg)](https://www.npmjs.org/package/fisher-yates)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A compact module to randomly sort an Array.


## Example

``` javascript
const shuffle = require('fisher-yates')

console.log(shuffle([1, 2, 3]))
// => [3, 1, 2]

// supports custom rng returning [0, 1)
console.log(shuffle([1, 2, 3], Math.random))
// => [2, 3, 1]
```

To shuffle in-place:

``` javascript
const shuffleInplace = require('fisher-yates/inplace')
const array = [1, 2, 3]

shuffleInplace(array)
console.log(array)
// => [2, 1, 3]
```

## LICENSE [MIT](LICENSE)
