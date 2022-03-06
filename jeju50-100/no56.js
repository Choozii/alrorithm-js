const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};
let minIdx = Infinity;
let minValue = Infinity;

for (let i in nationWidth) {
  if (i === 'korea') continue;
  if (Math.abs(nationWidth[i] - nationWidth['korea']) <= minValue) {
    minValue = Math.abs(nationWidth[i] - nationWidth['korea']);
    minIdx = i;
  }
}
console.log(minIdx, minValue);
