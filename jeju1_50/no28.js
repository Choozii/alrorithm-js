//solution 내부에 답안 작성할 것
const solution = str => {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
  }
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input(), Input());
