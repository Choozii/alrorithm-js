const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

const ans = a.map((el, idx) => {
  if (idx % 2 === 0) {
    return [el, b[idx]];
  } else {
    return [b[idx], el];
  }
});

console.log(ans);
