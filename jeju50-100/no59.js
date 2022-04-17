const input = 'hi';
const firstEqualSignLegnth = Math.floor((50 - input.length) / 2);
const secondEqualSignLength = 50 - input.length - firstEqualSignLegnth;
const output = [];

output.push('='.repeat(firstEqualSignLegnth));
output.push(input);
output.push('='.repeat(secondEqualSignLength));

console.log(output.join(''));
