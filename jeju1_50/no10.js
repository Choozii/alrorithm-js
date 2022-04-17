//별찍기 하려니까 현타 오네요

//  # sol
// const n = 10;
// for (let i = 0; i < n; i++) {
//   let lineString = '';
//   for (let j = n - 1; j >= i; j--) {
//     lineString += ' ';
//   }
//   for (let j = 0; j < i; j++) {
//     lineString += '**';
//   }
//   lineString += '*';
//   console.log(lineString);
// }

const n = 5;
let tree = '';
for (let i = 1; i <= n; i++) {
  let star = '';
  for (let j = 1; j <= n - i; j++) {
    star += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += '*';
  }
  tree += star + '\n';
}
console.log(tree);
