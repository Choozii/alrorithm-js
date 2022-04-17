//solution 내부에 답안 작성할 것
const solution = input => {
  let scores = input.split(' ').map(el => parseInt(el));

  scores.sort((a, b) => {
    return a - b;
  });

  let count = 0;
  let scoreSet = new Set();

  while (scoreSet.size < 3) {
    let n = scores.pop();
    scoreSet.add(n);
    count++;
  }
  console.log(count);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
