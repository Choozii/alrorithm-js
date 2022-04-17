//solution 내부에 답안 작성할 것
const solution = scores => {
  const scoreList = scores.split(' ');
  let sum = 0;
  for (let i of scoreList) {
    sum += parseInt(i);
  }
  console.log(parseInt(sum / 3));
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
