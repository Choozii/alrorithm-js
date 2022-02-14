//solution 내부에 답안 작성할 것
const solution = val => {
  val >= 150 ? console.log('YES') : console.log('NO');
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
