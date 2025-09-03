// How many / where / what index?
// Counting frequencies
// Index lookup
// Cumulative states
// Tracking dependencies (graphs)
// Memoization (DP)
// Grouping / Bucketing

const solveWithHashMap = (arr) => {
  const map = new Map();
  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
    // update value for key x
  }
  // iterate map if needed
  for (let [key, value] of map) {
    // do something with key/value
  }
};
