/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let startIdx = 0;
  let endIdx = nums.length - 1;
  let ansIdx = endIdx;
  let ans = [];

  //case1 : [1s,2,3,4,5]
  //case2 : [-3,-2,0,1,8]

  while (startIdx <= endIdx) {
    const squareStart = nums[startIdx] ** 2;
    const squareEnd = nums[endIdx] ** 2;

    if (squareStart >= squareEnd) {
      ans[ansIdx--] = squareStart;
      startIdx++;
    } else {
      ans[ansIdx--] = squareEnd;
      endIdx--;
    }
  }
  return ans;
};
