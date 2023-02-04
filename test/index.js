const shuffle = require('../')

// WARNING: this is an approximation only, it will only catch rudimentary errors
//   proper statistical anaylsis is required if you actually want to verify this
const SAMPLES = 5e6
const SOURCE = [1, 2, 3, 4, 5]
const N = SOURCE.length

// initialize
const counts = {}
for (let i = 0; i < N; ++i) {
  for (const v of SOURCE) {
    counts[v + '@' + i] = 0
  }
}

function collect (sample) {
  let i = 0
  for (const x of sample) {
    counts[x + '@' + i]++
    ++i
  }
}

// run samples
for (let j = 0; j < SAMPLES; ++j) {
  collect(shuffle(SOURCE))
}

// compare the results
for (let k = 0; k < N; ++k) {
  for (const a of SOURCE) {
    const countA = counts[a + '@' + k]

    for (const b of SOURCE) {
      if (a === b) continue
      const countB = counts[b + '@' + k]

      // ~1% difference max
      const r = countA / countB
      if (Math.abs(1 - r) < 0.01) continue

      throw new Error('Probably not uniform (r: ' + r + ')')
    }
  }
}

console.log('Probably uniform')
