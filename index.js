function shuffle(array, rng = Math.random) {
  const result = array.slice(); // Create a copy of the array to avoid modifying the original

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1)); // Generate random index from 0 to i inclusive
    [result[i], result[j]] = [result[j], result[i]]; // Swap elements efficiently
  }

  return result;
}

module.exports = shuffle;
