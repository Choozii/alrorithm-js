/*
cannot solve
*/

const N = 6;
const K = 3;

const food = new Array(N);
food.fill(false);
let flag = true;
let place = 0;
const isLeftTwoPlates = arr => {
  let leftIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false) leftIdx.push(i);
  }
  if (leftIdx.length == 2) return leftIdx;
  else return [];
};
while (food.length--) {
  place += K;
  food[place % N] = true;
  if (isLeftTwoPlates(food).length != 0) {
    flag = false;
  }
}

console.log(isLeftTwoPlates(food));
