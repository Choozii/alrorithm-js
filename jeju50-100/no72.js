const graph = { E: ['D', 'A'], F: ['D'], A: ['E', 'C', 'B'], B: ['A'], C: ['A'], D: ['E', 'F'] };

const bfs = (graph, startNode) => {
  const visited = [];
  let q = [];

  q.push(startNode);
  while (q.length !== 0) {
    const curr = q.shift();
    // console.log(curr);
    if (!visited.includes(curr)) {
      visited.push(curr);
      q = [...q, ...graph[curr]];
    }
  }
  return visited.join(' ');
};
console.log(bfs(graph, 'E'));
