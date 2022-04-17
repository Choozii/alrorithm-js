const canMultiply = (a, b) => (a[0].length === b.length ? true : false);
const calcMatrix = (a, b) => {
  const len = a[0].length;
  let c = [];
  for (let i = 0; i < len; i++) {
    let row = [];
    for (let j = 0; j < len; j++) {
      let x = 0;
      for (let k = 0; k < len; k++) {
        x += a[i][k] * b[k][j];
        //console.log(a[i][k], b[k][j]);
      }
      row.push(x);
    }
    c.push(row);
  }
  return c;
};

const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0],
  [0, 3],
];

console.log(canMultiply(a, b) ? calcMatrix(a, b) : -1);
