//solution 내부에 답안 작성할 것
const solution = input => {
  let ans = [];
  for (let i = 1; i < 10; i++) {
    ans.push(input * i);
  }
  console.log(ans.join(' '));
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
