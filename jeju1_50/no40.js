const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

const limit = parseInt(Input());
const peopleNum = parseInt(Input());
let sum = 0;
const getLimitPersonNumber = () => {
  for (let i = 0; i < peopleNum; i++) {
    let weight = parseInt(Input());
    if (sum + weight <= limit) sum += weight;
    else return i;
  }
};
console.log(getLimitPersonNumber());
