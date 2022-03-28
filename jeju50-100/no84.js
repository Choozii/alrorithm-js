const number = [1, 7, 2, 3];
const answers = [];
const calculated_numbers = [];
const getCombinations = (n, r) => {
  const results = [];
  if (r == 1) return n.map(el => [el]);

  n.forEach((curr, idx, n) => {
    const rest = n.slice(idx + 1);
    if (rest.length == 0) return;
    const combinations = getCombinations(rest, r - 1);

    const combined = combinations.map(el => [curr, ...el]);
    results.push(...combined);
  });

  return results;
};

for (let i = 1; i <= number.toString().length; i++) {
  let result = getCombinations(number, i);

  for (let i = 0; i < result.length; i++) {
    let number = +result[i].join('');
    answers.push(number);
  }
}

console.log(Math.max(...answers));
