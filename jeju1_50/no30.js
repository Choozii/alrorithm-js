//solution 내부에 답안 작성할 것
const solution = (sentence, word) => {
  let wordsInSentence = sentence.split(' ');
  const NO_DATA = -1;

  const compare = (str1, str2) => {
    //주어진 str1의 인덱스를 바꿔가며 str2와 비교하기
    for (let i = 0; i < str1.length; i++) {
      if (str1.substring(i) === str2) return i;
    }
    return NO_DATA;
  };

  for (let i in wordsInSentence) {
    if (wordsInSentence[i].length >= word.length) {
      let result = compare(wordsInSentence[i], word);
      if (result !== NO_DATA) console.log(result);
    }
  }
};

const fs = require('fs');
const stdin = fs.readFileSync('./testCases.txt').toString().split('\n');

const Input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

solution(Input(), Input());
