// queue
// use for the shortest paths, or level-order traversal

const bfs = (start) => {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length) {
    const node = queue.shift();
    for (let nei of node.neighbors) {
      if (!visited.has(nei)) {
        visited.add(nei);
        queue.push(nei);
      }
    }
  }
};
