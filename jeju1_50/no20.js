//solution 내부에 답안 작성할 것
const solution = nums => {
  numList = nums.split(' ');
  console.log(numList[0] / numList[1], numList[0] % numList[1]);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
