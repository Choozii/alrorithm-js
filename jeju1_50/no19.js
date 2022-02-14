//solution 내부에 답안 작성할 것
const solution = nums => {
  numList = nums.split(' ');
  let a = parseInt(numList[0]);
  let b = parseInt(numList[1]);
  console.log(a ** b);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
