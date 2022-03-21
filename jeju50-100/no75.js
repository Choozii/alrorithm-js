const input = '93';

function sol(input) {
  let answer = 0;
  const d = { 3: 1, 6: 2, 9: 3 };
  let count = 1;
  while (input.length) {
    answer += d[input.pop()] * count;
    count *= 3;
  }
  return asnwer;
}

sol(input.split('').map(el => parseInt(el)));
