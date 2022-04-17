const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

//BFS로 푸는데 visited

const bfs = (start, end) => {
  let q = [];
  const visit = new Array(Object.keys(graph).length + 1);
  visit.fill(-1);
  q.push(start);
  visit[start] = 0;

  while (q.length > 0) {
    let curr = q.shift();

    if (graph[curr]) {
      graph[curr].map(el => {
        if (visit[el] === -1) {
          visit[el] = visit[curr] + 1;
          q = [...q, el];
        }
      });
    }
  }
  console.log(visit);
  console.log(visit[end]);
};

bfs(1, 7);
