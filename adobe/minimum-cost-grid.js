const minCost = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  // 1 points to the right
  // 2 points to the left
  // 3 points down
  // 4 points up

  const directions = [
    // as in how to move to the next cell
    [0, 1], // right
    [0, -1], // legt
    [1, 0], // down
    [-1, 0], //up
  ];

  const minimumCostAtCell = Array.from({ length: m }, () =>
    Array(n).fill(Infinity)
  );
  minimumCostAtCell[0][0] = 0;

  // pprioritize positions that have zero cost, put at front
  const queue = [[0, 0]];

  while (queue.length) {
    const [row, column] = queue.shift();

    // go in each direction
    for (let k = 0; k < 4; k++) {
      const rowBeingVisited = row + directions[k][0];
      const columnBeingVisited = column + directions[k][1];

      // boundaries
      if (
        rowBeingVisited < 0 ||
        rowBeingVisited >= m ||
        columnBeingVisited < 0 ||
        columnBeingVisited >= n
      )
        continue;

      const originalGridDirection = grid[row][column] - 1; // -1 for 0 index
      const moveCost = k === originalGridDirection ? 0 : 1;

      const costAtCurrentCell = minimumCostAtCell[row][column];
      const potentialCostToReachCellBeingVisited = costAtCurrentCell + moveCost;

      const currentCostAtCellBeingVisited =
        minimumCostAtCell[rowBeingVisited][columnBeingVisited];

      if (
        potentialCostToReachCellBeingVisited < currentCostAtCellBeingVisited
      ) {
        minimumCostAtCell[rowBeingVisited][columnBeingVisited] =
          potentialCostToReachCellBeingVisited;
        if (moveCost === 0) {
          queue.unshift([rowBeingVisited, columnBeingVisited]);
        } else {
          queue.push([rowBeingVisited, columnBeingVisited]);
        }
      }
    }
  }

  return minimumCostAtCell[m - 1][n - 1];
};

const grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];
console.log(minCost(grid));
