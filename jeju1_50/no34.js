//solution 내부에 답안 작성할 것
const solution = input => {
  //NOTE:답안 참고
  //   const unsorted = input;
  //   let sorted = unsorted.split(' ').sort().join();
  //   console.log(unsorted === sorted ? 'Yes' : 'No');
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
//solution(Input());
