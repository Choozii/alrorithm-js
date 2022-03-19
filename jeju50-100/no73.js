const graph = { A: ['B', 'C'], B: ['A', 'D', 'E'], C: ['A', 'F'], D: ['B'], E: ['B', 'F'], F: ['C', 'E'] };

const start = 'A';
const goal = 'E';

const getMinDist = (graph, start, end) => {
  const visited = [];
  let q = [];
  let level = 0;

  q.push(start);
  while (q.length) {
    let qSize = q.length;
    for (let i = 0; i < qSize; i++) {
      const curr = q.shift();
      if (curr == end) {
        console.log(level);
        return;
      }
      if (visited.indexOf(curr) == -1) {
        visited.push(curr);
        graph[curr].map(el => {
          if (visited.indexOf(el) == -1 && q.indexOf(el) == -1) {
            q = [...q, el];
          }
        });
      }
    }
    level++;
  }
};
getMinDist(graph, start, goal);
