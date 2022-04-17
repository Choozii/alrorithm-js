/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//TODO: binary search time complexity

var search = function (nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;
  let midIdx;
  while (startIdx <= endIdx) {
    midIdx = Math.floor((endIdx + startIdx) / 2);
    if (nums[midIdx] === target) {
      return midIdx;
    } else if (nums[midIdx] > target) {
      endIdx = midIdx - 1;
    } else {
      startIdx = midIdx + 1;
    }
  }
  return -1;
};
