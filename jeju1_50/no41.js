//solution 내부에 답안 작성할 것
const solution = input => {
  const number = parseInt(input);
  const isPrime = number => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };
  console.log(isPrime(number) ? 'YES' : 'NO');
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

solution(Input());
