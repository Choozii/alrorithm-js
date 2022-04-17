//solution 내부에 답안 작성할 것
const solution = (input1, input2) => {
  nameList = input1.split(' ');
  scoreList = input2.split(' ');
  let ans = {};
  for (let i = 0; i < nameList.length; i++) {
    ans[nameList[i]] = scoreList[i] * 1;
  }
  console.log(ans);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input(), Input());
