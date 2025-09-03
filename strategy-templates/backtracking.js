// use when exploring all possibilities or combinations

const backtrack = (path, choices) => {
  if (/* goal reached */) {
    // save path
    return;
  }
  for (let choice of choices) {
    path.push(choice);
    backtrack(path, choices);
    path.pop();
  }
};