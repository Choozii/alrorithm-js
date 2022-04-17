const input = '5 + 7 * ({3 * 5})';
const stack = [];

const checkBrackets = () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == '(') {
      stack.push('(');
    } else if (input[i] == '{') {
      if (stack.length !== 0) return false;
      stack.push('{');
    } else if (input[i] == ')') {
      if (stack.pop() !== '(') return false;
    } else if (input[i] == '}') {
      if (stack.pop() !== '{') return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

console.log(checkBrackets());
