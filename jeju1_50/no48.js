//solution 내부에 답안 작성할 것
const solution = input => {
  let returnStr = [];
  for (let i of input) {
    if (i === i.toUpperCase()) {
      //대문자인 경우
      returnStr.push(i.toLowerCase());
    } else {
      //소문자인 경우
      returnStr.push(i.toUpperCase());
    }
  }
  console.log(returnStr.join(''));
};
const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

solution(Input());
