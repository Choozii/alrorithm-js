const graph = { E: ['D', 'A'], F: ['D'], A: ['E', 'C', 'B'], B: ['A'], C: ['A'], D: ['E', 'F'] };

const visited = new Array(6);
visited.fill(false);
const order = [];

const dfs = v => {
  if (visited[v] === true) return;

  visited[v] = true;
  order.push(v);
  graph[v].map(el => visited[el] || dfs(el));
};

dfs('E');
console.log(order.join(' '));
