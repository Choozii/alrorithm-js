const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const solution = idx => {
  console.log(planets[idx]);
};

let input = Input();
solution(input);
