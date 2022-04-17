//solution 내부에 답안 작성할 것
const solution = input => {
  //Approach :
  //2020년 1월 1일이 수요일이다. 2020년 a월 b일은 1월 1일로부터 며칠 뒤인지 계산한 뒤
  //요일[(총일수 % 7)]
  const DAY_NAME = ['수요일', '목요일', '금요일', '토요일', '일요일', '월요일'];
  const DAY_PER_MONTH = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let date = input.split(' ');
  let a = date[0] * 1;
  let b = date[1] * 1;
  //1. a월일 때 a-1월까지의 총일수는 더해진다.
  let allDays = 0;
  for (let i = a - 1; i >= 1; i--) {
    allDays += DAY_PER_MONTH[i];
  }

  //2. a월의 일수도 더해준다.
  allDays += b - 1; //1일로부터 며칠 뒤인지 세어야 하니까 1을 빼준다.
  console.log(DAY_NAME[allDays % 7]);
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

solution(Input());
