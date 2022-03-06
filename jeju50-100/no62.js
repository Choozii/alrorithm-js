const str = 'abcdefghij';
const answer = [];
answer.push(str.indexOf('c'));
answer.push(str.indexOf('a'));
answer.push(str.indexOf('b'));
answer.push(str.indexOf('j'));

answer.push(str.indexOf('a'));
answer.push(str.indexOf('j'));

answer.push(str.indexOf('c'));
answer.push(str.indexOf('d'));

console.log(answer.join(''));
