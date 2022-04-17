const TC = 1;
const cityScale = 5;
const searchSacle = 3;
const map = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
const bombCounts = [];
const visited = Array.from(Array(5), () => new Array(5).fill(false));

const availableIndex = (r, c) => {
  if (r + searchSacle <= map.length && c + searchSacle <= map.length) return true;
  else return false;
};

const search = (r, c) => {
  visited[r][c] = true;
  let bombCount = 0;
  for (let i = r; i < r + searchSacle; i++) {
    for (let j = c; j < c + searchSacle; j++) {
      if (map[i][j]) bombCount++;
    }
  }
  bombCounts.push(bombCount);
};

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    if (!visited[i][j] && availableIndex(i, j)) {
      search(i, j);
    }
  }
}
console.log(Math.max(...bombCounts));
