module.exports = function shuffleInplace (array, rng) {
  rng = rng || Math.random

  var k = array.length

  while (k) {
    var i = Math.floor(rng() * k)
    k--

    var temp = array[k]
    array[k] = array[i]
    array[i] = temp
  }

  return array
}
