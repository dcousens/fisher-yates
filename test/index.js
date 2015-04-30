/* global describe, it */

var shuffle = require('../')

describe('shuffle', function () {
  // XXX: this is an approximation only, it will only catch rudimentary errors
  // proper statistical anaylsis is required if you truly want to verify this
  it('is approximately uniform', function () {
    this.timeout(20000)

    const SAMPLES = 1e7
    const SOURCE = [ 1, 2, 3 ]
    const N = SOURCE.length

    // initialize
    var counts = {}
    for (var i = 0; i < N; ++i) {
      SOURCE.forEach(function (v) {
        counts[v + '@' + i] = 0
      })
    }

    function collect (sample) {
      sample.forEach(function (v, i) {
        counts[v + '@' + i] += 1
      })
    }

    // run samples
    for (var j = 0; j < SAMPLES; ++j) {
      collect(shuffle(SOURCE))
    }

    // compare the results
    for (var k = 0; k < N; ++k) {
      SOURCE.forEach(function (a) {
        var countA = counts[a + '@' + k]

        SOURCE.forEach(function (b) {
          if (a === b) return
          var countB = counts[b + '@' + k]

          // ~1% difference max
          var r = countA / countB
          if (Math.abs(1 - r) < 0.01) return

          throw new Error('Probably not uniform (r: ' + r + ')')
        })
      })
    }
  })
})
