/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let anotherNumIdx = nums.indexOf(target - nums[i], i + 1);
    if (anotherNumIdx !== -1 && anotherNumIdx !== i) {
      return [i, anotherNumIdx];
    }
  }
};
