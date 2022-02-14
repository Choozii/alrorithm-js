//solution 내부에 답안 작성할 것
const solution = str => {
  let backwardStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwardStr.push(str[i]);
  }
  console.log(backwardStr.join(''));
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
