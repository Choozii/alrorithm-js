//solution 내부에 답안 작성할 것
const solution = input => {
  const inputs = input.split(' ');
  const voteResult = {};

  const findMaxValue = () => {
    return Object.keys(voteResult).reduce((a, b) => (voteResult[a] > voteResult[b] ? a : b));
  };

  for (let i in inputs) {
    let val = inputs[i];
    voteResult[val] ? (voteResult[val] = ++voteResult[val]) : (voteResult[val] = 1);
  }
  const winner = findMaxValue();
  console.log(`${winner}(이)가 총 ${voteResult[winner]}표로 반장이 되었습니다.`);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
