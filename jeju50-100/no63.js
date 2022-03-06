const sentence = '복잡한 세상 편하게 살자';
const arr = sentence.split(' ');
const output = [];
for (let i in arr) {
  output.push(arr[i][0]);
}
console.log(output.join(''));
