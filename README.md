# fisher-yates
<a aria-label="npm version" href="https://www.npmjs.com/package/fisher-yates">
    <img alt="" src="https://img.shields.io/npm/v/fisher-yates.svg?style=for-the-badge&labelColor=0869B8">
</a>

A compact module to randomly sort an Array.


## Usage

``` javascript
const shuffle = require('fisher-yates')

console.log(shuffle([1, 2, 3]))
// => [3, 1, 2]

// supports custom rng returning [0, 1)
console.log(shuffle([1, 2, 3], Math.random))
// => [2, 3, 1]
```

For shuffling your array in-place, use `fisher-yates/inplace`
``` javascript
const shuffleInplace = require('fisher-yates/inplace')
const array = [1, 2, 3]

shuffleInplace(array)
console.log(array)
// => [2, 1, 3]
```

## LICENSE [MIT](LICENSE)
