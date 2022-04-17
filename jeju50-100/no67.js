//문제로부터 알 수 있는 조건 두가지
// (n-1)C(2) : 민규빼고 서로 다 악수한 경우의 수
// a : 민규의 악수 횟수
// 1. (n-1)C(2) + a = 59
// 2. a < n-1

// a를 1부터 돌아가면서 연산함
const INPUT = 59;
let flag = false;
const answer = [0, 0];
for (let a = 1; ; a++) {
  let tempVal = (INPUT - a) * 2;
  let similarN = Math.floor(Math.sqrt(tempVal)); //근사치 계산
  for (let n = similarN; ; n++) {
    if ((n - 1) * (n - 2) > tempVal) break;
    else if ((n - 1) * (n - 2) == tempVal) {
      answer[1] = n;
      flag = true;
      break;
    }
  }
  if (flag) {
    //console.log('민규의 악수 횟수', a);
    answer[0] = a;
    break;
  }
}
console.log(answer);
