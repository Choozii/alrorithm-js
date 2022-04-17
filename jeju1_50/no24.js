//solution 내부에 답안 작성할 것
const solution = str => {
  console.log(str.toUpperCase());
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
