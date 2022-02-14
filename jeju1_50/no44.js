//solution 내부에 답안 작성할 것
const solution = input => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i] * 1;
  }
  console.log(sum);
};
const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

solution(Input());
