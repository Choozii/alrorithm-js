const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = 2;
const changed = new Array(l.length);
const result = new Array(l.length);

function rotate(inL, inN) {
  for (let i = 0; i < inL.length; i++) {
    changed[(i + inN) % inL.length] = inL[i];
  }
  //   console.log(changed);
  for (let i = 0; i < inL.length; i++) {
    result[i] = Math.abs(changed[i] - inL[i]);
  }
  return result;
}

const m = Math.min(...rotate(l, n));
console.log(`index : ${m}`);
console.log(`value : ${(l[m], changed[m])}`);
