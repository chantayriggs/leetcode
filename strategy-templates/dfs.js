// recursive
// use for graphs / trees / grids when exploring all possible paths

const dfs = (node, visited = new Set()) => {
  if (!node || visited.has(node)) return;
  visited.add(node);
  for (let nei of node.neighbors) dfs(nei, visited);
};
