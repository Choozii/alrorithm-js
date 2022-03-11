const towers = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const rule = 'ABD';
const answers = [];

for (let i in towers) {
  let firstIdx = towers[i].indexOf(rule[0]);
  for (let r = 1; r < rule.length; r++) {
    if (towers[i].indexOf(rule[r]) < firstIdx) {
      answers.push('불가능');
      break;
    }
  }
  answers.push('가능');
}

console.log(answers);
