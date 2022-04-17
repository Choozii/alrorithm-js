/* snot solving */

const input_str = 'ㄱ,ㄴ,ㄷ,ㄹ';
const input_num = 3;

const combination = (input, number) => {
  console.log('input', input);
  if (number === 1) {
    console.log('input', input);
    return input;
  }

  const results = [];
  input.forEach((curr, index, arr) => {
    const rest = arr.slice(index + 1);
    console.log('rest', rest);
    const returns = combination(rest, number - 1);
    // console.log(index);
  });

  return results;
};

console.log(combination(['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ'], 3));
