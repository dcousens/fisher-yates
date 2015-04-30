module.exports = function shuffle (array, rng) {
  rng = rng || Math.random

  var result = []

  for (var i = 0; i < array.length; ++i) {
    var j = Math.floor(rng() * (i + 1))

    if (j !== i) {
      result[i] = result[j]
    }

    result[j] = array[i]
  }

  return result
}
