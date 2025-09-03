// use when you can make local optimal choice at every step and end up with global optimal solution

const greedy = (arr) => {
  let best = 0;
  for (let x of arr) {
    // choose best option at this step
    best = Math.max(best, x);
  }
  return best;
};
