// “Does this exist?” / “Have I seen it before?” / “Ensure uniqueness”
// detect duplicates
// unique substrings
// consectutive / sequence problems
// visited tracking
// fast lookups

const solveWithHashSet = (arr) => {
  const set = new Set();
  for (let x of arr) {
    if (set.has(x)) {
      // duplicate / membership found
    }
    set.add(x);
  }
  // result based on set
};
