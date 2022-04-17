//solution 내부에 답안 작성할 것
const solution = input => {
  let nums = input.split(' ').map(el => parseInt(el, 10));
  let max = -1;
  for (let i of nums) {
    if (max <= i) max = i;
  }
  console.log(max);
};
const fs = require('fs');
const { format } = require('path');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

solution(Input());
