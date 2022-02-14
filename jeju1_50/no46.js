//solution 내부에 답안 작성할 것
const solution = input => {
  let sum = 0;
  for (let i = 10; i <= 15; i++) {
    let stringNum = i.toString();
    console.log(stringNum[0]);
    sum += parseInt(stringNum[0]);
    if (stringNum[1]) sum += parseInt(stringNum[1]);
  }
  console.log(sum);
};
const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

solution(Input());
