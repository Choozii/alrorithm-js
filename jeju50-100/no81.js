const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const flagMap = [
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
const copiedMap = flagMap;

const setBomb = (row, col) => {
  copiedMap[row][col] = 'f';
  for (let i = 0; i < 4; i++) {
    const nr = row + dx[i];
    const nc = col + dy[i];
    if (0 <= nr && nr < flagMap[0].length && 0 <= nc && nc < flagMap[0].length) {
      copiedMap[nr][nc] = '*';
    }
  }
};

flagMap.forEach((curr, idx, arr) => {
  const rowIdx = idx;
  curr.forEach((curr, idx) => {
    const colIdx = idx;
    if (curr == 1) {
      setBomb(rowIdx, colIdx);
    }
  });
});

copiedMap.forEach(curr => console.log(curr.join(' ')));
