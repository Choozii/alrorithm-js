const primeSeive = N => {
  const isPrime = new Array(N + 1);
  const primeList = [];
  isPrime.fill(true);

  for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
      primeList.push(i);

      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return primeList;
};

const N = 56;
const primeList = primeSeive(N);
// console.log(primeList);
for (let i = 0; i < primeList.length; i++) {
  for (let j = i + 1; j < primeList.length; j++) {
    if (primeList[i] + primeList[j] === N) {
      console.log(`${N} == ${primeList[i]} + ${primeList[j]}`);
    }
  }
}
