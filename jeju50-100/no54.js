const input = [1, 56, 3, 2, 4];

input.sort();

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] + 1 !== input[i + 1]) {
    console.log('NO');
    return;
  }
}
console.log('YES');
