const solution = n => {
  if (n % 3 === 0) console.log('짝');
  else console.log(n);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input());
