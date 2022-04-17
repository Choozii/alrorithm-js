const input = '()())';
const bracketStack = [];
const BRACKET = {
  '(': 0,
  '{': 1,
  '[': 2,
};
const BRACKET_PAIR = {
  0: ')',
  1: '}',
  2: ']',
};
if (input.length % 2 !== 0) {
  console.log('NO');
  return;
}
for (let i = 0; i < input.length / 2; i++) {
  // console.log(input[i]);
  bracketStack.push(BRACKET[input[i]]);
}
for (let i = input.length / 2; i < input.length; i++) {
  if (BRACKET_PAIR[bracketStack.pop()] !== input[i]) {
    console.log('NO');
    return;
  }
}
console.log('YES');
