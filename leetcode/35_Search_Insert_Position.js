/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIdx = 0;
  let endIdx = nums.length;
  let midIdx;

  while (startIdx <= endIdx) {
    midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    if (nums[midIdx] === target) {
      return midIdx;
    } else if (nums[midIdx] < target) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }
  return startIdx;
};

console.log(searchInsert([1, 3, 5, 6], 7));
