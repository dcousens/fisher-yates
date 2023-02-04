module.exports = function shuffleInplace (array, rng) {
  rng = rng || Math.random

  let k = array.length

  while (k) {
    const i = Math.floor(rng() * k)
    k--

    const tmp = array[k]
    array[k] = array[i]
    array[i] = tmp
  }

  return array
}
