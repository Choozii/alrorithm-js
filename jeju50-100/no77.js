//두 문자열에 공통으로 들어있는 요소로 만들 수 있는 가장 긴 부분열

const str1 = 'THISISSTRINGS';
const str2 = 'TATHISISKKQQAEW';
const original = str1.length >= str2.length ? str1 : str2;
const compare = str1.length >= str2.length ? str2 : str1;
let count = 0;

const solution = (original, compare) => {
  let copiedCompare = compare;
  for (let i = 0; i < original.length; i++) {
    let index = copiedCompare.indexOf(original[i]);
    if (index !== -1) {
      count++;
      copiedCompare = copiedCompare.substr(0, index - 1) + copiedCompare.substr(index + 1);
    }
  }
  return count;
};

console.log(solution(original, compare));
