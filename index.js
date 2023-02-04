module.exports = function shuffle (array, rng) {
  rng = rng || Math.random

  const result = []

  for (let i = 0; i < array.length; ++i) {
    const j = Math.floor(rng() * (i + 1))

    if (j !== i) {
      result[i] = result[j]
    }

    result[j] = array[i]
  }

  return result
}
