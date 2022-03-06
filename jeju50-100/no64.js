const N = 24;

const sevenCnt = Math.floor(N / 7);
let cnt = [];
for (let i = sevenCnt; i >= 0; i--) {
  if ((N - i * 7) % 3 === 0) {
    //console.log(`7 : ${i}, 3 : ${(N - i * 7) / 3}`);
    cnt.push((N - i * 7) / 3 + i);
  }
}
//console.log(cnt);
console.log(cnt.length ? Math.min(...cnt) : -1);
