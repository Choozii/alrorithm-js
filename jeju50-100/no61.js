const input = 'aaabbbbcdddd';
const output = {};
const countStrings = () => {
  let cnt = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] == input[i]) {
      cnt++;
    } else {
      output[input[i - 1]] = cnt;
      cnt = 1;
    }

    if (i == input.length - 1) {
      output[input[i]] = cnt;
      const outputStr = [];
      for (let i in output) {
        outputStr.push(i);
        outputStr.push(output[i]);
      }
      console.log(outputStr.join(''));
    }
  }
};
countStrings();
